/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function About() {
  return (
    <>
      
          <h1>About Page</h1>
        <h2 className={'title'}> 
          Ir a <Link href='/'>Home</Link>
        </h2>
          <p className="description">
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>

    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
