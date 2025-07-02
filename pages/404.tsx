import Head from 'next/head'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: Not Found</title>
        <meta name="description" content="Error: 404" />
        <link rel="icon" href="/images/coobyk.svg" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </Head>
      <div className="bg-color-background text-color-text flex flex-col items-center justify-center text-center min-h-screen">
        <Layout>
          <div className="m-auto">
            <h1 className="text-9xl font-bold font-mono text-color-primary text-shadow-y-10 text-shadow-x-10 text-shadow-color-primary text-shadow-blur">4O4</h1>
            <h2 className="text-3xl font-bold font-mono text-color-secondary pb-10">Not Found</h2>
            <p>This page does not exist. Please check the URL and try again.</p>
            <a href="/" className="text-color-accent hover:scale-125 transition-all ease duration-300">Go back to the home page</a>
          </div>
        </Layout>
      </div>
    </>
  )
}
