   document.getElementById("button").addEventListener('click', function () {
        
        const inputsTexto = document.querySelectorAll('.item');

       inputsTexto.forEach(input => {
            
            if (input.value.trim() !== "") {
                input.classList.add('campo-preenchido');
                input.classList.remove('campo-vazio');
                
            } else {
                input.classList.add('campo-vazio');
                input.classList.remove('campo-preenchido');
           }
           });
        });


    

