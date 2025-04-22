import styles from "./HomeBanner.module.css"

export default function HomeBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.textContent}>
          <h1 className={styles.mainHeading}>Stay Untamed</h1>
          <div className={styles.offerContent}>
            <p className={styles.signUpText}>Sign Up & Get</p>
            <p className={styles.amountText}>
              UP TO <span className={styles.highlightAmount}>$20,000.00</span>
            </p>
            <p className={styles.categoryText}>in Casino or Sports</p>
          </div>
          <button className={styles.signUpButton}>Sign up</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/assets/images/small.png"
            className={styles.playersImage}
          />
        </div>
      </div>
    </div>
  )
}
