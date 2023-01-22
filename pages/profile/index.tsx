import fs from 'fs'
import React, { ReactElement } from 'react'
import HeaderElements from '../../components/HeaderElements'
import HeaderNavi from '../../components/HeaderNavi'
import MdArticle from '../../components/MdArticle'

type Props = {
  title: string
  children: string
}

export async function getStaticProps(): Promise<any> {
  const content = fs.readFileSync('pages/profile/doc.md').toString()
  return { props: { content: content } }
}

function ImageTag(props: any) {
  return <img {...props} className="rounded-full" />
}

const ProfilePage: React.FC<Props> = ({ children }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Profile" />
      <HeaderNavi />
      <MdArticle components={{ image: ImageTag }}>{children}</MdArticle>
    </div>
  )
}

export default ProfilePage
