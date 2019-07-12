for(var i = 10; i <= 20; i ++)

{var x=i;
console.log(x*i);
}
for(var i = 10; i <= 20; i ++)

{x = x + i}
console.log(x);

function buttonClick(){
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);
	var c = 0;
	var y = 1;
		document.getElementById("result").innerHTML = "";
		var resultDiv = document.getElementById("result");
						
			if(document.getElementById("x1").value == "" || document.getElementById("x2").value == "") 
				{
				alert("Поля x1 и x2 должны быть заполнены");
				} 	
			
					else{ 
			if(Number.isNaN(x1) || Number.isNaN(x2)) 
				{
				alert("В поля должны быть введены числовые значения. ");
				}
						for(var o=x1; o<=x2; o++) 
						{ 
				  		c = c + o;
						}
			if (document.getElementById("Sum").checked) 
				{
				resultDiv.append("сумма всех чисел от x1 до x2 = " + (c));	
				}
						for(var b=x1; b<=x2; b++)
						{ 
				 		y = y * b;
						}
			if (document.getElementById("multiplication").checked)
				{
				resultDiv.append("произведение всех чисел от x1 до x2 = " + (y));
				}
						}
		document.getElementById("primenumbers").innerHTML = "Prime numbers:";
						for(var d=x1; d<=x2; d++) 
						{   
						r = 0;
						for (var f=2; f<=d; f++) 
						{
						if ( d % f == 0 )	
						{
						r++;
						}
						}
						var primeDiv = document.getElementById("primenumbers");
						if (r <= 1) 
						{
						primeDiv.append(d + "; ");
						}
						}		
	
					}
function CleanClick() {
		document.getElementById("x1").value = null;
		document.getElementById("x2").value = null;
}