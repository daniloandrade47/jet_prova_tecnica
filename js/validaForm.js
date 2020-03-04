/* 
* Criado por Danilo Silva Andrade - 04/03/2020 
*/

function validacontato() {
        var nome = contato.nome.value;
        var email = contato.email.value;
        var telefone = contato.telefone.value;
        var assunto = contato.assunto.value;
        var mensagem = contato.mensagem.value;
        
        if (nome == "" && nome.value.lenght < 5) {
        alert('Informe o seu NOME!');
        contato.nome.focus();
        return false;	
        }
        
        if (email == "" || email.indexOf('@') == -1) {
        alert('Preencha o campo com seu EMAIL');
        contato.email.focus();
        return false;
        }   
        
        if (telefone == "" || telefone.value.lenght > 2) {
        alert ('Informe seu TELEFONE! Ex: (99)99999-9999');
        contato.telefone.focus();
        return false;
        }
                  
          if(assunto =="") {
        alert('Defina o ASSUNTO!');
        contato.assunto.focus();
        return false;
        }
          
        if(mensagem == "") {
        alert ('Escreva sua MENSAGEM!');
        contato.mensagem.focus();
        return false;
        }         
    }