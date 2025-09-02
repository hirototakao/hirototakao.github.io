const searchBox = document.querySelector("#BlogSearch1 > div > form > div > input");
const searchButton = document.querySelector("#BlogSearch1 > div > form > label > svg");
      
document.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    if(!searchBox.value) {
      event.preventDefault();
    } else {
      return;
    }
  } else {
    return;
  }
});
        
searchButton.addEventListener("click", (event) => {
  if(!searchBox.value) {
    event.preventDefault();
  } else {
    return;
  }
});