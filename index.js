const divForImg = document.getElementById("img-box");
// Enter your api key where it says YOUR_ACCESS_KEY
// Or for more security, store your keys in Google Secret Manager and setup a function to access the key
const requestOne = "https://api.unsplash.com/search/photos?page=1&query=&client_id=YOUR_ACCESS_KEY";
const requestTwo = "https://api.unsplash.com/search/photos?page=2&query=expensive-cars&client_id=YOUR_ACCESS_KEY"
function makeRequestToUnsplash(requestUrl){
  fetch(requestUrl)
    .then( res => res.json())
    .then((data) => {
    // We are actually using the returned data from the API here
    // data.results contains an array of objects so we can use an array method here to iterate
        data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });
    });
}
// The function createImage() below is a helper function used to generate an image tag for use in our web page
function createImage(imageObj){
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  // Styling for the elements
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "600px";
  image.style.height = "500px";
  image.style.border = "double 4px black"
  imageDiv.append(image);
  divForImg.append(imageDiv);
}
// Each call to makeRequestToUnsplash() returns data with 10 images in it
// So I make two calls to it to get 20 images to populate the page with images
makeRequestToUnsplash(requestOne);
makeRequestToUnsplash(requestTwo);
