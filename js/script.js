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
        // var bgColors = document.querySelectorAll('.bg--white')
        // for (var bgColor of bgColors) {
        //     bgColor.classList.remove('bg--white')
        //     bgColor.classList.add('bg--dark')
        // }
        changeBg("bg--white","bg--dark")
        changeText("title--day","title--night")
        changeText("text-body--day","text-body--night")
    } else {
        document.getElementById('js-moon').style.display = "block"
        document.getElementById('js-sun').style.display = "none"
        // var changeThemes =  document.querySelectorAll('.js-change')
        // for (var changeTheme of changeThemes){
        //    if(changeTheme.attributes['style'].textContent === "background-color: #100f19;")
        //    changeTheme.attributes['style'].textContent='background-color: #fff;'            
        // }
        // var bgColors = document.querySelectorAll('.bg--dark')
        // for (var bgColor of bgColors) {
        //     bgColor.classList.remove('bg--dark')
        //     bgColor.classList.add('bg--white')
        // }
        changeBg("bg--dark","bg--white")
        changeText("title--night","title--day")
        changeText("text-body--night","text-body--day")
    }
});

const changeBg = (prevClass,nextClass) => {
    var bgColors = document.querySelectorAll(`.${prevClass}`)
    console.log(bgColors);
        for (var bgColor of bgColors) {
            console.log(bgColor);
            bgColor.classList.remove(`${prevClass}`)
            bgColor.classList.add(`${nextClass}`)
        }
}
const changeText = (prevClass,nextClass) => {
    var colors = document.querySelectorAll(`.${prevClass}`)
    console.log(colors);
        for (var color of colors) {
            console.log(color);
            color.classList.remove(`${prevClass}`)
            color.classList.add(`${nextClass}`)
        }
}


window.addEventListener("scroll", function () {
    var headerBg = this.document.getElementById('header');
    var headerTitles = this.document.getElementsByClassName('header__title');
  if(pageYOffset>=50){
       headerBg.style.height="8rem";
      if(!checkBox.checked){
        headerBg.classList.add('bg--white');
        for(var headerTitle of headerTitles){
        headerTitle.classList.remove('title--night')
        headerTitle.classList.add('title--day')}
      } else {
        headerBg.classList.add('bg--dark');
        for(var headerTitle of headerTitles){
        headerTitle.classList.remove('title--day')
        headerTitle.classList.add('title--night')
    }
      }   
     
  } else if(pageYOffset<50){
          headerBg.classList.remove('bg--white');
          headerBg.classList.remove('bg--dark');
        headerBg.style.height="10rem";
        // headerBg.style.backgroundColor = "transparent";
    for(var headerTitle of headerTitles){
        headerTitle.classList.remove('title--day')
        headerTitle.classList.add('title--night')}
    
  }
  
//   document.getElementById("translate-1").style.transform =
//     "translate3d(0, " + `${x * 0.14}px` + ", 0)";
//   document.getElementById("translate-2").style.transform =
//     "translate3d(0, " + `${x * 0.2}px` + ", 0)";
//   document.getElementById("translate-3").style.transform =
//     "translate3d(0, " + `${x * -0.2}px` + ", 0)";
});

