import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1>Homepage</h1>
      <Footer/>
    </main>
  )
}
