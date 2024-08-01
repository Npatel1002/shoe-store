import React from "react";

const Categories=({categories,filterByCategory})=>
{
    return(
    <div className="categories">
      {categories.map((category, index)=> (
        <button
          key={index}
          className="btn category-button m-3"
          onClick={()=>filterByCategory(category)}
        >
            {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
