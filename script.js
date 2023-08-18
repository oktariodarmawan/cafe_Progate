

      function show1() {
        document.getElementById("mapouter-1").style.display = "flex";
        document.getElementById("mapouter-2").style.display = "none";
        document.getElementById("mapouter-3").style.display = "none";
      }

      function show2() {
        document.getElementById("mapouter-1").style.display = "none";
        document.getElementById("mapouter-2").style.display = "flex";
        document.getElementById("mapouter-3").style.display = "none";
      }
      function show3() {
        document.getElementById("mapouter-1").style.display = "none";
        document.getElementById("mapouter-2").style.display = "none";
        document.getElementById("mapouter-3").style.display = "flex";
      }




       
    let product_1 = document.querySelector(".product-1")
    let product_2 = document.querySelector('.product-2')
    let product_3 = document.querySelector('.product-3')
    let product_4 = document.querySelector('.product-4')
    let product_5 = document.querySelector('.product-5')
    let product_6 = document.querySelector('.product-6')
    

    product_1.addEventListener("mouseenter", function(e){
        e.preventDefault()
      let anime_1 = document.querySelector(".anime-1")
      anime_1.classList.add('animasi')
      let p = document.querySelector('.p1')
      p.classList.add('animasi-2')
    })

    product_1.addEventListener("mouseleave", function(){
      let anime_1 = document.querySelector(".anime-1")
      anime_1.classList.remove('animasi')
      let p = document.querySelector('.p1')
      p.classList.remove('animasi-2')
    })

    product_2.addEventListener("mouseenter", function(){
      let anime_2 = document.querySelector(".anime-2")
      anime_2.classList.add('animasi')
      let p = document.querySelector('.p2')
      p.classList.add('animasi-2')
    })

    product_2.addEventListener("mouseleave", function(){
      let anime_2 = document.querySelector(".anime-2")
      anime_2.classList.remove('animasi')
      let p = document.querySelector('.p2')
      p.classList.remove('animasi-2')
    })

    product_3.addEventListener("mouseenter", function(){
      let anime_3 = document.querySelector(".anime-3")
      anime_3.classList.add('animasi')
      let p = document.querySelector('.p3')
      p.classList.add('animasi-2')
    })

    product_3.addEventListener("mouseleave", function(){
      let anime_3 = document.querySelector(".anime-3")
      anime_3.classList.remove('animasi')
      let p = document.querySelector('.p3')
      p.classList.remove('animasi-2')
    })
    product_4.addEventListener("mouseenter", function(){
      let anime_4 = document.querySelector(".anime-4")
      anime_4.classList.add('animasi')
      let p = document.querySelector('.p4')
      p.classList.add('animasi-2')
    })

    product_4.addEventListener("mouseleave", function(){
      let anime_4 = document.querySelector(".anime-4")
      anime_4.classList.remove('animasi')
      let p = document.querySelector('.p4')
      p.classList.remove('animasi-2')
    })
    product_5.addEventListener("mouseenter", function(){
      let anime_5 = document.querySelector(".anime-5")
      anime_5.classList.add('animasi')
      let p = document.querySelector('.p5')
      p.classList.add('animasi-2')
    })

    product_5.addEventListener("mouseleave", function(){
      let anime_5 = document.querySelector(".anime-5")
      anime_5.classList.remove('animasi')
      let p = document.querySelector('.p5')
      p.classList.remove('animasi-2')
    })
    product_6.addEventListener("mouseenter", function(){
      let anime_6 = document.querySelector(".anime-6")
      anime_6.classList.add('animasi')
      let p = document.querySelector('.p6')
      p.classList.add('animasi-2')
    })

    product_6.addEventListener("mouseleave", function(){
      let anime_6= document.querySelector(".anime-6")
      anime_6.classList.remove('animasi')
      let p = document.querySelector('.p6')
      p.classList.remove('animasi-2')
    })

   
let a = window.location
console.log(a)


let menus = document.getElementsByTagName('ul')[0]
console.log(menus)
let menu = menus.getElementsByTagName('a')



for(i=0;i<menu.length;i++){
    menuLowerCase = menu[i].innerHTML.toLowerCase().trim()
    if(menuLowerCase == a.pathname.slice(1).replace(".html", "")){
        menu[i].classList.add('activeBorder')
    }
}

let b = window.location
let c = b.pathname.slice(1).replace('.html', "")
let z = b.hostname
console.log(z)
console.log(c)


// query url

if(a.pathname.slice(1).replace(".html", "") == "products"){
  console.log(a.search)
  console.log(a)
  let mengambil = new URL(a.href)
  let slideBarMenus = document.getElementsByClassName("side-bar-products")
  let sideBarMenu = slideBarMenus[0].getElementsByTagName('p')
  console.log(sideBarMenu.length)

  
}