
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length > 1) {
                el.checked = false;
            }
            else{
                carArr.push(carClass);
            }
            
        } else {
            carArr.splice(GetCarArrPosition(carArr, carClass),1);
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    //quando ocurtar a página, deletar o conteúdo da tabela no documento html
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    //corrigir formatação das imagens
    img0 = document.createElement("img");
    img0.src = carArr[0].image;
    img0.alt = "veiculo 1";
    img1 = document.createElement("img");
    img1.src = carArr[1].image;
    img1.alt = "veiculo 2";
    document.getElementById("compare_image_0").appendChild(img0);
    document.getElementById("compare_image_1").appendChild(img1);

}

