import './pages/index.css';

import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import {validationConfig} from "./scripts/constants.js";
import {initialCards} from "./scripts/constants.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import Section from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";

const openEditPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_profile');
const nameInput = document.querySelector('#name-input');
const statusInput = document.querySelector('#status-input');
const profileName = document.querySelector('.profile__name');
const profileAboutMyself = document.querySelector('.profile__about-myself');
const editForm = document.querySelector('#edit__popup-form');
const cardSection = document.querySelector('.elements');
const picPopup = document.querySelector('.popup_type_picture'); 
const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_card-add');
const addForm = document.querySelector('#add__popup-form');

const cardList = new Section({items:initialCards, renderer:(element) => {
        cardList.addItem(createCard(element)); 
      }
    },
      cardSection
  );
cardList.renderElement();

const userProfile = new UserInfo(profileName, profileAboutMyself);

const popupCardAdd = new PopupWithForm(addPopup, (data) => {
    const newCard = createCard(data);
    cardSection.prepend(newCard);
  });
popupCardAdd.setEventListeners();

addPopupButton.addEventListener('click',function(){
    validationAddForm.disableSubmitButton();
    validationAddForm.clearErrors();
    popupCardAdd.open();
});

const popupProfileEdit = new PopupWithForm(editPopup, (data) => {
    userProfile.setUserInfo(data);
});
popupProfileEdit.setEventListeners();

openEditPopupButton.addEventListener('click',function(){
    const profileForm = userProfile.getUserInfo();
    nameInput.value = profileForm.name;
    statusInput.value = profileForm.status;
    validationEditForm.enableSubmitButton();
    validationEditForm.clearErrors();
    popupProfileEdit.open();

});

function createCard(data){
    const card = new Card(data, '#template__elements', () => {
        const cardPopup = new PopupWithImage(picPopup);
        cardPopup.setEventListeners();
        cardPopup.open(data);
    });
    const cardTemplate = card.getView();
    return cardTemplate;

  };

const validationAddForm = new FormValidator(validationConfig, addForm);
const validationEditForm = new FormValidator(validationConfig, editForm);

validationAddForm.enableValidation();
validationEditForm.enableValidation();
