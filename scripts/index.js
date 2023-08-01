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


openPopupButton.addEventListener('click',function(){
    openPopup(editPopup);
    nameInput.value = profileName.textContent;
    statusInput.value = profileAboutMyself.textContent;
});
    

closePopupButton.addEventListener('click', function(){
    closePopup(editPopup);
});

function openPopup(popup){
    popup.classList.add('popup_opened');
};

function closePopup(popup){
    popup.classList.remove('popup_opened');
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

const picPopup = document.querySelector('.popup_type_picture'); 
const picPopupPhoto = document.querySelector('.popup__photo'); 
const picPopupName = document.querySelector('.popup__photo-name'); 

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
        cardLike.classList.add('elements__like-button_active');
    });

    return newCard;
};

const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_card-add');
const closeAddPopupButton = document.querySelector('#add__popup-close-button');
const addForm = document.querySelector('#add__popup-form');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');

addPopupButton.addEventListener('click',function(){
    openPopup(addPopup);
    
});

closeAddPopupButton.addEventListener('click', function(){
    closePopup(addPopup);
});

const closePhotoPopupButton = document.querySelector('#photo__popup-close-button');
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


