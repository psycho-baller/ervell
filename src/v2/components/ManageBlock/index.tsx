import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { useForm, useField } from 'react-final-form-hooks'

import Box from 'v2/components/UI/Box'
import { SplitPane } from 'v2/components/UI/SplitPane'
import { Textarea, Input } from 'v2/components/UI/Inputs'
import Close from 'v2/components/UI/Close'
import { DividerButton as Button } from 'v2/components/UI/Buttons'
import constants from 'v2/styles/constants'

import {
  LightboxContainer as Container,
  ContentContainer,
  SidebarContainer,
  TextBoxContainer,
} from 'v2/components/FullBlockLayout'

import { MarkdownCheatsheet } from 'v2/components/ManageBlock/components/MarkdownCheatsheet'
import FullBlockImage from 'v2/components/FullBlock/components/FullBlockImage'
import { FullBlockLink } from 'v2/components/FullBlock/components/FullBlockLink'
import FullBlockAttachment from 'v2/components/FullBlock/components/FullBlockAttachment'
import FullBlockEmbed from 'v2/components/FullBlock/components/FullBlockEmbed'
import FullBlockPending from 'v2/components/FullBlock/components/FullBlockPending'
import Text from 'v2/components/UI/Text'

import UPDATE_BLOCK_MUTATION from 'v2/components/ManageBlock/mutations/updateBlock'

import { ManageBlock as Block } from '__generated__/ManageBlock'
import { FullBlock, FullBlock_Link } from '__generated__/FullBlock'
import { FullBlockImage_Image } from '__generated__/FullBlockImage'
import {
  updateBlockMutation,
  updateBlockMutationVariables,
} from '__generated__/updateBlockMutation'
import { FullBlockAttachment_Attachment } from '__generated__/FullBlockAttachment'
import { FullBlockEmbed_Embed } from '__generated__/FullBlockEmbed'

const TextField = styled(Textarea).attrs({
  px: 7,
  py: 6,
  bg: 'gray.input',
  resizeable: false,
})`
  width: 100%;
  height: 100%;
  border: none !important;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  line-height: 1.55;
  resize: none;
`

const FormattingLink = styled(Text).attrs({
  color: 'gray.medium',
  f: 1,
  p: 3,
})`
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  bottom: 0.75em;
  right: 0.75em;
  background-color: ${props => props.theme.colors.gray.input};
  border: 1px solid ${props => props.theme.colors.gray.regular};
  border-radius: ${constants.radii.regular};
`

const TextInput = styled(Input).attrs({
  bg: 'gray.input',
  borderColor: 'gray.light',
})`
  border-radius: ${constants.radii.subtle};
`

const TextSpacer = styled(Box)`
  ${constants.media.small`
    min-height: 60vh;
  `}
`

const DescriptionField = styled(Textarea).attrs({
  bg: 'gray.input',
  borderColor: 'gray.light',
  mt: 6,
})`
  border-radius: ${constants.radii.subtle};
  height: 10em;
`

const AltTextField = styled(Textarea).attrs({
  bg: 'gray.input',
  borderColor: 'gray.light',
  mt: 6,
})`
  border-radius: ${constants.radii.subtle};
  height: 10em;
`

interface ManageBlockProps {
  block: Block & FullBlock
  updateBlock?: (e?: any) => void
  onDone?: (e?: any) => void
  onChangePending?: () => void
  autoFocus?: 'title' | 'description' | 'body'
}

const MemoizedContent = React.memo<{ block: Block & FullBlock }>(
  props =>
    ({
      Image: (
        <FullBlockImage
          {...props}
          block={props.block as FullBlockImage_Image}
          layout="DEFAULT"
        />
      ),
      Link: (
        <FullBlockLink
          linkViewMode="screenshot"
          layout="DEFAULT"
          block={props.block as FullBlock_Link}
        />
      ),
      Attachment: (
        <FullBlockAttachment
          {...props}
          block={props.block as FullBlockAttachment_Attachment}
        />
      ),
      Embed: (
        <FullBlockEmbed
          layout="DEFAULT"
          {...props}
          block={props.block as FullBlockEmbed_Embed}
        />
      ),
      PendingBlock: <FullBlockPending {...props} />,
    }[props.block.__typename]),
  () => true
)

export const ManageBlock: React.FC<ManageBlockProps> = ({
  block,
  onDone,
  autoFocus,
}) => {
  const [mode, setMode] = useState<'resting' | 'saving' | 'error' | 'saved'>(
    'resting'
  )
  const [showCheatsheet, setShowCheatsheet] = useState<boolean>(false)
  const toggleCheatsheet = useCallback(() => {
    setShowCheatsheet(!showCheatsheet)
  }, [showCheatsheet])

  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const descriptionRef = useRef(null)
  const altTextRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      const element = {
        title: titleRef,
        description: descriptionRef,
        body: contentRef,
        alt_text: altTextRef,
      }[autoFocus]

      element.current.focus()
    }, 0)
  }, [titleRef, contentRef, descriptionRef, altTextRef, autoFocus])

  const [updateBlock] = useMutation<
    updateBlockMutation,
    updateBlockMutationVariables
  >(UPDATE_BLOCK_MUTATION)

  const onSubmit = values => {
    setMode('saving')
    updateBlock({ variables: { id: block.id, ...values } })
      .then(() => {
        setMode('saved')
        onDone()
      })
      .catch(() => {
        setMode('error')
      })
  }

  const initialValues = {
    content: block.__typename === 'Text' ? block.editable_content : undefined,
    description: block.editable_description,
    title: block.editable_title,
    alt_text:
      block.__typename === 'Image' ? block.editable_alt_text : undefined,
  }

  const { form, handleSubmit, submitting } = useForm({
    initialValues: initialValues,
    onSubmit, // the function to call with your form values upon valid submit
  })

  const contentField = useField('content', form)
  const titleField = useField('title', form)
  const descriptionField = useField('description', form)
  const altTextField = useField('alt_text', form)

  return (
    <Container layout="DEFAULT">
      <form onSubmit={handleSubmit}>
        <SplitPane context="MODAL" layout="DEFAULT" visible={true}>
          <ContentContainer layout="DEFAULT">
            {block.__typename === 'Text' && (
              <TextBoxContainer layout="DEFAULT">
                <TextSpacer>
                  <TextField
                    layout="DEFAULT"
                    block={block}
                    ref={contentRef}
                    {...contentField.input}
                  />
                  <FormattingLink onClick={toggleCheatsheet}>
                    Formatting?
                  </FormattingLink>
                </TextSpacer>
              </TextBoxContainer>
            )}

            {block.__typename !== 'Text' && <MemoizedContent block={block} />}
          </ContentContainer>
          <SidebarContainer
            display="flex"
            style={{ paddingTop: '0.85em', paddingBottom: '1em' }}
          >
            <Box
              pt={8}
              display="flex"
              flex={1}
              justifyContent="space-between"
              flexDirection="column"
            >
              <div>
                <TextInput
                  ref={titleRef}
                  placeholder="Title"
                  {...titleField.input}
                />

                {block.__typename === 'Image' && (
                  <AltTextField
                    ref={altTextRef}
                    placeholder="Alt text"
                    {...altTextField.input}
                  />
                )}

                <DescriptionField
                  ref={descriptionRef}
                  placeholder="Description"
                  {...descriptionField.input}
                />

                {showCheatsheet && <MarkdownCheatsheet />}
              </div>

              <Button type="submit" disabled={submitting}>
                {
                  {
                    resting: 'Save',
                    saving: 'Saving...',
                    saved: 'Saved',
                    error: 'Error',
                  }[mode]
                }
              </Button>
            </Box>
          </SidebarContainer>
        </SplitPane>
        <Box
          display="flex"
          position="absolute"
          top={0}
          right={0}
          zIndex={1}
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          p={4}
          pr={5}
          height="46px"
        >
          <Close ml={5} size={'1.2em'} onClick={onDone} />
        </Box>
      </form>
    </Container>
  )
}
