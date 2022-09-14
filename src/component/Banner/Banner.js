import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const img1 = "https://img.freepik.com/free-photo/positive-carefree-african-man-sport-shoes-dancing-handsome-glad-guy-pink-pants-jumping-with-smile_197531-20246.jpg?w=740&t=st=1663089030~exp=1663089630~hmac=b72897ab93bf4c1e4b3cfa0c741f6f9600ce50fb90843f4f117acf2b359a4fbd"
    const img2 = "https://img.freepik.com/free-photo/full-length-portrait-joyful-african-male-model-dancing-yellow-shoes-cheerful-black-man-enjoying_197531-20193.jpg?w=740&t=st=1663089074~exp=1663089674~hmac=3823975d9a5f47ffb0ce85bb7dba401ec72eb2bfc57d75a9e1e81262a59d196f"
    const img3 = "https://img.freepik.com/premium-photo/fulllength-photo-sexy-young-man-with-brunette-hair-classic-striped-suit-white-shirt-black-shoes-fastening-button-jacket-model-looking-into-camera-against-violet-background_197531-29712.jpg?w=740"
    return (
        <div className='px-8 rounded-3xl my-5'>
            <Slider {...settings}>
                <div>

                    <img className='lg:w-full h-[500px] rounded-xl' src={img1} alt="" />
                </div>
                <div>
                    <img className='lg:w-full h-[500px] rounded-xl' src={img2} alt="" />
                </div>
                <div>
                    <img className='lg:w-full h-[500px] rounded-xl' src={img3} alt="" />

                </div>

            </Slider>
        </div>
    );
};

export default Banner;