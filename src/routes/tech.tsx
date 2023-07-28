import react from '/react.svg'
import redux from '/redux.svg'
import reactRouter from '/react-router.svg'
import typescript from '/typescript.svg'
import tailwindcss from '/tailwindcss.svg'
import next from '/next.svg'
import npm from '/npm.svg'

const Tech = () => {
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-pink-900">
        Technologies i use
      </h1>
      <div className="space-y-3 font-blackOpsOne">
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={react} alt="" />
            React.js
          </div>
          <div className="collapse-content">
            <p className="text-md">
              React is an open source JavaScript library developed by Facebook
              and is widely used in the development of modern web applications.
              As a React developer, I can adopt a component-based approach to
              building the user interface and manage these components
              efficiently. With React, I can develop powerful, user-friendly and
              interactive web applications and use efficient methods to manage
              application state and manage components.
            </p>
          </div>
        </div>
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={redux} alt="" />
            Redux Toolkit
          </div>
          <div className="collapse-content">
            <p className="text-md">
              Redux Toolkit is a Redux library that facilitates state management
              when developing web applications. As a React developer, I can use
              the Redux Toolkit to centrally manage application state and share
              data between components. I can easily use common extras provided
              by Redux Toolkit such as slice creation and Redux Thunk. Thus, I
              can provide predictable state management of the application and
              facilitate state management even in more complex applications.
            </p>
          </div>
        </div>
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={reactRouter} alt="" />
            React Router
          </div>
          <div className="collapse-content">
            <p className="text-md">
              React Router is a routing library used to facilitate navigation in
              React-based applications. As a React developer, I can use React
              Router to turn multi-page applications into single-page
              applications and allow users to navigate between different pages
              using URLs. I can manage dynamic routes, handle parameters, and
              make application transitions in a smooth and user-friendly way.
            </p>
          </div>
        </div>
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={typescript} alt="" />
            Typescript
          </div>
          <div className="collapse-content">
            <p className="text-md">
              TypeScript is a programming language and superset that adds a
              powerful type system to JavaScript. In React projects, I can use
              TypeScript to prevent code errors using static typing, increase
              IDE support, and provide a safer development process. With
              TypeScript, I can define React components and application state in
              a type-safe way, manage data and functions, and use interfaces and
              type casts to reduce code complexity.
            </p>
          </div>
        </div>
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={tailwindcss} alt="" />
            Tailwindcss
          </div>
          <div className="collapse-content">
            <p className="text-md">
              Tailwind CSS is a utility-first CSS framework based on CSS. This
              styling framework offers a unique approach to organising and
              styling the design of components in React projects. As a
              proficient Tailwind CSS user, I can easily create and apply custom
              styles to suit your needs, instead of using predefined CSS
              classes. Thus, I can quickly and efficiently create visually
              appealing and customised user interfaces.
            </p>
          </div>
        </div>
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={next} alt="" />
            Next.js
          </div>
          <div className="collapse-content">
            <p className="text-md">
              Next.js is a React-based JavaScript framework and offers
              performance-enhancing features, especially SSR (Server-Side
              Rendering) and pre-rendering. As a React developer, I can develop
              applications in a fast and SEO-friendly way and improve the user
              experience using Next.js. With Next.js, I can do page-based
              preloading, use data fetching methods, manage redirects and
              optimise application performance using a number of advanced
              features.
            </p>
          </div>
        </div>
        <div className="collapse bg-cyan-600 bg-opacity-10">
          <input type="radio" name="my-accordion-1" />
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={npm} alt="" />
            NPM Packages
          </div>
          <div className="collapse-content">
            <p className="text-md">
              NPM (Node Package Manager) is a package management system for
              managing and deploying JavaScript packages. In my React projects,
              I can use NPM to manage external dependencies and structure the
              project efficiently. I can install and update packages, switch
              between packages, and adjust package management according to
              application requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Tech
