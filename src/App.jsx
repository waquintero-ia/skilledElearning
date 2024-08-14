import './App.css'
import Content from './component/content'
import Footer from './component/Footer'
import Hero from './component/hero'
import Navbar from './component/Navbar'


function App() {

  return (
    <>
      <main className='font-jakarta overflow-hidden'>
        <Navbar />
        <Hero />
        <Content />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
