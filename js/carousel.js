

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

            const div = document.createElement("div");
            const img = document.createElement("img");
            // const a = document.createElement("a");

            div.classList.add("slide");
            img.src = arrElement._image;
            // a.textContent = arrElement._title;
            // a.href = arrElement._url;
            
            //define o primeiro slide como active
            if (carouselDiv.childNodes.length === 1) div.dataset.active = true; 

            div.append(img)
            carouselDiv.append(div);
            // carouselTitleDiv.append(a);
        })
    }

    static Next(){
        /* 
        * Metodo responsável por exibir o conteúdo na tela e incrementar o contador. 
        */
        
        const slides = document.querySelectorAll(".slide");
        const activeSlide = document.querySelector("[data-active]");
        
        Carousel._sequence = [...slides].indexOf(activeSlide) + 1; //incremento no contador

        if (Carousel._sequence >= Carousel._size) Carousel._sequence = 0;
        
        [...slides][Carousel._sequence].dataset.active = true;
        delete activeSlide.dataset.active;
    }
};