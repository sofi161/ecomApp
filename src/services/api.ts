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

export const fetchProductCategories = async() => {
   try{
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = response.json();
    console.log(data);
    return data;
   }
   catch(err) {
    console.error('Error occured: ', err);
   }
}