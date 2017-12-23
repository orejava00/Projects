var aCalculator = {firstValue:0, secondValue:0};
mult: function(i,v)
		{
			r = document.getElementById('screen').innerHTML;
			r = i * v;
			return r;
		}
add: function (i,v)
		{
			r = i + v;
			return r;
		}
minus:function (i,v)
		{
			r = document.getElementById('screen').innerHTML;
			document.getElementById('screen').innerHTML = i - v;
		}