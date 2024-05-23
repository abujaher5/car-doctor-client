const BookingCard = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, service, price, date, img, email, status } =
    booking;

  return (
    <div>
      <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)}>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded-full w-12 h-12">
                <img src={img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{date}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{service}</td>
        <td>{price}</td>
        <th>
          {status === "confirm" ? (
            <span className="font-bold text-primary">Confirmed</span>
          ) : (
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-ghost "
            >
              Please Confirm
            </button>
          )}
        </th>
      </tr>
    </div>
  );
};

export default BookingCard;
