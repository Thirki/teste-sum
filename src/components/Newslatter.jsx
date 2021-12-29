import React from 'react'
import './Newslatter.css'

export function Newslatter() {
  return (
    <div className='newslatter-container'>
      <div className='newslatter-item'>
        <div className='newslatter-image'>
          <p>B</p>
        </div>
        <div className='newslatter-content'>
          <p>Bitcoin</p>
          <span>R$ 264.548,51</span>
        </div>
      </div>
      <div className='newslatter-item'>
        <div className='newslatter-image'>
          <p>B</p>
        </div>
        <div className='newslatter-content'>
          <p>Ether</p>
          <span>R$ 21.054,40</span>
        </div>
      </div>
      <div className='newslatter-item'>
        <div className='newslatter-image'>
          <p>B</p>
        </div>
        <div className='newslatter-content'>
          <p>Binance Coin</p>
          <span>R$ 2.950,81</span>
        </div>
      </div>
    </div>
  )
}
