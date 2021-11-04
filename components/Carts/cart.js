import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import { RemoveCircle, AddCircle, Delete } from '@material-ui/icons';
import Image from 'next/image';
import { convert } from '../../middleware/convertToNGN';
import styles from '../../styles/Carts.module.css';
import Link from 'next/link';

const UseStyles = makeStyles(() => ({
  item: {
    border: `1px solid #aaa`,
    borderRadius: '10px',
    padding: '20px',
    margin: '5px 0',
    display: 'flex',
  },
  sectionLeft: {
    margin: 'auto 20px',
    marginLeft: '0px',
    curosor: 'pointer',
    // borderRadius: '15px',
  },

  sectionRight: { width: '100%' },
  image: { borderRadius: '10px' },
}));
const cart = ({
  id,
  imageUrl,
  name,
  price,
  qty,
  deleteItem,
  increment,
  decrement,
  handleChange,
}) => {
  const classes = UseStyles();
  return (
    <div className={classes.item}>
      <div className={classes.sectionLeft}>
        <Link href={`/products/${id}`}>
          <Image
            src={imageUrl}
            alt=""
            width="90"
            height="90"
            className={classes.image}
            loading="eager"
          />
        </Link>
      </div>
      <div className={classes.sectionRight}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: 600,
              display: 'block',
              width: '',
            }}
            component="p"
          >
            {name}
          </Typography>
          <Delete
            style={{
              color: 'red',
              fontSize: '16px',
              cursor: 'pointer',
              marginLeft: '5px',
            }}
            onClick={deleteItem}
          />
        </div>
        <Typography variant="caption" style={{ color: 'grey' }}>
          {`@${convert(price)} per unit`}
        </Typography>
        <div className="my-2">
          {/* <h6 className="text-secondary">Qty</h6> */}

          <RemoveCircle
            style={{
              fontSize: '16px',
              cursor: 'pointer',
              color: 'grey',
            }}
            onClick={decrement}
          />
          <TextField
            type="number"
            className="qty-input"
            value={qty}
            onChange={handleChange}
          />
          <AddCircle
            style={{
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={increment}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body2"
            component="p"
            style={{ fontSize: '12px', fontWeight: 600 }}
          >
            Total: {convert(price * qty)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default cart;
