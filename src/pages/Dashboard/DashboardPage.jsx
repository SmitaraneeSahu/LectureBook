import React, { useEffect, useState } from 'react'
import DashboardCard from './components/DashboardCard';
import DashboardEmpty from './components/DashboardEmpty';
import { getUserOrder } from '../../Services';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';

export default function DashboardPage() {
    useTitle("Dashboard");
    const [orders, setOrders] = useState([]);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const userid = JSON.parse(sessionStorage.getItem("userid"));
    useEffect(()=>{
        async function fetchOrders(){
            try{
                const data = await getUserOrder();
                setOrders(data);
            }catch(error){
                toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})
            }
        }
        fetchOrders();
    },[])
  return (
    <>
    <section className="space-y-2">
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-5 underline underline-offset-8">Orders</p>
    </section>
    <section>
    {orders.length && orders.map((order)=>(
        <DashboardCard key={order.id} order={order} />
    ))}</section>
    <section>
    {!orders.length && <DashboardEmpty/>}
    </section>
    </>
  )
}
