const displayContent = (()=> {

    const divContainer = () =>{
        const container = document.querySelector("#content");

        const elementContainer = document.createElement("div");
        elementContainer.classList.add("elementContainer");


        const title = document.createElement("h1");
        title.textContent = "Kadhai Kitchen";
        container.appendChild(elementContainer);
        elementContainer.appendChild(title);
    };

    return {divContainer};

})();



export {displayContent};