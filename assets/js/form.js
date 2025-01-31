let inputs = document.querySelectorAll(".form__input");
let valids = [false, false, false, false]
let contacto = document.querySelector("#contact");


let divisor = document.querySelectorAll(".form__block");
console.log(divisor);

let input__name = document.querySelectorAll(".form__input");
let textoInput = document.querySelector(".not-visible");



    divisor[0].children[1].addEventListener("input", ()=>{

        let input = divisor[0].children[1];
        let texto = divisor[0].children[2];

        if (input.value.length>=10)
            {
                input.classList.add("form__ok");
                texto.classList.add("not-visible");
                valids[0] = true;
            }
            else
            {
                input.classList.remove("form__ok");
                input.classList.add("form__error");
                texto.classList.remove("not-visible");
                valids[0] = false;
            }  
            validor();
    })

    divisor[1].children[1].addEventListener("input", ()=>{

        let input4 = divisor[1].children[1];
        let texto4 = divisor[1].children[2];
    
    
        if (input4.validity.valid)
            { 
                 input4.classList.add("form__ok");
                 texto4.classList.add("not-visible");
                 valids[1] = true;
                 
            }
            else
            {
                input4.classList.remove("form__ok");
                input4.classList.add("form__error");
                texto4.classList.remove("not-visible");
                valids[1] = false;
            } 
        validor(); 
    })
    

    divisor[2].children[1].addEventListener("input", ()=>{

        let input2 = divisor[2].children[1];
        let texto2 = divisor[2].children[2];

        if (input2.value.length>=10)
            {
                input2.classList.add("form__ok");
                texto2.classList.add("not-visible");
                valids[2] = true;
            }
            else
            {
                input2.classList.remove("form__ok");
                input2.classList.add("form__error");
                texto2.classList.remove("not-visible");
                valids[2] = false;
            }  
        validor();
    })


    divisor[3].children[1].addEventListener("input", ()=>{

        let input3 = divisor[3].children[1];
        let texto3 = divisor[3].children[2];

        if (input3.value.length>=30)
            {
                input3.classList.add("form__ok");
                texto3.classList.add("not-visible");
                valids[3] = true;
                console.log(valids[3])
            }
            else
            {
                input3.classList.remove("form__ok");
                input3.classList.add("form__error");
                texto3.classList.remove("not-visible");
                valids[3] = false;
                console.log(valids[3])
            }  
        validor();
    })


function validor ()
{
    if (valids[0] && valids[1] && valids[2] && valids[3])
    {
        contacto.disabled = false;
        contacto.classList.remove("form__btn")
        contacto.classList.add("form__btn-ok")
    }
    else
    {
        contacto.disabled = true
        contacto.classList.remove("form__btn-ok");
        contacto.classList.add("form__btn");
    }
}

contacto.addEventListener("click", () =>{
    alert("Mensaje enviado");
})