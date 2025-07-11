import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

function Edit() {
    const[products, setproducts]=useContext(ProductContext)
    
    const navigate= useNavigate();
    let{id}= useParams();
    id=parseInt(id)
    const [product, setproduct] = useState({
            title:"",
            image:"",
            category:"",
            price:"",
            description:""
    });
    const changeHandler=(e)=>{
        // console.log(e.target.name +" : "+ e.target.value)
        setproduct({...product, [e.target.name]: e.target.value});
    }

    const editProductHandler=(e)=>{
        e.preventDefault();
        // console.log(product)
        const updatedProducts = products.map(p => p.id == id ? { ...product, id } : p);
        // console.log(updatedProducts)
        setproducts(updatedProducts);
        // console.log(products)
        localStorage.setItem("products", JSON.stringify(updatedProducts))
        toast.success("Product updated successfully")
        navigate("/")
    }
    useEffect(()=>{
        setproduct(products.filter(item=>item.id==id)[0])
    },[id])
  return (
    <div className='relative w-screen h-screen flex justify-center items-center'>
        <Link className=' absolute w-fit top-[4%] left-[10%] text-center py-2 px-5 border rounded mb-3 border-red-400 text-red-500 hover:bg-red-500 hover:text-white' to="/">Home</Link>
        <form onSubmit={editProductHandler}
            className='flex flex-col items-center gap-4 w-1/2' action="">
            <h1 className='text-3xl'>Edit Product</h1>
            <input type="url"
                name='image'
                placeholder='Image link'
                className='w-full text-2xl bg-zinc-100 rounded'
                value={product && product.image}
                onChange={changeHandler}/>
            <input
                required= {true}
                type="text"
                name='title'
                placeholder='Title'
                className='w-full text-2xl bg-zinc-100 rounded'
                value={product && product.title}
                onChange={changeHandler}/>
            <div className='flex justify-between gap-3 w-full' >
                <input type="text"
                name='category'
                required= {true}
                placeholder='Category'
                className=' w-1/2 text-2xl bg-zinc-100 rounded'
                value={product && product.category}
                onChange={changeHandler}/>
            <input
                type="number"
                name='price'
                required= {true}
                placeholder='Price'
                className=' w-1/2 text-2xl bg-zinc-100 rounded'
                value={product && product.price}
                onChange={changeHandler}/>
            </div>
            <textarea
            className='w-full text-2xl bg-zinc-100 rounded'
            name='description'
            required= {true}
            placeholder='Description'
            rows='5'
            value={product && product.description}
            onChange={changeHandler}></textarea>
            <div className='w-full p-2 flex justify-start gap-5'>
                <button className='w-[2*] top-[4%] left-[10%] text-center py-2 px-5 border rounded mb-3 border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white'
                >Update product</button>
            </div>
        </form>
    </div>
  )
}

export default Edit