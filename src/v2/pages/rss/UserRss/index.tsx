import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { UserRss as UserRssType, UserRssVariables } from '__generated__/UserRss'
import { RssBlock } from '../components/RssBlock'
import RssLayout from '../components/RssLayout'
import channelRssQuery from './queries/userRss'

const UserRss: React.FC = () => {
  const params = useParams()

  const { data } = useQuery<UserRssType, UserRssVariables>(channelRssQuery, {
    variables: { id: params.username },
  })

  if (!data) return null

  const { user } = data

  return (
    <RssLayout
      title={`Are.na / ${user.name}`}
      link={user.href}
      atomLink={`${user.href}/feed/rss`}
      lastBuildDate={user.contents[0]?.updated_at}
    >
      {user.contents.map(block => {
        return <RssBlock key={block.id} block={block} />
      })}
    </RssLayout>
  )
}

export default UserRss
