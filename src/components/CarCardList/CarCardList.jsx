import './CarCardList.css';

import CarCard from '../CarCard/CarCard';
import Preloader from '../Preloader/Preloader';

function CarCardList({ carItems, isSaved }) {
  return (
    <section className='car-card-list'>
      <div className='car-card-list__container'>
        {carItems
          ?
          <ul className='car-card-list__items'>
            {
              carItems.map(card => (
                <li key={card.id}>
                  <CarCard
                    title={card.title}
                    imgLink={card.imgLink}
                    isSaved={isSaved}
                    isLike={card.isLike}
                  />
                </li>))
            }
          </ul>
          : <Preloader />
        }


        <button className='car-card-list__btn-more'>ещё</button>
      </div>
    </section>
  );
}

export default CarCardList;
