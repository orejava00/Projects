function Power()
		{
			var a = document.f1.power.value;
			if(a=="ON")
              {
				 document.f1.power.value="OFF";
				 document.f1.result.value=0;
				 				
		    	}
			else
			  {
      	 document.f1.power.value="ON";
      	 document.f1.result.value="";
        	 }
          }

function button(n)
{
	var r = document.f1.result.value;
							if (r=="0") {
								document.f1.result.value = n;
							}
					   						else{
	   						  document.f1.result.value+=n;
	   						}
	   						  
 }  

function runpoint()
{
	f1.result.value += ".";
}

function runClear()
{
	f1.result.value = "";
}

function evalop()
		{
			var evalo = eval(document.f1.result.value);
			
			document.f1.result.value = evalo;
		}

function runplus()
		{document.f1.result.value += "+";
		
		}
		function runminus()
		{document.f1.result.value += "-";
		
		}
		function rundivide()
		{document.f1.result.value += "/";
		
		}
		function runmultiply()
		{document.f1.result.value += "*";
		
		}
		function runpoint()
		{document.f1.result.value += ".";
		
		}
		function runpercent()
		
		{document.f1.result.value += "%";
		
		}

function runpi()
	{
		f1.result.value += Math.PI;
	}

function runexpo()
	{
		f1.result.value += Math.exp(f1.result.value);	
	}

function runSin()
	{
		f1.result.value = Math.sin(f1.result.value);
	}

function runCos()
	{
		f1.result.value = Math.cos(f1.result.value);
	}

function runTan()
	{
		f1.result.value = Math.tan(f1.result.value);
	}

function runAbs()
	{
		f1.result.value = Math.abs(f1.result.value);
	}

function runSqrt()
	{
		f1.result.value = Math.sqrt(f1.result.value);
	}

function runSqr()
	{
		f1.result.value = Math.pow(f1.result.value,2);
	}

function runPower()
	{
		f1.result.value = Math.pow(f1.result.value,f1.result.value);
	}

function runLog()
	{
		f1.result.value += Math.log(f1.result.value);
	}

function runIn()
	{
		f1.result.value += Math.E;
	}

function runBrac()
{
	f1.result.value += "(";
}

function runBrack()
{
	f1.result.value += ")";
}

function runMplus()
{
	f1.result.value += "M+";
}

function runModulus()
{
	f1.result.value += "%";
}

function runDelete()
{
	f1.result.value = f1.result.value=f1.result.value.substring(0,f1.result.value.length-1);
}

function runChangeSign(input)
{
	if(f1.result.value.substring(0,1)=="-")
	{
		f1.result.value = f1.result.value.substring(1,f1.result.value.length)
	}
	else
		{
			f1.result.value = "-" + f1.result.value
		}
}