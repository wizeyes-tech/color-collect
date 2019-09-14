import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import "../../../components/typography.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import TutorialVideo from "../../../videos/memoryhelper.mp4"
import VideoCover from "../../../images/integration/video-cover.png"

const MemoryHelperPage = () => {
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
      
      findApp: file(relativePath: { eq: "integration/memoryhelper/memoryhelper01.jpg" }) {
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
      
      result1: file(relativePath: { eq: "integration/memoryhelper/memoryhelper02.png" }) {
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
      
      result2: file(relativePath: { eq: "integration/memoryhelper/memoryhelper03.jpg" }) {
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

  const title = `在「Memory Helper」主题中使用「色采」色卡`

  return (
    <Layout language={`cn`}>
      <SEO title={title}/>
      <div className="article">

        <h1 className='type-h3--cn'>{title}</h1>

        <h3>视频教程</h3>
        <video controls poster={VideoCover}>
          {/*<source src={TutorialVideo} type="video/mp4"/>*/}
          <source id="mp4"
                  src="https://graph-bed-fjj.oss-cn-hangzhou.aliyuncs.com/ScreenRecording_07-09-2019%2011-04-03.mp4"
                  type="video/mp4"/>
        </video>

        <h3>文字教程</h3>
        <p>到 App Store <a href="https://apps.apple.com/cn/app/id1113262919"
                          target="_blank"
                          rel="noopener noreferrer">下载「Memory Helper」App</a>。
        </p>

        <p>到 App Store <a href={`https://apps.apple.com/cn/app/id1439521846`}
                          target="_blank"
                          rel="noopener noreferrer">下载「色采」App</a>。
        </p>
        {/*<Img fixed={images.download.childImageSharp.fixed} title={title} alt={title}/>*/}
        <img src="http://qiniuimg.mozhenhau.com/mosecai1.jpg" alt="" className="secai-img"/>

        <p>进入 App 内的「灵感」界面，找到你喜欢的色卡。</p>
        {/*<Img fixed={images.explorePage.childImageSharp.fixed} title={title} alt={title}/>*/}
        <img src="http://qiniuimg.mozhenhau.com/mosecai2.jpg" alt="" className="secai-img"/>

        <p>进入色卡，点击右下角分享按钮</p>

        <p>在弹出窗灰色这一行找到「Memory Helper」。如果没有，就到「更多」里看看。</p>
        {/*<Img fixed={images.findApp.childImageSharp.fixed} title={title} alt={title}/>*/}
        <img src="https://graph-bed-fjj.oss-cn-hangzhou.aliyuncs.com/IMG_2285.JPG" alt="选择 Memory Helper"/>

        <p>成功设置「绯红女巫}主题色。</p>
        {/*<Img fixed={images.result1.childImageSharp.fixed} title={title} alt={title}/>*/}
        <img src="https://graph-bed-fjj.oss-cn-hangzhou.aliyuncs.com/IMG_2284.PNG" alt="绯红女巫"/>

        <p>还能探索更多深色系主题。</p>
        {/*<Img fixed={images.result2.childImageSharp.fixed} title={title} alt={title}/>*/}
        <img src="https://graph-bed-fjj.oss-cn-hangzhou.aliyuncs.com/IMG_2290.JPG" alt="青釉三系盖罐"/>

      </div>
    </Layout>
  )
}

export default MemoryHelperPage
