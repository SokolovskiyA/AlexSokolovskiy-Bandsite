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
console.log(commentsArray)
const commentSection = document.querySelector(".comments")
    
const comments = document.createElement('div');
comments.classList.add("comments__container");
commentSection.appendChild(comments);

//creating 3 <p> elements with class 'label' and nesting it within showsLabelDiv

function addComment (commentsArray) {
    
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

for (let i = 0; i < commentsArray.length; i++) {
    addComment(commentsArray[i]);
}