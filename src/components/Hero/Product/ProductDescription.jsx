import { ChartLine, Star, Users } from "lucide-react";
import "./ProductDescription.css";

function ProductDescription() {
  return (
    <section>
        <h2 className="product-name">Chocolate Salvation Peanut Butter</h2>

        <article className="short-review">
            <div className="rating">
                <Star size={15} />
                <span>4.8</span>
            </div>
            |
            <div className="review">
                <Users size={15} />
                <span>198 </span>
                <p>reviews</p>
            </div>
            |
            <div className="sales">
                <ChartLine size={15} />
                <span>240 </span>
                <p>sold this month</p>
            </div>
        </article>

        <article className="quantities">
            <span>
                300g
            </span>
            <span>
                500g
            </span>
            <span>
                1kg
            </span>
        </article>

        <button>ADD TO CART</button>
    </section>
  )
}

export default ProductDescription