import React from 'react'
import styled from 'styled-components'

import Text from 'v2/components/UI/Text'
import GroupBadge from 'v2/components/UI/GroupBadge'
import BorderedLock from 'v2/components/UI/BorderedLock'

import { overflowEllipsis } from 'v2/styles/mixins'
import { BoxProps, mixin as boxMixin } from 'v2/components/UI/Box'

import { PrimarySearchResult as PrimarySearchResultType } from '__generated__/PrimarySearchResult'
import { getBreadcrumbPath } from 'v2/util/getBreadcrumbPath'
import { AdaptibleLink } from 'v2/components/UI/AdaptibleLink'
import { PrimarySearchIcon } from '../PrimarySearchIcon'
import { PrimarySearchCount } from '../PrimarySearchCount'
import { unescape } from 'lodash'

const Label = styled(Text)`
  font-weight: bold;
  // Push out to accomodate "overflowing" badge border
  padding-right: 1px;
  ${overflowEllipsis}
`

const Container = styled(AdaptibleLink)`
  ${boxMixin}
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.gray.hint};
  }

  ${props =>
    props.selected &&
    `
    background-color: ${props.theme.colors.state.neutral};
  `}
`

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const PathContainer = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    &:after {
      content: '/';
      margin: 0 ${props => props.theme.constantValues.emptySpaceWidth};
      font-family: ${props => props.theme.fonts.mono};
      opacity: 0.5;
    }

    &:last-child:after {
      content: '';
      margin: 0;
    }
  }
`

Container.defaultProps = {
  pr: 6,
  py: 6,
  bg: 'gray.light',
  borderTop: '1px solid',
  borderColor: 'gray.semiLight',
}

interface PrimarySearchResultProps {
  result?: PrimarySearchResultType
  selected?: boolean
  to?: string
  bg?: any
}

export const PrimarySearchResult: React.FC<PrimarySearchResultProps &
  BoxProps> = ({ result, children, selected = false, ...rest }) => {
  if (result) {
    return (
      <Container
        href={result.href}
        to={result.href}
        state={getBreadcrumbPath(result)}
        selected={selected}
        {...rest}
      >
        <PrimarySearchIcon result={result} />
        <ResultContainer>
          <PathContainer>
            {result.__typename === 'Channel' && result.owner && (
              <Label flex="1">
                {result.owner.name}

                {result.owner.__typename === 'Group' && (
                  <GroupBadge f={0} visibility={result.owner.visibility} />
                )}
              </Label>
            )}

            <Label
              color={
                result.__typename === 'Channel' && result.visibility
                  ? `channel.${result.visibility}`
                  : 'gray.base'
              }
            >
              <span>{unescape(result.label)}</span>

              {(result.__typename === 'Channel' ||
                result.__typename === 'Group') &&
                result.visibility === 'private' && <BorderedLock ml={3} />}

              {result.__typename === 'Group' && (
                <GroupBadge f={0} visibility={result.visibility} />
              )}
            </Label>
          </PathContainer>

          {!selected && <PrimarySearchCount result={result} />}
        </ResultContainer>
      </Container>
    )
  }

  return (
    <Container selected={selected} {...rest}>
      {children}
    </Container>
  )
}

export default PrimarySearchResult
