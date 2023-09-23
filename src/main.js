const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }

})

// home section을 아래로 스크롤시 투명하게 만들어줌. 
const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
   home.style.opacity = 1 - window.scrollY / homeHeight;
})

// arrow up 버튼 상단에서 보이지 않게 하기 

const allow = document.querySelector('.arrow_up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight *1.2) {
        allow.style.opacity = 1;
    } else {
        allow.style.opacity = 0;
    }
})

// 토글버튼 

const navbarMenu = document.querySelector('.header_menu');
const navbarToggle = document.querySelector('.header_menu_toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// 토글매뉴 선택시 자동으로 닫아줌 
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
})


// document.getElementById('categoryList').addEventListener('click', function(event) {
//     if(event.target && event.target.classList.contains('category')) {
//         // 모든 'category' 클래스의 버튼에서 'category-selected' 클래스를 제거합니다.
//         document.querySelectorAll('.category').forEach(function(button) {
//             button.classList.remove('category-selected');
//         });

//         // 클릭한 버튼에 'category-selected' 클래스를 추가합니다.
//         event.target.classList.add('category-selected');
//     }
// });
