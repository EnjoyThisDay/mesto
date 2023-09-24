 class Popup {
    constructor (popup) {
      this._popup = popup;
    }
  
    open() {
      this._popup.classList.add('popup_opened');
      window.addEventListener("keydown", this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      window.removeEventListener("keydown", this._handleEscClose);
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    };
  
    setEventListeners() {
      this._popup.addEventListener("click", (evt) => {
        const popup = evt.currentTarget;
        const popupCloseButton = this._popup.querySelector('.popup__close-button');
        if (
            evt.target === popup || evt.target === popupCloseButton
        ) {
          this.close();
        }
      });
    }
  };

  export default Popup;
