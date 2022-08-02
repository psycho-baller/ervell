import React, {
  FocusEvent,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'

import Box from 'v2/components/UI/Box'
import Overlay from 'v2/components/UI/Overlay'

import HomeLink from 'v2/components/TopBar/components/PrimarySearch/components/HomeLink'
import SearchInput, { ICON_OFFSET } from 'v2/components/UI/SearchInput'

import { PageContext, PageTypeEnum } from 'v2/components/PageContext'
import { AdvancedSearchContext } from 'v2/components/AdvancedSearch/AdvancedSearchContext'
import Text from 'v2/components/UI/Text'
import constants from 'v2/styles/constants'
import { WhereEnum } from '__generated__/globalTypes'
import { useLocation, useNavigate } from 'react-router'
import { overflowScrolling } from 'v2/styles/mixins'
import { AdvancedSearchResultsContainer } from './components/AdvancedSearchResults'
import LargeLabeledCheckbox from 'v2/components/UI/Inputs/components/LargeLabelledCheckbox'
import { AdvancedSearchFilter } from './components/AdvancedSearchFilter'

const Container = styled(Box)`
  position: relative;
  display: flex;
  align-items: stretch;
`

const ContextButtonContainer = styled(Box)`
  position: absolute;
  left: ${ICON_OFFSET};
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(100% - ${ICON_OFFSET});
`

const ContextButton = styled(Text)`
  background-color: ${p => p.theme.colors.gray.light};
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};
  border-radius: ${constants.radii.regular};
  margin-right: ${p => p.theme.space[6]};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.gray.semiLight};
  }
`

const DevCheckbox = styled(Box)`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${p => p.theme.space[2]};
`

const Results = styled(Box)`
  height: 100%;
  ${overflowScrolling}
`

const AdvancedPrimarySearchContainer: React.FC<{
  scheme: 'DEFAULT' | 'GROUP'
  flex?: number
}> = ({ scheme, flex, ...rest }) => {
  const { page } = useContext(PageContext)
  const navigate = useNavigate()
  const location = useLocation()
  const { state, updateQuery, addFilter, generateUrl } = useContext(
    AdvancedSearchContext
  )
  const searchInputRef = useRef(null)
  const searchRef = useRef(null)
  const [mode, setMode] = useState<'resting' | 'blur' | 'focus' | 'hover'>(
    state.query ? 'blur' : 'resting'
  )

  const [includeOriginalResults, setIncludeOriginalResults] = useState<boolean>(
    false
  )

  const handleFocus = useCallback(() => {
    setMode('focus')
  }, [mode, setMode])

  const handleBlur = useCallback(
    (e: FocusEvent<Element>) => {
      console.log({ e })
      // if (state.query) {
      //   setMode('blur')
      //   return
      // }
      // setMode('resting')
    },
    [state, mode, setMode]
  )

  const onClose = useCallback(() => {
    if (state.query) {
      setMode('blur')
      return
    }
    setMode('resting')
  }, [])

  const handleKeyDown = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        navigate(generateUrl(false, location.pathname))
      }
    },
    [navigate, state]
  )

  const handleMouseEnter = useCallback(() => {
    // if (mode === 'resting') {
    //   setMode('hover')
    // }
  }, [mode, setMode])

  const handleMouseLeave = useCallback(() => {
    if (mode === 'hover') {
      setMode('resting')
    }
  }, [mode, setMode])

  const onSearchButtonClick = useCallback(() => {
    searchInputRef.current.focus()
    setMode('focus')
  }, [])

  const onContextButtonClick = useCallback(() => {
    if (page.type === PageTypeEnum.PERSON) {
      searchInputRef.current.focus()
      addFilter('where', WhereEnum.USER, page.id)
    }

    if (page.type === PageTypeEnum.CHANNEL) {
      searchInputRef.current.focus()
      addFilter('where', WhereEnum.CHANNEL, page.id)
    }

    if (page.type === PageTypeEnum.GROUP) {
      searchInputRef.current.focus()
      addFilter('where', WhereEnum.GROUP, page.id)
    }
  }, [page, addFilter, searchInputRef])

  return (
    <Container flex={1} {...rest}>
      {mode === 'resting' && <HomeLink />}

      <SearchInput
        globallyFocusOnKey="/"
        tabIndex={0}
        flex={1}
        py={6}
        bg={scheme === 'GROUP' && 'transparent'}
        border={0}
        query={state.query}
        onQueryChange={updateQuery}
        ref={searchRef}
        searchInputRef={searchInputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        outlineless
        iconMap={{
          resting: null,
          focus: 'MagnifyingGlass',
          hover: 'MagnifyingGlass',
          active: 'X',
        }}
      />

      {mode === 'resting' && !state.query && !includeOriginalResults && (
        <ContextButtonContainer>
          <ContextButton onClick={onSearchButtonClick}>
            Search Are.na
          </ContextButton>

          {page?.type === PageTypeEnum.PERSON && (
            <ContextButton onClick={onContextButtonClick}>
              Search this {page.type.toLowerCase()}
            </ContextButton>
          )}

          {page?.type === PageTypeEnum.CHANNEL && (
            <ContextButton onClick={onContextButtonClick}>
              Search this {page.type.toLowerCase()}
            </ContextButton>
          )}

          {page?.type === PageTypeEnum.GROUP && (
            <ContextButton onClick={onContextButtonClick}>
              Search this {page.type.toLowerCase()}
            </ContextButton>
          )}
        </ContextButtonContainer>
      )}

      <DevCheckbox>
        <LargeLabeledCheckbox
          f={1}
          checked={includeOriginalResults}
          onChange={() => setIncludeOriginalResults(!includeOriginalResults)}
        >
          Use quicksearch results
        </LargeLabeledCheckbox>
      </DevCheckbox>

      {mode != 'blur' && mode != 'resting' && (
        <Overlay targetEl={() => searchRef.current} onClose={onClose} fullWidth>
          <Results>
            <AdvancedSearchFilter />
            <AdvancedSearchResultsContainer
              includeOriginalResults={includeOriginalResults}
            />
          </Results>
        </Overlay>
      )}
    </Container>
  )
}

export default AdvancedPrimarySearchContainer