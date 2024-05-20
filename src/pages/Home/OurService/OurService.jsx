import { useEffect, useState } from "react";
// import cardImage1 from "../../../assets/images/services/1.jpg";
import ServiceCard from "./ServiceCard";

const OurService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <div className="space-y-2 text-center my-4">
        <h1 className="text-[#FF3811] text-xl font-bold">Our Service</h1>
        <h1 className="text-4xl font-bold ">Our Service Area</h1>
        <h1>services : {services.length}</h1>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis
          soluta amet deserunt minima, modi quam sequi libero nam aut.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={cardImage1} alt="Card Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electrical System</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between items-center">
              <p className="text-[#FF3811] font-bold ">Price : $20.00</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}

        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="text-center my-3">
        <button className="text-[#FF3811] font-semibold btn btn-outline">
          More Service
        </button>
      </div>
    </div>
  );
};

export default OurService;
