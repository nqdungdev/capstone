var checkBox = document.getElementById('js-checkbox')
checkBox.addEventListener('click', function () {
    if (checkBox.checked) {
        document.getElementById('js-moon').style.display = "none"
        document.getElementById('js-sun').style.display = "block"
        changeBg("bg--white", "bg--dark")
        changeBg("bg--day", "bg--night")
        changeBg("bg--light", "bg--dark-1")
        changeText("title--day", "title--night")
        changeText("text-body--day", "text-body--night")
    } else {
        document.getElementById('js-moon').style.display = "block"
        document.getElementById('js-sun').style.display = "none"
        changeBg("bg--dark", "bg--white")
        changeBg("bg--night", "bg--day")
        changeBg("bg--dark-1", "bg--light")
        changeText("title--night", "title--day")
        changeText("text-body--night", "text-body--day")
    }
});

const changeBg = (prevClass, nextClass) => {
    var bgColors = document.querySelectorAll(`.${prevClass}`)
    for (var bgColor of bgColors) {
        bgColor.classList.remove(`${prevClass}`)
        bgColor.classList.add(`${nextClass}`)
    }
}
const changeText = (prevClass, nextClass) => {
    var colors = document.querySelectorAll(`.${prevClass}`)
    for (var color of colors) {
        color.classList.remove(`${prevClass}`)
        color.classList.add(`${nextClass}`)
    }
}

window.addEventListener("scroll", function () {
    var headerBg = this.document.getElementById('header');
    var headerTitles = this.document.getElementsByClassName('header__title');
    if (document.documentElement.scrollTop >= 50) {
        headerBg.style.height = "8rem";
        if (checkBox.checked) {
            headerBg.classList.add('bg--dark');
            for (var headerTitle of headerTitles) {
                headerTitle.classList.remove('title--day')
                headerTitle.classList.add('title--night')
            }
        } else {
            headerBg.classList.add('bg--white');
            for (var headerTitle of headerTitles) {
                headerTitle.classList.remove('title--night')
                headerTitle.classList.add('title--day')
            }
        }

    } else {
        headerBg.style.height = "10rem";
        headerBg.classList.remove('bg--white');
        headerBg.classList.remove('bg--dark');
        for (var headerTitle of headerTitles) {
            headerTitle.classList.remove('title--day')
            headerTitle.classList.add('title--night')
        }
        checkBox.addEventListener('click',function(){
        for (var headerTitle of headerTitles) {
            headerTitle.classList.remove('title--day')
            headerTitle.classList.add('title--night')
        }
        }) 
    }
});

//handle search button
var btnSearch = document.getElementById('js-search')
var btnClose = document.querySelector('.btn--close')
var searchForm = document.querySelector('.header__search__form')
btnSearch.addEventListener('click',function(){
    searchForm.style.visibility="initial"
    searchForm.style.opacity="1"
    document.querySelector('.header__search').classList.add('header__search--spread')  
})

btnClose.addEventListener('click',function(){
    searchForm.style.visibility="hidden"
    searchForm.style.opacity="0"
    document.querySelector('.header__search').classList.remove('header__search--spread')
})

var mybutton = document.querySelector(".backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// right-sidebar
const allSideBar = document.querySelector('.all-sidebar');
const buttonSideBar = document.querySelector('.button-sidebar');
buttonSideBar.addEventListener('click', function(){
    buttonSideBar.classList.toggle('animate-button');
    allSideBar.classList.toggle('animate-sidebar');
})
