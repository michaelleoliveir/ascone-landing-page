import AboutUs from './sections/AboutUs/AboutUs'
import Content from './sections/Content/Content'
import Faq from './sections/FAQ/Faq'
import Footer from './components/Footer/Footer'
import GetStarted from './sections/GetStarted/GetStarted'
import Header from './components/Header/Header'
import Numbers from './sections/Numbers/Numbers'
import Values from './sections/Values/Values'

import './index.css'

function App() {
  return (
    <div className='font-arimo max-w-[87%] mx-auto p-4 mt-20'>
      <Header />
      <Content />
      <AboutUs />
      <Values />
      <Numbers />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
