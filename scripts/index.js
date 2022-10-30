
const comments = document.querySelector(".comments");
const commentsContainer = document.createElement('div');
commentsContainer.classList.add("comments__container");
comments.appendChild(commentsContainer);


function displayComment (commentArray, commentsContainer) {

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
    
    const likeDeleteDiv = document.createElement('div');
    commentArticle.appendChild(likeDeleteDiv);
    likeDeleteDiv.classList.add("like-delete");

    const like = document.createElement("img");
    like.classList.add("like-button");
    like.src = "../assets/icons/SVG/icon-like.svg";
    likeDeleteDiv.appendChild(like);
    like.setAttribute('id', commentArray.id);

    const likeCount = document.createElement("p");
    like.classList.add("like-count");
    likeDeleteDiv.appendChild(likeCount);
    likeCount.innerText = commentArray.likes;

    like.addEventListener("click", (event)=>{
        likeCount.innerText = Number(likeCount.innerText)+1;
        console.log(event.target.id);
        axios
        .put(`https://project-1-api.herokuapp.com/comments/${event.target.id}/like?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`, `${likeCount}`)
        .then( response => {
            console.log(response)
        });
    });
    const commentDelete = document.createElement("img");
    commentDelete.classList.add("delete-button");
    commentDelete.src = "../assets/icons/SVG/icon-delete.svg";
    likeDeleteDiv.appendChild(commentDelete);
    commentDelete.setAttribute('id', commentArray.id);

    
    commentDelete.addEventListener("click", (event)=>{
    console.log(event.target.id);
    axios
    .delete(`https://project-1-api.herokuapp.com/comments/${event.target.id}?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`)
    .then( answer => {
        console.log(answer);
        getComments(commentsContainer)
    });
});
}

function getComments(commentsContainer) {
    axios
        .get("https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4")
        .then(response => {
        let commentArray = response.data;
        

        commentArray.sort(function(x, y){
            return y.timestamp - x.timestamp;
        });
        commentsContainer.innerText = '';
        for (let i = 0; i < commentArray.length; i++) {
            displayComment(commentArray[i], commentsContainer);
        };
    })
    .catch(error => {
        console.log("error")
    });
}

getComments(commentsContainer);


const commentForm = document.getElementById ('commentForm');

commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameField = document.querySelector('#name-text');
    let commentField = document.querySelector('#comment-text');

    if ((nameField.value === '' || nameField.value == null) || 
        (commentField.value === '' || commentField.value == null)) {
        event.preventDefault();
        console.log("form is empty, Please fill-out the form");
        nameField.classList.add('error');
        commentField.classList.add('error');
    } 
    else {
        let commentsContainer = document.querySelector(".comments__container");
        commentsContainer.innerText = '';
        const name = event.target.name.value;
        const comment = event.target.comment.value;

        const newComment = {
            name: name,
            comment: comment
        };

        console.log(newComment)
        axios 
            .post ("https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4", newComment)
            .then((response) => {
                console.log(response)
                getComments(commentsContainer)
            })
            .catch((error) => console.log(error)); 

    }
    nameField.value = '';
    commentField.value = '';
});