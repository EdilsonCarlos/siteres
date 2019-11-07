function convvel()
{
	var cx1=document.getElementById("qtmil");
	var n1=parseFloat(cx1.value);
	var r="O valor em Km/h é: " + n1*1.609;
	var par=document.getElementById("resposta");
	par.innerHTML=r;
	
}
function inicializar()
{
	var botao=document.getElementById("conv")
	botao.onclick=convvel;
}
window.onload=inicializar
