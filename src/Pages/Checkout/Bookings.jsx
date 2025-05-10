import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authcontext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setLoading(false);
            });
    }, [url]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Keep',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setLoading(false);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            );
                            const remainingBookings = bookings.filter(booking => booking._id !== id);
                            setBookings(remainingBookings);
                        } else {
                            Swal.fire(
                                'Error!',
                                'There was an issue deleting the booking.',
                                'error'
                            );
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        Swal.fire(
                            'Error!',
                            'Something went wrong, please try again later.',
                            'error'
                        );
                        console.error('Error deleting booking:', error);
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                console.log('Item kept');
            }
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Cart Details</h2>

            <div className="space-y-6">
                {bookings.map((booking) => (
                    <div key={booking._id} className="flex items-center justify-between border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">

                        <div className="flex items-center gap-4">
                            <button onClick={() => handleDelete(booking._id)} className="text-xl text-gray-500 hover:text-red-600">
                                <FaTrash />
                            </button>
                            <img
                                src={booking.img}
                                alt={booking.title}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">{booking.title}</h3>
                                <p className="text-sm text-gray-600">Customer: {booking.customerName}</p>
                                <p className="text-sm text-gray-500">Phone: {booking.phn}</p>
                            </div>
                        </div>

                        <div className='gap-1'>
                            <div className="text-right mb-5 space-y-1">
                                <p className="font-bold">${booking.priceP}</p>
                            </div>


                            <span className="bg-red-500 text-white py-1 px-3 rounded-md text-sm font-semibold">
                                Pending
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-8">
                <Link to="/" className="text-sm text-gray-600 hover:underline flex items-center gap-2">
                    ↩ Continue Shopping
                </Link>
                <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
                    <FaTrash /> Clear Shopping Cart
                </button>
            </div>
        </div>
    );
};

export default Bookings;
