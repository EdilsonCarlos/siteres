function convmoeda()
{
	var cx1=document.getElementById("valdol");
	var cx2=document.getElementById("cotdol");
	var n1=parseFloat(cx1.value);
	var n2=parseFloat(cx2.value);
	var r="O valor em Real vai ser de: "+n1*n2;
	var par=document.getElementById("resposta");
	par.innerHTML=r;
}
function inicializar()
{
	var botao=document.getElementById("conv")
	botao.onclick=convmoeda;
}
window.onload=inicializar

