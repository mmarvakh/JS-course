const toggleMenu = () => {
    const menu = document.querySelector("menu"),
          menuItems = menu.querySelectorAll("ul>li"),
          bodyContainer = document.body;

    const handlerMenu = () => {
        menu.classList.toggle("active-menu");           
    ;}

    const handlerMenuExtra = () => {
        if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            menu.style.transform = `translate(0)`;
        } else {
            menu.style.transform = `translate(-100%)`;
        }
    };

    const checkHandler = () => {
        if (document.documentElement.offsetWidth < 768) {
            handlerMenuExtra();
        } else {
            handlerMenu();
        }
    }

    bodyContainer.addEventListener("click", (event) => {
        let targetMenuOpen = event.target,
            targetMenuSpace = event.target,
            targetMenuClose = event.target,
            target = event.target;

            targetMenuOpen = targetMenuOpen.closest(".menu");
            targetMenuClose = targetMenuClose.closest(".close-btn");
            targetMenuSpace = document.querySelector("menu");

        if (targetMenuOpen) {
            checkHandler();
        } else if (targetMenuClose) {
            checkHandler();
        } else if (targetMenuSpace !== target && menu.classList.contains("active-menu")) {
            checkHandler();
        }
    });

    // Плавный переход из меню к элементам
    menuItems.forEach((elem) => {
        let elemId = elem.querySelector("a");
            elemId.style.pointerEvents = "none";
            elem.style.cursor = "pointer";
        elem.addEventListener("click", () => {
            checkHandler();
            let elemIdHref = elemId.getAttribute("href").slice(1);
            let blockId = document.getElementById(`${elemIdHref}`);
                blockId.scrollIntoView({behavior: "smooth"});
        });
    });
};

export default toggleMenu;