import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <HeroSection />
      </div>
    </div>
  )
}

export default Layout
