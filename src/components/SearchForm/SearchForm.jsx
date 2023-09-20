import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [isActiveToggleBtn, setIsActiveToggleBtn] = useState(false)
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={(e) => e.preventDefault()}>
        <div className={`search-form__row ${isInputFocus ? 'search-form__row_focus' : ''}`}>
          <div className='search-form__input-container'>
            <div className='search-form__input-row'>
              <div className='search-form__input-icon' />
              <input
                className='search-form__input'
                placeholder='Поиск техники'
                onFocus={() => { setIsInputFocus(true) }}
              />
              <button className='search-form__input-btn' />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
