import { FC } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from 'swiper';

const carouselOptions = {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 2,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3.2,
    },
    1024: {
      slidesPerView: 4.2,
    },
    1400: {
      slidesPerView: 6.2,
    },
  }
};

interface ICarouselProps {
  children: React.ReactNode;
}

export const Carousel: FC<ICarouselProps> = ({ children }): JSX.Element => {
  return (
    <div className="carousel-slider">
      <Swiper navigation={true} modules={[Navigation]} {...carouselOptions}>
        {children}
      </Swiper>
    </div>
  );
};
