import React, { useContext } from "react";
import { ShopContext } from "../Context/Shopcatagorycontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Component/Breadcrums/Breadcrum";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProduct/RelatedProduct";

const Product1 = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // console.log("productId:", productId);
  // console.log("all_product:", all_product);

  const product = all_product.find((e) => e.id === Number(productId));

  // console.log("product:", product);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product1;
