import Head from 'next/head'
import { Hero, Header, Footer } from '@/components/page'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TBU front-end technical test</title>
        <meta name="description" content="TBU front-end technical test using React, NextJs and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        <Hero />
      </main>
      <Footer/>
    </div>
  )
}
