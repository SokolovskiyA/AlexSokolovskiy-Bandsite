
const labels = ['date', 'venue', 'location'];
const futureShows = [{ 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
];
    
const showsContainer = document.querySelector('.shows__container');


//creating 3 <p> elements with class 'label' and nesting it within showsLabelDiv

function addShows (featureShows) {
    //creating a new div within shows-container with class 'shows__show'
    const showsShow = document.createElement("div");
    showsShow.classList.add("shows__Show");
    showsContainer.appendChild(showsShow);

    for (let i=0; i<labels.length; i++){
        const labelParagraph = document.createElement ('p');
        labelParagraph.classList.add('label','shows__label');
        showsShow.appendChild(labelParagraph);
        labelParagraph.innerText = labels[i];
    };

    const showDate = document.createElement ('p');
    showDate.classList.add('shows__date');
    showsShow.appendChild(showDate);
    showDate.innerText = featureShows.date;

    const showVenue = document.createElement ('p');
    showVenue.classList.add('shows__venue');
    showsShow.appendChild(showVenue);
    showVenue.innerText = featureShows.venue;

    const showLocation = document.createElement ('p');
    showLocation.classList.add('shows__location');
    showsShow.appendChild(showLocation);
    showLocation.innerText = featureShows.location;

    const button = document.createElement("button");
    button.classList.add('button-link');
    button.innerText = 'buy tickets';
    showsShow.appendChild(button);
}



for (let i=0; i<futureShows.length; i++){
    addShows(futureShows[i])
}
