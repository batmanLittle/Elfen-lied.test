import "./Search.css";
import iconSearch from "../../images/icon-search-form.svg";
import iconClose from "../../images/icon-close.svg";

const Search = ({ handleClose, isCheckoutPage }) => {
  return (
    <div className="search">
      <div className="search__container">
        <img className="search__img" src={iconSearch} alt="иконка формы" />
        <input
          className="search__input"
          type="text"
          placeholder="Поиск..."
          name="text"
          id="text"
        />
        <div>
          <button
            className="search__button-close"
            type="button"
            onClick={() => !isCheckoutPage && handleClose("search")}
            disabled={isCheckoutPage}
          >
            <img src={iconClose} alt="иконка закрытия" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
