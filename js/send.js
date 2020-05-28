function form_submit()
{
   /* send information of student */
  sessionStorage.setItem("STUDENT",document.getElementById('student').value);
  sessionStorage.setItem("BIRTH",document.getElementById('birth').value);
  sessionStorage.setItem("FATHER",document.getElementById('father').value);
  sessionStorage.setItem("MOTHER",document.getElementById('mother').value);
  sessionStorage.setItem("SCHOOL",document.getElementById('school').value);
  sessionStorage.setItem("ADDRESS",document.getElementById('address').value);

  /*Table */
  sessionStorage.setItem("M-1",document.getElementById('m-1').value);
  sessionStorage.setItem("M-2",document.getElementById('m-2').value);
  sessionStorage.setItem("M-3",document.getElementById('m-3').value);
  sessionStorage.setItem("H-4",document.getElementById('h-4').value);
  sessionStorage.setItem("H-5",document.getElementById('h-5').value);
  sessionStorage.setItem("H-6",document.getElementById('h-6').value);
  sessionStorage.setItem("E-7",document.getElementById('e-7').value);
  sessionStorage.setItem("E-8",document.getElementById('e-8').value);
  sessionStorage.setItem("E-9",document.getElementById('e-9').value);
  sessionStorage.setItem("S-10",document.getElementById('s-10').value);
  sessionStorage.setItem("S-11",document.getElementById('s-11').value);
  sessionStorage.setItem("S-12",document.getElementById('s-12').value);
  sessionStorage.setItem("C-13",document.getElementById('c-13').value);
  sessionStorage.setItem("C-14",document.getElementById('c-14').value);
  sessionStorage.setItem("C-15",document.getElementById('c-15').value);

 

}