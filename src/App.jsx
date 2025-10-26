import Hero from "./components/Hero"

function App() {

  return (
    <div className='min-h-screen bg-neutral-100 relative'> 
      <button className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors">
        <i className="bx bx-moon text-lg lg:text-xl"></i>
      </button>
      <Hero />
    </div>
  )
}

export default App
