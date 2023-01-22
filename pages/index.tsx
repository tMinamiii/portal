import React, { ReactElement } from 'react'
import HeaderElements from '../components/HeaderElements'
import HeaderNavi from '../components/HeaderNavi'
import MdArticle from '../components/MdArticle'

type Props = {
  children: string
}

export async function getStaticProps(): Promise<any> {
  // shortURL https://git.io/JfUZE
  const gistResumeUrl = 'https://gist.githubusercontent.com/tMinamiii/f1e93ca728eb66558f19fadb1a9e6feb/raw/resume.md'
  const resp = await fetch(gistResumeUrl)
  const text = await resp.text()
  return { props: { children: text }, revalidate: 300 }
}

/**
 *
#### スマホアプリのサーバーサイド開発 (2019年6月 - 現在)

<!-- ![Image from Gyazo](https://i.gyazo.com/456afd07dff25c06b645c687c71c1e81.png) -->

<!-- ![Image from Gyazo](https://i.gyazo.com/7e7a76478f022253be9f7664586391ab.png) -->

#### 社内情報管理システム (2019年2月 - 2019年6月)

<!-- ![Image from Gyazo](https://i.gyazo.com/a164d86b74bb798d2d80d9e89bafb0cd.png) -->

<!-- ![Image from Gyazo](https://i.gyazo.com/8425ab3bbb994796155f858058b6b484.png) -->

#### 画像解析システム (2018年12月 - 2019年1月)

<!-- ![Image from Gyazo](https://i.gyazo.com/0d31c1a5aa230c445824f0fcbf7b2a14.png) -->

#### Webクローラー開発・保守 (2018年2月 - 2018年11月)

<!-- ![Image from Gyazo](https://i.gyazo.com/b2c68df3fe190e979e804132af27fdf7.png) -->

#### 文書検索パッケージソフトの開発 (2009年4月 - 2015年2月)

<!-- ![Image from Gyazo](https://i.gyazo.com/f98cd7971e2672204b875b8b8b3368fc.png) -->

 */

const ResumePage: React.FC<Props> = ({ children }: Props): ReactElement => {
  return (
    <div>
      <HeaderElements title="Resume" />
      <HeaderNavi />
      <MdArticle>{children}</MdArticle>
    </div>
  )
}
export default ResumePage
