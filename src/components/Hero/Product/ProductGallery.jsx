import { useState } from "react";
import ProductDisplayImage from "./ProductDisplayImage";
import "./ProductGallery.css";
import ReactLogo from "../../../assets/react.svg";
import ViteLogo from "../../../assets/vite.svg";

function ProductGallery() {
  const [displayImage, setDisplayImage] = useState({
    image: ReactLogo,
  });

  const handleClick = (e) => {
    const id = e.target.id;

    const imageMap = {
      1: ReactLogo,
      2: ViteLogo,
      3: ReactLogo,
      4: ViteLogo,
    }

    if(imageMap[id])
      setDisplayImage({image: imageMap[id]});
  }

  return (
    <section>
      <ProductDisplayImage displayImage={displayImage} />

      <article className="product-images" onClick={handleClick}>
        <div>
          <img src={ReactLogo} alt="react-logo" id="1" />
        </div>
        <div>
          <img src={ViteLogo} alt="react-logo" id="2" />
        </div>
        <div>
          <img src={ReactLogo} alt="react-logo" id="3" />
        </div>
        <div>
          <img src={ViteLogo} alt="react-logo" id="4" />
        </div>
      </article>
    </section>
  )
}

export default ProductGallery