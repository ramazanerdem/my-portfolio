import { TypeAnimation } from 'react-type-animation'

import gif from '/cybergif.gif'
import mesh from '/mesh.png'

const HomePage = () => {
  return (
    <section className="flex flex-col items-center">
      <article className="flex justify-center items-center relative mt-10 mb-32">
        <img className="max-w-6xl w-3/4" src={gif} alt="" />
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
          className="absolute font-bungeeInline text-center text-5xl selection:bg-cyan-500 selection:text-pink-700"
          repeat={Infinity}
        />
      </article>
      <article className="flex justify-end items-center relative w-3/4 mb-32">
        <article className="absolute left-0 font-genos">
          <p className="text-4xl">
            That's one small step for mankind,
            <br />
            giant projects for me.
          </p>
          <br />
          <p className="text-lg">
            I can develop creative applications by taking creative designs as an
            example.
            <br />
            Good design breeds great audiences.
          </p>
        </article>
        <img className="max-w-6xl w-8/12" src={mesh} />
      </article>
    </section>
  )
}
export default HomePage
