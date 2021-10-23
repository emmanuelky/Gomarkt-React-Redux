import React from 'react'

const ProductCategory = () => {
    return (<>
        <div className='py-5'><h2 className="text-center">Product Category</h2></div>
        <div className='flex flex-wrap justify-evenly'>


            <div className='border-l-4 border-r-4 border-b-4 p-5  border-yellow-400 hover:border-yellow-600 hover:bg-yellow-300 cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>MEN</h3>
            </div>
            <div className='border-l-4 border-r-4 border-b-4 p-5  border-yellow-400 hover:border-yellow-600 hover:bg-yellow-300 cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>WOMEN</h3>
            </div>
            <div className='border-l-4 border-r-4 border-b-4 p-5  border-yellow-400 hover:border-yellow-600 hover:bg-yellow-300 cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>CHILDREN</h3>
            </div>  <div className='border-l-4 border-r-4 border-b-4 p-5  border-yellow-400 hover:border-yellow-600 hover:bg-yellow-300 cursor-pointer'>
                <h3 className='text-yellow-700 text-5xl hover:text-yellow-900'>ELECTRONICS</h3>
            </div>





        </div>
    </>)
}

export default ProductCategory
