import posed from "react-pose";
import { TestimonialSlide } from "../../components/testimonial";
import {Link} from "react-router-dom";

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 },
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 },
});

const About = () => {
  return (
    <ListContainer>
      <Item
        className="jumbotron breadcumb"
        style={{ backgroundImage: `url(${"./img/testimony.jpg"})` }}
      >
        <div className="mainbreadcumb">
          <div className="container-fluid">
            <div className="row m-10-hor">
              <div className="col-md-6">
                <h1>About us</h1>
              </div>
              <div className="col-md-6">
                <div className="list">
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <span className="dash">/</span>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>

      <Item className="container-fluid black">
        <div className="row m-10-hor">
          <div className="col-md-5">
            <div className="subheading">We are the first</div>
            <div className="heading">
              Start Business <span className="br"></span> Enterprisess
            </div>
          </div>

          <div className="col-md-7">
            <div className="content">
              GeoDexia is a San Diego based strategy, design and development
              firm specialized in mobile platform, application, enterprise
              applications, Unified Communication and Collaborations and M2M
              innovations.
            </div>
            <div className="content">
              Innovate, project / product management, architect & design, plan
              and execute.
            </div>
          </div>
        </div>
      </Item>

      <section className="container-fluid pt-0">
        <div className="row m-10-hor">
          <div className="col-md-6 px-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#" />
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
              <div className="subheading">January 14, 2019</div>
              <div className="heading">Living Your Dreams</div>
              <p className="mt-3">
                Our expertise in working with global resources developing state
                of the art technology products help our customers quickly bring
                products to market. We conduct a deep analysis on what you are
                trying to build from business perspective, and work with you to
                decide on the right approach.
              </p>
              <Link className="btn" to="">
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
              <div className="subheading">January 22, 2019</div>
              <div className="heading">Start Projects Saas</div>
              <p className="mt-3">
                From idea generations to quality assurance, GeoDexia forms the
                right team to execute ane build your product. We adopt various
                methodologies such as Agile/SCRUM, Waterfaul, Lean, Test and
                Feature Driven Design with our certified project managers.
              </p>
              <Link className="btn" to="">
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="./img/blog1.jpg" className="imgslickz" alt="#" />
          </div>
        </div>
      </section>

      <TestimonialSlide />
    </ListContainer>
  );
};

export default About;
