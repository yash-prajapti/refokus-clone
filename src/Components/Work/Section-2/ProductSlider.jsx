import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper/modules';
import SlideProduct from './SlideProduct';

function ProductSlider({hoveredProduct}) {
    return (
        <>
            {/* Tablet slider */}
            <div className="products-sliders text-white">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y,Autoplay]}
                    grabCursor={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                >
                    {hoveredProduct.map((item, index) =>
                        <SwiperSlide key={index}>
                            <SlideProduct item={item} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    )
}

export default ProductSlider