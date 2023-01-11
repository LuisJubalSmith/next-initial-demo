/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function Home() {
  return (
   <MainLayout>
    <h1>Home Page</h1>
      <h2 className="title"> 
        Ir a <Link href='/about'>About</Link>
      </h2>
      <p className="description">
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.tsx</code>
      </p>
   </MainLayout>
  )
}
