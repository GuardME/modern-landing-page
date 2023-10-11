import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { motion } from "framer-motion"
import { riseWithFade, staggerChildren, videoAnimation, wordAnimation } from '@/utils/animations'

const inter = Inter({ subsets: ['latin'] })

 const Home: NextPage = () => {
  return (
    <motion.div className='min-h-screen px-12 bg-cream' initial='initial' animate='animate'>
      <Head>
        <title>Home | Roboto.com</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Banner Text */}
        <main className='grid grid-cols-[3fr_1fr] py-12'>
          <h1 className='text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]'>
            <AnimatedWords title="Helper Robots for a better everyday" />
          </h1>
   
        <motion.div className="text-base leading-[150%] self-end"
        variants={riseWithFade}
        >
          Born from the moonshot factory, we're building a new type of robot.
          One that can learn by it self. to help anyone with (almost) anything
        </motion.div>
        </main>
      {/* end */}
      <motion.video loop autoPlay muted playsInline variants={videoAnimation}>
        <source src='/assets/hero-video.mp4' type='video/mp4' />
      </motion.video>
      <footer className='flex justify-center text-sm text-zinc-400 py-12'>
        <p>Copyright 2023 Roboto Co. All Rights reserved</p>
      </footer>
    </motion.div>
  )
}


type AnimateWordsProps = {
  title: string;
};

const AnimatedWords: React.FC<AnimateWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className='inline-block overflow-hidden'>
          <motion.span className='inline-block overflow-hidden' variants={wordAnimation}>
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  )
}

export default Home;
