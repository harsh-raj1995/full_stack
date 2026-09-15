import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then( (response)  =>  (response.json()))
    .then( (data)  =>  (setProducts(data)))
    .catch( () => (console.log("Error")))
  },[])

  return (
    <>
    {products.map((prod)=>{
      return <div className='card' key={prod.id}>
        <img src={prod.image} width="100px"></img>
        <h3>{prod.title}</h3>
        <p>{prod.price}</p>
        <p>{prod.category}</p>
        <p>{prod.rating.rate}</p>
        <p>{prod.rating.count}</p>
      </div>
    })}
    </>
  )
}

export default App


