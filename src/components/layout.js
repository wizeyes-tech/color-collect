/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, language }) => {

  function FooterFrag() {
    if (language === "en") {
      return <Footer homeLink={`/`}
                     homeTitle={`Home`}
                     policyTitle={`Privacy Policy`}
                     termsTitle={`Terms of Use`}
                     iosTitle={`Download Color Collect for iOS`}
                     iosLink={`https://apps.apple.com/app/id1439521846`}
                     androidTitle={`Download Color Collect for Android`}
                     androidLink={`https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture`}
      />
    } else {
      return <Footer homeLink={`/cn/`}
                     homeTitle={`首页`}
                     policyTitle={`隐私条款`}
                     termsTitle={`使用条款`}
                     iosTitle={`从苹果商店下载色采 iOS 版本`}
                     iosLink={`https://apps.apple.com/cn/app/id1439521846`}
                     androidTitle={`下载色采安卓版本`}
                     androidLink={`https://www.coolapk.com/apk/231885`}
      />
    }
  }

  return (
    <Fragment>
      <div className="wrapper">
        <Header language={language}/>
        <main>{children}</main>
      </div>
      <FooterFrag/>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
