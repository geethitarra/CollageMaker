function showImage() {

      const imageP = document.querySelector('.p-input').files[0]; /* querySelector code learned from and credited to MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector*/
      const imageF = document.querySelector('.f-input').files[0];
      const imageH = document.querySelector('.h-input').files[0];
      const reader1 = new FileReader();

      reader1.addEventListener("load", function () { /* event listener code credited to and learned from W3Schools https://www.w3schools.com/js/js_htmldom_eventlistener.asp*/
          localStorage.setItem("imageP", reader1.result);
      }, false);
      if (imageP) {
          reader1.readAsDataURL(imageP);   
      }

      const reader2 = new FileReader();
      reader2.addEventListener("load", function () 
      {
          localStorage.setItem("imageF", reader2.result);
      }, false);

      if (imageF) {
        reader2.readAsDataURL(imageF);
      }

      const reader3 = new FileReader();
      reader3.addEventListener("load", function () 
      {
          localStorage.setItem("imageH", reader3.result);  
      }, false);

      if (imageH) {
          reader3.readAsDataURL(imageH);   
      }

    }
 
  function setVarSubmit()
   {
            var check = document.getElementById("personal-image-input"); /*start making file upload mandatory code credited to Rigved Barve*/ 
            var checkFam = document.getElementById("family-image-input");
            var checkHob = document.getElementById("hobby-image-input");

            if (check.files.length == 0)
            {
                alert("Please upload a personal image");
            }
            if (checkFam.files.length == 0)
            {
                alert("Please upload a family image");    
            }
            if (checkHob.files.length == 0)
            {
                alert("Please upload a hobby image");
            }
            if (check.files.length != 0 && checkFam.files.length != 0 && checkHob.files.length != 0)
            {
                location.replace("textinput.html");
            } 
            /*end making file upload mandatory code credited to Rigved Barve*/ 

   }


   
