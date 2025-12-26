const base_url = 'https://dummyjson.com/products';

export const fetchProducts = async() => {
    try{
        const response = await fetch(base_url);
        const data = await response.json();
        console.log(data.products);
        return data.products;
    }
    catch(err){
        console.error('Error fetching products'+ err);
        return [];
    }
}