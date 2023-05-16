import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import styles from './styles/index.module.css'
import Presentation from './presentation';

export default function Home() {
  return (
    <>
      <Head>
        <title>N Performance 91</title>
      </Head>
      <Presentation/>     
    </>
  )
}
