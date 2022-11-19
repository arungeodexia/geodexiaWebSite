import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const content = [
  {
    title: "WE HAVE PROPOSITIONS FOR EVERYBODY!",
    description: "Manage your Business",
    button: "Read More",
    link: "//google.com",
    image: "http://geodexia.com/images/slide1.jpg",
  },
  {
    title: "There are no complex tasks for us!",
    description: "Start your Goal!",
    button: "Read More",
    link: "//google.com",
    image: "http://geodexia.com/images/slide2.jpg",
  },
  {
    title: "Improve your business strategies!",
    description: "Expand your Business",
    button: "Read More",
    link: "//google.com",
    image: "http://geodexia.com/images/slide3.jpg",
  },
];

export const SliderComponent = () => {
  return (
    <Slider className="slider-wrapper" autoplay={6000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={() => window.open(item.link, "_blank")}>
              <span>{item.button}</span>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};
