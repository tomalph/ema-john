import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]
    )
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products product={product} handleAddToCart={handleAddToCart} key={product.id} ></Products>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Items:{cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;