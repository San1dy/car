import './CarCard.css';

function CarCard({ title, imgLink, isSaved, isLike }) {

  return (
    <article className='car-card'>
      <div className="car-card__element">
        <img className='car-card__img' src={imgLink} alt={title} />
        {isSaved
            ?
            <div className="car-card__btn-delete" />
            :
            <div className={`car-card__indicator ${isLike ? 'car-card__indicator_active' : ''}`} />
          }
      </div>
      <div className='car-card__cover'>
          <h2 className='car-card__title'>
            {title}
          </h2>
          <p className='car-card__time'>
            5.000.000 р.
          </p>
      </div>
    </article>
  );
}

export default CarCard;
