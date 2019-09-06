import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import "../../../components/typography.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import TutorialVideo from "../../../videos/justlist.mp4"
import VideoCover from "../../../images/integration/video-cover.png"

const JustListPage = () => {
  const images = useStaticQuery(graphql`
    query {
     
      download: file(relativePath: { eq: "integration/download.jpg" }) {
        childImageSharp {
          fixed(width: 350) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      explorePage: file(relativePath: { eq: "integration/explore-page.jpg" }) {
        childImageSharp {
          fixed(width: 230) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      image3: file(relativePath: { eq: "integration/justlist/justlist03.jpg" }) {
        childImageSharp {
          fixed(width: 230) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      image4: file(relativePath: { eq: "integration/justlist/justlist04.jpg" }) {
        childImageSharp {
          fixed(width: 230) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      image5: file(relativePath: { eq: "integration/justlist/justlist05.jpg" }) {
        childImageSharp {
          fixed(width: 230) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  const title = `在「番茄清单」主题中使用「色采」色卡`

  return (
    <Layout language={`cn`}>
      <SEO title={title}/>
      <div className="article">

        <h1 className='type-h3--cn'>{title}</h1>

        <h3>视频教程</h3>
        <video controls poster={VideoCover}>
          <source src={TutorialVideo} type="video/mp4"/>
        </video>

        <h3>文字教程</h3>
        <p>到 App Store <a href={`https://apps.apple.com/cn/app/id1150993112`}
                          target="_blank"
                          rel="noopener noreferrer">下载「番茄清单」App</a>。
        </p>

        <p>到 App Store <a href={`https://apps.apple.com/cn/app/id1439521846`}
                          target="_blank"
                          rel="noopener noreferrer">下载「色采」App</a>。
        </p>
        <Img fixed={images.download.childImageSharp.fixed} title={title} alt={title}/>
        {/*<img src="http://qiniuimg.mozhenhau.com/mosecai1.jpg" alt="" style={{width: 400}}/>*/}

        <p>进入 App 内的「灵感」界面，找到你喜欢的色卡。</p>
        <Img fixed={images.explorePage.childImageSharp.fixed} title={title} alt={title}/>
        {/*<img src="http://qiniuimg.mozhenhau.com/mosecai2.jpg" alt=""/>*/}

        <p>进入色卡，点击右下角分享按钮</p>
        <Img fixed={images.image3.childImageSharp.fixed} title={title} alt={title}/>
        {/*<img src="http://qiniuimg.mozhenhau.com/mosecai3.jpg" alt=""/>*/}

        <p>在弹出窗灰色这一行找到「番茄清单」。如果没有，就到「更多」里看看。</p>
        <Img fixed={images.image4.childImageSharp.fixed} title={title} alt={title}/>
        {/*<img src="http://qiniuimg.mozhenhau.com/mosecai14.jpg" alt=""/>*/}

        <p>成功设置主题色。</p>
        <Img fixed={images.image5.childImageSharp.fixed} title={title} alt={title}/>
        {/*<img src="http://qiniuimg.mozhenhau.com/mosecai5.jpg" alt=""/>*/}

      </div>
    </Layout>
  )
}

export default JustListPage
