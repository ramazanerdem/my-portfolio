import { techs } from '../data/techs'
import { ITech } from '../types/techTypes'

const Tech = () => {
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-pink-900">
        Technologies i use
      </h1>
      <div className="space-y-3 font-blackOpsOne">
        {techs.map((tech: ITech) => (
          <div
            key={tech.id}
            className="collapse md:px-2 rounded-lg bg-cyan-600 bg-opacity-10"
          >
            <input type="radio" name="my-accordion-1" />
            <div className="flex items-center gap-4 md:gap-7 h-20 md:h-32 collapse-title text-lg md:text-xl">
              <img
                className="w-10 md:w-20"
                src={tech.img}
                alt={tech.img.substring(1, tech.img.indexOf('.'))}
              />
              <h2>{tech.tech}</h2>
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-lg">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Tech
