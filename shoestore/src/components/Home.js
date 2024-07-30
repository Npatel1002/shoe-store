import React from 'react';
import data from './data'; 
import ItemsCard from './ItemsCard';

const Home = () => {
  const items = data.items;

  return (
    <div className="container">
      <div className="row">
        {items && items.map(item => (
          <ItemsCard key={item.id} item={item} img={item.img} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Home;
