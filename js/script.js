var checkBox = document.getElementById('js-checkbox')
checkBox.addEventListener('click', function () {
    if (checkBox.checked) {
        document.getElementById('js-moon').style.display = "none"
        document.getElementById('js-sun').style.display = "block"
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
    } else {
        document.getElementById('js-moon').style.display = "block"
        document.getElementById('js-sun').style.display = "none"
        // changeTheme("bg--dark","bg--white");
        // changeTheme("title--night","title--day");
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