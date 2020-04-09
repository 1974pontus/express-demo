let cardContainer

const guitars = [
    {
        id: 1,
        brand: "Gibson",
        model: "Les paul",
        pickups: "Humbucker",
        color: "Goldtop",
        year: 1958
    },
    {
        id: 2,
        brand: "Gibson",
        model: "Explorer",
        pickups: "Humbucker",
        color: "Corina",
        year: 1976
    },
    {
        id: 3,
        brand: "Fender",
        model: "Stratocaster",
        pickups: "Single coil",
        color: "Fiesta red",
        year: 1962
    },
    {
        id: 5,
        brand: "Mosrite",
        model: "Mark 1",
        pickups: "Smooth",
        color: "White Pearloid",
        year: 1964
    }
]

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
    cardContainer.appendChild(card);
  
  }
  let initListOfGuitars = () => {
    if (cardContainer) {
      document.getElementById('card-container').replaceWith(cardContainer);
      return;
    }
  
    cardContainer = document.getElementById('card-container');
    guitars.forEach((guitar) => {
        createGuitarCard(guitar);
    });
  };

  initListOfGuitars();