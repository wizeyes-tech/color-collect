import React, { Fragment } from "react"
import Downloads from "./downloads"
import styles from "./footer.module.css"
import { Link } from "gatsby"

const Footer = ({
                  homeLink, homeTitle,
                  integrationLink, integrationTitle,
                  creditLink, creditTitle,
                  policyTitle, policyLink, termsTitle, termsLink,
                  iosTitle, iosLink,
                  androidTitle, androidLink,
                  copyright,
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
          <span className="type--body-xsmall type--on-dark">© {new Date().getFullYear()} All rights reserved WizEyes Tech Inc.</span>
        </div>

        <div className={styles.desktop}>
          <div className={styles.nav}>
            <HomeNav/>
            <AppIntegrationNav/>
            <CreditNav/>
          </div>

          <Downloads iosTitle={iosTitle} iosLink={iosLink}/>

          <div className={styles.copyrightPolicy}>
            <div>© {new Date().getFullYear()} {copyright}</div>
            <div className={styles.policy}>
              <Link to={policyLink}>{policyTitle}</Link>
              <Link to={termsLink}>{termsTitle}</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
