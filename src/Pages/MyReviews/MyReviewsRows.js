import React, { useEffect, useState } from "react";
import ServiceDetail from "../Services/ServiceDetail";

const MyReviewsRows = ({review, handleDelete, handleStatusUpdate}) => {
  const {_id, serviceName, service, message, customer, status} = review;
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
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
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
            {/* <div className="text-sm opacity-50">{message}</div> */}
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
      </td>
      <td>{message}</td>
      <th>
        <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
      </th>
    </tr>
  );
};

export default MyReviewsRows;
