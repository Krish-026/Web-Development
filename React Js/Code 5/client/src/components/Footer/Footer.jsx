import React from 'react'
import './Footer.scss';
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem, odit aliquid provident atque dolores quis excepturi sunt alias nemo, inventore vel ea nisi voluptate quo facere, sequi eos consectetur!</span>

        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem, odit aliquid provident atque dolores quis excepturi sunt alias nemo, inventore vel ea nisi voluptate quo facere, sequi eos consectetur!</span>
          
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className='copyright'>&#169; copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </div>

  )
}
