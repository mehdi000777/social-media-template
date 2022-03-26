const menu_item = document.querySelectorAll(".menu-item");
const notifications_popup = document.querySelector(".notifications-popup");
const notifications_count = document.querySelector(".notifications-count");
const messages = document.querySelector(".messages");
const customize_theme = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colors = document.querySelectorAll(".choose-color span");
const backgrounds = document.querySelectorAll(".choose-bg div");
const message = document.querySelectorAll(".message");
const searchBar = document.querySelector(".messages #message-search")
const root = document.querySelector(":root");


const changeActiveItem = () => {
    menu_item.forEach(item => {
        item.classList.remove("active");
    })
}

menu_item.forEach(item => {
    item.addEventListener("click", function () {
        changeActiveItem();
        item.classList.add("active");
        if (item.id !== "notifications") {
            notifications_popup.style.display = "none";
        }
        else {
            notifications_popup.style.display = "block";
            notifications_count.style.display = "none";
        }

        if (item.id === "message-notifications") {
            messages.style.boxShadow = "0 0 1rem hsl(252, 75%, 60%)"
            document.querySelector("#message-notifications .notifications-count").style.display = "none";
            setTimeout(() => {
                messages.style.boxShadow = "none";
            }, 2000);
        }

        if (item.id === "theme") {
            customize_theme.style.display = "flex";
        }
    })
})

customize_theme.addEventListener("click", function (e) {
    if (e.target.classList.contains("customize-theme")) {
        customize_theme.style.display = "none";
        changeActiveItem();
    }
})

const changeActiveFontSize = () => {
    fontSizes.forEach(item => {
        item.classList.remove("active");
    })
}

fontSizes.forEach(item => {
    let size;

    item.addEventListener("click", function () {
        if (item.classList.contains("font-size-1")) {
            size = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem")
            root.style.setProperty("--sticky-top-right", "5.4rem")
        }
        else if (item.classList.contains("font-size-2")) {
            size = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem")
            root.style.setProperty("--sticky-top-right", "-7rem")
        }
        else if (item.classList.contains("font-size-3")) {
            size = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem")
            root.style.setProperty("--sticky-top-right", "-17rem")
        }
        else if (item.classList.contains("font-size-4")) {
            size = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem")
            root.style.setProperty("--sticky-top-right", "-25rem")
        }
        else if (item.classList.contains("font-size-5")) {
            size = "22px";
            root.style.setProperty("--sticky-top-left", "-12rem")
            root.style.setProperty("--sticky-top-right", "-35rem")
        }

        changeActiveFontSize();
        item.classList.add("active");

        document.querySelector("html").style.fontSize = size;
    })

})

const changeActiveColor = () => {
    colors.forEach(item => {
        item.classList.remove("active");
    })
}

colors.forEach(item => {
    item.addEventListener("click", function () {
        changeActiveColor();
        item.classList.add("active");

        let primary;

        if (item.classList.contains("color-1")) {
            primary = "252";
        }
        else if (item.classList.contains("color-2")) {
            primary = "52";
        }
        else if (item.classList.contains("color-3")) {
            primary = "352";
        }
        else if (item.classList.contains("color-4")) {
            primary = "152";
        }
        else if (item.classList.contains("color-5")) {
            primary = "202";
        }

        root.style.setProperty("--primary-hue", primary)
    })
})

const changeActiveBg = () => {
    backgrounds.forEach(item => {
        item.classList.remove("active");
    })
}

backgrounds.forEach(item => {
    item.addEventListener("click", function () {
        changeActiveBg();
        item.classList.add("active");

        let white;
        let dark;
        let light;

        if (item.classList.contains("bg-1")) {
            dark = "17%"
            white = "100%"
            light = "95%"
        }
        else if (item.classList.contains("bg-2")) {
            dark = "95%"
            white = "20%"
            light = "15%"
        }
        else if (item.classList.contains("bg-3")) {
            dark = "95%"
            white = "10%"
            light = "0%"
        }

        root.style.setProperty("--light-lightnes", light)
        root.style.setProperty("--dark-lightnes", dark)
        root.style.setProperty("--white-lightnes", white)
    })
})

searchBar.addEventListener("keyup", (e) => {
    const val = e.target.value.toLowerCase();
    message.forEach(item => {
        let name = item.querySelector("h5").textContent.toLowerCase();

        if (name.includes(val)) {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }
    })
})