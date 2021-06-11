function check()
{
	var a=document.getElementById("f1").value; //validation using JS
	if(a=="")
	{
	document.getElementById("s1").innerHTML="Please enter name!";
	document.getElementById("s1").style.colour="red";
	}
	else
	{
	document.getElementById("s1").innerHTML="Input accepted";
	document.getElementById("s1").style.colour="green";
	}
}
	   
function check2()
{
    var b=document.getElementById("m1").value;
	var regex=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(regex.test(b))
	{
	document.getElementById("s2").innerHTML="Input accepted";
	document.getElementById("s2").style.colour="green";
	}
	else
	{
	document.getElementById("s2").innerHTML="Please enter correct ID!";
	document.getElementById("s2").style.colour="red";
	}
}  
function check3()
{
	var n=document.getElementById("n1").value;
	document.getElementById("s3").innerHTML="PETTERN REQUIRED= 000-0000-000";
	document.getElementById("s3").style.colour="red";/to change colorof text/
}