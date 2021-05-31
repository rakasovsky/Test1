const tl = gsap.timeline();

// tl.from(".hero", {duration: 2,   x: 1500});
tl.from(".hero_icon",{duration:2, opacity:0, ease: "elastic.out", y:50, stagger: 0.55});
// gsap.from(".description-title", {duration: 2,  x: -1500, stagger: 0.55});


// О проекте
const project = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_project',
        start: "top bottom"
    }
}
)

project.from(".pgs",{duration:1, opacity:0, x:-200, stagger:0.5})


// Желтая линия
const catBlck = gsap.timeline({
    scrollTrigger: {
        trigger: ".variants", 
        start: "top bottom"
    }
})

catBlck.from(".yellow_stripe",{duration:2, opacity:0, x:-200, stagger:0.5});

// Варианты
const variants = gsap.timeline({
    scrollTrigger: {
        trigger: '.variants_wrapper',
        start: "center bottom",
        toggleActions: "restart"
    }
}
)

variants.from(".vrsg",{duration:1, opacity:0, x:-200, stagger:0.8})
variants.from(".mac2",{duration:1, opacity:0, x:200})
variants.from(".mac",{duration:1, opacity:0, x:-200})
variants.from(".vrsg2",{duration:1, opacity:0, x:-200})

// Стилистика
const style = gsap.timeline({
    scrollTrigger: {
        trigger: '.style_center',
        start: "top bottom",
        toggleActions: "restart"
    }
}
)
style.from(".rec1g",{duration:1, opacity:0, x:-800})
style.from(".lineg",{duration:1, opacity:0, x:-500, stagger:0.2},"-=0.2")
style.from(".pre1g",{duration:1, opacity:0, x:-500})
style.from(".circleg",{duration:1, opacity:0, x:-500})

//Почему мы
const whywe = gsap.timeline({
    scrollTrigger: {
        trigger: '.whywe_center',
        start: "center bottom",
        toggleActions: "restart"
    }
}
)
whywe.from(".pre2g",{duration:2, opacity:0, x:500})
whywe.from(".wwg",{duration:1, opacity:0, x:-500})
whywe.from(".ch1g",{duration:2, opacity:0, y:500},"-=0.6")
whywe.from(".rec2g",{duration:2, opacity:0, x:500},"-=1.3")


// Возможности
const pos = gsap.timeline({
    scrollTrigger: {
        trigger: '.posability_center',
        start: "top bottom",
        toggleActions: "restart"
    }
}
)

pos.from(".pos1g",{duration:1, opacity:0, x:-500})
pos.from(".pre3g",{duration:1, opacity:0, x:-500})
pos.from(".rec3g",{duration:1, opacity:0, x:500})
pos.from(".icons2",{duration:1, opacity:0, x:500, stagger:{each: -0.2}})

// Экосистема
const eco = gsap.timeline({
    scrollTrigger: {
        trigger: '.eco_center',
        start: "top bottom",
        toggleActions: "restart"
    }
}
)

eco.from(".pre4g",{duration:2, opacity:0, y:500})
eco.from(".sun",{duration:2, opacity:0, y:500},"-=2")
eco.from(".ecog",{duration:2, opacity:0, x:-500})

// Офис
const off = gsap.timeline({
    scrollTrigger: {
        trigger: '.center',
        start: "top bottom",
        toggleActions: "restart"
    }
}
)

off.from(".lampg",{duration:1, opacity:0, y:-200})
off.from(".lightg",{duration:1, opacity:0, ease: "yoyo", repeat:1})
off.from(".pre5g",{duration:1, opacity:0, x:-500})
off.from(".officeg",{duration:2, opacity:0, x:500},"-=1")
off.from(".chair2g",{duration:2, opacity:0, x:500},"-=2")


//Мы можем
const we = gsap.timeline({
    scrollTrigger: {
        trigger: '.center',
        start: "center bottom",
        toggleActions: "restart"
    }
}
)
we.from(".we_rect",{duration:2, opacity:0, x:-500},"-=1")
we.from(".we_cush",{duration:1, opacity:1, x:-500},"-=2")
we.from(".pre6g",{duration:2, opacity:0, x:500})