const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDBkZDBkOGEyMDAwMThhNDhhNGQiLCJpYXQiOjE3MDE5NTc4NTQsImV4cCI6MTcwMzE2NzQ1NH0.W38iUAXjebNLy9CvXSaKb68lfzl8WCW3RC8HOAltgDY";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let products = [];

function getProducts() {
    fetch(url, {
        headers: headers,
        }
    )
    .then(response => response.json())
    .then((data) => {
        products = data;
        createCards(data);
        console.log(data);
    })
}

const params = new URLSearchParams(location.search);
const id = params.get("id");

const showDetailsProduct = () =>{
    fetch(url + id, {
        headers: headers,
    })
.then(res => res.json())
.then(data => populateForm(products, data))
};

function populateForm(products){
    const form = document.getElementById('form');
    form.innerHTML = "";

    products.forEach(element => {
        `
        <div class=p-5>
            <h5>Nome prodotto: ${data.name}</h5>
            <p>Descrizione: ${data.description}</p>
            <p>Brand: ${data.brand}</p>
            <p>Prezzo: ${data.price}€</p>
        </div>
        `
        form.innerHTML += newForm;
    });  
    };

window.onload = showDetailsProduct();

// niente prof, ho fatto del mio meglio D: 