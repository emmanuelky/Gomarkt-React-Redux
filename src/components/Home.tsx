import React from 'react'
import ImageCarousel from './ImageCarousel'
import ProductCategory from './ProductCategory'



const Home = () => {
    return (
        <div className="py-5">
            <div>

                <ImageCarousel />
            </div>
            <div>

                <ProductCategory />
            </div>
        </div>
    )
}

export default Home
