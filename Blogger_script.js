window.addEventListener('DOMContentLoaded', () => {
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

  const thisScriptItself = document.querySelector("head &gt; script:nth-child(5)");

  if (thisScriptItself) {
    thisScriptItself.remove();
  } else {
    console.warn("Script not found!");
  }
});