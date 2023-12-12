async function getJson(){
    try{
        const response = await fetch(url)
        const json = await response.json()
    } catch (error){
        console.log('error')
    }
}

