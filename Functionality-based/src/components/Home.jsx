import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../utils/Axios';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import Nav from './Nav';

function Home() {
    const [products]=useContext(ProductContext);
    const [filteredProducts, setfilteredProducts] = useState(null);
    const {search}=useLocation();
    const category= decodeURIComponent(search.split("=")[1]);

    const getProductsCategory=async()=>{
        try{
            const{data}=await axios.get(`/products/category/${category}`)
            console.log(data)
            setfilteredProducts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        if(!filteredProducts || category=="undefined"){
            setfilteredProducts(products);
        }
        if(category != "undefined"){
            getProductsCategory();
            console.log(filteredProducts)
        }

    }, [category,products]);
    
return (
    products?
    (<>
        <Nav/>
        <div className='w-[80%] p-5 pt-8 flex justify-evenly flex-wrap gap-2 overflow-x-hidden overflow-y-auto'>
            {filteredProducts && filteredProducts.map((item, id)=>{
                return <Link key={id} to={`/details/${item.id}`} className=" mr-3 mb-3 h-[40vh] w-[15%] card p-3 bg-white shadow rounded-md flex flex-col items-center overflow-hidden">
                <div className='h-[25vh] w-full bg-contain bg-no-repeat bg-center rounded-xl overflow-hidden transition duration-300 hover:scale-110 hover:overflow-visible'
                    style={{
                    backgroundImage:`url(${item.image})`,
                    }}>
                </div>
                <h1 className="text-sm mt-1">{item.title}</h1>
            </Link>
            })}
            
            
        </div>
    </>):(<Loading/>)
)
}

export default Home