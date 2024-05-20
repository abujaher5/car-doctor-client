import productImage1 from "../../../assets/images/products/1.png";

const PopularProducts = () => {
  return (
    <div className="my-5">
      <div className="space-y-2 text-center my-4">
        <h1 className="text-[#FF3811] text-xl font-bold">Popular Products</h1>
        <h1 className="text-4xl font-bold ">Browse Our Products</h1>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis
          soluta amet deserunt minima, modi quam sequi libero nam aut.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={productImage1} alt="Card Image" />
          </figure>
          <div className="card-body text-center">
            <p>Star star star</p>
            <h2 className="text-xl font-bold">Car Engine Plug</h2>

            <p className="text-[#FF3811] font-bold ">Price : $20.00</p>
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        <button className="text-[#FF3811] font-semibold btn btn-outline">
          More Product
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
