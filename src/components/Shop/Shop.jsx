import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect( () =>{
        const storedCart = getShoppingCart()
        let savedCart =[]

        // Get id
        for (const id in storedCart){
            // Get product from products 
            const addedProduct =products.find (product => product.id === id)

            if(addedProduct){
                // Add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                console.log(addedProduct)
                // Add the added product to the savedCart
                savedCart.push(addedProduct)
            }
        }
        // Set the cart
        setCart(savedCart)

    },[products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)

    }
    
    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;