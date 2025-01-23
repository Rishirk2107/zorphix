"use client";

import React, { useEffect, useState } from "react";
import PopupModal from "./popupmodal";
// import Swal from 'sweetalert2';
// import axios from "axios";
import Aos from "aos";
import 'aos/dist/aos.css';

// Define types for the eventInfo state
interface EventInfo {
  heading: string;
  content: string;
  org1Name: string;
  org2Name: string;
  org1Phone: string;
  org2Phone: string;
  registrationLink: string;
  venue: string;
}

// Define types for PopupModal props
interface PopupModalProps {
  title: string;
  content: string;
  name1: string;
  name2: string;
  phone1: string;
  phone2: string;
  register: string;
  venue: string;
  isVisible: boolean;
  toggle: () => void;
}

const Workshops: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [isBlurBackground, setBlurBackground] = useState<boolean>(false);

  const loguser = JSON.parse(localStorage.getItem('userData') || '{}');
  const userData = loguser ? loguser : "no_user";

  // console.log(userData, "user");

  const [eventInfo, setEventInfo] = useState<EventInfo>({
    heading: "",
    content: "",
    org1Name: "",
    org2Name: "",
    org1Phone: "",
    org2Phone: "",
    registrationLink: "",
    venue: "",
  });

  const toggle = (
    title: string,
    content: string,
    org1Name: string,
    org2Name: string,
    org1Phone: string,
    org2Phone: string,
    registrationLink: string,
    venue: string
  ) => {
    setEventInfo({
      heading: title,
      content,
      org1Name,
      org2Name,
      org1Phone,
      org2Phone,
      registrationLink,
      venue,
    });
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="section-tours" id="events">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary white letter-spacing">
          Workshops
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="card" data-aos="zoom-in">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2-workshop">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1 bold-white">
                  Web Development
                </span>
              </h4>
              <div className="card__details">
                <p>
                Unlock the power of web technologies in our hands-on Web Development Workshop! Learn to build stunning websites from scratch with HTML, CSS, and JavaScript. Dive into responsive design, explore best practices, and create interactive web pages. Guided by experienced mentors, this workshop is perfect for beginners and budding developers. Gain practical skills to launch your web development journey or enhance your portfolio. Don’t miss this opportunity to bring your ideas to life on the web!
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "UI/UX Feat. Figma",
                        "Discover this exceptional collaborative process in UI/UX workshops to elevate digital product design. By the end of this workshop, you'll not only possess the technical skills to wield design tools but also the mindset to shape the future of user-centric innovation. Engage in this notable collaborative approach during UI/UX workshops to refine the design of digital solutions.",
                        "Jey Shreemen GR",
                        "P Athulya Kairali",
                        "+91 76048 13964",
                        "+91 98400 92758",
                        "forms.gle/RqExTs9gLNsFEPCHA",
                        "ILP - IOT Lab"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                <div className="card__price-box">
                  <a href="https://forms.gle/SqxqzPeT3f4Csyxa9" target="_blank" className="btn btn--white" rel="noopener noreferrer">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="card" data-aos="zoom-in">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3-workshop">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2 bold-white">
                  Trading & Investment
                </span>
              </h4>
              <div className="card__details">
                <p>
                Step into the world of finance with our Trading and Investment Workshop! Learn the fundamentals of stock markets, trading strategies, and smart investment techniques. Discover how to analyze market trends, manage risks, and build a strong investment portfolio. This workshop is designed for beginners and aspiring investors looking to gain practical insights. Led by experienced financial experts, you'll get hands-on experience with tools and platforms used in the industry. Unlock the secrets to financial growth and secure your future!
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "Trading & Investment",
                        "Unlock financial empowerment through our trading and investment workshop. Whether you're a pro or a newcomer, gain the tools to navigate finance confidently. Don't miss the chance to boost your financial literacy and step into the world of trading and investment. Get ready to go from zero to hero!",
                        "Prathap D",
                        "Madhukeshwar MS",
                        "+91 63797 54326",
                        "+91 80728 92365",
                        "forms.gle/G9GTWJTvh4SZGvqJA",
                        "ILP - IOT Lab"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                <div className="card__price-box">
                  <a href="https://forms.gle/sg9qZ6mV9bRwidXC6" target="_blank" className="btn btn--white" rel="noopener noreferrer">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupModal
        title={eventInfo.heading}
        content={eventInfo.content}
        name1={eventInfo.org1Name}
        name2={eventInfo.org2Name}
        phone1={eventInfo.org1Phone}
        phone2={eventInfo.org2Phone}
        register={eventInfo.registrationLink}
        venue={eventInfo.venue}
        isVisible={isPopupVisible}
        toggle={() => setPopupVisible(!isPopupVisible)}
      />
    </div>
  );
};

export default Workshops;
