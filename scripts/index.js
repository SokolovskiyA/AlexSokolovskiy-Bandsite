
//create array of objects containing comments information
const commentsArray = [{ 
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    { 
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    { 
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: 'I can`t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can`t get enough.',
    },
];

//grab the container for comment section
const commentSection = document.querySelector(".comments")
    
//create container for comments and append it to comment section
const comments = document.createElement('div');
comments.classList.add("comments__container");
commentSection.appendChild(comments);

//grab comment form from by id
const commentForm = document.getElementById ('commentForm');


//create a comment and by grabbing matching values from array of objects
function displayComment (commentsArray) {
    
    const commentArticle = document.createElement("article");
    commentArticle.classList.add ("comments__article");
    comments.appendChild(commentArticle);

    const avoDiv = document.createElement ("div");
    avoDiv.classList.add ("comments__avo");
    commentArticle.appendChild(avoDiv);

    const commentBox = document.createElement ("div");
    commentBox.classList.add ("comments__comment");
    commentArticle.appendChild(commentBox);

    const commentName = document.createElement ("p");
    commentName.classList.add("comments__name");
    commentBox.appendChild(commentName);
    commentName.innerText = commentsArray.name;

    const commentDate = document.createElement ("p");
    commentDate.classList.add("comments__date");
    commentBox.appendChild(commentDate);
    commentDate.innerText = commentsArray.date;

    const commentText = document.createElement ("p");
    commentText.classList.add("comments__text");
    commentBox.appendChild(commentText);
    commentText.innerText = commentsArray.comment;
}   

//creating an event 'submit' from the form to set up action on thу click
commentForm.addEventListener ('submit', function(event) {
    //grab text and commetn field by id
    let nameField = document.querySelector('#name-text')
    let commentField = document.querySelector('#comment-text')
    //clear up the commetn section
    comments.innerText = '';

    // 
    if ((nameField.value === '' || nameField.value == null) || (commentField.value === '' || commentField.value == null)) {
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
        commentsArray.unshift(newCommentEntry);
    } 
    for (let i = 0; i < commentsArray.length; i++) {
        displayComment(commentsArray[i]);
    };
    nameField.value = '';
    commentField.value = '';
});

for (let i = 0; i < commentsArray.length; i++) {
    displayComment(commentsArray[i]);
};


