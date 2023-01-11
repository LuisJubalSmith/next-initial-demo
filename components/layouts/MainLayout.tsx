import React from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'


export const MainLayout = ({ children }: any) => {
  return (
    <div className={'container'}>
      <Head>
        <title>Home - Luis Smith</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar />
      <main className={'main'}>
        {children}
      </main>
    </div>
  )
}
