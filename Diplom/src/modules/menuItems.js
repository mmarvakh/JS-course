const main = document.querySelector(".tc");

const menuItems = () => {
    const menuItems = main.querySelectorAll("span");

    menuItems.forEach((elem) => {
        const elemId = elem.querySelector("a");
              elemId.style.pointerEvents = "none";
              elem.style.cursor = "pointer";  
        
        elem.addEventListener("click", () => {
            const elemIdHref = elemId.getAttribute("href").slice(1),
                  blockId = document.getElementById(`${elemIdHref}`);
                  blockId.scrollIntoView({behavior: "smooth"});
        });
    });
};

export default menuItems;