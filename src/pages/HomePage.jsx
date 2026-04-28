import Product from '../components/Hero/Product/Product';
import ReviewSection from '../components/Review/ReviewSection';
import "./HomePage.css";

function HomePage() {
  return (
    <section className='home'>
      <Product />
      <ReviewSection />
    </section>
  )
}

export default HomePage