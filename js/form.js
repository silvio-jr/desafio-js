
//class contato

class contato {
    constructor(nome,email,telefone,contato,mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value);
}

function Enviar() {
    /*
    * função que valida o preenchimento do form
    * exibe mensagem de erro caso o form não tenha sido preenchido corretamente
     */

    const formData = [...document.querySelectorAll(".fordform")];
    const errorElement = document.querySelector("#error");
    let messages = [];
    
    formData.forEach(arrItem => {
        if (arrItem.value === '' || arrItem.value === null) messages.push((arrItem.name).toUpperCase()); 
    });

    if (messages.length === 0){
        alert('Obrigado sr(a) ' + formData[0].value + ' os seus dados foram encaminhados com sucesso');
        errorElement.innerText = "";
    }else{
        errorElement.innerText = "*Campo(s) obrigatório(s): " + messages.join(", ") + ".";
    }
}
