/* fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", { 
headers: { 
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDBkZDBkOGEyMDAwMThhNDhhNGQiLCJpYXQiOjE3MDE5NTc4NTQsImV4cCI6MTcwMzE2NzQ1NH0.W38iUAXjebNLy9CvXSaKb68lfzl8WCW3RC8HOAltgDY" 
} 
})
*/

const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDBkZDBkOGEyMDAwMThhNDhhNGQiLCJpYXQiOjE3MDE5NTc4NTQsImV4cCI6MTcwMzE2NzQ1NH0.W38iUAXjebNLy9CvXSaKb68lfzl8WCW3RC8HOAltgDY";

let products = [];

const getRecords = () => {
    fetch(url, {
        headers: {
            "Authorization": token,
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(data);
        handleModalData(data);
    })
}

function createTable(data) {
    const table = document.querySelector("tbody");
    table.innerHTML = "";

    data.forEach(element => {
        let newRow = `
            <tr>
            <th>${element._id}</th>
            <td>${element._name}</td>
            <td>${element._description}</td>
            <td>${element._price}</td>
            <td>${element._imageUrl.substr(0,40)}</td>
            <td class="d-flex justify-content-end">
                <button type="button" class="btn btn-sm btn-outline-primary mx-1" data-bs-toggle="modal"
                data-bs-target="#productDetails">Dettagli</button>
                <button type="button" class="btn btn-sm btn-outline-warning mx-1" data-bs-toggle="modal"
                data-bs-target="#productDetails">Modifica</button>
                <button type="button" class="btn btn-sm btn-outline-danger mx-1" data-bs-toggle="modal"
                data-bs-target="#productDetails">Elimina</button>
            </td>
            </tr>
        `
        table.innerHTML += newRow;
    });
}

function handleModalData(id, action){
    const data = await getRecords(id);
    console.log(data);
    action !== "edit"
    ? document.getElementById('buttonSave').style.display = 'none'
    : document.getElementById('buttonSave').style.display = 'block';    
    document.getElementById('productDetails').innerText= "Dettagli prodotto " + data.name 
    document.getElementById('inputName').value = data.name;
    document.getElementById('inputPrice').value = data.price;
    document.getElementById('inputDescription').value = data.description;
    document.getElementById('inputBrand').value = data.brand;
    document.getElementById('inputImageUrl').value = data.imageUrl;
    document.getElementById('productPhoto').src = data.imageUrl;
    document.getElementById('productPhoto').alt = "Immagine del prodotto " + data.name;
}
window.onload = () => {
    getRecords();
}

