import Body from '../Body/Body';
import { useTranslation } from 'react-i18next';
import './AboutMe.css'

const AboutMe = () => {
    const { t } = useTranslation();

    return(<Body title={t("mainContent.aboutMe.title")} content={t("mainContent.aboutMe.content")} />);
};

export default AboutMe;