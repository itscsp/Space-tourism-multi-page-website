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

// tabs functionaality

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown',changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
})



let tabFocus = 0;
function changeTabFocus(e){
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1
    if(e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1)
        tabs[tabFocus].setAttribute("aria-selected",false);
    }

    // if the right key is pushed, move to the next tab on the right

    if(e.keyCode === keydownRight){
        tabFocus++;
        if(tabFocus >= tabs.length) {
            tabFocus=0;
        }

    } else if(e.keyCode === keydownLeft){// if the left key is pushed, move to the next on the left
        tabFocus--;
        if(tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }

    }


    tabs[tabFocus].setAttribute("aria-selected",true);
    tabs[tabFocus].setAttribute("tabindex", 0)
    tabs[tabFocus].focus();
}

function changeTabPanel(e) {
    const targetBtn = e.target;

    const targetPanel = targetBtn.getAttribute('aria-controls');
    const targetImage = targetBtn.getAttribute('data-image');


    const tabContainer = targetBtn.parentNode;
    const mainContainer = tabContainer.parentNode;


    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected",false);

    targetBtn.setAttribute("aria-selected",true);

    // mainContainer
    //     .querySelectorAll('[role="tabpanel"]')
    //     .forEach((panel) => panel.setAttribute('hidden', true));

    // mainContainer
    //     .querySelectorAll('[role="imageTag"]')
    //     .forEach((image) => image.setAttribute('hidden', true));

    // # here we created a function which simple things
    hideContent(mainContainer, '[role="tabpanel"]')
    hideContent(mainContainer,'[role="imageTag"]')

    // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden')
    // mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden')

    showContent(mainContainer,targetPanel);
    showContent(mainContainer,targetImage);
}

function hideContent(parent, content) {
    parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute('hidden', true));
}


function showContent(parent, content){
    parent.querySelector([`#${content}`]).removeAttribute('hidden')
}