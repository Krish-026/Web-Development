import projects from '../../data/projects.json'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <>
            <section className={styles.container} id='projects'>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard key={index} project={project} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Projects
