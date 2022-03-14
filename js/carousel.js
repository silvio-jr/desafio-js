

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image,title,link){
        this._image = image;
        this._title = title;
        this._link = link;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(arr); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(arr); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    //falta implementar transição

    static Next(arr){
        const carouselImg = document.querySelector("#carousel img");
        carouselImg.src = arr[this._sequence]._image;

        const carouselTitle = document.querySelector("#carousel-title a");
        carouselTitle.textContent = arr[this._sequence]._title;
        carouselTitle.href = arr[this._sequence]._link;
        
        this._sequence++;
        
        if (this._sequence > this._size - 1){
            this._sequence = 0;
        }
    }
};
