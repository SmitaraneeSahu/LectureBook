export async function getProductList(searchTerm){
    // console.log('API Host:', import.meta.env.VITE_HOST);
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/products/?name_like=${searchTerm ? searchTerm : ""}`,{ cache: "no-store" });
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json();
    return data;
}
export async function getProductDetail(id){
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/products/${id}`);
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json();
    return data;
}
export async function getFeaturedProducts(){
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/featured_products`);
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    }
    const data = await response.json();
    return data;
}