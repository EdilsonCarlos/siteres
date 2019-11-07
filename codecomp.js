function convcomp()
{
	var cx1=document.getElementById("comp1");
	var n1=parseFloat(cx1.value);
	var r= "O valor em centímetros vai ser: "+n1/2.54;
	var par=document.getElementById("resposta");
	par.innerHTML=r;
}
function inicializar()
{
	var botao=document.getElementById("conv")
	botao.onclick=convcomp;
}
window.onload=inicializar
