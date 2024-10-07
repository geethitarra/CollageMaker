
window.addEventListener('load', () => {
    const name = localStorage.getItem('name');
    document.getElementById('name').innerHTML = name+"'s Collage";

    const pronoun = localStorage.getItem('pronouns');
    if(pronoun == 1){
        document.getElementById('pronouns').innerHTML = "she/her";
    }else if(pronoun ==2){
        document.getElementById('pronouns').innerHTML = "he/him";
    }else{
        document.getElementById('pronouns').innerHTML = "they/them";
    }

    const pDesc = localStorage.getItem('personalDesc');
    document.getElementById('pDesc').innerHTML = pDesc;

    const fDesc = localStorage.getItem('famDesc');
    document.getElementById('fDesc').innerHTML = fDesc;

    const hDesc = localStorage.getItem('hobbiesDesc');
    document.getElementById('hDesc').innerHTML = hDesc;

    const pImg = localStorage.getItem('imageP');
    document.getElementById('pImg').src = pImg;

    const fImg = localStorage.getItem('imageF');
    document.getElementById('fImg').src = fImg;

    const hImg = localStorage.getItem('imageH');
    document.getElementById('hImg').src = hImg;

    const bColor = localStorage.getItem('backColor');
    const color = localStorage.getItem('favoriteColor');

    const colorArray = new Array();
        colorArray[0] = "red";
        colorArray[1] = "blue";
        colorArray[2] = "green";
        colorArray[3] = "purple";
        colorArray[4] = "pink";
        colorArray[5] = "yellow";
        colorArray[6] = "orange";

        if (bColor == 1){

            document.body.style.backgroundColor = colorArray[0];
        }

        else if (bColor == 2){
                
            document.body.style.backgroundColor = colorArray[1];
        }

        else if (bColor == 3){
                
            document.body.style.backgroundColor = colorArray[2];                
        }

        else  if (bColor == 4){
               
            document.body.style.backgroundColor = colorArray[3];
        }

        else if (bColor == 5){
               
            document.body.style.backgroundColor = colorArray[4];
        }

        else if (bColor == 6){
        
            document.body.style.backgroundColor = colorArray[5];
        }

        else if (bColor == 7){
        
            document.body.style.backgroundColor = colorArray[6];
        }
    
    if (color == 1){
        document.getElementById('imgDiv1').style = "background-color: red;"
        document.getElementById('imgDiv2').style = "background-color: red;"
        document.getElementById('imgDiv3').style = "background-color: red;"
        document.getElementById('fDesc').style = "color: red;"
        document.getElementById('hDesc').style = "color: red;"
        document.getElementById('pDesc').style = "color: red;"
        document.getElementById('name').style = "color: red;"
        document.getElementById('pronouns').style = "color: red;"

    }

    else if (color == 2){
        document.getElementById('imgDiv1').style = "background-color: blue;"
        document.getElementById('imgDiv2').style = "background-color: blue;"
        document.getElementById('imgDiv3').style = "background-color: blue;"
        document.getElementById('fDesc').style = "color: blue;"
        document.getElementById('hDesc').style = "color: blue;"
        document.getElementById('pDesc').style = "color: blue;"
        document.getElementById('name').style = "color: blue;"
        document.getElementById('pronouns').style = "color: blue;"

    }

    else if (color == 3){
        document.getElementById('imgDiv1').style = "background-color: green;"
        document.getElementById('imgDiv2').style = "background-color: green;"
        document.getElementById('imgDiv3').style = "background-color: green;"
        document.getElementById('fDesc').style = "color: green;"
        document.getElementById('hDesc').style = "color: green;"
        document.getElementById('pDesc').style = "color: green;"
        document.getElementById('name').style = "color: green;"
        document.getElementById('pronouns').style = "color: green;"
        
    }

    else  if (color == 4){
        document.getElementById('imgDiv1').style = "background-color: purple;"
        document.getElementById('imgDiv2').style = "background-color: purple;"
        document.getElementById('imgDiv3').style = "background-color: purple;"
        document.getElementById('fDesc').style = "color: purple;"
        document.getElementById('hDesc').style = "color: purple;"
        document.getElementById('pDesc').style = "color: purple;"
        document.getElementById('name').style = "color: purple;"
        document.getElementById('pronouns').style = "color: purple;"

    }

    else if (color == 5){
        document.getElementById('imgDiv1').style = "background-color: pink;"
        document.getElementById('imgDiv2').style = "background-color: pink;"
        document.getElementById('imgDiv3').style = "background-color: pink;"
        document.getElementById('fDesc').style = "color: pink;"
        document.getElementById('hDesc').style = "color: pink;"
        document.getElementById('pDesc').style = "color: pink;"
        document.getElementById('name').style = "color: pink;"
        document.getElementById('pronouns').style = "color: pink;"

    }

    else if (color == 6){
        document.getElementById('imgDiv1').style = "background-color: yellow;"
        document.getElementById('imgDiv2').style = "background-color: yellow;"
        document.getElementById('imgDiv3').style = "background-color: yellow;"
        document.getElementById('fDesc').style = "color: yellow;"
        document.getElementById('hDesc').style = "color: yellow;"
        document.getElementById('pDesc').style = "color: yellow;"
        document.getElementById('name').style = "color: yellow;"
        document.getElementById('pronouns').style = "color: yellow;"

    }

    else if (color == 7){
        document.getElementById('imgDiv1').style = "background-color: orange;"
        document.getElementById('imgDiv2').style = "background-color: orange;"
        document.getElementById('imgDiv3').style = "background-color: orange;"
        document.getElementById('fDesc').style = "color: orange;"
        document.getElementById('hDesc').style = "color: orange;"
        document.getElementById('pDesc').style = "color: orange;"
        document.getElementById('name').style = "color: orange;"
        document.getElementById('pronouns').style = "color: orange;"

    }

})

function resetProgram() {
    location.replace("index.html")
}