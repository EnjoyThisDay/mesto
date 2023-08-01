const openPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('#edit__popup');
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
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

openPopupButton.addEventListener('click',function(){
    OpenPopup(editPopup);
    nameInput.value = profileName.textContent;
    statusInput.value = profileAboutMyself.textContent;
});
    

closePopupButton.addEventListener('click', function(){
    ClosePopup(editPopup);
});

function OpenPopup(popup){
    popup.classList.add('popup_opened');
};

function ClosePopup(popup){
    popup.classList.remove('popup_opened');
};

editForm.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMyself.textContent = statusInput.value;
    ClosePopup(editPopup);
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
    console.log(deleteButton);
    deleteButton.addEventListener('click', function(){
        cardSection.removeChild(newCard);
    });

    const picPopup = document.querySelector('#pic__popup');
    cardPic.addEventListener('click', function(){
        OpenPopup(picPopup);
        const picPopupPhoto = picPopup.querySelector('.popup__photo');
        picPopupPhoto.src=cardPic.src;
        const picPopupName = picPopup.querySelector('.popup__photo-name');
        picPopupName.textContent=cardName.textContent;
        console.log(picPopupPhoto.textContent);
    });

    const closePhotoPopupButton = document.querySelector('#photo__popup-close-button');
    closePhotoPopupButton.addEventListener('click', function(){
        ClosePopup(picPopup);
    });

    const cardLike = newCard.querySelector('.elements__like-button');
    cardLike.addEventListener('click', function(){
        cardLike.classList.add('elements__like-button_active');
    });

    return newCard;
};

const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('#add__popup');
const closeAddPopupButton = document.querySelector('#add__popup-close-button');
const addForm = document.querySelector('#add__popup-form');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');

addPopupButton.addEventListener('click',function(){
    OpenPopup(addPopup);
    
});

closeAddPopupButton.addEventListener('click', function(){
    ClosePopup(addPopup);
});

const closePhotoPopupButton = document.querySelector('#photo__popup-close-button');
closePhotoPopupButton.addEventListener('click', function(){
    ClosePopup(picPopup);
});

addForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newCard = createCard(addForm);
    cardSection.prepend(newCard);
    const cardName = newCard.querySelector('.elements__name');
    cardName.textContent = placeInput.value;
    const cardPic = newCard.querySelector('.elements__photo');
    cardPic.src = linkInput.value;
    addForm.reset();
    ClosePopup(addPopup);
});


