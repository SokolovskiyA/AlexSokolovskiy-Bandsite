
const labels = ['date', 'venue', 'location'];
const futureShows = [{ 
        date: 'Mon Sept 06 2021',
        venue: 'Roland Lane',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Fri Nov 26 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA',
    },
    { 
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA',
    },
];
    
const showsContainer = document.querySelector('.shows__container');


//creating 3 <p> elements with class 'label' and nesting it within showsLabelDiv

function addShows (featureShows) {
    
    const showsShow = document.createElement("div");
    showsShow.classList.add("shows__show");
    showsContainer.appendChild(showsShow);

    const labelDate = document.createElement ('p');
    labelDate.classList.add('label','shows__label');
    showsShow.appendChild(labelDate);
    labelDate.innerText = labels[0];

    const showDate = document.createElement ('p');
    showDate.classList.add('shows__date');
    showsShow.appendChild(showDate);
    showDate.innerText = featureShows.date;

    const labelVenue = document.createElement ('p');
    labelVenue.classList.add('label','shows__label');
    showsShow.appendChild(labelVenue);
    labelVenue.innerText = labels[1];

    const showVenue = document.createElement ('p');
    showVenue.classList.add('shows__venue');
    showsShow.appendChild(showVenue);
    showVenue.innerText = featureShows.venue;

    const labelLocation = document.createElement ('p');
    labelLocation.classList.add('label','shows__label');
    showsShow.appendChild(labelLocation);
    labelLocation.innerText = labels[2];

    const showLocation = document.createElement ('p');
    showLocation.classList.add('shows__location');
    showsShow.appendChild(showLocation);
    showLocation.innerText = featureShows.location;

    const button = document.createElement("button");
    button.classList.add('button-link');
    button.innerText = 'buy tickets';
    showsShow.appendChild(button);
}

for (let i = 0; i<futureShows.length; i++){
    addShows(futureShows[i])
}