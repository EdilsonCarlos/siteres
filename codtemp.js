function concelf()
{
	var cx1=document.getElementById("celsiu");
	var n1=parseFloat(cx1.value);
	var b=((n1/5)*9)+32;
	var par=document.getElementById("resposta");
	par.innerHTML=b
	
}
function inicializar()
{
	var nome = document.getElementById("celsiu").value;
		document.getElementById("firen").value = nome;
		document.getElementById("kels").value = nome;
	/*var botao=document.getElementById("conv")
	botao.onclick=concelf;*/
}
window.onload=inicializar