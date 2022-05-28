//Navigation slide in mobile

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

//-> when someone clicks the hamburger menu
navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");
    if(visiblity === "false"){
        //-> if the menu is closed, open it
        nav.setAttribute("data-visible", true )

        navToggle.setAttribute("aria-expanded", true);
    } else {
        //-> if the menu is open, close it
        nav.setAttribute("data-visible", false )

        navToggle.setAttribute("aria-expanded", false);


    }

})