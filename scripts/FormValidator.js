

class FormValidator {
    constructor(config, form){
        this._config = config;
        this._input = config.inputSelector;
        this._inactiveButton = config.inactiveButtonClass;
        this.error = config.errorClass;
        this._inputError = config.inputErrorClass;
        this._form = form;
        this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._forms = Array.from(document.querySelectorAll(this._config.formSelector)) ;
    }
    
    _showInputError = ( inputElement ) => {
        inputElement.classList.add(this._inputError)
        const span = this._form.querySelector(`.${inputElement.id}-error`)
        span.textContent = inputElement.validationMessage;
        span.classList.add(this.error);
    }
    
    hideInputError = (inputElement) => {
        inputElement.classList.remove(this._inputError)
        const span = this._form.querySelector(`.${inputElement.id}-error`)
        span.textContent = ''
        span.classList.remove(this.error)
    }
    
    _isValid = (inputElement) => {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement)
        } else {
          this.hideInputError(inputElement)
        }
    }
    
    _hasInvalidValue = () => {
        return this._inputs.some(inputElement => !inputElement.validity.valid)
    }
    
    disableSubmitButton = () => {
        this._submitButton = this._form.querySelector('.popup__button') ;
        this._submitButton.classList.add(this._config.disabledButtonClass)
        this._submitButton.disabled = true
    }
    
    enableSubmitButton = () => {
        this._submitButton.classList.remove(this._config.disabledButtonClass)
        this._submitButton.disabled = false
    }
    
    _toggleButtonState = () => {
        if (this._hasInvalidValue()) {
          this.disableSubmitButton()
        } else {
          this.enableSubmitButton()
        }
    }
    
    _setEventListeners = () => {
        this._toggleButtonState()
        this._inputs.forEach(inputElement => {
          inputElement.addEventListener('input', () => {
            this._isValid(inputElement)
            this._toggleButtonState()
          })
        })
    }
    
    enableValidation() {
        this._setEventListeners()
    }
}
    
    export default FormValidator;