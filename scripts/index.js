import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const openEditPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_profile');
const closeEditPopupButton = document.querySelector('#edit__popup-close-button');
const nameInput = document.querySelector('#name-input');
const statusInput = document.querySelector('#status-input');
const profileName = document.querySelector('.profile__name');
const profileAboutMyself = document.querySelector('.profile__about-myself');
const editForm = document.querySelector('#edit__popup-form');
const cardSection = document.querySelector('.elements');
const picPopup = document.querySelector('.popup_type_picture'); 
const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_card-add');
const closeAddPopupButton = document.querySelector('#add__popup-close-button');
const addForm = document.querySelector('#add__popup-form');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');
const closePhotoPopupButton = document.querySelector('#photo__popup-close-button');

function closePopupByEsc(evt){
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened')
        closePopup(popup);  
    }
};

function closePopupByOverlay(evt){
    const popup = evt.currentTarget;
    if (evt.target === popup) {
        closePopup(popup);
    }
};

openEditPopupButton.addEventListener('click',function(){
    openPopup(editPopup);
    nameInput.value = profileName.textContent;
    statusInput.value = profileAboutMyself.textContent;
    validationEditForm.enableSubmitButton();
    validationEditForm.hideInputError(nameInput);
    validationEditForm.hideInputError(statusInput);

});
    
closeEditPopupButton.addEventListener('click', function(){
    closePopup(editPopup);
});

export function openPopup(popup){
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', closePopupByEsc);
    popup.addEventListener('click',  closePopupByOverlay);
};


function closePopup(popup){
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', closePopupByEsc);
    popup.removeEventListener('click', closePopupByOverlay);
};

editForm.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMyself.textContent = statusInput.value;
    closePopup(editPopup);
});

addPopupButton.addEventListener('click',function(){
    validationAddForm.disableSubmitButton();
    validationAddForm.hideInputError(placeInput);
    validationAddForm.hideInputError(linkInput);
    openPopup(addPopup);
});

closeAddPopupButton.addEventListener('click', function(){
    closePopup(addPopup);
});

closePhotoPopupButton.addEventListener('click', function(){
    closePopup(picPopup);
});

addForm.addEventListener('submit', function(event){
    event.preventDefault();
    const addInput = {
        name: placeInput.value,
        link: linkInput.value
    };
    const newCard = new Card(addInput);
    cardSection.prepend(newCard.getView());
    
    addForm.reset();
    closePopup(addPopup); 
});

initialCards.forEach(function (item){
    const newCard = new Card(item);
    cardSection.append(newCard.getView());
    
});

const validationAddForm = new FormValidator(validationConfig, addForm);
const validationEditForm = new FormValidator(validationConfig, editForm);

validationAddForm.enableValidation();
validationEditForm.enableValidation();
