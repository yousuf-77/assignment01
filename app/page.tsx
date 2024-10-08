import Link from "next/link";
import styles from './page.module.css'
export default function HomePage(){
  return(
<div className={styles.container}>
<h1>Muhammad Yousuf</h1>
<h2>Hello World</h2>
<p className="num-display">${Math.random()*10}</p>
<ul>
  <li><Link href={'/'}>Home</Link></li>
  <li><Link href={'/About'}>About</Link></li>
  <li><Link href={'/Contact'}>Contact</Link></li>
  <li><Link href={'/About/Services'}>Services</Link></li>
</ul>
</div>
)
}
