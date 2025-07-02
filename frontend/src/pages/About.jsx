import { Button, Result } from 'antd';
import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();

  return (
    <Result
      status="info"
      title="App"
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>Website: <a href="https://www.softflixitsolutions.com/" target="_blank" rel="noopener noreferrer">www.softflixitsolutions.com</a></p>
          <Button
            type="primary"
            onClick={() => {
              window.open('https://www.softflixitsolutions.com/', '_blank');
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
