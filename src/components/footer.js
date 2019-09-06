import React, { Fragment } from "react"
import Downloads from "./downloads"
import styles from "./footer.module.css"
import { Link } from "gatsby"

const Footer = ({
                  homeLink, homeTitle,
                  integrationLink, integrationTitle,
                  creditLink, creditTitle,
                  policyTitle, termsTitle,
                  iosTitle, iosLink,
                  androidTitle, androidLink
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
                     iosTitle={iosTitle}
                     iosLink={iosLink}
                     androidTitle={androidTitle}
                     androidLink={androidLink}
          />

          <div className={styles.copyrightPolicy}>
            <div>© {new Date().getFullYear()} All rights reserved</div>
            <div className={styles.policy}>
              <Link to={"/"}>{policyTitle}</Link>
              <Link to={"/"}>{termsTitle}</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer