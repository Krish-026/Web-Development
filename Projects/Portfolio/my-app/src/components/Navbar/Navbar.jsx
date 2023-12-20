import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title}  href="/">Portfolio</a>
            <div className={styles.menu}>
                <img src={getImageUrl("nav/menu")} alt="" />
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
