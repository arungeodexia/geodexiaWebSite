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
const Contact = () => {
  return (
    <ListContainer>
      <Item
        className="jumbotron breadcumb"
        style={{ backgroundImage: `url(${"./img/contact.jpg"})` }}
      >
        <div className="mainbreadcumb">
          <div className="container-fluid">
            <div className="row m-10-hor">
              <div className="col-md-6">
                <h1>Contact</h1>
              </div>
              <div className="col-md-6">
                <div className="list">
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <span className="dash">/</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>
      <Item className="container-fluid">
        <div className="row m-10-hor">
          <iframe
            height="420px"
            width="100%"
            src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=4275+Executive+Square,+La+Jolla,+CA,+92037,+United+States&amp;aq=0&amp;sll=32.7153,-117.1564&amp;sspn=32.282355,-116.513672&amp;ie=UTF8&amp;hq=&amp;hnear=San+Diego,+California&amp;ll=32.649974,-116.950005&amp;spn=0.01628,0.025663&amp;z=8&amp;iwloc=A&amp;output=embed"
          ></iframe>
        </div>
      </Item>
      <Item className="container-fluid">
        <div className="row m-10-hor">
          <div className="col-md-6">
            <div className="form-side">
              <h2>Get in Touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto cupiditate aperiam neque
              </p>
              <form className="formcontact">
                <label htmlFor="name">
                  <h5>Name</h5>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </label>

                <label htmlFor="email">
                  <h5>Email</h5>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your@email.address"
                  />
                </label>

                <label htmlFor="question">
                  <h5>Message</h5>
                  <textarea
                    name="question"
                    id="question"
                    rows="3"
                    placeholder="Your message"
                  />
                </label>

                <div className="submit-wrapper">
                  <button type="submit">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 pl-md-5">
            <div className="text-side">
              <h2>Contact Information</h2>
              <p>
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
              </p>

              <div className="address">
                <div className="heading">Our Office</div>
                <div className="list">
                  <i className="fa fa-map-marker"></i>
                  GeoDexia, Inc. 4275 Executive Square, Suite #200 San Diego, CA
                  92130.
                </div>
                <div className="list">
                  <i className="fa fa-envelope-o"></i>
                  <a
                    href="mailto: info@geodexia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@geodexia.com
                  </a>
                </div>
                <div className="list">
                  <i className="fa fa-phone"></i>
                  +1 858 703 7013
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>
      <TestimonialSlide />
    </ListContainer>
  );
};
export default Contact;
