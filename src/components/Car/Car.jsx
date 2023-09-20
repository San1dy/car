import './Car.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import CarCardList from '../CarCardList/CarCardList';
import Footer from '../Footer/Footer';

import { carItems } from '../../data/carData';

function Movies() {
  return (
    <>
      <Header backgroundColor="#004c85" />
      <main>
        <SearchForm />
        <CarCardList carItems={carItems} isSaved={false} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
