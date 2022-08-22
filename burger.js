let burgerToggle = document.getElementById('burger');
        let burgerMenu = document.getElementById('burger-menu');
        burgerToggle.addEventListener("click", () => {
            burgerMenu.classList.toggle('expanded');
            console.log('toggled');
            burgerToggle.innerHTML == '<span class="material-icons">menu</span>' ? burgerToggle.innerHTML = '<span class="material-icons">close</span>' : burgerToggle.innerHTML = '<span class="material-icons">menu</span>';
    });