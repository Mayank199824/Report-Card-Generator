  /*
  var txt;
  var subject = document.getElementById('subject');
  var marks = document.getElementById('marks');
  if (subject == null || subject == "" && marks == null || marks == "" ) 
  {
    txt = "Please fill all the boxes";
    document.getElementById("demo").innerHTML = txt;
  } 	
  else 
  {
    document.getElementById("submit").addEventListener("click",function myFunction() 
    {
	window.open("form_fill.html");
	});
  }
*/
function form_submit()
{
   /* send information of student */
  localStorage.setItem("STUDENT",document.getElementById('student').value);
  localStorage.setItem("BIRTH",document.getElementById('birth').value);
  localStorage.setItem("FATHER",document.getElementById('father').value);
  localStorage.setItem("MOTHER",document.getElementById('mother').value);
  localStorage.setItem("SCHOOL",document.getElementById('school').value);
  localStorage.setItem("ADDRESS",document.getElementById('address').value);

  /*Table */
  localStorage.setItem("M-1",document.getElementById('m-1').value);
  localStorage.setItem("M-2",document.getElementById('m-2').value);
  localStorage.setItem("M-3",document.getElementById('m-3').value);
  localStorage.setItem("H-4",document.getElementById('h-4').value);
  localStorage.setItem("H-5",document.getElementById('h-5').value);
  localStorage.setItem("H-6",document.getElementById('h-6').value);
  localStorage.setItem("E-7",document.getElementById('e-7').value);
  localStorage.setItem("E-8",document.getElementById('e-8').value);
  localStorage.setItem("E-9",document.getElementById('e-9').value);
  localStorage.setItem("S-10",document.getElementById('s-10').value);
  localStorage.setItem("S-11",document.getElementById('s-11').value);
  localStorage.setItem("S-12",document.getElementById('s-12').value);
  localStorage.setItem("C-13",document.getElementById('c-13').value);
  localStorage.setItem("C-14",document.getElementById('c-14').value);
  localStorage.setItem("C-15",document.getElementById('c-15').value);

 

}