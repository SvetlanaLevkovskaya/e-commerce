import React from 'react';
import { ProductList } from 'features/product-list';



const MainPage = () => {
	return (
		<ProductList />
	);
};

export default MainPage;


/*const MainPage = () => {
 const [products, setProducts] = useState([]);

 useEffect(() => {
 fetch('https://fakestoreapi.com/products')
 .then((res) => res.json())
 .then((data) => setProducts(data));
 }, []);

 return (
 <div>
 <h1>MainPage</h1>
 <ul>
 {products.map((product) => (
 <>
 <li key={product.id}>{product.title} </li>
 <img src={product.image} alt='item' style={{width: "16.7%", marginBottom: '0.5rem'}}/>
 </>

 ))}
 </ul>
 </div>
 );
 };

 export default MainPage;*/

