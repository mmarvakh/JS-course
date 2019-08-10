const menuItems = () => {
    const menu = document.querySelectorAll(".tc"),
          menuMini = document.querySelector(".two-mini");

    menu.forEach((elem) => {
        const menuItems = elem.querySelectorAll("span");

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

        

        window.addEventListener("scroll", () => {
            if (pageYOffset < 250) {
                menuMini.style.display = "none";
            } else {
                menuMini.style.display = "block";
            }
        });
    });
};

export default menuItems;