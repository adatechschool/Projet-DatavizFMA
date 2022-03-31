//Art Institute of Chicago API
function randomize() {
  let pages = Math.floor(Math.random() * 50);
  let url = "https://api.artic.edu/api/v1/artworks?page=" + pages;
  console.log(pages);

  fetch(url)
    .then((response) => response.json())
    .then((data) => inHTML(data.data[x]))
    .catch((error) => alert("Erreur : " + error));

    let x = Math.floor(Math.random() * 12);
}



function inHTML(data) {
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("artist_display").innerHTML =
    data.artist_display;
  document.getElementById("date_display").innerHTML =
    data.date_display;
  document.getElementById("provenance_text").innerHTML =
    data.provenance_text;
  document.getElementById("dimensions").innerHTML = data.dimensions;
  document.getElementById("medium_display").innerHTML =
    data.medium_display;
  document.getElementById("department_title").innerHTML =
    data.department_title;
  document.getElementById(
    "image"
  ).style.backgroundImage = `url("https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg")`;
}

//randomize();

async function filterResults(department) {
  let array = [];
  for (let p = 1; p <= 10; p++) {
    let url = "https://api.artic.edu/api/v1/artworks?page=" + p;
    console.log(p);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => array = array.concat(createArray(data)))
      .catch((error) => alert("Erreur : " + error));

    function createArray(data) {
      //console.log(data)
      let tmp = []; 
      for (let i = 0; i <= 11; i++) {
        //console.log(data[i])
        let dpt = data.data[i].department_title;
        if (dpt == department) {
          console.log(data.data[i].id)
          tmp.push(data.data[i].id);
        }
      }
      return tmp;
    }
  }

setTimeout(() => {
  console.log("coucou")
  let l = array.length;
  let rst = Math.floor(Math.random() * l);
  let url2 = "https://api.artic.edu/api/v1/artworks/" + array[rst];
  console.log(url2);

  fetch(url2)
  .then((response) => response.json())
  .then((dataDepartment) => inHTML(dataDepartment.data));
}, 3000)

}

filterResults("Textiles");

//MENU BURGER
let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close")
  overlay.classList.toggle("overlay")
});

burgerMenu.addEventListener('click', function() {

})