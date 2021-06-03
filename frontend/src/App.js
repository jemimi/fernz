import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router> 
      <Header/> {/*adding the adder here- need the slash after */}
        <main className='py-3'> {/* adds padding above the title "welcome to..." */}
          <Container>
          {/*<HomeScreen/> imported Homescreen file here - products from HomeScreen.js are called from products.js..." */}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>
      <Footer/>
    </Router>
  )
}

export default App;
