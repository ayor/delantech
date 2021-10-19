import { useState } from 'react';
import ServiceStyle from '../../../styles/Services.module.css';
import ReactCarousel from 'react-material-ui-carousel';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Modal, Chip } from '@mui/material';
const items = [
  {
    description:
      'Our Smart Home Solution put Delan technologies on the map as a market leader in Home Automation industry.',
    header: 'Smart Homes',
    bkgImg: '/img/hotels.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/vV57OoQ8RW4',
  },
  {
    description:
      'Enjoy an immersive experience bringing movies to life and allowing you enjoy them as well as their directors intended.',
    header: 'Home Cinemas',
    bkgImg: '/img/cinema.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/vV57OoQ8RW4',
  },
  {
    description:
      'Our smart hotel solution includes hotel automation and hotel IP and video solutions. With room automations that include lighting, air conditioning, access control, room service and cleaning.',
    header: 'Smart Hotels',
    bkgImg: '/img/office.jpg',
    youtubeUrl: null,
  },
];
const Banner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sliders = items.map((item, ind) => (
    <div className="__container rounded my-2" key={ind}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5)), url(${item.bkgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      >
        <div className="h-100 ">
          <div
            className={
              'd-flex h-100 justify-content-between align-items-center text-light p-3 ' +
              ServiceStyle.Slide1
            }
          >
            <p className={ServiceStyle.SlideText}>{item.description}</p>
            <h1 className={ServiceStyle.H1}>{item.header}</h1>
          </div>
          {item.youtubeUrl ? (
            <Chip
              label="Watch A Demo"
              onClick={handleOpen}
              variant="contained"
              icon={<PlayCircleFilledOutlinedIcon />}
            />
          ) : null}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            className="embed-responsive embed-responsive-16by9 "
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              boxShadow: 24,
            }}
          >
            <iframe
              className="embed-responsive-item mr-2"
              src={item.youtubeUrl}
              style={{ width: '100%', height: '400px' }}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>
    </div>
  ));
  return (
    <>
      <ReactCarousel animation="slide" stopAutoPlayOnHover swipe>
        {sliders}
      </ReactCarousel>
    </>
  );
};

export default Banner;
