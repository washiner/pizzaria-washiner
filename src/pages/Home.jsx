import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage}`}}>
      <div className='headerContainer'>
        <h1> Wa's Pizzaria</h1>
        <p>PIZZAS CASEIRAS E GOSTOSAS</p>
        <Link to='/menu'>
          <button>FAÇA SEU PEDIDO</button>
        </Link>
      </div>

    </div>
  )
}

export default Home