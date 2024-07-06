import './Sidebar.css';
import {
    CDBSidebar,
    CDBSidebarContent,
    // CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { useTranslation } from 'react-i18next';
  import { NavLink } from 'react-router-dom';
  import MainPicture from '../../assets/ignaciofigueroa.jpg';
  

  const Sidebar = () => {
    const { t } = useTranslation();
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#000" className="light-blue-background">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <img className="main-picture m-auto" src={MainPicture} alt="José Ignacio Figueroa"/>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">{t("sidebar.aboutMe")}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/job_experience" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="laptop">{t("sidebar.jobExperience")}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/education" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="university">{t("sidebar.education")}</CDBSidebarMenuItem>
              </NavLink>
                <CDBSidebarMenuItem icon="code">{t("sidebar.technologies")}</CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="globe">{t("sidebar.languages")}</CDBSidebarMenuItem>
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