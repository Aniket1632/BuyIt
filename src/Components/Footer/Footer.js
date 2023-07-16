import React from "react";
import styles from "./Footer.module.css";
import IconCircle from "../IconCircle/IconCircle";
import TwitterIcon from "../../Assets/Image/Icons/Twitter_Icon.png";
import FacebookIcon from "../../Assets/Image/Icons/Facebook_Icon.png";
import TextInput from "../../Components/TextInput/TextInput";
import TextInputIcon from "../../Assets/Image/Icons/Text_Input_Icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Buy it</div>
          <div className={styles.footerMid}>
            <ul>
              <li>Home</li>
              <li>Collection</li>
              <li>Products</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className={styles.footerContentRight}>
            <span>
              Be the first to know about our biggest and best sales. We'll never
              send more than one email a month
            </span>
            <div className={styles.textInput}>
              <TextInput
                iconSufix={TextInputIcon}
                placeholder={"ENTER YOUR EMAIL"}
              />
            </div>
            <div className={styles.footerIcons}>
              <IconCircle iconCircle={TwitterIcon} />
              <IconCircle iconCircle={FacebookIcon} />
            </div>
          </div>
        </div>
        <span className={styles.footerClosing}> All rights are reserved</span>
      </div>
    </div>
  );
};

export default Footer;
