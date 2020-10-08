$('.owl-carousel').owlCarousel({
    loop:true, /*se colocar false o carrossel para no ultimo e não retorna para o primeiro*/
    margin:10, /*define a largura do quadrado que a imagem fica*/ 
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})