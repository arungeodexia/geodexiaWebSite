import posed from "react-pose";
import { ContactBanner } from "../../components/contactBanner";
import { Carouselteam } from "../../components/teams";
import { Link } from "react-router-dom";

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 },
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 },
});

const Team = () => {
  return (
    <ListContainer>
      <Item
        className="jumbotron breadcumb"
        style={{ backgroundImage: `url(${"./img/team.jpg"})` }}
      >
        <div className="mainbreadcumb">
          <div className="container-fluid">
            <div className="row m-10-hor">
              <div className="col-md-6">
                <h1>Our Team</h1>
              </div>
              <div className="col-md-6">
                <div className="list">
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <span className="dash">/</span>
                  <span>Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>

      <Item className="container-fluid">
        <div className="row m-10-hor">
          <div className="col-md-5">
            <div className="subheading">Info our Team</div>
            <div className="heading">
              About Team<span className="br"></span> Business
            </div>
          </div>

          <div className="col-md-7 mb-3">
            <div className="content">
              Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
              suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
              metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor
              justo sed mi finibus, vel tristique risus faucibus.
            </div>
            <div className="content">
              Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
              suscipit. Quisque vitae sodales lectus, vel tristique risus
              faucibus.
            </div>
          </div>
          <Carouselteam />
        </div>
      </Item>

      <section className="container-fluid black_more">
        <div className="row m-10-hor">
          <div className="col-md-3 slickteam">
            <div className="slick-slide slick-col">
              <div>
                <div className="itm">
                  <div className="bg">
                    <img
                      src="./img/team/team1.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Tomy Doe</div>
                    <div className="title">Co-Founder</div>
                  </div>
                  <div className="icon">
                    <span
                      onClick={() => window.open("//facebook.com/", "_blank")}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//linkedin.com/", "_blank")}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//twitter.com/", "_blank")}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 slickteam">
            <div className="slick-slide slick-col">
              <div>
                <div className="itm">
                  <div className="bg">
                    <img
                      src="./img/team/team2.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Tomy Doe</div>
                    <div className="title">Co-Founder</div>
                  </div>
                  <div className="icon">
                    <span
                      onClick={() => window.open("//facebook.com/", "_blank")}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//linkedin.com/", "_blank")}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//twitter.com/", "_blank")}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 slickteam">
            <div className="slick-slide slick-col">
              <div>
                <div className="itm">
                  <div className="bg">
                    <img
                      src="./img/team/team3.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Tomy Doe</div>
                    <div className="title">Co-Founder</div>
                  </div>
                  <div className="icon">
                    <span
                      onClick={() => window.open("//facebook.com/", "_blank")}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//linkedin.com/", "_blank")}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//twitter.com/", "_blank")}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 slickteam">
            <div className="slick-slide slick-col">
              <div>
                <div className="itm">
                  <div className="bg">
                    <img
                      src="./img/team/team4.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Tomy Doe</div>
                    <div className="title">Co-Founder</div>
                  </div>
                  <div className="icon">
                    <span
                      onClick={() => window.open("//facebook.com/", "_blank")}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//linkedin.com/", "_blank")}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() => window.open("//twitter.com/", "_blank")}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </ListContainer>
  );
};
export default Team;
