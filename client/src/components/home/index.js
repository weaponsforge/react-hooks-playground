import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HomeComponent() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.h2}>
          <h1 className={inter.className}>
            React Hooks Playground
          </h1>
        </div>

        <Link href="/usesyncexternalstore" className={styles.card}>
          useSyncExternalStore
        </Link>
      </div>
    </main>
  )
}
