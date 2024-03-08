import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <div className={style.logo}>
            <Image src="/images/pokeball.png" 
            width={30}
            height={30}
            alt='PokeNext' />
            <h1>PokeNext</h1>
        </div>
        <ul className={style.link_items}>
            <li>
                <Link className={style.link_menu} href="/">Home</Link>
            </li>
            <li>
                <Link className={style.link_menu} href="/About">About</Link>
            </li>
        </ul>
    </nav>
  )
}
