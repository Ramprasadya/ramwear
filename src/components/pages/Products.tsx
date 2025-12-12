import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../UiComponents/RelatedProducts";

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState<any>(false);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>('')

  const fetchProductData = () => {
    products.map((item: any) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-100 opacity-100">
      {/* ----- Product Data ----- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item: any, index: any) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* ---------- Prudct Info --- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gpa-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <p className="pl-2" >(112)</p>
          </div>
          <p className="mt-5 text-3xl font-medium" >{currency}{productData.price}</p>
          <p className="mt-5 text-[#FFFF] md:w-4/5 " >{productData.description}</p>
          <div className="flex flex-col gap-4 my-8" >
             <p>Select, Size</p>
             <div className="flex gap-2" >
               {productData.sizes.map((item:any,index:any)=>(
                <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-700  ${item === size? 'border-orange-500': ''} `} key={index} >{item}</button>
               ))}
             </div>
          </div>
          <button onClick={()=> addToCart(productData._id, size)} className="bg-gray-700 cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700" >Add To Cart</button>
          <hr className="mt-8 sm:w-4/5"  />
          <div className="text-sm text-[#FFFF] mt-5 flex flex-col gap-1" >
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>

          </div>
        </div>
      </div>
      {/* Description & Review Section  */}
      <div className="mt-20" >
        <div className="flex" >
         <b className="border px-5 py-3 text-sm" >Description</b>
         <p className="border px-5 py-3 text-sm" >Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border-y mt-[1px] px-6 py-6 text-sm text-[#FFFF]" >
          <p>Discover fashion that fits your lifestyle. From everyday essentials to statement pieces, we bring you stylish, comfortable, and affordable clothing designed to make you look and feel your best."</p>
          <p>Elevate your wardrobe with timeless fashion. Our premium collection combines elegance, comfort, and modern trends, tailored for every occasion.</p>

        </div>
      </div>
      {/* Display related Product */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
