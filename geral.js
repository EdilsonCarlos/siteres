function convmoeda()
{
	var cx1=document.getElementById("valdol");
	var cx2=document.getElementById("cotdol");
	var n1=parseFloat(cx1.value);
	var n2=parseFloat(cx2.value);
	var r=n1*n2;
	var par=document.getElementById("resposta");
	par.innerHTML=r;
}
function convvel()
{
	var cv1=document.getElementById("qtmil");
	var nv1=parseFloat(cv1.value);
	var rv=n1*1.609;
	var cve=document.getElementById("resposta");
	cve.innerHTML=rv;
}
function concelf()
{
	var cce=document.getElementById("celsiu");
	var nce1=parseFloat(cce.value);
	var b=((nce1/5)*9)+32;
	var cfk=document.getElementById("resposta");
	cfk.innerHTML=b
}
function convcomp()
{
	var cmp1=document.getElementById("comp1");
	var ncp1=parseFloat(cmp1.value);
	var rncp= ncp1/2.54;
	var parncp=document.getElementById("resposta");
	parncp.innerHTML=rncp;
}
function inicializar()
{
	var botao=document.getElementById("conv")
	botao.onclick=convcomp;
	var botao=document.getElementById("conv")
	botao.onclick=convmoeda;

}
window.onload=inicializar




