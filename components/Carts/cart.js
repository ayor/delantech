import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Close';
import { Remove, Add } from '@material-ui/icons';
import Image from 'next/image';
import { convert } from '../../middleware/convertToNGN';
import styles from '../../styles/Carts.module.css';

const useStyles = makeStyles(() => ({
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

    // borderRadius: '15px',
  },
  inputField: {
    width: '50px',
    textAlign: 'center !important',
  },
  sectionRight: { width: '100%' },
  image: { borderRadius: '10px' },
}));
const cart = ({
  imageUrl,
  name,
  price,
  qty,
  deleteItem,
  increment,
  decrement,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <div className={classes.sectionLeft}>
        <Image
          src={imageUrl}
          alt=""
          width="90"
          height="90"
          className={classes.image}
        />
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
          <CancelIcon
            style={{
              color: 'grey',
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

          <Remove onClick={decrement} color="secondary" />
          <TextField
            type="number"
            className={classes.inputField}
            value={qty}
            onChange={handleChange}
          />
          <Add onClick={increment} />
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
