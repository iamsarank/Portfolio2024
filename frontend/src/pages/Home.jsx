import React from "react";
import { Link } from "react-router-dom";

import { TiSocialFacebookCircular } from "react-icons/ti";
import { FcBiohazard } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FcOrganization } from "react-icons/fc";

import profileImg from "../assets/images/profile-1.png"
import profileImg01 from "../assets/images/profile-2.png"

const Home = () => {
  return (
    <div>
      <>
        <section className="pt-[60px] 2xl:h-[830px]">
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
              <div className="flex gap-[30px]">
                <div>
                  <img className="w-full" src={profileImg} />
                </div>
              </div>
            </div>
            <div>
              <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </div>
          </div>
        </section>

        <section className="2xl:h-full bg-sky-50 ">
          <div className="container">
            <div className="tac text-center">
              <h1 className="text-[24px] leading-[40px] text-headingColor font-[700] md:text-[30px] 
              md:leading-[50px]">
                About Me
              </h1>
              <div className="w-20 h-2 bg-secondaryColor "></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg-[55px] ">
              <div className="py-[30px]">
                <img src={profileImg01} alt="" />
              </div>
              <div className="py-[45px]">
                <p className="text__para">
                  I am Saravanakumar K, I am Frontend Developer. And I am Very Passionate and Dedicated to my work. With 3 years+
                  Experience as aProfessional Product Designer, I have acuried the skills and knowledge necessary to make your project success.
                </p>
                <h3 className="text__para font-[700]">iamsarank@gmail.com</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                  <div className="flex flex-row gap-5 justify-between">
                    <div className="p-3 lg:p-5 box__shadows__2 bg-white">
                      <div className="flex justify-center">
                        <span className="bg-blue-200 p-2 rounded-md mb-4">
                          <FcOrganization className="text-[30px]" />
                        </span>
                      </div>
                      <h2 className="font-[600] text-[18px] mb-2 text-center">Product Design</h2>
                      <p className="text-justify text-[14px] text-gray-600">Turn what you have of digital product into reality.
                      For any platform you consider.</p>
                    </div>

                    <div className="p-3 lg:p-5 box__shadows__2 bg-white">
                      <div className="flex justify-center">
                        <span className="bg-green-200 p-2 rounded-md mb-4">
                          <FcBiohazard className="text-[30px]" />
                        </span>
                      </div>
                      <h2 className="font-[600] text-[18px] mb-2 text-center">UI/UX Design</h2>
                      <p className="text-justify text-[14px] text-gray-600">Discovery, Strategy and experience design
                      that enables stronger customer connections.
                      </p>
                    </div>

                    <div className="p-3 lg:p-5 box__shadows__2 bg-white">
                      <div className="flex justify-center">
                        <span className="bg-fuchsia-200 p-2 rounded-md mb-4">
                          <FcProcess className="text-[30px]" />
                        </span>
                      </div>
                      <h2 className="font-[600] text-[18px] mb-2 text-center">Interactive Design</h2>
                      <p className="text-justify text-[14px] text-gray-600">Turn what you have of digital product into reality.
                      For any platform you consider.</p>
                    </div>

                  </div>
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
