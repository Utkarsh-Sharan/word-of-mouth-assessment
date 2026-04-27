import "./Productgallery.css";

function ProductDisplayImage({displayImage}) {
  return (
    <article className='display-image'>
        <img src={displayImage.image} alt="product-display-image" />
    </article>
  )
}

export default ProductDisplayImage