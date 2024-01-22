import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from "../../utils"
import styles from "./Experience.module.css"
function Experience() {
  return (
    <>
      <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {
              skills.map((skill, index) => {
                return (
                  <div key={index} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                )
              })
            }
          </div>
          <ul className={styles.history}>
            {
              history.map((historyItem, index) => {
                return (
                  <>
                    <li key={index} className={styles.historyItem}>
                      <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={historyItem.title}

                      />
                      <div className={styles.historyItemDetails}>
                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                        <ul>
                          {
                            historyItem.experiences.map((experience, index) => {
                              return (
                                <li key={index}>{experience}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Experience
