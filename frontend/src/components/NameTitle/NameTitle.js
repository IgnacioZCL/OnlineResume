import "./NameTitle.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import ResumeEnglish from "../../assets/Resumee_Jose_Figueroa_English.pdf";
import ResumeSpanish from "../../assets/Resumee_Jose_Figueroa_Spanish.pdf";

const NameTitle = ({ selectedLanguage }) => {
  const { t } = useTranslation();
  return (
    <Row className="blue-background title-container white-text">
      <Col className="col-12 col-md-6 mb-3 mb-md-0">
        <div className="full-name">José Ignacio Figueroa Zúñiga</div>
        <div className="subtitle white-text">{t("title")}</div>
      </Col>
      <Col className="d-md-flex justify-content-end align-items-center resume-download">
        <a
          href={selectedLanguage === "en" ? ResumeEnglish : ResumeSpanish}
          download={`Jose_Figueroa_Resume_${selectedLanguage === "en" ? "English" : "Spanish"}.pdf`}
        >
          <FaDownload size={30} />
        </a>
      </Col>
    </Row>
  );
};

export default NameTitle;
