import { useState } from 'react'
import Layout from './layout'
import Info from './components/Info'
import HeroSection from './components/HeroSection'
import FormSection from './components/FormSection'
import Advertise from './components/Advertise'
import Reviews from './components/Reviews'
import CardComp from './components/CardComp'
import BusinessInfo from './components/BusinessInfo'
import FooterSection from './components/FooterSection'
import { Box, Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
    <Layout>
    </Layout>
      <Info />
      <HeroSection />
      <FormSection />
      <Advertise/>
      <Reviews/>
      <CardComp/>
      <BusinessInfo/>
      <FooterSection/>
    </Container>
    
  )
}

export default App
