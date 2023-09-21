import {handleOpenPopup} from "./index.js";

class Card {
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
    }
    
    _getTemplate() {
      const cardTemplate = document
        .querySelector(this._templateSelector)
        .content.querySelector('.elements__element')
        .cloneNode(true);
        
      return cardTemplate;
    }
  
    _setTitle() {
      const cardName = this._newCard.querySelector('.elements__name');
      cardName.textContent = this._name;
      
    }

    _setPic() {
      this._cardPic.src = this._link;
      this._cardPic.alt = `${this._name}`
    }
  
    _handleDeleteCard() {
      this._newCard.remove();
      this._newCard = null;
    }
  
    _handleLikeCard() {
      this._cardLike.classList.toggle('elements__like-button_active');
    }

    
  
    _setListeners() {

      const deleteButton = this._newCard.querySelector('.elements__delete-button');
      deleteButton.addEventListener('click', () => {this._handleDeleteCard() });
    
      this._cardLike.addEventListener('click', () => { this._handleLikeCard() } );
      this._cardPic.addEventListener('click', () => { handleOpenPopup(this._name, this._link) } );
    }
  
    getView() {
      this._newCard = this._getTemplate();
      this._cardPic = this._newCard.querySelector('.elements__photo');
      this._cardLike = this._newCard.querySelector('.elements__like-button');
      this._setTitle();
      this._setPic();
      this._setListeners();
  
      return this._newCard;
    }
  }
  
  export default Card;