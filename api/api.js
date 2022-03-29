//Art Institute of Chicago API 
function randomize(){
let pages = Math.floor(Math.random() * 9669); 
let reponse;
let url = "https://api.artic.edu/api/v1/artworks?page=" + pages
console.log(pages)

fetch(url)
.then(response => response.json())
.then(data => inHTML(data))
.catch(error => alert("Erreur : " + error));

function inHTML(data){
    let x = Math.floor(Math.random() * 12)
    document.getElementById("title").innerHTML=data.data[x].title
    document.getElementById("artist_display").innerHTML=data.data[x].artist_display
    document.getElementById("date_display").innerHTML=data.data[x].date_display
    document.getElementById("provenance_text").innerHTML=data.data[x].provenance_text
    document.getElementById("dimensions").innerHTML=data.data[x].dimensions
    document.getElementById("medium_display").innerHTML=data.data[x].medium_display
    document.getElementById("department_title").innerHTML=data.data[x].department_title
    document.getElementById("image").style.backgroundImage=`url("https://www.artic.edu/iiif/2/${data.data[x].image_id}/full/843,/0/default.jpg")`}
}
randomize()