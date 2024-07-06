import './NameTitle.css';
import { useTranslation } from 'react-i18next';
// import { Row, Col } from "react-bootstrap";

const NameTitle = () => {
    const { t } = useTranslation();
    return(
        <>
            <div className="blue-background title-container white-text">
                <div className="full-name">
                    José Ignacio Figueroa Zúñiga
                </div>
                <div className="subtitle white-text">
                    {t("title")}
                </div>
            </div>
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