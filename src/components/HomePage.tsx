import { TypeAnimation } from 'react-type-animation'

import gif from '/cybergif.gif'
import mesh from '/mesh.png'
import { useEffect, useState } from 'react'
import Loading from './Loading'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    // mesh ve gif dosyalarını yükleme işlemleri
    // Eğer yükleme başarılıysa setIsLoaded(true) olarak ayarlanır
    const meshImage = new Image()
    meshImage.onload = () => {
      const gifImage = new Image()
      gifImage.onload = () => {
        setIsLoaded(true)
      }
      gifImage.src = '/cybergif.gif'
    }
    meshImage.src = '/mesh.png'
  }, [])

  return (
    <>
      {isLoaded ? (
        <section className="flex flex-col items-center">
          <article className="flex justify-center items-center relative mt-32 mb-96 md:mt-10 md:mb-32">
            <img
              className="max-w-6xl w-full md:w-3/4 scale-150 md:scale-100 rotate-90 md:rotate-0"
              src={gif}
              alt={gif.substring(1, gif.indexOf('.'))}
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Welcome to my web channel',
                1000,
                `I'm a React developer`,
                1000,
                'I can make perfect designs using Tailwindcss.',
                1000,
                'I can develop web applications using many packages in the React ecosystem.',
                1000,
                'Contact me',
                5000,
              ]}
              speed={50}
              className="absolute font-bungeeInline mx-16 md:mx-10 text-center text-3xl md:text-5xl selection:bg-cyan-500 selection:text-pink-700"
              repeat={Infinity}
            />
          </article>
          <article className="flex justify-end items-center relative w-3/4 mt-20 mb-96 md:mb-32">
            <article className="z-10 absolute left-0 font-genos w-10/12">
              <p className="text-4xl">
                These're one small steps for mankind,
                <br />
                giant projects for me.
              </p>
              <br />
              <p className="text-lg">
                I can develop creative applications by taking creative designs
                as an example.
                <br />
                Good design breeds great audiences.
              </p>
            </article>
            <img
              className=" z-0 rotate-90 md:rotate-0 max-w-6xl scale-150 md:scale-100 w-10/12 md:w-8/12 -me-5 opacity-60"
              src={mesh}
              alt={mesh.substring(1, mesh.indexOf('.'))}
            />
          </article>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default HomePage
