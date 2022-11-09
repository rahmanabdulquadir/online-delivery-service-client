import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetail = () => {
  const { title, _id, img, price, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReviewBtn = event => {
    event.preventDefault()
    const form = event.target
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || `unregistered`
    const phone = form.phone.value
    const message = form.message.value

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message
  }
    fetch('http://localhost:5000/reviews/',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        alert('Review added successfully')
        form.reset()
      }
    })
    .catch(err => console.error(err))
  }
  return (
    <div className="grid gap-6 mt-20 mb-28 grid-cols-2 justify-evenly">
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{title}</h2>
            <p className="text-s">Service id: {_id}</p>
            <p className="text-xl font-semibold">Price: ${price}</p>
            <p className="text-l">{description}</p>
          </div>
        </div>
      </div>
      <div>
       
        
        <form onSubmit={handleReviewBtn}>
        <h1 className="text-3xl font-semibold">Reviews</h1>
        <p>{user?.email}</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <input className="btn" type="submit" value="write your review" />

        </form>

      </div>
    </div>
  );
};

export default ServiceDetail;
