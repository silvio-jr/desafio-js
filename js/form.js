
//class contato

class contato {
    constructor(nome,sobrenome,email,cpf,telefone,contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
}

function Enviar() {

    const formData = [...document.querySelectorAll(".fordform")];
    const errorElement = document.querySelector("#error");
    let messages = [];
    
    formData.forEach(arrItem => {
        if (arrItem.value === '' || arrItem.value === null) messages.push(arrItem.name); 
    });

    if(formData[5].value === "COMO DESEJA SER CONTATADO") messages.push(formData[5].name);

    if (messages.length === 0){
        alert('Obrigado sr(a) ' + formData[0].value + ' os seus dados foram encaminhados com sucesso');
        errorElement.innerText = "";
    } else{
        errorElement.innerText = "*Campo(s) obrigatório(s): " + messages.join(", ") + ".";
    }
}
