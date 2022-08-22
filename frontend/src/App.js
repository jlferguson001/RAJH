import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

const App = () => {

  return (
    <>
      <Header />
      <main className = 'py-4'>
        <Container>
          <h1> Welcome to RAJH Frames</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
 
