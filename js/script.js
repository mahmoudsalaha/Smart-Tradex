let tag = document.querySelector('#h5-counter')
let i = 0
let set = setInterval(() => {
    if (i == 8000) clearInterval(set)
    tag.innerText = i
    i += 20
}
    , 5);

let Tag2 = document.querySelector('#h5-counter2')
let x = 0
let set2 = setInterval(() => {
    if (x == 810) clearInterval(set2)
    Tag2.innerText = x
    x += 10
}
    , 65);

let Tag3 = document.querySelector('#cunter3')
let g = 0
let set3 = setInterval(() => {
    if (g == 2000) clearInterval(set3)
    Tag3.innerText = g
    g += 20
}
    , 50);


let Tag4 = document.querySelector('#cunter4')
let y = 0
let set4 = setInterval(() => {
    if (y == 20) clearInterval(set4)
    Tag4.innerText = y
    y += 1
}
    , 300);





    let btn = document.getElementById("scr-beha");

    window.onscroll = function () {
      if(window.scrollY >= 5000) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
    
    btn.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    


