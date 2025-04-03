import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
const Freebook = () => {
    const filterdata=list.filter((data)=>data.category==="Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='ml-14'>
        <h1 className='text-2xl font-medium'>Free Offered Courses</h1>
        <p className='text-[18px]'>
        Discover the power of learning with our free courses, designed to help you gain valuable skills and knowledge without any cost. Whether you're looking to boost your career, explore new hobbies, or enhance your personal growth, our courses cover a wide range of topics, from technology and business to arts and wellness. With flexible schedules and easy-to-follow materials, you can learn at your own pace and convenience. Dive in today and start building the future you dream of—because education should always be accessible!
        </p>
    <div className='mt-20 mb-20'>
    <Slider {...settings}>
        {filterdata.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook