
const labels = ['date', 'venue', 'location'];

axios.get("https://project-1-api.herokuapp.com/showdates?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4").then(response => {
    let futureShows = response.data;
    
    const showsContainer = document.querySelector('.shows__container');
    //creating 3 <p> elements with class 'label' and nesting it within showsLabelDiv
    function addShows (featureShows) {
        const dateOfShow = new Date(featureShows.date);
        
        var dateFormat = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric"
        };
        //console.log(dateOfShow.toLocaleDateString("en".dateFormat));

        console.log(dateOfShow.toLocaleDateString("en", dateFormat));

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
        showDate.innerText = dateOfShow.toLocaleDateString("en", dateFormat);
    
        const labelVenue = document.createElement ('p');
        labelVenue.classList.add('label','shows__label');
        showsShow.appendChild(labelVenue);
        labelVenue.innerText = labels[1];
    
        const showVenue = document.createElement ('p');
        showVenue.classList.add('shows__venue');
        showsShow.appendChild(showVenue);
        showVenue.innerText = featureShows.place;
    
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
    };
    
    for (let i = 0; i<futureShows.length; i++){
        addShows(futureShows[i])
    };
    
    var show = document.querySelectorAll('.shows__show');
    console.log(show);
    
    show.forEach
    
    show.forEach(function(item) {
        item.addEventListener("click", function() {
            show.forEach(function(element) {
            element.classList.remove("active");
            });
            item.classList.add('active');
        })
    });
    });
