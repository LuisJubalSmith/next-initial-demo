import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
        <h2 className={'title'}> 
          Ir a <Link href='/'>Home</Link>
        </h2>
          <p className="description">
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing/index.tsx</code>
          </p>
    </MainLayout>
  )
}