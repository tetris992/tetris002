// 구현계획을 세워라.

const sectionIds = [
    '#home', 
    '#about', 
    '#skills', 
    '#work', 
    '#Testimonial', 
    '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
console.log(sections);
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
    rootMargin: '-10% 0px 0px 0px',
    threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
//   let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting && entry.intersectionRatio >= 0.95;
    // selectLastOne =
    //   index === sectionIds.length - 1 &&
    //   entry.isIntersecting &&
    //   entry.intersectionRatio >= 0.99;
  });
  console.log(visibleSections);
//   console.log('무조건 라스트 섹션!!', selectLastOne);

  const isLastSectionsVisible =
    visibleSections[sectionIds.length - 2] &&
    visibleSections[sectionIds.length - 1];

  const navIndex = isLastSectionsVisible
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  
  const navItem = navItems[navIndex];
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}




// document.addEventListener('DOMContentLoaded', () => {
//     const menuButtons = document.querySelectorAll('.header_menu_item');

//     // 메뉴 버튼 클릭 시 해당 섹션으로 스크롤
//     menuButtons.forEach(button => {
//         button.addEventListener('click', e => {
//             e.preventDefault(); // 기본 앵커 태그 동작(페이지 이동)을 막습니다.
//             const targetId = e.currentTarget.getAttribute('href').slice(1); // href에서 # 제거
//             const targetSection = document.getElementById(targetId);
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     });

//     // Arrow up 버튼 클릭 시 상단으로 스크롤
//     const arrowUpButton = document.querySelector('.arrow_up');
//     arrowUpButton.addEventListener('click', (e) => {
//         e.preventDefault(); // 기본 앵커 태그의 동작을 중단시킵니다.
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });

