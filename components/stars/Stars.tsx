import styles from './Stars.module.css'

export default function Stars() {

  return (
    <div className="fixed inset-0 w-screen max-w-full h-screen bg-gradient-to-b from-[#281362ff] from-10% via-[#531697ff] via-60% to-[#8700C6ff] to-100%">
      <div className="fixed inset-0">
        <div className="absolute inset-0" ><div className={styles.stars}></div></div>
        <div className="absolute inset-0" ><div className={styles.stars2}></div></div>
        <div className="absolute inset-0" ><div className={styles.stars3}></div></div>
      </div>
      <div className="fixed left-[2000px] top-0">
        <div className="absolute inset-0" ><div className={styles.stars}></div></div>
        <div className="absolute inset-0" ><div className={styles.stars2}></div></div>
        <div className="absolute inset-0" ><div className={styles.stars3}></div></div>
      </div>
      <div className="fixed left-[4000px] top-0">
        <div className="absolute inset-0" ><div className={styles.stars}></div></div>
        <div className="absolute inset-0" ><div className={styles.stars2}></div></div>
        <div className="absolute inset-0" ><div className={styles.stars3}></div></div>
      </div>
    </div>
  )
}
