// import Image from 'next/image'
import HeroSection from '@/component/HeroSection'
import Navbar from '@/component/Navbar'
import SkillsSection from '@/component/SkillsSection'
import ProjectsSection from '@/component/ProjectsSection'
import Footer from '@/component/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#191A19]'>
      <Navbar />
      <div className='container flex flex-col mt-24 mx-auto px-12 py-5'>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
