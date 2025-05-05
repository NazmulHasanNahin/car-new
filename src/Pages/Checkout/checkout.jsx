import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authcontext";
import { ToastContainer, toast } from 'react-toastify';
const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleChkout = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phn = form.phn.value;
        const email = form?.email.value;
        const msg = form.msg.value;
        const Booking = {
            customerName: name,
            email,
            phn,
            msg,
            img,
            title,
            serviceid: _id,
            priceP: price,
        }
        console.log(Booking);

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId)
                {
                    toast.success("Booking Added Suucessfully");
                }
                else{
                    toast.error("Unable to Add Booking")
                }
            })
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src="https://i.ibb.co.com/q829QLH/checkout.png"
                    alt="Checkout Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start px-10">
                    <h2 className="text-white text-4xl font-bold mb-2">Checkout</h2>
                    <div className="text-white text-sm font-medium mb-2">
                        <span className="text-[#FF3811]"><Link to={"/"}>Home</Link></span> / Checkout
                    </div>
                    <div className="bg-white text-black px-4 py-2 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-lg text-[#FF3811] font-medium">Price: ${price}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto bg-[#F3F3F3] rounded-lg mt-16 mb-20 p-10">
                <form onSubmit={handleChkout} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            name="name"
                            type="text"
                            defaultValue={user?.
                                displayName}
                            placeholder="First Name"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full"

                        />
                        <input
                            type="tel"
                            name="phn"
                            placeholder="Your Phone"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <textarea
                        rows="6"
                        name="msg"
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                    <div>
                        <button
                            type="submit"
                            className="btn w-full text-white text-lg font-semibold"
                            style={{ backgroundColor: "#FF3811", border: "none" }}
                        >
                            Order Confirm
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;
