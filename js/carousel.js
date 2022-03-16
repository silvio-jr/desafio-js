

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
                Carousel.Next(arr); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(arr);},2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(arr){
        
    }

};

    
