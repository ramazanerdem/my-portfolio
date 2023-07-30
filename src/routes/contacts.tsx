import linkedin from '/linkedin-blue.svg'
import gmail from '/gmail.svg'
import github from '/github.svg'

const Contacts = () => {
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-white">
        Contacts
      </h1>
      <div className="space-y-3 font-blackOpsOne">
        <div className="bg-cyan-600 bg-opacity-10">
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={github} alt="" />
            <div>
              <h2 className="text-gray-400">Github</h2>
              <p className="text-sm">linkedin.com/in/ramazanerdem</p>
            </div>
          </div>
        </div>
        <div className="bg-cyan-600 bg-opacity-10">
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={linkedin} alt="" />
            <div>
              <h2 className="text-blue-400">Linkedin</h2>
              <p className="text-sm">linkedin.com/in/ramazanerdem</p>
            </div>
          </div>
        </div>
        <div className="bg-cyan-600 bg-opacity-10">
          <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
            <img className="w-10 md:w-20" src={gmail} alt="" />
            <div>
              <h2 className="text-red-500">E-Mail</h2>
              <p className="text-sm">ramazan.erdem.du@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts
