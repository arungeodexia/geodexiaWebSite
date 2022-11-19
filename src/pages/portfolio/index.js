import { TestimonialSlide } from "../../components/testimonial";
import { ContactBanner } from "../../components/contactBanner";
import {Link} from "react-router-dom";
import posed from 'react-pose';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 },
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 },
});

const Portfolio = () => {
  return (
    <ListContainer>
      <Item
        className="jumbotron breadcumb"
        style={{ backgroundImage: `url(${"./img/porto.jpg"})` }}
      >
        <div className="mainbreadcumb">
          <div className="container-fluid">
            <div className="row m-10-hor">
              <div className="col-md-6">
                <h1>Portofolio</h1>
              </div>
              <div className="col-md-6">
                <div className="list">
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <span className="dash">/</span>
                  <span>Portofolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>

      <Item className="container-fluid black_more">
        <div className="row m-10-hor">
          <div className="col-12">
            <div className="AppContainer">{/* <ImageGallery /> */}</div>
          </div>
        </div>
      </Item>

      <ContactBanner />
      <TestimonialSlide />
    </ListContainer>
  );
};

export default Portfolio;
