import fs from 'fs'
import React, { ReactElement } from 'react'
import HeaderElements from '../../components/HeaderElements'
import HeaderNavi from '../../components/HeaderNavi'
import MdArticle from '../../components/MdArticle'
import Image from 'next/image'

type Props = {
  title: string
  children: string
}

export async function getStaticProps(): Promise<any> {
  const content = fs.readFileSync('pages/profile/doc.md').toString()
  return { props: { children: content } }
}

const MarkdownComponents: Record<string, unknown> = {
  img: (image: any) => {
    return <Image src={image.src} alt={image.alt} width={200} height={200} className="rounded-full" />
  },
}

const ProfilePage: React.FC<Props> = ({ children }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Profile" />
      <HeaderNavi />
      <MdArticle components={MarkdownComponents}>{children}</MdArticle>
    </div>
  )
}

export default ProfilePage
