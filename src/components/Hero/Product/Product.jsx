import ProductGallery from './ProductGallery'
import ProductDescription from './ProductDescription'
import "./Product.css";

function Product() {
  return (
    <section className='product'>
        <ProductGallery />
        <ProductDescription />
    </section>
  )
}

export default Product