import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

function Root() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <>
      <Header />
      <main className="pt-20 flex justify-center">
        <motion.div
          className="fixed z-30 w-full progress-bar h-2 bg-white opacity-30"
          style={{ scaleX }}
        />

        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
