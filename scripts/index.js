

axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4")
    .then(response => {
    console.log(response);
    let commentArray = response.data;
    console.log(commentArray);

    const comments = document.querySelector(".comments");

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add("comments__container");
    comments.appendChild(commentsContainer);


//create container for comments and append it to comment section
    function displayComment (commentArray) {
        const dateOfcomment = new Date(commentArray.timestamp);
        var dateFormat = {
            year: "numeric",
            month: "2-digit",
            day: "numeric"
        };
        const commentArticle = document.createElement("article");
        commentArticle.classList.add ("comments__article");
        commentsContainer.appendChild(commentArticle);
    
        const avoDiv = document.createElement ("div");
        avoDiv.classList.add ("comments__avo");
        commentArticle.appendChild(avoDiv);
    
        const commentBox = document.createElement ("div");
        commentBox.classList.add ("comments__comment");
        commentArticle.appendChild(commentBox);
    
        const commentName = document.createElement ("p");
        commentName.classList.add("comments__name");
        commentBox.appendChild(commentName);
        commentName.innerText = commentArray.name;
    
        const commentDate = document.createElement ("p");
        commentDate.classList.add("comments__date");
        commentBox.appendChild(commentDate);
        commentDate.innerText = dateOfcomment.toLocaleDateString("en", dateFormat);
    
        const commentText = document.createElement ("p");
        commentText.classList.add("comments__text");
        commentBox.appendChild(commentText);
        commentText.innerText = commentArray.comment;
    } 
    for (let i = 0; i<commentArray.length; i++){
        displayComment(commentArray[i])
    };
});

/*
const commentForm = document.getElementById ('commentForm');
commentForm.addEventListener ('submit', function(event) {
    event.preventDefault();
    
    let nameField = document.querySelector('#name-text')
    let commentField = document.querySelector('#comment-text')
    commentsContainer.innerText = '';

    if ((nameField.value === '' || nameField.value == null) || 
        (commentField.value === '' || commentField.value == null)) {
        event.preventDefault();
        console.log("form is empty, Please fill-out the form");
        nameField.classList.add('error');
        commentField.classList.add('error');
    } 
    else {
        commentField.classList.remove('error');
        nameField.classList.remove('error');
        event.preventDefault();
        const dateNow = new Date();
        var dateFormat = {
            year: "numeric",
            month: "2-digit",
            day: "numeric"
        };
        //creating a new object and telling to construct it from the values of the form
        const newCommentEntry = {
            name: event.target.name.value,
            date: dateNow.toLocaleDateString("en", dateFormat),
            comment: event.target.comment.value
        };
        commentArray.unshift(newCommentEntry);
    } 
    for (let i = 0; i < commentArray.length; i++) {
        displayComment(commentArray[i]);
    };
    nameField.value = '';
    commentField.value = '';
    });
    
*/





/*
    btn.addEventListener("click", () => {
    const name = nameInput.value;
    const comment = commentInput.value;

    axios.post("https://reqres.in/api/login", {
        email: email,
        password: password
    })
    .then((response) => {
        console.log(response);
    });
});
*/


    
/*
// loop  through array of objects and append to journal-entries

// lForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const title = event.target.title.value;
//     const content = event.target.content.value;
//     if (title == '') {
//       console.log('title is empty');
//       return;
//     }
//     journalEntriesArray.push({
//       title,
//       content,
//     });
//     renderJournalEntries(); // loop  through array of objects and append to journal-entries
//   });
//commentsData(); //call the function so it doesnt reset with "";


// const imgElement = document.createElement("img");
// imgElement.classList.add('comment-fetched__img')
// imgElement.setAttribute('src="./assets/Images/avatarMercury.png"');
// function addComments(listObj) {
//     const card = document.createElement("div");
//     card.classList.add()

    
// }


// const form = document.querySelector('.comment-form');
// console.log(form);

// form.addEventListener('submit', (event) => {
//     event.preventDefault
//     console.log(event.target.name.value);
//     console.log(event.target.comment.value);
//     //pull the value from "name"

// });




// function addCardToMenu(menuObj) {
//     const card = document.createElement("div"); //creates new element div
//     card.classList.add("menu__card"); //assignes class to div created 
    
//     const item = document.createElement("div"); 
//     item.classList.add("menu__item");
//     item.innerText = menuObj.icon;
//     const price = document.createElement("div");
//     price.classList.add("menu__price");
//     price.innerText = `$ ${menuObj.price}`;
    
//     card.appendChild(item); //says that item is a direct child of card 
//     card.appendChild(price); //says that price is a direct child of card 
//     const menuElement = document.querySelector(".menu") //
//     menuElement.appendChild(card);

    
// }

// item.addEventListener("click", function (event) {
//     const cartItemsContainer = document.querySelector(".cart__items");
//     const cartElement = document.createElement("div"); //creates new element div
//     cartElement.classList.add("cart__item"); //assignes class to div created  
//     console.log(event.target);
//     cartElement.innerText = event.target.innerText;
//     cartItemsContainer.appendChild(cartElement);
// })    



// for (let i=0; i<menuItems.length; i++){
//     addCardToMenu(menuItems[i])
// }
// const conversationSection = [];
// //function buttonHandler
// const button = document.querySelector('.button');
// console.log(button); //to make sure we are getting the right elemente
// button.addEventListener('click', function(){
//     console.log('btn clicked')//to make sure is working,console triggered when clicked 
// }); //whenever we click this button we can have a function to run
//mouseover

//mouseout
//const imgDiv = document.createAttribute('div');
    //imgDiv.classList.add('comment-fetched__img-container')

    //const imgElement = document.createElement("img");
    //imgElement.classList.add('comment-fetched__img');
    //mgElement.setAttribute('src="./assets/Images/avatarMercury.png"');
    // create parent element
    //const box = document.createElement('div');
    // assign your css classes
    //box.classList.add('comment-fetched__box');
*/