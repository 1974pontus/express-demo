let cardContainer


let createGuitarCard = (guitar) => {

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let brand = document.createElement('h5');
    brand.innerText = 'Brand: ' + guitar.brand;
    brand.className = 'card-brand';

    let model = document.createElement('div');
    model.innerText = 'Model: ' + guitar.model;
    model.className = 'card-model';

    let pickups = document.createElement('div');
    pickups.innerText = 'Pickups: ' + guitar.pickups;
    pickups.className = 'card-pickups';

    let color = document.createElement('div');
    color.innerText = 'Color: ' + guitar.color;
    color.className = 'card-color';


    let year = document.createElement('div');
    year.innerText = 'Year: ' + guitar.year;
    year.className = 'card-year';


    cardBody.appendChild(brand);
    cardBody.appendChild(model);
    cardBody.appendChild(pickups);
    cardBody.appendChild(color);
    cardBody.appendChild(year);
    card.appendChild(cardBody);
    return card
}

let initListOfGuitars = (guitars) => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }
    
    cardContainer = document.getElementById('card-container');
    guitars.forEach((guitar) => {
        const card = createGuitarCard(guitar);
        cardContainer.appendChild(card);
    });
};



function getAllGuitars() {
    fetch("http://localhost:3000/api/guitars", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    })
        .then((response) => response.json())
        .then((guitars) => {
            console.log('success', guitars)
            initListOfGuitars(guitars);
        })
        .catch((error) => {
            console.error('Error', error)
        })
}

getAllGuitars()

function newGuitar() {
    let myForm = document.getElementById('myForm')
    let formData = new FormData(myForm);
    myForm.addEventListener('submit', function (e) {
        e.preventDefault()

        fetch("http://localhost:3000/api/guitars", {
            method: "POST",
            body: JSON.stringify(formData)
        }).then((response) => {
            return response.json()
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.error('Error', error)
        })
    })
}


newGuitar()


