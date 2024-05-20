import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">
      {/* //slide1 */}
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={image1} className="w-full rounded-xl" />

        <div
          className="absolute w-full flex flex-col justify-center  gap-5 h-full pl-14  text-white
        
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl space-y-7"
        >
          <h3 className="text-4xl w-1/3 font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn bg-orange-600 text-white  border-none">
              Discover
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* //slide2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
        <div
          className="absolute w-full flex flex-col justify-center  gap-5 h-full pl-14  text-white
        
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl space-y-7"
        >
          <h3 className="text-4xl w-1/3 font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn bg-orange-600 text-white  border-none">
              Discover
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* //slide3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
        <div
          className="absolute w-full flex flex-col justify-center  gap-5 h-full pl-14  text-white
        
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl space-y-7"
        >
          <h3 className="text-4xl w-1/3 font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn bg-orange-600 text-white  border-none">
              Discover
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* //slide4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-xl" />
        <div
          className="absolute w-full flex flex-col justify-center  gap-5 h-full pl-14  text-white
        
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl space-y-7"
        >
          <h3 className="text-4xl w-1/3 font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn bg-orange-600 text-white  border-none">
              Discover
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* //slide5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image5} className="w-full rounded-xl" />
        <div
          className="absolute w-full flex flex-col justify-center  gap-5 h-full pl-14  text-white
        
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl space-y-7"
        >
          <h3 className="text-4xl w-1/3 font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn bg-orange-600 text-white  border-none">
              Discover
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
