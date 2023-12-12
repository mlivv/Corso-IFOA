const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDBkZDBkOGEyMDAwMThhNDhhNGQiLCJpYXQiOjE3MDE5NTc4NTQsImV4cCI6MTcwMzE2NzQ1NH0.W38iUAXjebNLy9CvXSaKb68lfzl8WCW3RC8HOAltgDY";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let products = [];

async function getProducts(){
    try{
        const response = fetch(url,{
            // method:"GET",
            headers:headers
        })
        .then(
            (data)=> {console.log(data)},
            (error)=> {console.log(error)}
            )
       //   const data = await response.json();    
  //      console.log(data);
    } catch(error){
        console.log(error);
    }
};
console.log(getProducts());

/*
function getProducts(){
    fetch(url),{
        headers: headers,
    }
    .then(
        (response => response.json())
    )
    .then ((data))
}
/*
console.log(getProducts("product"));
function createCards(products){
    let row = document.querySelector('row');
    row.innerHTML = "";
}
*/