	var rates = [315.5166, 0.0028, 0.77, 1.29, 1.19, 0.84, 459.68, 0.00, 1.08, 0.92, 0.00, 424.16];

var USDNGR = rates[0];
var NGRUSD = rates[1];
var USDGBP = rates[2];
var GBPUSD = rates[3];
var EURUSD = rates[4];
var USDEUR = rates[5];
var GBPNGR = rates[6];
var NGRGBP = rates[7];
var GBPEUR = rates[8];
var EURGBP = rates[9];
var NGREUR = rates[10];
var EURNGR = rates[11];

		function Convert()
		{
			if(f1.convertFrom.value=="United States-USD" && f1.convertTo.value=="Nigerian-NGR") 
			{
				f1.to.value = f1.from.value * USDNGR;
			}
			else if (f1.convertFrom.value=="Nigerian-NGR" && f1.convertTo.value=="United States-USD") 
			{
				f1.to.value = f1.from.value * NGRUSD;
			}
			else if (f1.convertFrom.value=="United States-USD" && f1.convertTo.value=="British-GBP") 
			{
				f1.to.value = f1.from.value * USDGBP;
			}
			else if (f1.convertFrom.value=="British-GBP" && f1.convertTo.value=="United States-USD") 
			{
				f1.to.value = f1.from.value * GBPUSD;
			}
			else if (f1.convertFrom.value=="European-EUR" && f1.convertTo.value=="United States-USD") 
			{
				f1.to.value = f1.from.value * EURUSD;
			}
			else if (f1.convertFrom.value=="United States-USD" && f1.convertTo.value=="European-EUR") 
			{
				f1.to.value = f1.from.value * USDEUR;
			}
			else if (f1.convertFrom.value=="British-GBP" && f1.convertTo.value=="Nigerian-NGR") 
			{
				f1.to.value = f1.from.value * GBPNGR;
			}
			else if (f1.convertFrom.value=="Nigerian-NGR" && f1.convertTo.value=="British-GBP") 
			{
				f1.to.value = f1.from.value * NGRGBP;
			}
			else if (f1.convertFrom.value=="British-GBP" && f1.convertTo.value=="European-EUR") 
			{
				f1.to.value = f1.from.value * GBPEUR;
			}
			else if (f1.convertFrom.value=="European-EUR" && f1.convertTo.value=="British-GBP") 
			{
				f1.to.value = f1.from.value * EURGBP;
			}
			else if (f1.convertFrom.value=="Nigerian-NGR" && f1.convertTo.value=="European-EUR") 
			{
				f1.to.value = f1.from.value * NGREUR;
			}
			else if (f1.convertFrom.value=="European-EUR" && f1.convertTo.value=="Nigerian-NGR") 
			{
				f1.to.value = f1.from.value * EURNGR;
			}
			else if (f1.convertFrom.value===f1.convertTo.value) 
			{
				f1.to.value = f1.from.value;
			}
			else{
				alert("Invalid Input")
			}
		}


		function convert()
	{
		k = document.getElementById("kilogram").value;
		g = document.getElementById("gram").value;

		document.getElementById("gram").value = k * 1000;
		document.getElementById("kilogram").value = g / 1000;
	}