import { getImageUrl } from "../../utils"
import styles from './Contact.module.css'
function Contact() {
    return (
        <>
            <footer id="contact" className={styles.container}>
                <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt={"Email Icon"} />
                        <a href="mailto:myemail@email.com">myemail@email.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt={"LinkedIn Icon"} />
                        <a href="https://www.linkedin.com/in/krishna-pratap-singh-002b05174/">linkedIn.com/Krishna_Pratap_Singh</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt={"GitHub Icon"} />
                        <a href="https://github.com/Krish-026">github/Krishna</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Contact
