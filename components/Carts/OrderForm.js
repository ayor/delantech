import { convert } from "../../convertToNGN";
const OrderForm = ({ totalPrice }) => {
    const price = convert(totalPrice); 
    return (

    <form className="mx-auto p-4 rounded w-75" style={{ backgroundColor: "#7F8081", position: "static" }}>
        <p className="text-light">Total : {price}</p>
        <div className="form-row  m-2">
            <div className="form-group ">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
        </div>
        <div className="form-group m-2">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row m-2">
            <div className="form-group col-md-4 ">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-6 ">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control form-control-sm">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>

        </div>

        <button type="submit" className="btn btn-dark text-light w-100 m-2">Place Order</button>
    </form>

    )
};

export default OrderForm;