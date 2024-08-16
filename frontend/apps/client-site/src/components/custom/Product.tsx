import { ProductType } from '../../api/schema'
import { ChevronRight } from 'lucide-react'

export default function Product(props:ProductType) {
   
  return (
    <div className='w-full h-56 mb-20 rounded shadow-2xl '>
        <div className='bg-white relative overflow-hidden w-full h-full flex justify-center items-center p-10'>
            <img src={props.picture_url} alt={props.model} className=''/>
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
  )
}
