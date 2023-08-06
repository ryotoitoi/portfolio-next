import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>私のポートフォリオ</h1>
      <p>ここに簡単な自己紹介や経歴を書くことができます。</p>
    </div>
  )
}
