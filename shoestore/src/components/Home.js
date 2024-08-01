import React, {useState,useEffect} from "react";
import ItemsCard from "./ItemsCard";
import data from "./data";
import Categories from "./Categories";

const Home=()=>
{
  // for filtering products
    const [filteredProducts,setFilteredProducts]=useState(data.products);
    useEffect(()=>{
    setFilteredProducts(data.products);
},[]);
  
// filter products by categories
const filterByCategory=(category)=>
{
    if(category==="All")
    {
      setFilteredProducts(data.products);
    }
    else
    {
      const filtered=data.products.filter((product)=>product.category===category);
      setFilteredProducts(filtered);
    }
  };
  return(
    <div className="home-background">
      <h1 className="text-center mt-3">All items</h1>
      <section className="py-4 container home-container">
        <Categories categories={data.categories}filterByCategory={filterByCategory}/>
        
        <div className="row justify-content-center home-row">
          {filteredProducts.map((item, index)=>
          (
            <ItemsCard
              img={item.img}
              price={item.price}
              title={item.title}
              item={item}
              key={index}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
