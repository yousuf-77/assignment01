import styles from './services.module.css'
export default function Services(){
  return(
    <div className={styles.container}>
      <h1>Services</h1>
      <h2>${Math.random()*10}</h2>
    </div>
  )
}