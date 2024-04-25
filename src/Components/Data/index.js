import products from "../ProductList";
import React, { useState, useEffect } from 'react';
import { DropdownHeader } from "react-bootstrap";
import Header from "../Header";
import Button from 'react-bootstrap/Button';
import loading from './download.png'


const Data = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [images, setImages] = useState({});

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setTimeout(() => {
          setProducts(productsData);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
    const handleDelete = (id) => {
      setProducts(products.filter((product) => product.id !== id));
    };
  
    const handleUpdateImage = (id, imageUrl) => {
        
        const productIndex = products.findIndex((product) => product.id === id);
        if (productIndex !== -1) {
          
          const updatedProducts = [...products];
          
          updatedProducts[productIndex] = { ...updatedProducts[productIndex], imageUrl };
          
          setProducts(updatedProducts);
          
          setImages({ ...images, [id]: imageUrl });
          
          console.log(`Updating image for product ${id} to ${imageUrl}`);
        } else {
          console.error(`Product with ID ${id} not found.`);
        }
      };
          return (
      <div>
        <Header />
        {isLoading && <img src={loading} alt="Loading" />}
        {error && <p>{error}</p>}
        <h1>Product List</h1>
        <ProductList products={products} onDelete={handleDelete} onUpdateImage={handleUpdateImage} />
      </div>
    );
  };
  
  const ProductList = ({ products, onDelete, onUpdateImage }) => {
    const [imageUrls, setImageUrls] = useState({});
  
    const handleImageUrlChange = (id, imageUrl) => {
      setImageUrls({ ...imageUrls, [id]: imageUrl });
    };
  
    const handleUpdateImage = (id,imageUrl) => {
      onUpdateImage(id, imageUrls[id]);
      setImageUrls({ ...imageUrls, [id]: imageUrl });
    };
  
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h5>{product.category}</h5>
            
            <img
  src={imageUrls[product.id] || ''}
  alt={product.name}
  style={{ maxWidth: '100px' }}
/>

            <span>
              {product.name} - {product.brand} - ${product.price}
            </span>
            <p style={{ color: 'black', marginTop: 30 }}>{product.inStock}</p>
            <Button variant="primary" onClick={() => onDelete(product.id)}>
              Delete
            </Button>{' '}
            
            <input
              type="file"
              value={imageUrls[product.id] || ''}
              onChange={(e) => handleImageUrlChange(product.id, e.target.value)}
            />
            
            <Button variant="primary" onClick={() => handleUpdateImage(product.id)}>
              Update Image
            </Button>{' '}
          </li>
        ))}
      </ul>
    );
  };
    
const ProductItem = ({ product, onDelete }) => {
  const { id, name, brand, category, price, inStock } = product;

  return (
    
    
    
    
    <li>
         <h5> {category }</h5>
      <span><h3>Title</h3>{name} - {brand} - ${price}</span>
<p style={{color:'black', marginTop:30}}>{inStock}</p>
   
      <Button variant="primary" onClick={() => onDelete(id)}>Delete</Button>{' '}
    </li>


  );
};

// Provided API data
const productsData = [
  // Your provided products data here...
  {
    id: 1,
    name: "Apple iPhone 13 Pro",
    brand: "Apple",
    category: "Smartphone",
    price: 999,
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 Ultra",
    brand: "Samsung",
    category: "Smartphone",
    price: 1199,
    inStock: false
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Wireless Headphones",
    brand: "Sony",
    category: "Headphones",
    price: 349,
    inStock: true
  },
  {
    id: 4,
    name: "Dell XPS 13 Laptop",
    brand: "Dell",
    category: "Laptop",
    price: 1299,
    inStock: true
  },
  {
    id: 5,
    name: "Canon EOS R5 Mirrorless Camera",
    brand: "Canon",
    category: "Camera",
    price: 3899,
    inStock: true
  },
  {
    id: 6,
    name: "Nintendo Switch",
    brand: "Nintendo",
    category: "Gaming Console",
    price: 299,
    inStock: true
  },
 {
    id: 7,
    name: "Bose QuietComfort 35 II Wireless Headphones",
    brand: "Bose",
    category: "Headphones",
    price: 299,
    inStock: true
  },
  {
    id: 8,
    name: "LG OLED65CXPUA 65-Inch 4K OLED TV",
    brand: "LG",
    category: "Television",
    price: 1999,
    inStock: true
  },
  {
    id: 9,
    name: "Amazon Echo Dot (4th Gen)",
    brand: "Amazon",
    category: "Smart Speaker",
    price: 49,
    inStock: true
  },
  {
    id: 10,
    name: "GoPro HERO9 Black",
    brand: "GoPro",
    category: "Action Camera",
    price: 449,
    inStock: true
  },
  {
    id: 11,
    name: "Microsoft Surface Pro 7",
    brand: "Microsoft",
    category: "Tablet",
    price: 799,
    inStock: true
  },
  {
    id: 12,
    name: "Sony PlayStation 5",
    brand: "Sony",
    category: "Gaming Console",
    price: 499,
    inStock: true
  },
  {
    id: 13,
    name: "Nike Air Force 1",
    brand: "Nike",
    category: "Footwear",
    price: 90,
    inStock: true
  },
  {
    id: 14,
    name: "Apple Watch Series 6",
    brand: "Apple",
    category: "Smartwatch",
    price: 399,
    inStock: true
  },
  {
    id: 15,
    name: "Canon EOS 90D DSLR Camera",
    brand: "Canon",
    category: "Camera",
    price: 1199,
    inStock: true
  },
  {
    id: 16,
    name: "Samsung 49-Inch CRG9 Curved Gaming Monitor",
    brand: "Samsung",
    category: "Monitor",
    price: 1299,
    inStock: true
  },
  {
    id: 17,
    name: "Fitbit Charge 4 Fitness Tracker",
    brand: "Fitbit",
    category: "Fitness Tracker",
    price: 149,
    inStock: true
  },
  {
    id: 18,
    name: "KitchenAid Artisan Stand Mixer",
    brand: "KitchenAid",
    category: "Kitchen Appliance",
    price: 399,
    inStock: true
  },
  {
    id: 19,
    name: "Microsoft Xbox Series X",
    brand: "Microsoft",
    category: "Gaming Console",
    price: 499,
    inStock: true
  },
  {
    id: 20,
    name: "Samsung Galaxy Tab S7+",
    brand: "Samsung",
    category: "Tablet",
    price: 849,
    inStock: true
  },
];

export default Data;
