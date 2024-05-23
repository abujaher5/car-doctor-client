import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();

  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;
    const experience = form.experience.value;

    const booking = {
      customerName: name,
      email: email,
      service: title,
      img: img,
      date: date,
      experience: experience,
      price: price,
      service_id: _id,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Booking Successfully",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Booking Service</h2>

      <div className="hero min-h-screen">
        <div className="card shrink-0 w-full px-20 shadow-2xl bg-[#F3F3F3]">
          <form onSubmit={handleCheckOut} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="price"
                  defaultValue={"$" + price}
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  placeholder="Previous Experience With Us."
                  name="experience"
                  className="textarea textarea-bordered textarea-md w-full "
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white bg-[#FF3811]"
                type="submit"
                value="Booking Service"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
