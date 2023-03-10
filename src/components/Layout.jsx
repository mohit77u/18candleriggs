import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({title, children }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        {/* header */}
        <Header />

        {/* main page */}
        <main>{children}</main>

        {/* footer */}
        <Footer />
    </>
  )
}