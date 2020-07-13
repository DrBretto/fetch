const api_key="xXYB5iWKlTFFvL3MZKp6I1F9EnBeetqzhEB5wCiX";
const apiURL = "https://developer.nps.gov/api/v1/parks?stateCode="

let num = 10;


function main() {

    console.log("test")
    $("form").submit(event => {
        event.preventDefault();
        let search = $('#search').val(); 
       
        searchScreen(constructURL(search, num, api_key))  //, api_key);
    })
}

function searchScreen(url){
    
    console.log(url)
    fetch(url)
     .then (response => response.json())
     .then (response => display(response.data));

}

function display(arr){
    $("ul").empty();
    arr.forEach(element => {
        console.log(element);
        console.log(element.description);
        console.log(element.url);
        console.log(element.fullName);
        $("ul").append(`<li><p>${element.fullName}</p><p>${element.url}</p><br><p>${element.description}<br><br></li>`)
    });
    
    return 
}

function constructURL (search, limit, api){
    //magically put together string
    let URLString = `${apiURL}${search}&limit=${limit}&api_key=${api}`
    return URLString;

}




$(main)