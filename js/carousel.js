

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
                Carousel._sequence = 0; //contador
                Carousel._size = arr.length;
                Carousel.insertContent(arr);
                Carousel._interval = setInterval(function(){ Carousel.Next();},2000); //delay 2s
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
        
        arr.forEach( function(arrItem){ //para cada instância Carousel no array, criar uma div.slide e uma div.title

            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide");

            const titleDiv = document.createElement("div");
            titleDiv.classList.add("title");

            const img = document.createElement("img");
            const a = document.createElement("a");

            img.src = arrItem._image; 
            a.textContent = arrItem._title; 
            a.href = arrItem._url;
            
            if (carouselDiv.childNodes.length === 1) slideDiv.dataset.active = true; //define o primeiro slide como active
            if (carouselTitleDiv.childNodes.length === 1) titleDiv.dataset.titleDisplay = true; //define o primeiro título como display

            slideDiv.append(img)
            carouselDiv.append(slideDiv); //o documento html recebe a div criada com o conteúdo das imagens
            
            titleDiv.append(a)
            carouselTitleDiv.append(titleDiv); //o documento html recebe a div criada com o conteúdo dos títulos
        })
    }

    static Next(){
        /* 
        * Metodo responsável por exibir o conteúdo na tela e incrementar o contador. 
        */
        
        const slides = document.querySelectorAll(".slide"); //seleciona todas as divs com a classe slide
        const activeSlide = document.querySelector("[data-active]"); //seleciona o slide com o data attribute active (este é o slide que está sendo exibido)

        const titles = document.querySelectorAll(".title"); //seleciona todas as divs com a classe title
        const displayedTitle = document.querySelector("[data-title-display]") //seleciona o título com o data attribute title-display (este é o título que está sendo exibido)
        
        Carousel._sequence = [...slides].indexOf(activeSlide) + 1; //retorna o index do slide ativo e incrementa o contador

        if (Carousel._sequence >= Carousel._size) Carousel._sequence = 0; //zera ocontador caso seu valor extrapole o tamanho do array
        
        [...slides][Carousel._sequence].dataset.active = true; //define o próximo slide como ativo
        delete activeSlide.dataset.active; //desativa o slide anterior

        [...titles][Carousel._sequence].dataset.titleDisplay = true; //permite que o título referente ao slide mostrado no momento seja exibido
        delete displayedTitle.dataset.titleDisplay; //desativa o título anterior
    }
};