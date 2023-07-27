const openPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('#name-input');
const statusInput = document.querySelector('#status-input');
const profileName = document.querySelector('.profile__name');
const profileAboutMyself = document.querySelector('.profile__about-myself');
const editForm = document.querySelector('.popup__form');


openPopupButton.addEventListener('click',function(){
    OpenPopup(editPopup);
});
    

closePopupButton.addEventListener('click', function(){
    ClosePopup(editPopup);
});

openPopupButton.addEventListener('click',function(){
nameInput.value = profileName.textContent;
statusInput.value = profileAboutMyself.textContent;
});

function OpenPopup(popup){
    popup.classList.add('popup_open');
}

function ClosePopup(popup){
    popup.classList.remove('popup_open');
}

editForm.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMyself.textContent = statusInput.value;
    ClosePopup(editPopup);
})
