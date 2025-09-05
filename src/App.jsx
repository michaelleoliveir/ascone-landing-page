import { AboutUs } from './components/AboutUs/AboutUs'
import { Content } from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Values } from './components/Values/Values'
import './index.css'

function App() {
  return (
    <div className='font-arimo max-w-[87%] mx-auto p-4 mt-20'>
      <Header />
      <Content />
      <AboutUs />
      <Values />
      <Footer />
    </div>
  )
}

export default App
