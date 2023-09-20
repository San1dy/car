
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id="about-me">
      <div className='about-me__container'>
        <div className='about-me__info-container'>
          <div className='about-me__column'>
            <div className='about-me__info'>
              <h3 className='about-me__title'>
                РУСБИЗНЕСАВТО
              </h3>
              <h4 className='about-me__subtitle'>
                автотехника-сервис-запчасти
              </h4>
              <p className='about-me__text'>
              Русбизнесавто — ведущий оператор на рынке продаж грузовой автотехники, автобусов и спецтехники, обладатель сети современных станций технического обслуживания и ремонта грузовой автотехники, а также один из лидеров по организации снабжения предприятий запасными частями к грузовым автомобилям.
</p><p className='about-me__text'><br></br>
              Миссия Русбизнесавто — обеспечить клиентов современным грузовым, специальным и пассажирским автотранспортом, предоставить качественное сервисное обслуживание и запасные части; содействовать бизнесу партнеров и клиентов на основе прочных долговременных взаимоотношений.

              </p>
            </div>
          </div>
          <img className='about-me__avatar' src="https://automarketolog.ru/wp-content/uploads/2018/09/25.09.2018-41.jpg" alt="аватар" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
