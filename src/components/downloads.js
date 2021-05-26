import React from "react"
import styles from "./downloads.module.css"
import iosBadge from "../images/button/ios-app-store-badge.svg"

const Downloads = ({ iosTitle, iosLink }) => {

  return (
    <div className={styles.downloadWrapper}>
      <a href={iosLink}
         className={styles.downloadItem}
      >
        <span>
          <img src={iosBadge}
               title={iosTitle}
               alt={iosTitle}
          />
        </span>
      </a>
    </div>
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads
