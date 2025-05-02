import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const {title,price,service_id,_id} = service;
    return (
        <div>
           {title}
        </div>
    );
};

export default Checkout;