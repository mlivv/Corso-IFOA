const url = "https://api.pexels.com/v1/search?query=cat";
const key = "Bearer Z5YuCFoFWdjQLs1E9fLuJPY42GV6HjedokJut9xDuIlds4XfwStYCsYl ";
const headers = {
    "Authorization": key,
    "Accept": "application/json",
    "Content-Type": "application/json"
};

let pictures = [];


function getPictures (query){
    fetch(url + query, {
        headers: headers,
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            createCards(data.photos)
    }) 
}

/*
const getPictures = (query) => {
    fetch(url + query, {
        headers: headers,
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            createCards(data.photos)
    }) 

    .catch(error =>{
    console.log('error');
    })
};
*/

function createCards(photos){
    let row = document.getElementById("imgRow");
    row.innerHTML = "";
    photos.forEach(element => {
        let newCol = `<div class="card mb-4 shadow-sm">
        <img src=${element.src.small} style="width:100%">
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>`
      row.innerHTML += newCol;
    })
};




/*
data.forEach(photo => {
        console.log(photo);
    });




const inserisciImmagini = () => {
    const datiImmagini = {
        "picture": document.getElementsByClassName('imgUrl').value,
    }
    fetch(url, {
        headers: headers,
        })
        .then((data) => {
            response.json()
    })
}

console.log(inserisciImmagini())
*/