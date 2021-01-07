import { useState } from 'react';
import ChevLeftIcon from '../icons/ChevLeftIcon';
import ChevRightIcon from '../icons/ChevRightIcon';
import S from './Carousel.module.scss';

export default function Carousel({ images }) {
  const [num, setNum] = useState(0);

  return (
    <div className={S.carousel}>
      <button
        onClick={() => {
          setNum(num === 0 ? images.length - 1 : num - 1);
        }}
        className={`${S.btnLeft} ${images.length <= 1 && S.hide}`}
        aria-label="View previous image"
      >
        <ChevLeftIcon />
      </button>
      <button
        onClick={() => {
          setNum(num === images.length - 1 ? 0 : num + 1);
        }}
        className={`${S.btnRight} ${images.length <= 1 && S.hide}`}
        aria-label="View next image"
      >
        <ChevRightIcon />
      </button>

      <img className={S.img} src={images[num]} alt="" />
    </div>
  );
}
