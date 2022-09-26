import { IProduct } from "../types"

interface ProductCardProps {
    product: IProduct
}

export default function ProductCard({product}:ProductCardProps) {
    
    return (
        <div className='border border-yellow-200 rounded mb-4 p-3 w-[300px] mr-4 grid justify-items-center shadow-md'>
            <img className="h-[200px]" src={product.image} alt={product.title} />
            <h2 className="text-lg">{product.title}</h2>
            <p className='font-bold'>{product.price}$</p>

            <a href={`/product/${product.id}`} className="border py-2 px-4 bg-yellow-400 text-white shadow-md">Open Detail</a>
        </div>
    )
}