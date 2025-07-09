import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

function Nav() {
    const [products]= useContext(ProductContext)
    let distinct_category= products && products.reduce((acc, cv)=>[...acc, cv.category],[]);
    distinct_category=[...new Set(distinct_category)]

    const color=()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.7)`
    }
    const {search}=useLocation();
    const category= decodeURIComponent(search.split("=")[1]);
  return (
        <nav className='w-[20%] h-full bg-zinc-100 flex flex-col items-center pt-5 '>
            {category != "undefined"?(<Link className=' w-[65%] text-center py-3 px-5 border rounded mb-3 border-red-400 text-red-500 hover:bg-red-500 hover:text-white' to="/">Home</Link>):(<></>)}
            
            <Link className='py-3 px-5 border rounded mb-3 border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white' to="/create">Add new Product</Link>
            <hr className='w-[80%]' />
            <h1 className='text-2xl w-[80%]'>Category Filter</h1>
            <div className='w-[80%] mt-3'>
                {distinct_category.map((item,index)=>{
                    return <Link key={index} to={`/?category=${item}`} className='mb-3 flex items-center capitalize'>
                        <span style={{backgroundColor:color()}} className='rounded-full mr-2 w-[20px] h-[20px]'></span>
                        {item}
                    </Link>
                })}
            </div>
        </nav>
  )
}

export default Nav