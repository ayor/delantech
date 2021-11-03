import { useEffect, useState, useCallback } from 'react';
import { convert } from '../../middleware/convertToNGN';
import { validateEmail } from '../../middleware/validate';
import { useSelector } from 'react-redux';
import {
  Button,
  Paper,
  TextField,
  Typography,
  LinearProgress,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';

const OrderForm = ({ totalPrice }) => {
  const [countries, setCountries] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  const order = useSelector((state) => state);

  const _url = 'https://countriesnow.space/api/v0.1/countries';

  const price = convert(totalPrice);
  const fetchData = useCallback(
    async (url, cb, method, data) => {
      try {
        let res;
        let response;
        if (method === 'POST') {
          res = await fetch(url, {
            method: method,
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          response = await res.json();

          cb(response.data);
        } else {
          res = await fetch(url);
          response = await res.json();
          cb(response.data);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
    [setErrorMessage]
  );
  useEffect(() => {
    fetchData(_url, (data) => {
      setCountries(data);
    });
  }, [fetchData]);

  const countryDropdown = countries.map((country, ind) => (
    <MenuItem value={country.country} key={ind}>
      {country.country}
    </MenuItem>
  ));

  const handleChange = (event, type) => {
    const val = event.target.value;
    switch (type) {
      case 'email':
        setEmail(val);
        break;
      case 'address':
        setAddress(val);
        break;
      case 'country':
        setCountry(val);
        break;
      case 'city':
        setCity(val);
        break;
      case 'phone':
        setPhone(val);
        break;

      default:
        break;
    }
  };

  const orderHandler = (event) => {
    event.preventDefault();
    setLoadingState(true);
    let data = {
      email,
      phone,
      address,
      city,
      country,
      order: order,
    };
    if (order.items.length === 0) {
      setLoadingState(false);
      setErrorMessage('kindly add items to your cart');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    if (
      address.trim() === '' ||
      email.trim() === '' ||
      city.trim() === '' ||
      country.trim() === '' ||
      phone.trim() === ''
    ) {
      setLoadingState(false);
      setErrorMessage('kindly complete all fields, then try again');

      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    if (!validateEmail(email)) {
      setLoadingState(false);
      setErrorMessage('kindly enter a valid email');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    fetchData(
      '/api/order',
      (data) => {
        setErrorMessage(data.message);
        setLoadingState(false);
      },
      'POST',
      data
    );
  };

  return (
    <Paper variant="outlined">
      <form className="mx-auto p-4 rounded w-md-75">
        {errorMessage !== '' ? (
          <Alert severity="error">{errorMessage} </Alert>
        ) : null}
        <Typography variant="h6" style={{ color: '#46B5F3' }} align="center">
          Total : {price}
        </Typography>
        <div className="form-row  m-3">
          <div className="form-group ">
            <TextField
              type="email"
              style={{ width: '100%' }}
              variant="outlined"
              onChange={(ev) => handleChange(ev, 'email')}
              value={email}
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-row  m-3">
          <div className="form-group ">
            <TextField
              type="tel"
              style={{ width: '100%' }}
              variant="outlined"
              onChange={(ev) => handleChange(ev, 'phone')}
              value={phone}
              id="inputEmail4"
              placeholder="+234234432309"
            />
          </div>
        </div>
        <div className="form-group m-3">
          <TextField
            type="text"
            variant="outlined"
            style={{ width: '100%' }}
            onChange={(ev) => handleChange(ev, 'address')}
            value={address}
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-row m-3">
          <TextField
            type="text"
            variant="outlined"
            style={{ width: '100%' }}
            onChange={(ev) => handleChange(ev, 'city')}
            value={city}
            id="inputCity"
            placeholder="City"
          />
        </div>

        <div className="form-row m-3">
          <Select
            id="countryInput"
            label="Your Country"
            labelId="countryInput-label"
            style={{ width: '100%' }}
            value={country}
            onChange={(ev) => handleChange(ev, 'country')}
          >
            <MenuItem value="" selected>
              Choose a Country
            </MenuItem>
            {countryDropdown}
          </Select>
        </div>

        <Button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#46B5F3',
            padding: '15px',
            borderRadius: '30px',
          }}
          variant="contained"
          onClick={orderHandler}
        >
          {loadingState ? <LinearProgress /> : 'Place Order'}
        </Button>
      </form>
    </Paper>
  );
};

export default OrderForm;
