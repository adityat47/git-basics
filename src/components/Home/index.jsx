import React from 'react'
import "../../assets/index.css"

const Home = props => {
  return (
    <>

     <div className='title'>
        <h1 className="text-3xl font-bold leading-tight">
          This is the Demo Page
        </h1>
      </div> 
      <div class="clock">
  <div class="hand hour-hand"></div>
  <div class="hand minute-hand"></div>
  <div class="hand second-hand"></div>
  <div class="center-dot"></div>
</div>

    
    </>
  )
}

Home.propTypes = {}

export default Home