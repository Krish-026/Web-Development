/* eslint-disable react/prop-types */
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'
const ProjectCard = ({
    project: { title, description, imageSrc, skills, demo, source }
}) => {
    return (
        <>
            <div className={styles.container}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {
                        skills.map((skill, index) => {
                            return (
                                <li key={index} className={styles.skill}>{skill}</li>
                            )
                        })
                    }
                </ul>
                <div className={styles.links}>
                    <a href={demo} className={styles.link}>Demo</a>
                    <a href={source} className={styles.link}>Source</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
