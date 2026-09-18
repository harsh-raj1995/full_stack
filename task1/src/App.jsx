import { useState, useEffect } from 'react'
import './App.css'
import heroImage from './assets/hero.png'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then( (response)  =>  (response.json()))
    .then( (data)  =>  (setProducts(data)))
    .catch( () => (console.log("Error")))
  },[])

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Modo home">MODO<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#shop">Shop all</a>
          <a href="#new">New in</a>
          <a href="#story">Our story</a>
        </nav>
        <div className="header-actions">
          <button className="text-button" type="button">Search</button>
          <button className="bag-button" type="button" aria-label="Shopping bag">Bag <span>0</span></button>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="new">
          <div className="hero-copy">
            <p className="eyebrow">Curated everyday objects</p>
            <h1>Good things<br /><em>feel</em> better.</h1>
            <p className="hero-description">Small upgrades for the way you live, work, and wind down. Designed to be used daily and loved for longer.</p>
            <a className="primary-button" href="#shop">Explore the edit <span>↗</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sticker sticker-top">NEW<br />DROP</div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img src={heroImage} alt="" />
            <div className="hero-note">01 / 04<br /><span>Objects with intention</span></div>
          </div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The current edit</p>
              <h2>Made for right now<span>.</span></h2>
            </div>
            <p className="section-copy">Thoughtful pieces, useful details, zero filler.</p>
          </div>
          <div className="category-row" aria-label="Product categories">
            <button className="category active" type="button">All objects</button>
            <button className="category" type="button">Wear</button>
            <button className="category" type="button">Carry</button>
            <button className="category" type="button">Home</button>
          </div>
          <div className="product-grid">
            {products.map((prod, index) => (
              <article className="product-card" key={prod.id}>
                <div className="product-image-wrap">
                  {index === 0 && <span className="product-sticker">Best seller</span>}
                  <button className="save-button" type="button" aria-label={`Save ${prod.title}`}>+</button>
                  <img className="product-image" src={prod.image} alt={prod.title} />
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-category">{prod.category}</p>
                    <h3>{prod.title}</h3>
                  </div>
                  <p className="price">${prod.price.toFixed(2)}</p>
                </div>
                <div className="product-meta">
                  <span>★ {prod.rating.rate}</span>
                  <span>{prod.rating.count} reviews</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="story">
        <span>MODI JI.</span>
        <p>Better basics for everyday rituals.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App


