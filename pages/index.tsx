import Head from 'next/head'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rest Countries API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Main />
      </main>
    </div>
  )
}
