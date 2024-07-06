import './NameTitle.css';
import { useTranslation } from 'react-i18next';

const NameTitle = () => {
    const { t } = useTranslation();
    return(
            <div className="blue-background title-container white-text">
                <div className="full-name">
                    José Ignacio Figueroa Zúñiga
                </div>
                <div className="subtitle white-text">
                    {t("title")}
                </div>
            </div>
    );
};

export default NameTitle;