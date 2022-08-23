let date = new Date();
let copy = document.querySelector('.copy')
copy.innerHTML = `Copyright&copy;Jadwal ${date.getFullYear()}`

let main = document.querySelector(".main")
let scrollbtn = document.querySelector(".scrollbtn")
scrollbtn.addEventListener("click",()=>{
    main.scrollIntoView({
        behavior: "smooth"
    })
})