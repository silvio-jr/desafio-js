

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image,title,url){
        this._image = image;
        this._title = title;
        this._url = url;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.insertContent(arr);
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next();},2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static insertContent(arr){
        /*
        * Método responsável por inserir as tags 'a' e 'img' no documento.
        */

        const carouselDiv = document.querySelector("#carousel");
        const carouselTitleDiv = document.querySelector("#carousel-title");
        
        arr.forEach( function(arrElement){

            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide");

            const titleDiv = document.createElement("div");
            titleDiv.classList.add("title");

            const img = document.createElement("img");
            const a = document.createElement("a");

            img.src = arrElement._image;
            a.textContent = arrElement._title;
            a.href = arrElement._url;
            
            if (carouselDiv.childNodes.length === 1) slideDiv.dataset.active = true; //define o primeiro slide como active
            if (carouselTitleDiv.childNodes.length === 1) titleDiv.dataset.titleDisplay = true; //define o primeiro título como active

            slideDiv.append(img)
            carouselDiv.append(slideDiv);
            
            titleDiv.append(a)
            carouselTitleDiv.append(titleDiv);
        })
    }

    static Next(){
        /* 
        * Metodo responsável por exibir o conteúdo na tela e incrementar o contador. 
        */
        
        const slides = document.querySelectorAll(".slide");
        const activeSlide = document.querySelector("[data-active]");

        const titles = document.querySelectorAll(".title");
        const activeTitle = document.querySelector("[data-title-display]")
        
        Carousel._sequence = [...slides].indexOf(activeSlide) + 1; //incremento no contador

        if (Carousel._sequence >= Carousel._size) Carousel._sequence = 0;
        
        [...slides][Carousel._sequence].dataset.active = true;
        delete activeSlide.dataset.active;

        [...titles][Carousel._sequence].dataset.titleDisplay = true;
        delete activeTitle.dataset.titleDisplay;
    }
};