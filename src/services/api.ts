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

export const fetchProductCategoriesLimited = async() => {
   try{
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();

    const limitedCateg = data.slice(0,6);
    console.log(limitedCateg);
    return limitedCateg;
   }
   catch(err) {
    console.error('Error occured: ', err);
   }
}

export const fetchProductCategories = async() => {
   try{
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    return data;
   }
   catch(err) {
    console.error('Error occured: ', err);
   }
}
;
export const handleCategoryFilter = async (slug: string) => {
   try{
     const response = await fetch(
      `https://dummyjson.com/products/category/${slug}`,
    );
    const data = await response.json();
    return data.products;
   }catch(error){
    console.log(error)
   }
  };