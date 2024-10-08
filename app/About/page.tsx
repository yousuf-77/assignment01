import React from "react"
import Link from "next/link"
import styles from './about.module.css'
export default function AboutPage(){
  return(
  <>
  <div className={styles.container}>
  <h1>About Page</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse aperiam earum quidem natus error omnis odit nam nostrum sed minima corrupti, ullam, rerum repellat, ex fugiat eaque culpa voluptatibus!</p>
  <ul>
    <li>
  <Link href={'/About/Services'}>Services</Link>
    </li>    
  </ul>
  </div>
  </>
  )
}