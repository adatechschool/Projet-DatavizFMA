//Art Institute of Chicago API
function randomize() {
  let pages = Math.floor(Math.random() * 50);
  let url = "https://api.artic.edu/api/v1/artworks?page=" + pages;
  console.log(pages);

  fetch(url)
    .then((response) => response.json())
    .then((data) => inHTML(data))
    .catch((error) => alert("Erreur : " + error));

    let x = Math.floor(Math.random() * 12);

  function inHTML(data) {
    document.getElementById("title").innerHTML = data.data[x].title;
    document.getElementById("artist_display").innerHTML =
      data.data[x].artist_display;
    document.getElementById("date_display").innerHTML =
      data.data[x].date_display;
    document.getElementById("provenance_text").innerHTML =
      data.data[x].provenance_text;
    document.getElementById("dimensions").innerHTML = data.data[x].dimensions;
    document.getElementById("medium_display").innerHTML =
      data.data[x].medium_display;
    document.getElementById("department_title").innerHTML =
      data.data[x].department_title;
    document.getElementById(
      "image"
    ).style.backgroundImage = `url("https://www.artic.edu/iiif/2/${data.data[x].image_id}/full/843,/0/default.jpg")`;
  }
}
randomize();

async function filterResults(department) {
  let array = [];
  for (let p = 1; p <= 10; p++) {
    let url = "https://api.artic.edu/api/v1/artworks?page=" + p;
    console.log(p);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => createArray(data))
      .catch((error) => alert("Erreur : " + error));

    function createArray(data) {
      for (let i = 0; i <= 11; i++) {
        //console.log(data[i])
        let dpt = data.data[i].department_title;
        if (dpt == department) {
          array.push(data.data[i].id);
        }
      }
    }
  }

  let l = array.length;
  let rst = Math.floor(Math.random() * l);
  let url2 = "https://api.artic.edu/api/v1/artworks/" + array[rst] 
  
  fetch(url2)
  .then((response) => response.json())
  .then ((data) => inHTML(data));

}
filterResults("Textiles");

//Reprendre url id et afficher les infos
