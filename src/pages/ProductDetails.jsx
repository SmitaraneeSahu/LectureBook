import React, { useEffect, useState } from 'react'
import Rating from '../components/Elements/Rating';
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { useCart } from '../contexts';
import { getProductDetail } from '../Services';
import { toast } from 'react-toastify';

export default function ProductDetails() {
    const {cartList, addToCart, removeFromCart} = useCart();
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        async function fetchProduct(){
            try{
                const data = await getProductDetail(id);
                setProduct(data);
            }catch(error){
                toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})
            }
        }
        fetchProduct();
    },[id]);
    useTitle(product.name);
    const [isInCart, setIsInCart] = useState(false);
    
    useEffect(()=>{
        const productInCart = cartList.find(item => item.id===product.id)
        setIsInCart(productInCart);
    },[cartList, product.id]);
  return (
    <main className='bg-white dark:bg-gray-900'>
        <section className='bg-white dark:bg-gray-900'>
            <h1 className='mt-5 mb-5 text-4xl text-center font-semibold text-gray-900 dark:text-slate-100'>{product.name}</h1>
            <p className='mb-5 text-lg text-center text-gray-900 dark:text-slate-200'>{product.overview}</p>
            <div className='flex flex-wrap justify-around'>
                <div className='max-w-xl my-3'>
                    <img src={product.poster} alt=''/>
                </div>
                <div className='max-w-xl my-3'>
                    <p className='text-3xl font-bold text-gray-900 dark:text-slate-200'>
                        <span>$ {product.price}</span>
                    </p>
                    <p className='my-3'>
                        <span>
                            <Rating  rating={product.rating}/>
                        </span>
                    </p>
                    <p className='my-4 select-none'>
                        {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">Best Seller</span>}
                        {product.in_stock && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">In stock</span>}
                        {!product.in_stock && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">Out of stock</span>}
                        <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
                    </p>
                    <p className='my-3'>
                        { !isInCart && <button onClick={()=> addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : " bg-gray-100 hover:bg-gray-200 bg-opacity-55 cursor-not-allowed"}`} disabled= {product.in_stock ? "" : "disabled" }>Add to Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                        {isInCart && <button onClick={()=> removeFromCart(product)}className='inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800'>Remove item <i className="ml-1 bi bi-trash3"></i></button> }
                    </p>
                    <p className='text-lg text-gray-900 dark:text-slate-200'>
                        {product.long_description}
                    </p>
                </div>
            </div>
        </section>
    </main>
  )
}
