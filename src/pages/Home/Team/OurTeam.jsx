import team1 from "../../../assets/images/team/1.jpg";

const OurTeam = () => {
  return (
    <div className="my-5">
      <div className="space-y-2 text-center my-4">
        <h1 className="text-[#FF3811] text-xl font-bold">Team</h1>
        <h1 className="text-4xl font-bold ">Meet Our Team </h1>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis
          soluta amet deserunt minima, modi quam sequi libero nam aut.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={team1} alt="Card Image" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-bold">Car Engine Plug</h2>
            <p>Engine Expert </p>

            <p>Social Icon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
