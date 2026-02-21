import "./NameTitle.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/resume.pdf";

const NameTitle = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row className="blue-background title-container white-text">
        <Col>
          <div className="full-name">José Ignacio Figueroa Zúñiga</div>
          <div className="subtitle white-text">{t("title")}</div>
        </Col>
        <Col
          className="d-flex justify-content-end align-items-center"
          style={{ color: "#fff !important" }}
        >
          <a
            href={Resume}
            style={{ color: "#fff !important" }}
            download="Jose_Figueroa_Resume.pdf"
          >
            <FaDownload size={30} />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default NameTitle;
