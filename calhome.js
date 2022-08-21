




let nu1=document.querySelector("#number1el")

let nu2=document.querySelector("#number2el")

let resultEl=document.getElementById("resultel")

function add()
{
  
  resultEl.textContent=parseInt(nu1.value)+parseInt(nu2.value)
}

function sub()
{
  resultEl.textContent=parseInt(nu1.value)-parseInt(nu2.value)
}

function mul()
{
  resultEl.textContent=parseInt(nu1.value)*parseInt(nu2.value)
}

function div()
{
    if(parseInt(nu2.value)===0)
          resultEl.textContent="It should not be Zero"
    else  
    resultEl.textContent=parseInt(nu1.value)/parseInt(nu2.value)
}
function sqr()
{
  resultEl.textContent=parseInt(nu1.value)*parseInt(nu1.value)
}