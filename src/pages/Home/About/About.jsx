import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero  bg-base-200 my-10 rounded-xl">
      <div className="hero-content flex-col gap-3 lg:flex-row">
        <div className="w-1/2 h-[300px] lg:h-auto relative">
          <img src={person} className="lg:w-3/4 w-full rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute lg:right-2 -right-10  bottom-0 lg:top-1/2 "
          />
        </div>
        <div className="text-left  w-1/2">
          <h1 className="text-[#FF3811] text-xl font-bold">About Us</h1>
          <h1 className="text-4xl font-bold w-80">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] border-none text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
