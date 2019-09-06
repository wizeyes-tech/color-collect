import React, { Fragment } from "react"
import Downloads from "./downloads"
import styles from "./footer.module.css"
import { Link } from "gatsby"

const Footer = ({
                  homeLink, homeTitle,
                  integrationLink, integrationTitle,
                  creditLink, creditTitle,
                  policyTtile, termsTitle,
                }) => {
  function HomeNav() {
    if (homeLink) {
      return <Link to={homeLink}>{homeTitle}</Link>
    } else {
      return <Fragment/>
    }
  }

  function AppIntegrationNav() {
    if (integrationLink) {
      return <Link to={integrationLink}>{integrationTitle}</Link>
    } else {
      return <Fragment/>
    }
  }

  function CreditNav() {
    if (creditLink) {
      return <Link to={creditLink}>{creditTitle}</Link>
    } else {
      return <Fragment/>
    }
  }

  return (
    <footer>
      <div className="wrapper">

        <div className={styles.mobile}>
          <span className="type--body-xsmall type--on-dark">© {new Date().getFullYear()} All rights reserved</span>
        </div>

        <div className={styles.desktop}>
          <div className={styles.nav}>
            <HomeNav/>
            <AppIntegrationNav/>
            <CreditNav/>
          </div>

          <Downloads size={`s`}
                     iosTitle={`Download Color Collect for iOS`}
                     iosLink={`https://apps.apple.com/app/id1439521846`}
                     androidTitle={`Download Color Collect for Android`}
                     androidLink={`https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture`}
          />

          <div className={styles.copyrightPolicy}>
            <div>© {new Date().getFullYear()} All rights reserved</div>
            <div className={styles.policy}>
              <Link to={"/"}>{policyTtile}</Link>
              <Link to={"/"}>{termsTitle}</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer