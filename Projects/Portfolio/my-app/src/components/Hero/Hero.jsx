import { getImageUrl } from "../../utils"
import styles  from "./Hero.module.css"
function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I’m Ada</h1>
                <p className={styles.description}>I’m a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you’d like to learn more!
                    color
                </p>
                <a className={styles.contactBtn} href="mailtto:myemail@email.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}

export default Hero
