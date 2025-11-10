import Hero from '../components/Hero'
import ServiceCarousel from '@/components/ServiceCarousel'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ReceivedFeedbacks from '@/components/ReceivedFeedbacks'
import Accordion from '@/components/Tips'
import AboutPage from '@/components/AboutPage'
import PriceTable from '@/components/PriceTable'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <About/>
      <Contact/>
      <ServiceCarousel/>
      <AboutPage/>
      <ReceivedFeedbacks/>
      {/* <PriceTable/> */}
      <Accordion/>
    </div>
    
  )
}