import { nanoid } from 'nanoid';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

function Create() {
    const[products, setproducts]=useContext(ProductContext)
    const [title, settitle]=useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const AddProductHandler=(e)=>{
        e.preventDefault();
        const product={
            id:nanoid(),
            title,
            image,
            category,
            price,
            description
        }
        setproducts([...products, product])
        console.log(product)
        console.log(products)
    }
return (
    <div className='relative w-screen h-screen flex justify-center items-center'>
        <Link className=' absolute w-fit top-[4%] left-[10%] text-center py-2 px-5 border rounded mb-3 border-red-400 text-red-500 hover:bg-red-500 hover:text-white' to="/">Home</Link>
        <form onSubmit={AddProductHandler}
            className='flex flex-col items-center gap-4 w-1/2' action="">
            <h1 className='text-3xl'>Add new Product</h1>
            <input type="url"
                required= {true}
                placeholder='Image link'
                className='w-full text-2xl bg-zinc-100 rounded'
                onChange={(e)=>{
                    setimage(e.target.value)
            }}/>
            <input
                required= {true}
                type="text"
                placeholder='Title'
                className='w-full text-2xl bg-zinc-100 rounded'
                onChange={(e)=>{
                    settitle(e.target.value)
            }}/>
            <div className='flex justify-between gap-3 w-full' >
                <input type="text"
                required= {true}
                placeholder='Category'
                className=' w-1/2 text-2xl bg-zinc-100 rounded'
                onChange={(e)=>{
                    setcategory(e.target.value)
            }}/>
            <input
                type="number"
                required= {true}
                placeholder='Price'
                className=' w-1/2 text-2xl bg-zinc-100 rounded'
                onChange={(e)=>{
                    setprice(e.target.value)
            }}/>
            </div>
            <textarea
            className='w-full text-2xl bg-zinc-100 rounded'
            required= {true}
            placeholder='Description'
            rows='5'
            onChange={(e)=>{
                    setdescription(e.target.value)
            }}></textarea>
            <div className='w-full p-2 flex justify-start gap-5'>
                <button className='w-[2*] top-[4%] left-[10%] text-center py-2 px-5 border rounded mb-3 border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white'
                >Add new product</button>
            </div>
        </form>
    </div>
)
}

export default Create