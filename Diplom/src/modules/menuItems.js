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

        document.body.addEventListener("mousemove", (event) => {
            if (!event.target.closest(".main") || event.target.closest(".main") && event.target.closest(".two-mini")) {
                menuMini.style.display = "block";
            } else {
                menuMini.style.display = "none";
            }

            if (event.target.closest(".modal_offer") || event.target.closest(".modal_support")) {
                menuMini.style.display = "none";
            }
        });
    });
};

export default menuItems;