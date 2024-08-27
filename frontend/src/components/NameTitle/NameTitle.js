import './NameTitle.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import downloadIcon from '../../assets/download-icon.svg';
import PDFResume from '../PDFResume/PDFResume';
// import { Row, Col } from "react-bootstrap";

const NameTitle = () => {
    const { t } = useTranslation();
    return(
        <>
            <Row className="blue-background title-container white-text">
                <Col>
                    <div className="full-name">
                        José Ignacio Figueroa Zúñiga
                    </div>
                    <div className="subtitle white-text">
                        {t("title")}
                    </div>
                </Col>
                
                <Col className="d-flex justify-content-end align-items-center">
                    <PDFDownloadLink document={<PDFResume/>} fileName="Curriculum-Jose-Ignacio-Figueroa.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Descargando' : <img className="download-icon" src={downloadIcon} alt="Download resume" />
                        }
                    </PDFDownloadLink>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <a href="tel:+56951386005">+569 5138 6005</a>
                </Col>
                <Col>
                    <a href="mailto:ignacio.f.zuniga@gmail.com">ignacio.f.zuniga@gmail.com</a>
                </Col>
                <Col>
                    Avenida San Joaquín 0710, depto 703, Rancagua, Chile.
                </Col>
                <Col>
                    <a href="https://www.linkedin.com/in/igna-fig/" target="_blank">/igna-fig/</a>
                </Col>
            </Row> */}
        </>
    );
};

export default NameTitle;