
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
        alert("Precisa-se marcar 2 carros para apresentar a comparação.");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    const imgTags = [...document.querySelectorAll("#compare img")];
    const pTags = [...document.querySelectorAll("#compare p")];
    const allTags = imgTags.concat(pTags);

    allTags.forEach((tag)=>{
        tag.remove();
    })
}

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++){
        let n = ("%s",i);
        pushCompareDataIntoTable("img","compare_image_"+n,carArr[i].image);
        pushCompareDataIntoTable("p","compare_modelo_"+n,carArr[i].nome);
        pushCompareDataIntoTable("p","compare_alturacacamba_"+n,carArr[i].alturaCacamba);
        pushCompareDataIntoTable("p","compare_alturaveiculo_"+n,carArr[i].alturaVeiculo);
        pushCompareDataIntoTable("p","compare_alturasolo_"+n,carArr[i].alturaSolo);
        pushCompareDataIntoTable("p","compare_capacidadecarga_"+n,carArr[i].capacidadeCarga);
        pushCompareDataIntoTable("p","compare_motor_"+n,carArr[i].motor);
        pushCompareDataIntoTable("p","compare_potencia_"+n,carArr[i].potencia);
        pushCompareDataIntoTable("p","compare_volumecacamba_"+n,carArr[i].volumeCacamba);
        pushCompareDataIntoTable("p","compare_roda_"+n,carArr[i].roda);
        pushCompareDataIntoTable("p","compare_preco_"+n,carArr[i].preco);
    }
}

function pushCompareDataIntoTable(tag,id,data) {
    const htmlElement = document.createElement(tag);
    
    if (tag === "img"){
        htmlElement.src = data;
    }
    else if (tag === "p"){
        htmlElement.textContent = data;
    }
    document.getElementById(id).appendChild(htmlElement);
}