import ProductStyle from '../../styles/Products.module.css';
import Link from 'next/link';
import Btn from '../Btn/Btn';
import BtnClass from '../../styles/Btn.module.css';

const ProductBanner = ({
  header,
  subText,
  hasheader,
  productBackgroundStyle,
  bkgColor,
  to,
}) => {
  let passedHref = to == null ? '#product' : to;

  return (
    <section className="container my-5">
      <div className={ProductStyle.Container}>
        <div className={'row mx-auto my-5 pt-5 ' + ProductStyle.Banner}>
          <div
            className={
              'col-md-8 d-flex rounded flex-column justify-content-center align-items-start text-dark ' +
              ProductStyle.BannerText
            }
            style={{ backgroundColor: bkgColor }}
          >
            {!hasheader ? (
              <h1 className="text-light">
                <span>
                  <del className="text-muted">No Keys</del>
                </span>
                , <em>No Problem!!</em>
              </h1>
            ) : (
              <h1 className="d-block ">{header}</h1>
            )}
            <svg
              className={ProductStyle.BannerSVG}
              viewBox="0 0 273 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17C89.6426 -3.53026 185.145 0.294652 272 17"
                stroke="#46B5F3"
                strokeWidth="5"
              />
            </svg>

            <small
              className={`my-3 d-block ${hasheader ? 'text-light' : ''} lead`}
            >
              {subText}{' '}
              {hasheader ? <i className="fas fa-microphone "></i> : null}
            </small>
            <Link href={passedHref} passHref>
              <a className={'btn d-block mx-auto ' + BtnClass.Btn}>
                Make An Order
              </a>
            </Link>
          </div>
          <div className={'col-md-4 p-0 ' + productBackgroundStyle}></div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
