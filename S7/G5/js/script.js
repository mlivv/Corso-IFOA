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

const params = new URLSearchParams(location.search)
    const id = params.get("id")

window.onload = getProducts();

//per bottone 'salva'

async function sendData(){
    const newRecord = {
       "name": document.getElementById('inputName').value,
       "brand": document.getElementById('inputBrand').value,
       "description": document.getElementById('inputDescription').value,
       "price": document.getElementById('inputPrice').value,
       "imageUrl": document.getElementById('inputImageUrl').value,
    }
    let response = await fetch(url, {
       headers: headers,
       body: JSON.stringify(newRecord)
    })
   }

function createCards(products){
    let row = document.getElementById('row');
    row.innerHTML = "";
    
    products.forEach(element => {
        let newRow = `
        <div class="col-4">
            <div class="card mb-4 shadow-sm">
            <img src="https://img.gkbcdn.com/p/2019-01-14/nokia-3110-2-4-inch-mini-phone-blue-1571972672478._w500_p1_.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.name} - ${element.brand}</h5>
                    <p class="card-text">${element.description}</p>
                    <p class="card-text small ">${element.price} Euro</p>
                    <a href="./details.html" class="btn btn-info" role="button">Dettagli prodotto</a>
                </div>
            </div>
        </div>
        `

        row.innerHTML += newRow;
    });
}
