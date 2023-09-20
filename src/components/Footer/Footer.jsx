import './Footer.css';

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h2 className='footer__title'>
          Тестовое задание на вакансию в Русбизнесавто
        </h2>
        <div className='footer__row'>
          <span className='footer__copyright'>
            &#169; {year}
          </span>

          <ul className='footer__link-list'>
            <li>
              <a className='footer__link' href='https://www.rbauto.ru/' target="_blank" rel='noreferrer'>
                Официальный сайт Русбизнесавто
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
