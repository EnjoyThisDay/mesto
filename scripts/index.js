const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    disabledButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
  };

const openPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_profile');
const closePopupButton = document.querySelector('#edit__popup-close-button');
const nameInput = document.querySelector('#name-input');
const statusInput = document.querySelector('#status-input');
const profileName = document.querySelector('.profile__name');
const profileAboutMyself = document.querySelector('.profile__about-myself');
const editForm = document.querySelector('#edit__popup-form');
const template = document.querySelector('#template__elements');
const templateContent = template.content;
const cardItem = templateContent.querySelector('.elements__element');
const cardSection = document.querySelector('.elements');
const submitEditButton = document.querySelector('.popup__edit-button');
const submitAddButton = document.querySelector('.popup__add-button');
const picPopup = document.querySelector('.popup_type_picture'); 
const picPopupPhoto = document.querySelector('.popup__photo'); 
const picPopupName = document.querySelector('.popup__photo-name'); 
const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_card-add');
const closeAddPopupButton = document.querySelector('#add__popup-close-button');
const addForm = document.querySelector('#add__popup-form');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');
const closePhotoPopupButton = document.querySelector('#photo__popup-close-button');

function closePopupEsc(evt){
    const popup = document.querySelector('.popup_opened')
    evt.target = window;
    if (evt.key === 'Escape') {
        closePopup(popup);  
        console.log(popup);
    }
};

function closePopupOverlay(evt){
    const popup = evt.target;
    if (evt.target === popup) {
        closePopup(popup);
        console.log(popup);
    }
};

openPopupButton.addEventListener('click',function(){
    openPopup(editPopup);
    nameInput.value = profileName.textContent;
    statusInput.value = profileAboutMyself.textContent;
    enableSubmitButton(submitEditButton, validationConfig);
    hideInputError(editForm, nameInput, validationConfig);
    hideInputError(editForm, statusInput, validationConfig);
});
    
closePopupButton.addEventListener('click', function(){
    closePopup(editPopup);
});

function openPopup(popup){
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('click',  closePopupOverlay);
};

function closePopup(popup){
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('click', closePopupOverlay);
};

editForm.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMyself.textContent = statusInput.value;
    closePopup(editPopup);
});

initialCards.forEach(function (item){
    const newCard = createCard(item);
    cardSection.append(newCard);

});

function createCard(item){
    const newCard = cardItem.cloneNode(true);
    const cardName = newCard.querySelector('.elements__name');
    cardName.textContent = item.name;
    const cardPic = newCard.querySelector('.elements__photo');
    cardPic.src = item.link;
 
    const deleteButton = newCard.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', function(){
        newCard.remove();
    });

    cardPic.addEventListener('click', function(){ 
        openPopup(picPopup); 
        picPopupPhoto.src=cardPic.src; 
        picPopupName.textContent=cardName.textContent;  
    }); 

    const cardLike = newCard.querySelector('.elements__like-button');
    cardLike.addEventListener('click', function(){
        cardLike.classList.toggle('elements__like-button_active');
    });

    return newCard;
};

addPopupButton.addEventListener('click',function(){
    disableSubmitButton(submitAddButton, validationConfig);
    hideInputError(addForm, placeInput, validationConfig);
    hideInputError(addForm, linkInput, validationConfig);
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
    const newCard = createCard(addInput);
    cardSection.prepend(newCard);
    addForm.reset();
    closePopup(addPopup);
});

enableValidation(validationConfig);
