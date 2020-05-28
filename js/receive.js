window.addEventListener('load', () => {	

	/*receive information */
	document.getElementById('stu').innerHTML= localStorage.getItem('STUDENT');
	document.getElementById('dob').innerHTML= localStorage.getItem('BIRTH');
  	document.getElementById('fat').innerHTML= localStorage.getItem('FATHER');
  	document.getElementById('mot').innerHTML= localStorage.getItem('MOTHER');
  	document.getElementById('sch').innerHTML= localStorage.getItem('SCHOOL');
  	document.getElementById('add').innerHTML= localStorage.getItem('ADDRESS');

  	/*table receiving */
  	document.getElementById('1').innerHTML= localStorage.getItem('M-1');
  	document.getElementById('2').innerHTML= localStorage.getItem('M-2');
  	document.getElementById('3').innerHTML= localStorage.getItem('M-3');
  	document.getElementById('4').innerHTML= localStorage.getItem('H-4');
  	document.getElementById('5').innerHTML= localStorage.getItem('H-5');
  	document.getElementById('6').innerHTML= localStorage.getItem('H-6');
  	document.getElementById('7').innerHTML= localStorage.getItem('E-7');
  	document.getElementById('8').innerHTML= localStorage.getItem('E-8');
  	document.getElementById('9').innerHTML= localStorage.getItem('E-9');
  	document.getElementById('10').innerHTML= localStorage.getItem('S-10');
  	document.getElementById('11').innerHTML= localStorage.getItem('S-11');
  	document.getElementById('12').innerHTML= localStorage.getItem('S-12');
  	document.getElementById('13').innerHTML= localStorage.getItem('C-13');
  	document.getElementById('14').innerHTML= localStorage.getItem('C-14');
  	document.getElementById('15').innerHTML= localStorage.getItem('C-15');

  	var total = 1500;

  var num1 = localStorage.getItem('M-1');
  var num2 = localStorage.getItem('M-2');
  var num3 = localStorage.getItem('M-3');
  var num4 = localStorage.getItem('H-4');
  var num5 = localStorage.getItem('H-5');
  var num6 = localStorage.getItem('H-6');
  var num7 = localStorage.getItem('E-7');
  var num8 = localStorage.getItem('E-8');
  var num9 = localStorage.getItem('E-9');
  var num10 = localStorage.getItem('S-10');
  var num11 = localStorage.getItem('S-11');
  var num12 = localStorage.getItem('S-12');
  var num13 = localStorage.getItem('C-13');
  var num14 = localStorage.getItem('C-14');
  var num15 = localStorage.getItem('C-15');


  var sum = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5) + parseFloat(num6) + 
  parseFloat(num7) + parseFloat(num8) + parseFloat(num9) + parseFloat(num10) + parseFloat(num11) + parseFloat(num12) + 
  parseFloat(num13) + parseFloat(num14) + parseFloat(num15); 

  var per = (sum/total)*100;

  document.getElementById("percentage").innerHTML = per;
  	
  	switch(true)
	{
		case(per>=80):
		document.getElementById("grade").innerHTML="A1";
		break;
		case(per>=70):
		document.getElementById("grade").innerHTML="A";
		break;
		case(per>=60):
		document.getElementById("grade").innerHTML="B";
		break;
		case(per>=50):
		document.getElementById("grade").innerHTML="C";
		break;
		case(per>=40):
		document.getElementById("grade").innerHTML="D";
		break;
		case(per<40):
		document.getElementById("grade").innerHTML="Fail";
		break;
	}
  	return false;

});
	