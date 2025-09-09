import { AboutUs } from './components/AboutUs/AboutUs'
import { Content } from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Numbers from './components/Numbers/Numbers'
import { Values } from './components/Values/Values'
import './index.css'

function App() {
  return (
    <div className='font-arimo max-w-[87%] mx-auto p-4 mt-20'>
      <Header />
      <Content />
      <AboutUs />
      <Values />
      <Numbers />
      <Footer />
    </div>
  )
}

export default App
