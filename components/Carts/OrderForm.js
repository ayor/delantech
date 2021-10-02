import { useEffect, useState } from "react";
import { convert } from "../../middleware/convertToNGN";
import { validateEmail } from '../../middleware/validate';

const OrderForm = ({ totalPrice }) => {
    const [countries, setCountries] = useState([]);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const _url = "https://countriesnow.space/api/v0.1/countries";

    const price = convert(totalPrice);
    const fetchData = async (url, cb, method, data) => {
        try {
            let res;
            let response;
            if (method === "POST") {
                res = await fetch(url, {
                    method: method,
                    mode: "no-cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                response = await res.json();

                cb(response.data);
            } else {
                res = await fetch(url);
                response = await res.json();
                cb(response.data);
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData(_url, (data) => {
            setCountries(data);
        });
    }, []);

    const countryDropdown = countries.map((country, ind) => <option value={country.country} key={ind}>{country.country}</option>);

    const handleChange = (event, type) => {

        const val = event.target.value;
        switch (type) {
            case 'email':
                setEmail(val)
                break;
            case 'address':
                setAddress(val)
                break;
            case 'country':
                setCountry(val)
                break;
            case 'city':
                setCity(val)
                break;
            case 'phone':
                setPhone(val)
                break;

            default:
                break;
        }

    }

    const orderHandler = () => {
        let data = {
            email,
            phone,
            address,
            city,
            country
        }

        if (address.trim() === "" || email.trim() === "" ||
            city.trim() === "" || country.trim() === "" ||
            message.trim() === "" || phone.trim() === "") {
            setLoadingState(false);
            setErrorMessage("kindly complete all fields, then try again");

            setTimeout(() => {
                setErrorMessage("");

            }, 3000)
            return;
        }

        if (!validateEmail(email)) {
            // setLoadingState(false);
            setErrorMessage("kindly enter a valid email");
            setTimeout(() => {
                setErrorMessage("");

            }, 3000)
            return;
        }

        fetchData('/api/order', (data) => {
            console.log(data)
        }, "POST", data)
    }


    return (

        <form className="mx-auto p-4 rounded w-md-75" style={{ backgroundColor: "#7F8081", position: "static" }}>
            <p className="text-light">Total : {price}</p>
            <div className="form-row  m-2">
                <div className="form-group ">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control form-control-sm" onChange={(ev) => handleChange(ev, 'email')} value={email} id="inputEmail4" placeholder="Email" />
                </div>
            </div>
            <div className="form-row  m-2">
                <div className="form-group ">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control form-control-sm" onChange={(ev) => handleChange(ev, 'phone')} value={phone} id="inputEmail4" placeholder="+234234432309" />
                </div>
            </div>
            <div className="form-group m-2">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control form-control-sm" onChange={(ev) => handleChange(ev, 'address')} value={address} id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-row m-2">
                <div className="form-group col-md-6 ">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control form-control-sm" onChange={(ev) => handleChange(ev, 'city')} value={city} id="inputCity" />
                </div>
                <div className="form-group col-md-6 ">
                    <label htmlFor="inputState">Country</label>
                    <select id="inputState" className="form-control form-control-sm" value={country} onChange={(ev) => handleChange(ev, 'country')}>
                        <option selected>Choose...</option>
                        {countryDropdown}
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-dark text-light w-100 m-2" onClick={orderHandler}>Place Order</button>
        </form>

    )
};

export default OrderForm;