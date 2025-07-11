import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../utils/Axios';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
function Details() {
    const[products, setproducts]=useContext(ProductContext)
    const navigate= useNavigate();
    const [product, setproduct] = useState();
    const{id} = useParams();
    const productDeleteHandler =()=>{
        const filteredProducts=products.filter(item=>item.id!= id)
        setproducts(filteredProducts)
        localStorage.setItem("products", JSON.stringify(filteredProducts))
        navigate("/");

    }
    // const getSingleProduct= async()=>{
    //     try{
    //         const {data}= await axios.get(`/products/${id}`)
    //         setproduct(data);
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    useEffect(() => {
        // getSingleProduct();
        if(!product){
            setproduct(products.filter((item)=>item.id == id)[0])
        }
    }, [products]);
return (
    product?
    (<div className='relative w-[80%] h-full flex justify-between items-center bg-red-0 m-auto py-[10%] px-[2%]'>
        <Link className=' absolute w-[10%] top-[4%] -left-[10%] text-center py-2 px-5 border rounded mb-3 border-red-400 text-red-500 hover:bg-red-500 hover:text-white' to="/">Home</Link>
        <img className='w-[30%] h-[80%] object-contain transition duration-300'
            src={`${product.image}`} alt="" />
        <div className='p-5 content flex flex-col gap-2'>
            <h1 className='text-[3vw] font-semibold'>{product.title}</h1>
            <h2 className='text-[1.5vw] text-zinc-500'>{product.category}</h2>
            <h2 className='text-[2.5vw] font-semibold text-green-400'>${product.price}</h2>
            <p className='text-[1.4vw] font-regular text-zinc-800'>{product.description}</p>
            <div className='flex gap-4'>
                <Link to={`/edit/${product.id}`} className='px-6 py-1 border-blue-400 text-blue-400 border-1 w-fit text-[1.7vw] rounded-full hover:bg-blue-400 hover:text-white'>Edit</Link>
                <button onClick={()=>productDeleteHandler(product.id)} 
                className='px-6 py-1 border-red-400 text-red-400 border-1 w-fit text-[1.7vw] rounded-full hover:bg-red-400 hover:text-white'>Delete</button>
                <Link to="/" className='px-6 py-1 border-green-400 text-green-400 border-1 w-fit text-[1.7vw] rounded-full hover:bg-green-400 hover:text-white'>Go&nbsp;back</Link>
            </div>
        </div>
    </div>): (<Loading/>)
    
)
}

export default Details