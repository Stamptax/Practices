




/* ======================================== bottons functions for turning left/ right ======================================== */
const p1 = document.querySelector(".img1");
const p2 = document.querySelector(".img2");
const p3 = document.querySelector(".img3");
let picSet = [p1, p2, p3];
picSet[0].style.display = 'block';

let descriptives = {
    0: "1",
    1: "2",
    2: "3"
}

let txt = document.querySelector(".description");
txt.textContent = descriptives[0];

const former = () => {
    const current = picSet.findIndex(pic => pic.style.display == 'block');
    const previousIndex = current == 0 ? picSet.length - 1 : current - 1;
    picSet[current].style.display = 'none';
    picSet[previousIndex].style.display = 'block';
    txt.textContent = descriptives[previousIndex];
}


const latter = () => {
    const current = picSet.findIndex(pic => pic.style.display == 'block');
    const nextIndex = current == picSet.length - 1 ? 0 : current + 1;
    picSet[current].style.display = 'none';
    picSet[nextIndex].style.display = 'block';
    txt.textContent = descriptives[nextIndex];
}

