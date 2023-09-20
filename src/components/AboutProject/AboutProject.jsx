import './AboutProject.css';

function ImageSlider() {
  return (
    <ul className="slides">
      <input type="radio" name="radio-btn" id="img-1" checked />
      <li className="slide-container">
        <div className="slide">
          <img src="https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/345/ed3jfaw00cnkcvv7ub4x2znajx258m2g.webp" alt="Slide 1" />
        </div>
        <div className="nav">
          <label htmlFor="img-6" className="prev">&#x2039;</label>
          <label htmlFor="img-2" className="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-2" />
      <li className="slide-container">
        <div className="slide">
          <img src="https://www.rbauto.ru/upload/webp/100/upload/iblock/b1c/l3fmczv4a33mn3ogycagjeznqqrnl3ft.webp" alt="Slide 2" />
        </div>
        <div className="nav">
          <label htmlFor="img-1" className="prev">&#x2039;</label>
          <label htmlFor="img-3" className="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-3" />
      <li className="slide-container">
        <div className="slide">
          <img src="https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/345/ed3jfaw00cnkcvv7ub4x2znajx258m2g.webp" alt="Slide 3" />
        </div>
        <div className="nav">
          <label htmlFor="img-2" className="prev">&#x2039;</label>
          <label htmlFor="img-4" className="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-4" />
      <li className="slide-container">
        <div className="slide">
          <img src="https://www.rbauto.ru/upload/webp/100/upload/iblock/b1c/l3fmczv4a33mn3ogycagjeznqqrnl3ft.webp" alt="Slide 4" />
        </div>
        <div className="nav">
          <label htmlFor="img-3" className="prev">&#x2039;</label>
          <label htmlFor="img-5" className="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-5" />
      <li className="slide-container">
        <div className="slide">
          <img src="https://www.rbauto.ru/upload/webp/100/upload/resize-cache/webp/iblock/345/ed3jfaw00cnkcvv7ub4x2znajx258m2g.webp" alt="Slide 5" />
        </div>
        <div className="nav">
          <label htmlFor="img-4" className="prev">&#x2039;</label>
          <label htmlFor="img-6" className="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-6" />
      <li className="slide-container">
        <div className="slide">
          <img src="https://www.rbauto.ru/upload/webp/100/upload/iblock/b1c/l3fmczv4a33mn3ogycagjeznqqrnl3ft.webp" alt="Slide 6" />
        </div>
        <div className="nav">
          <label htmlFor="img-5" className="prev">&#x2039;</label>
          <label htmlFor="img-1" className="next">&#x203a;</label>
        </div>
      </li>

      <li className="nav-dots">
        <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
        <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
        <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
        <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
        <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
        <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>
      </li>
    </ul>
  );
}

export default ImageSlider;
