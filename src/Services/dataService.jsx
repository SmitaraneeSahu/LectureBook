function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const userid = JSON.parse(sessionStorage.getItem("userid"));
    return {token,userid}
}
export async function getUser() {
    const browserData = getSession();
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/users/${browserData.userid}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${browserData.token}`,
    },
    });
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json();
    return data;
}
export async function  createOrder(cartList,total,user) {
    const browserData = getSession();
    const order ={
            ordered_products: cartList,
            amount_paid: total,
            quantity: cartList.length,
            payment_id: (Math.floor(Math.random() * 100000) + 1),
            user: {
                name: user.name,
                email: user.email,
                id: browserData.userid
            }
        }
        const response = await fetch(`${import.meta.env.VITE_HOST}/api/orders`,{
            method: "POST",
            headers: {"Content-Type" : "application/json", Authorization: `Bearer ${browserData.token}`},
            body: JSON.stringify(order)
        });
        if(!response.ok){
        throw {message: response.statusText, status: response.status}
        }
        const data = await response.json();
    return data;
}
export async function getUserOrder() {
    const browserData = getSession();
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/orders?user.id=${browserData.userid}`,{
            method: "GET",
            headers: {"Content-Type" : "application/json", Authorization: `Bearer ${browserData.token}`},
        });
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json();
    return data;
}
