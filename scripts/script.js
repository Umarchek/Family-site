window.addEventListener('load', function (e) {
    const changeMap = document.querySelector(".section-big-maps-buttons")
    const map = document.querySelector('.map')


    changeMap.addEventListener('click', function () {
        toggle()
    })
    function toggle(){
        if(map.classList.contains('ChangedMap')){
            map.classList.remove("ChangedMap")
        }else{
            map.classList.add("ChangedMap")
        }
    }
});