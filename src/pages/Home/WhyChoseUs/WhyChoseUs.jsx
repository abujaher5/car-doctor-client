import icon1 from "../../../assets/icons/group.svg";
import icon2 from "../../../assets/icons/Wrench.svg";
// import icon3 from "../../../assets/icons/group.svg";
// import icon4 from "../../../assets/icons/Wrench.svg";
// import icon5 from "../../../assets/icons/Wrench.svg";

const WhyChoseUs = () => {
  return (
    <div className="my-5">
      <div className="space-y-2 text-center my-4">
        <h1 className="text-[#FF3811] text-xl font-bold">Core Features</h1>
        <h1 className="text-4xl font-bold ">Why Choose Us</h1>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis
          soluta amet deserunt minima, modi quam sequi libero nam aut.
        </p>
      </div>

      <div className="my-5 grid gap-3 grid-cols-6">
        <div className="p-6 shadow-lg rounded-xl">
          <img src={icon1} alt="" />
          <p>Export Team</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl">
          <img src={icon2} alt="" />
          <p className="font-semibold">Delivery Time</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl">
          <img src={icon1} alt="" />
          <p>Export Team</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl">
          <img src={icon2} alt="" />
          <p className="font-semibold">Delivery Time</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl">
          <img src={icon1} alt="" />
          <p>Export Team</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl">
          <img src={icon2} alt="" />
          <p className="font-semibold">Delivery Time</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
