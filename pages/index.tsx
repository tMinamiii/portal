import type React from 'react'
import type { ReactElement } from 'react'
import type { GetStaticPropsResult } from 'next'
import HeaderElements from '../components/HeaderElements'
import MdArticle from '../components/MdArticle'

type Props = {
  children: string
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const gistResumeUrl =
    'https://gist.githubusercontent.com/tMinamiii/323ac5c33ed63ea75f5f1570c46c110f/raw/ed02909fbc5c33778d87f2f6f4ba0f35b9a1b2b5/resume.md'
  const resp = await fetch(gistResumeUrl)
  const text = await resp.text()
  return {
    props: { children: text },
    revalidate: 300,
  }
}

const ResumePage: React.FC<Props> = ({ children }: Props): ReactElement => {
  //  <HeaderNavi />
  return (
    <div>
      <HeaderElements title="Resume" />
      <MdArticle>{children}</MdArticle>
    </div>
  )
}
export default ResumePage
