const openPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const ClosePopupButton = document.querySelector('.popup__close-button');
const NameInput = document.querySelector('#name-input');
const StatusInput = document.querySelector('#status-input');
const ProfileName = document.querySelector('.profile__name');
const ProfileAboutMyself = document.querySelector('.profile__about-myself');
const EditForm = document.querySelector('.popup__form');


openPopupButton.addEventListener('click',function(){
    OpenPopup(editPopup);
});
    

ClosePopupButton.addEventListener('click', function(){
    ClosePopup(editPopup);
});

NameInput.value = ProfileName.textContent;
StatusInput.value = ProfileAboutMyself.textContent;

function OpenPopup(popup){
    popup.classList.add('popup_open');
}

function ClosePopup(popup){
    popup.classList.remove('popup_open');
}

EditForm.addEventListener('submit', function(event){
    event.preventDefault();
    ProfileName.textContent = NameInput.value;
    ProfileAboutMyself.textContent = StatusInput.value;
    ClosePopup(editPopup);
})
