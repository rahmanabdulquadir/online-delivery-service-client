import React, { useEffect, useState } from "react";

const MyReviewsRows = ({review}) => {
  const {serviceName, price, service, message, customer} = review;
  const [reviewService, setReviewService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
    .then(res => res.json())
    .then(data => setReviewService(data))
  }, [service])
  return (
    <tr>
      <th>
          <label>
            <button className="btn btn-ghost">X</button>
          </label>
        </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {
                reviewService?.img &&
                <img
                src={reviewService.img}
                alt="Avatar Tailwind CSS Component"
              />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{message}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
      </td>
      <td>{message}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default MyReviewsRows;
