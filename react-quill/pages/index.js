
import Head from 'next/head'
import Image from 'next/image'

import QuillComponent from '../components'
import 'antd/dist/antd.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo React Quill</title>
        <meta name="description" content="Demo react quill" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Demo React Quill
        </h1>

        <QuillComponent/>
      </main>
    </div>
  )
}
