import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewsRows from "./MyReviewsRows";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = id => {
    const deleteReview = window.confirm("Are you sure you want to delete this review?")
    if(deleteReview){
      fetch(`http://localhost:5000/reviews/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Deleted Successfully')
          const remaining = reviews.filter(rvw => rvw._id !== id)
          setReviews(remaining)
        }
      })
    }
  }

  const handleStatusUpdate = id => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: "Approved"})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        const remaining = reviews.filter(rvw => rvw._id !== id)
        const approving = reviews.find(rvw => rvw._id ===id)
        approving.status = 'Approved'

        const newReviews = [approving, ...remaining]
        setReviews(newReviews)
      }
    })
  }

  return (
    <div>
      <h2 className="text-5xl">You have {reviews.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
            <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
              <th>Service Name</th>
              <th>Customer Name</th>
              <th>Review</th>
              <th>Edit Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              reviews.map(review => <MyReviewsRows
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
              ></MyReviewsRows>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
