import React, { useState, useEffect } from 'react'
import ProductCard from '../../../components/Elements/ProductCard'
import { getFeaturedProducts } from '../../../Services';
import { toast } from 'react-toastify';

export default function Featured() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    async function fetchProducts(){
      try{
        const data = await getFeaturedProducts();
        setProducts(data);
      }catch(error){
        toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})
      }
    }
    fetchProducts();
  },[])
  return (
    <section className='my-20'>
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured Courses</h1>  
        <div className='flex flex-wrap justify-center lg:flex-row"'>
            {products.map((product)=> (
              <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </section>
  )
}
