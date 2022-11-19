import React, { useEffect, useState } from "react";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import { Link } from "react-router-dom";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

export const Header = () => {
  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    // const header = document.getElementById("myHeader");
    // const totop = document.getElementById("scroll-to-top");
    // const sticky = header.offsetTop;
    // const scrollCallBack = window.addEventListener("scroll", () => {
    //   btn_icon(false);
    //   if (window.pageYOffset > sticky + 300) {
    //     header.classList.add("sticky");
    //     totop.classList.add("show");
    //   } else {
    //     header.classList.remove("sticky");
    //     totop.classList.remove("show");
    //   }
    //   if (window.pageYOffset > sticky) {
    //     closeMenu();
    //   }
    // });
    // return () => {
    //   window.removeEventListener("scroll", scrollCallBack);
    // };
  }, []);
  return (
    <header id="myHeader" className="navbar">
      <div className="container-fluid">
        <div className="row m-2-hor w-100-nav">
          <div className="logo">
            <div className="navbar-title navbar-item">
              <Link to="/">
                <div className="row" style={{alignItems:'center'}}>
                  <img
                    src="http://geodexia.com/images/logo-bg.png"
                    className="img-fluid"
                    alt="#"
                    style={{marginRight:'10px'}}
                  />
                  GeoDexia
                </div>
              </Link>
            </div>
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && (
                <div className="menu">
                  <div className="navbar-item">
                    <Link to="/about" onClick={() => btn_icon(!showmenu)}>
                      Home
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/about" onClick={() => btn_icon(!showmenu)}>
                      About Us
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/team" onClick={() => btn_icon(!showmenu)}>
                      Team
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/pricing" onClick={() => btn_icon(!showmenu)}>
                      Pricing
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/portfolio" onClick={() => btn_icon(!showmenu)}>
                      Portfolio
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/contact" onClick={() => btn_icon(!showmenu)}>
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </Breakpoint>

            <Breakpoint xl>
              <div className="menu">
                <div className="navbar-item">
                  <Link to="/">Home</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/about">About Us</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/team">Team</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/pricing">Pricing</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/portfolio">Portfolio</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>
      </div>
    </header>
  );
};
