import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import { Heading } from '@chakra-ui/react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <Layout>
    <Heading>Početna</Heading>
  </Layout>
  )
}
