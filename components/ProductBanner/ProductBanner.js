import React from 'react';
import ReactCarousel from 'react-material-ui-carousel';
import { Chip } from '@mui/material';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const ProductBanner = (props) => {
  const images = props.bannerImages.map((img, i) => {
    return (
      <div
        key={i}
        style={{
          borderRadius: '8px',
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Chip
          label="Watch Demo"
          onClick={props.clicked}
          variant="contained"
          style={{
            color: 'white',
            border: '1px solid #f2f2f2',
            borderRadius: '5px',
            padding: '10px',
            zIndex: 100,
            margin: '5px',
          }}
          icon={<PlayCircleFilledOutlinedIcon style={{ color: '#f2f2f2' }} />}
        />
      </div>
    );
  });
  return <ReactCarousel animation="fade">{images}</ReactCarousel>;
};

export default ProductBanner;
