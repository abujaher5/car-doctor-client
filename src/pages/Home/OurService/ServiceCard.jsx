import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Card Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between items-center">
            <p className="text-[#FF3811] font-bold ">Price : $ {price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="text-xl text-[#FF3811] ">
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
