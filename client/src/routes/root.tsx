import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function Root() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="pt-14 md:pt-20 flex justify-center">
        <motion.div
          className={`${
            isOpen && '-z-10'
          } fixed z-10 w-full progress-bar h-1 md:h-2 bg-white opacity-30`}
          style={{ scaleX }}
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
