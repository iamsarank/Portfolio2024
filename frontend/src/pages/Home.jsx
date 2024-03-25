import React from "react";
import { Link } from "react-router-dom";

import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Home = () => {
  return (
    <div>
      <>
        <section className="pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[20px] leading-[45px] text-headingColor font-[600] md:text-[20px] md:leading-[45px]">
                    👋🏻 Hi, I'm <span className="text=[20px] text-secondaryColor">Saravanakumar</span></h1>
                  <h1 className="text-[20px] leading-[10px] text-headingColor font-[600] md:text-[35px] md:leading-[45px]">Frontend Developer</h1>
                  <p className="text__para text-[16px] font-[500] ">
                    I seek to push the limits of creativity to create high engaging, user friendly, and
                    memorable interactive experiences.
                  </p>
                  <div className="flex mt-[20px] items-center gap-6">
                    <span className="md:leading-[45px] text-gray-500 font-[500]">Follow Me</span>
                    <div className="text-[25px] text-gray-500">
                      <Link to="">
                        <TiSocialFacebookCircular />
                      </Link>
                    </div>
                    <div className="text-[22px] text-gray-500">
                      <Link to="">
                      <TiSocialInstagram />
                      </Link>
                    </div>
                    <div className="text-[25px] text-gray-500">
                      <Link to="">
                      <TiSocialTwitter />
                      </Link>
                    </div>
                    <div className="text-[25px] text-gray-500">
                      <Link to="">
                      <TiSocialGithubCircular />
                      </Link>
                    </div>
                    <div className="text-[25px] text-gray-500">
                      <Link to="">
                      <TiSocialLinkedin />
                      </Link>
                    </div>
                  </div>
                  <button className="btn1">Download CV</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Home;
