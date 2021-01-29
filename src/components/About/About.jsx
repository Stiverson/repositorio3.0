import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const {
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    paragraphFive,
    resume,
  } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Sobre mim" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Stiverson Rodrigues Machado , Formado em Técnico para informática para internet Graduado em Análise e desenvolvimento de sistemas.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Residente na cidade de Piracicaba-sp, grande amante de técnologia, principalmente na área de desenvolvimento, possuo conhecimento em várias linguagem de programação, html, css, javascript, React, Angular , Andorid, flutter e etc..'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'Amante de consoles e games cultura nerd geek e tecnologia digital .'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour ||
                    'Pai dos gatos mais maneiros e simpáticos do mundo que me proporciona novas idéias todo dia, Pai do Anthony a maior riqueza do mundo que deus me pode dar e casado com a mulher mais sincera e dedicada do mundo a soridente e mais amável Stefane Souza..'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFive ||
                    'Sou uma pessoa dedicada e disposta a novos desafios busco oportunidades de demonstrar meus conhecimentos adquiridos nesses anos de aprendizagem, sempre disposto a aprender e ensinar e me tornar mais capácitado.'}
                </p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Curriculum
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
