//IMAGE SELECTION

function imgSlider(img){
    document.querySelector('.starbucks').src = img;
    }

    //CIRCLE COLOR CHANGE ON SELECTION

    function chaneCircleColor(color){
        const circle = document.querySelector('.circle');
        circle.style.background = color; 
    }
    //MENU TOGGLE
    
    function toggleMenu(color){
        var menuToggle = document.querySelector('.toggle');
        var navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }