var checkBox = document.getElementById('js-checkbox')
checkBox.addEventListener('click', function () {
    if (checkBox.checked) {
        document.getElementById('js-moon').style.display = "none"
        document.getElementById('js-sun').style.display = "block"
        // var changeThemes =  document.querySelectorAll('.js-change')
        // for (var changeTheme of changeThemes){
        //    if(changeTheme.attributes['style'].textContent === "background-color: #fff;")
        //    changeTheme.attributes['style'].textContent='background-color: #100f19;' 
           
        // }
        var bgColors = document.querySelectorAll('.bg--white')
        for (var bgColor of bgColors) {
            bgColor.classList.remove('bg--white')
            bgColor.classList.add('bg--dark')
        }
        var textColors = document.querySelectorAll('.title--day')
        for (var textColor of textColors) {
            textColor.classList.remove('title--day')
            textColor.classList.add('title--night')
        }
        var textBodyColors = document.querySelectorAll('.text-body--day')
        for (var textBodyColor of textBodyColors) {
            textBodyColor.classList.remove('text-body--day')
            textBodyColor.classList.add('text-body--night')
        }
    } else {
        document.getElementById('js-moon').style.display = "block"
        document.getElementById('js-sun').style.display = "none"
        // var changeThemes =  document.querySelectorAll('.js-change')
        // for (var changeTheme of changeThemes){
        //    if(changeTheme.attributes['style'].textContent === "background-color: #100f19;")
        //    changeTheme.attributes['style'].textContent='background-color: #fff;'            
        // }
        var bgColors = document.querySelectorAll('.bg--dark')
        for (var bgColor of bgColors) {
            bgColor.classList.remove('bg--dark')
            bgColor.classList.add('bg--white')
        }
        var textColors = document.querySelectorAll('.title--night')
        for (var textColor of textColors) {
            textColor.classList.remove('title--night')
            textColor.classList.add('title--day')
        }
        var textBodyColors = document.querySelectorAll('.text-body--night')
        for (var textBodyColor of textBodyColors) {
            textBodyColor.classList.remove('text-body--night')
            textBodyColor.classList.add('text-body--day')
        }
    }
});

const changeTheme = (firstClass,nextClass) => {
    console.log(firstClass,nextClass,`'.${firstClass}'`);
    var colors = document.querySelectorAll(`'.${firstClass}'`)
    console.log(colors);
        for (var color of colors) {
            color.classList.remove(`'${firstClass}'`)
            color.classList.add(`'${nextClass}'`)
        }
}