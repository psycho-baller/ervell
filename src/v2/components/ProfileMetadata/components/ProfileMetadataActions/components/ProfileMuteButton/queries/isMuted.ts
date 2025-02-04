import { gql } from '@apollo/client'

import mutableFragment from 'v2/components/MuteButton/fragments/mutable'

export default gql`
  query ProfileIsMutedQuery($id: ID!, $type: MutableTypeEnum!) {
    mutable(id: $id, type: $type) {
      ...Mutable
    }
  }
  ${mutableFragment}
`
