import React, {FC, CSSProperties} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
    fontSize: '20px',
    fontWeight: '700'
}

interface Props{
    text: string;
    href: string;
}


export const ActiveLink: FC<Props> = ({text, href}: Props) => {
const {asPath} = useRouter()
  return (
    <Link href={href}>
       <span style={asPath === href ? style : undefined}> { text }</span>
    </Link>
  )
}


