import Link from 'next/link'
import Page from '@/common/layout/page'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import navlinks from './items.json'

const inter = Inter({ subsets: ['latin'] })

export default function HomeComponent() {
  return (
    <Page>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.h2}>
            <h1 className={inter.className}>
              React Hooks Playground
            </h1>
          </div>

          {navlinks.map((item, index) => (
            <Link href={item.link} key={index} className={styles.card}>
              {item.name}
            </Link>
          ))}
        </div>
      </main>
    </Page>
  )
}
