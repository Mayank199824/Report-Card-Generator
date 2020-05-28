window.addEventListener('load', () => {	

	/*receive information */
	document.getElementById('stu').innerHTML= sessionStorage.getItem('STUDENT');
	document.getElementById('dob').innerHTML= sessionStorage.getItem('BIRTH');
  	document.getElementById('fat').innerHTML= sessionStorage.getItem('FATHER');
  	document.getElementById('mot').innerHTML= sessionStorage.getItem('MOTHER');
  	document.getElementById('sch').innerHTML= sessionStorage.getItem('SCHOOL');
  	document.getElementById('add').innerHTML= sessionStorage.getItem('ADDRESS');

  	/*table receiving */
  	document.getElementById('1').innerHTML= sessionStorage.getItem('M-1');
  	document.getElementById('2').innerHTML= sessionStorage.getItem('M-2');
  	document.getElementById('3').innerHTML= sessionStorage.getItem('M-3');
  	document.getElementById('4').innerHTML= sessionStorage.getItem('H-4');
  	document.getElementById('5').innerHTML= sessionStorage.getItem('H-5');
  	document.getElementById('6').innerHTML= sessionStorage.getItem('H-6');
  	document.getElementById('7').innerHTML= sessionStorage.getItem('E-7');
  	document.getElementById('8').innerHTML= sessionStorage.getItem('E-8');
  	document.getElementById('9').innerHTML= sessionStorage.getItem('E-9');
  	document.getElementById('10').innerHTML= sessionStorage.getItem('S-10');
  	document.getElementById('11').innerHTML= sessionStorage.getItem('S-11');
  	document.getElementById('12').innerHTML= sessionStorage.getItem('S-12');
  	document.getElementById('13').innerHTML= sessionStorage.getItem('C-13');
  	document.getElementById('14').innerHTML= sessionStorage.getItem('C-14');
  	document.getElementById('15').innerHTML= sessionStorage.getItem('C-15');

  	var total = 1500;

  var num1 = sessionStorage.getItem('M-1');
  var num2 = sessionStorage.getItem('M-2');
  var num3 = sessionStorage.getItem('M-3');
  var num4 = sessionStorage.getItem('H-4');
  var num5 = sessionStorage.getItem('H-5');
  var num6 = sessionStorage.getItem('H-6');
  var num7 = sessionStorage.getItem('E-7');
  var num8 = sessionStorage.getItem('E-8');
  var num9 = sessionStorage.getItem('E-9');
  var num10 = sessionStorage.getItem('S-10');
  var num11 = sessionStorage.getItem('S-11');
  var num12 = sessionStorage.getItem('S-12');
  var num13 = sessionStorage.getItem('C-13');
  var num14 = sessionStorage.getItem('C-14');
  var num15 = sessionStorage.getItem('C-15');


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
	