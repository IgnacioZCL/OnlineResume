import "./Sidebar.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  // CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import MainPicture from "../../assets/ignaciofigueroa.jpg";

const Sidebar = () => {
  const { t } = useTranslation();
  const languages = t("mainContent.languages", { returnObjects: true });
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar
        textColor="#000"
        className="light-blue-background"
        maxWidth="300px"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img
            className="main-picture m-auto"
            src={MainPicture}
            alt="José Ignacio Figueroa"
          />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="phone">
              <a href="tel:+56951386005">+569 5138 6005</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="envelope">
              <a href="mailto:ignacio.f.zuniga@gmail.com">
                ignacio.f.zuniga@gmail.com
              </a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="map" className="address">
              Alonso de Ercilla 3055,
              <br /> depto 508, Ñuñoa, Chile.
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="linkedin">
              <a
                href="https://www.linkedin.com/in/igna-fig/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn /in/igna-fig/
              </a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
            <NavLink exact to="/OnlineResume/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                {t("sidebar.aboutMe")}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/OnlineResume/job_experience"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="laptop">
                {t("sidebar.jobExperience")}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/OnlineResume/education"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="university">
                {t("sidebar.education")}
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem
              icon="code"
              className="blue-background white-text"
            >
              {t("sidebar.technologies")}{" "}
            </CDBSidebarMenuItem>
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
            <CDBSidebarMenuItem
              icon="globe"
              className="blue-background white-text"
            >
              {t("sidebar.languages")}
            </CDBSidebarMenuItem>
            <ul>
              {languages.map((language) => (
                <li>{language}</li>
              ))}
            </ul>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
