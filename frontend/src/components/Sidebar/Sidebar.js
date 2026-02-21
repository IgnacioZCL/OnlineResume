import { useState } from "react";
import "./Sidebar.css";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import MainPicture from "../../assets/ignaciofigueroa.jpg";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Sidebar = () => {
  const { t } = useTranslation();
  const languages = t("mainContent.languages", { returnObjects: true });
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`light-blue-background sidebar ${isOpen ? "open" : "closed"}`}
    >
      <div onClick={toggleSidebar} className="toggle-btn">
        <RxHamburgerMenu size={24} />
      </div>
      <div className="sidebar-header">
        {isOpen && (
          <img
            className="main-picture m-auto"
            src={MainPicture}
            alt="José Ignacio Figueroa"
          />
        )}
      </div>
      <ul className="sidebar-menu">
        {/* Menu items. In a real app, you might map over data */}
        <li className="sidebar-item">
          <a className="text-decoration-none" href="tel:+56951386005">
            <FaPhoneAlt className="me-2" />
            <span>+569 5138 6005</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="mailto:ignacio.f.zuniga@gmail.com">
            <IoMdMail className="me-2" />
            <span>ignacio.f.zuniga@gmail.com</span>
          </a>
        </li>
        <li className="sidebar-item">
          <FaMap className="me-2" />
          <span>Alonso de Ercilla 3055, depto 508, Ñuñoa, Chile.</span>
        </li>
        <li className="sidebar-item">
          <a
            href="https://www.linkedin.com/in/igna-fig/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="me-2" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="sidebar-item">
          <NavLink exact to="/OnlineResume/" activeClassName="activeClicked">
            <FaUser className="me-2" />
            <span>{t("sidebar.aboutMe")}</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            exact
            to="/OnlineResume/job_experience"
            activeClassName="activeClicked"
          >
            <FaLaptopCode className="me-2" />
            <span>{t("sidebar.jobExperience")}</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            exact
            to="/OnlineResume/education"
            activeClassName="activeClicked"
          >
            <FaUniversity className="me-2" />
            <span>{t("sidebar.education")}</span>
          </NavLink>
        </li>
      </ul>
      {isOpen && (
        <>
          <div className="p-2 bold mb-2 blue-background white-text">
            <FaCode className="me-2" /> {t("sidebar.technologies")}
          </div>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Docker</li>
            <li>Git</li>
            <li>AWS</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>TypeScript</li>
            <li>Jira</li>
            <li>Slack</li>
            <li>Linux/Windows/MacOS</li>
          </ul>
          <div className="p-2 bold mb-2 blue-background white-text">
            <MdLanguage className="me-2" />
            {t("sidebar.languages")}
          </div>
          <ul>
            {languages.map((language) => (
              <li>{language}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
