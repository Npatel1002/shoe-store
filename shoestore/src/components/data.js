import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpg";

// contains information of cateegories and products
const data=
{   
    // listing various categories
    categories: ["All", "Sports", "Casual", "Formal"],
    
    // product details
    products: [
    {
      id: 1,
      title: "Nike",
      category: "Sports",
      img: img1,
      price: 40,
      description: "These shoues provide best comfort and durablity so they are best for athelits and sports man."
    },
    {
      id: 2,
      title: "Puma",
      category: "Casual",
      img: img2,
      price: 50,
      description: "These shoues are made from synthetc leather so they are longlasting. They ate best for everyday use."
    },
    {
      id: 3,
      title: "Adidas",
      category: "Sports",
      img: img3,
      price: 50,
      description: "These Shoues provide high perfomance on playground and known for they unique design. They are best for playing cricket"
    },
    {
      id: 4,
      title: "Reebok",
      category: "Casual",
      img: img4,
      price: 55,
      description: "These shoues are lightweight and best for everyday use."
    },
    {
      id: 5,
      title: "New Balance",
      category: "Formal",
      img: img5,
      price: 67,
      description: "These formal shoues provide greate comfort and a good style on formal occasions."
    },
    {
      id: 6,
      title: "Kappa",
      category: "Sports",
      img: img6,
      price: 45,
      description: "These are peformance oriented shoues best for various types of sports."
    },
    {
      id: 7,
      title: "Lacoste",
      category: "Formal",
      img: img7,
      price: 40,
      description: "These shoues provide best quality of shoues made of genuine leather suits for formal dressing."
    },
    {
      id: 8,
      title: "Levis",
      category: "Casual",
      img: img8,
      price: 50,
      description: "These casual shoues creates a trendy look. They are best for casual outfit and regular wear."
    }
  ]
};

export default data;