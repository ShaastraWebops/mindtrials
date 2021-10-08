import { setTimeout } from "timers";


export const script = () => {
    document.addEventListener("scroll", () => {
        var header: HTMLElement = document.querySelector("header")!;
        var height = window.innerHeight;
        if(window.scrollY >= 0.7* height)
        {
            header.classList.add('sticky')
            header.hidden = false
        }
        else
        {
            header.hidden = true
            header.classList.remove('sticky')
        }
    })
}

const removeLeft = () => {
    var slideBg: HTMLElement = document.querySelector(".load-flex")!;
    slideBg.remove()
}


export const load = () => {
    window.onload = () => {
        var slideBg: HTMLElement = document.querySelector(".load-slide-left")!;
        slideBg.style.animation = "slide-left 2s ease-out";
        var slideBg: HTMLElement = document.querySelector(".load-slide-right")!;
        slideBg.style.animation = "slide-right 2s ease-out";
        setTimeout(removeLeft, 2000)
        // setTimeout(removeRight, 2000)
    }
}