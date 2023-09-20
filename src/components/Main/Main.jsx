import AboutMe from '../AboutMe/AboutMe';
import ImageSlider from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BlogCard1 from '../Promo/Promo';
import './Main.css';

import { portfolioProjectsConfig } from '../../config/portfolioProjectsConfig';
import Portfolio from '../Portfolio/Portfolio';

function Main() {

  return (
    <>
      <Header  backgroundColor="#004c85" />
      <main>
      <ImageSlider/>
      <AboutMe />
      <BlogCard1/>
      <Portfolio projectsConfig={portfolioProjectsConfig} />
      </main>
      <Footer />
    </>
  );
}

export default Main;
