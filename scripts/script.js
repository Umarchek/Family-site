window.addEventListener('load', function (e) {
    const changeMap = document.querySelector(".section-big-maps-buttons")
    const map = document.querySelector('.map')
    const logo = document.querySelector('.section-big-maps-logo')

    changeMap.addEventListener('click', function () {
        toggle()
    })
    function toggle() {
        map.classList.add("ChangedMap")
        logo.style.display = 'block';
        changeMap.style.display = 'none';
    }

    logo.addEventListener('click', function () {
        doggle()
    })
    function doggle() {
        map.classList.remove("ChangedMap")
        changeMap.style.display = 'block';
        logo.style.display = 'none';
    }

});