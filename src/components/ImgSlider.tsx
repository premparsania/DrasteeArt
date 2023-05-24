import styledComponents from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="https://vienhung.com/img/banners/banner-vien-hung0-2000x583-2.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://vienhung.com/img/banners/banner-phao-chi-vien-hung-10-2000x583-2.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://vienhung.com/img/banners/banner40-2000x583-2.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://vienhung.com/img/banners/banner-bat-dong-san-phu-quoc0-2000x583-2.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styledComponents(Slider)`
  margin-top: 20px;
  background-color:transparent;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styledComponents.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  background-color:transparent;
  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    
  }
`;

export default ImgSlider;