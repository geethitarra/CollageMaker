
function valueTaker()
    {
   
    const introform = document.getElementById("introForm");
    const name = document.getElementById("name");
    const pronouns = document.getElementById("pronounChoice");
    const favoriteColor = document.getElementById("favoriteColor");
    const backColor = document.getElementById("backColor");

    introform.addEventListener('submit', function(e){ /* event listener code credited to and learned from W3Schools https://www.w3schools.com/js/js_htmldom_eventlistener.asp*/
        e.preventDefault();
        const nameValue = name.value;
        const pronounValue = pronouns.value;
        const favoriteColorValue = favoriteColor.value;
        const backColorValue = backColor.value;

        localStorage.setItem('name', nameValue);
        localStorage.setItem('pronouns', pronounValue);
        localStorage.setItem('favoriteColor', favoriteColorValue);
        localStorage.setItem('backColor', backColorValue);

        location.replace("templateSelect.html");
    
    })
    }