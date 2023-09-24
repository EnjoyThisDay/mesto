import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
  
    this.form = this._popup.querySelector('.popup__form');
    this._inputs = this.form.querySelectorAll('.popup__input');
    this._handleSubmitForm = handleSubmitForm;
    
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach(input => {
    this._formValues[input.name] = input.value;
    });
    return this._formValues;
    
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }


  close() {
    super.close();
    this.form.reset();
    
  }
}

export default PopupWithForm;