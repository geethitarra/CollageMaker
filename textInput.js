function setVarSubmit() {

    const form = document.getElementById("form");
    const personalDesc = document.getElementById("personalDesc");
    const famDesc = document.getElementById("famDesc");
    const hobbiesDesc = document.getElementById("hobbiesDesc");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const personalDescription = personalDesc.value;
        const famDescription = famDesc.value;
        const hobbiesDescription = hobbiesDesc.value;

        localStorage.setItem('hobbiesDesc', hobbiesDescription);
        localStorage.setItem('famDesc', famDescription);
        localStorage.setItem('personalDesc', personalDescription);

        if (localStorage.getItem('templateSelection') == "template3.jpeg") {
            location.replace("collageTemplate3.html");

        } else if (localStorage.getItem('templateSelection') == "template2.jpeg") {
            location.replace("collageTemplate2.html");

        } else {
            location.replace("collageTemplate1.html");

        };



    })
}
