import React, { useState, useEffect } from "react";
import ItemsCard from "./ItemsCard";
import data from "./data";
import Categories from "./Categories";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  useEffect(() => {
    setFilteredProducts(data.products);
  }, []);

  const filterByCategory = (category) => {
    console.log("Filtering by category:", category);
    if (category === "All") {
      setFilteredProducts(data.products);
    } else {
      const filtered = data.products.filter((product) => product.category === category);
      console.log("Filtered products:", filtered);
      setFilteredProducts(filtered);
    }
    console.log("Filtered products state set to:", filteredProducts);
  };

  return (
    <>
      <h1 className="text-center mt-3">All items</h1>
      <section className="py-4 container">
        <Categories categories={data.categories} filterByCategory={filterByCategory} />
        <div className="row justify-content-center">
          {filteredProducts.map((item, index) => (
            <ItemsCard
              img={item.img}
              price={item.price}
              title={item.title}
              item={item}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;