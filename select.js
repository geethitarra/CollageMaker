function assignVar()
{
    const form = document.forms.templateForm;
    const checked = form.querySelector('input[name=Template]:checked'); /* querySelector code credited to/learned from https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector*/

    localStorage.setItem('templateSelection', checked.value);
    location.replace("imageUpload.html");
}