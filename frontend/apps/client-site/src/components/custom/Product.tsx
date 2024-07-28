import { Link } from 'react-router-dom'
import { ProductType } from '../../api/schema'
import { ChevronRight } from 'lucide-react'

export default function Product(props:ProductType) {
   
  return (
    <Link to={`/generators/details/${props.id}`}>
        <div className='w-full h-56 mb-20 rounded-md shadow-2xl '>
        <div className='bg-white relative overflow-hidden w-full h-full flex justify-center items-center p-10'>
            <img src={props.picture_url || "https://res.cloudinary.com/dzgzufiwm/image/upload/v1722091461/Jingdoli/Products/yga000scjqa51yutmyg4.jpg"} alt={props.model} className=''/>
        </div>

        <div className='bg-orange-600 w-full h-20 flex justify-between items-center px-5'>
            <div className='flex flex-col'>
                <h3 className='text-white text-xl'>{props.model}</h3>
                <p className='text-white'>Prime Power: {props.prime}</p>
            </div>

            <div>
                <ChevronRight className='text-white text-xl' />
            </div>
        </div>
    </div>
    </Link>
    
  )
}
