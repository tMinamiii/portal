import fs from 'fs'
import React, { ReactElement } from 'react'
import HeaderElements from '../../components/HeaderElements'
import HeaderNavi from '../../components/HeaderNavi'
import MdArticle from '../../components/MdArticle'

type Props = {
  title: string
  content: string
}

export async function getStaticProps(): Promise<any> {
  const content = fs.readFileSync('pages/profile/doc.md').toString()
  return { props: { content: content } }
}

function ImageTag(props: any) {
  return <img {...props} className="rounded-full" />
}
// function Text(props: any) {
//   return <p {...props} style={{ maxWidth: '1000px', margin: '2px', display: 'inline-block' }} />;
// }
// renderers={{ image: Image, text: Text }}

const ProfilePage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Profile" />
      <HeaderNavi />
      <MdArticle content={content} renderers={{ image: ImageTag }} />
    </div>
  )
}

export default ProfilePage
