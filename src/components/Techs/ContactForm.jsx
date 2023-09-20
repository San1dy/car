import './ContactForm.css';

function ContactForm() {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Адрес</div>
            <div className="text-one">г. Москва</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Телефон</div>
            <div className="text-one">8-800-000-00-00</div>
            <div className="text-two">8-900-000-00-00</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">support@site.com</div>
            <div className="text-two">admin@site.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Отправьте нам сообщение</div>
          <p>
            Если у вас есть какие-то вопросы или предложения по сотрудничеству - заполните форму ниже
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Введите email" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Введите телефон" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Сообщение"></textarea>
            </div>
            <div className="button">
              <input type="button" value="Отправить" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
