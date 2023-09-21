import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {validationConfig} from "./constants.js";
import {initialCards} from "./constants.js";

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
const picPopupPhoto = document.querySelector('.popup__photo'); 
const picPopupName = document.querySelector('.popup__photo-name');

export function handleOpenPopup(name, link){
    openPopup(picPopup); 
    picPopupPhoto.src = link; 
    picPopupName.textContent = name; 
}

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
    validationEditForm.clearErrors();
    

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
    validationAddForm.clearErrors();
    openPopup(addPopup);
});

closeAddPopupButton.addEventListener('click', function(){
    closePopup(addPopup);
});

closePhotoPopupButton.addEventListener('click', function(){
    closePopup(picPopup);
});

const createCard = (data) => {
    const card = new Card(data, '#template__elements');
    cardSection.prepend(card.getView());
  };

addForm.addEventListener('submit', function(event){
    event.preventDefault();
    const addInput = {
        name: placeInput.value,
        link: linkInput.value
    };
    createCard(addInput);
    
    addForm.reset();
    closePopup(addPopup); 
});

  

initialCards.forEach(function (item){
    createCard(item);
});


const validationAddForm = new FormValidator(validationConfig, addForm);
const validationEditForm = new FormValidator(validationConfig, editForm);

validationAddForm.enableValidation();
validationEditForm.enableValidation();
