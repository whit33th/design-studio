import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Styles.module.scss";

import quote from "asset/quote.png";
import { Autoplay } from "swiper/modules";

const ReviewsCarousel = ({ source, reverseDirection = false }) => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,

        reverseDirection: reverseDirection,
      }}
      centeredSlides={true}
      slidesPerView={3.5}
      loop={true}
      modules={[Autoplay]}
      className={styles.swiperSlide}
    >
      {source.map((i, index) => (
        <SwiperSlide className={styles.card} key={index}>
          <div className="card noSelect gap20">
            <div className="flex column gap20">
              <div className="row flex space-between  ">
                <div className="row flex gap20">
                  <img src={i.img} alt="" className={styles.logo} loading="lazy" />
                  <div className="flex column">
                    <p className={styles.name}>{i.name}</p>
                    <p className={styles.gray}>{i.company}</p>
                  </div>
                </div>
                <img src={quote} alt="" className={styles.quote} loading="lazy" />
              </div>
              <div className={styles.reviews}>
                <p className={styles.gray}>{i.review}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;
