const actualBtn = document.getElementById('zipFileInput');

actualBtn.addEventListener('change', function(){
    document.getElementById("info").innerHTML += "<b>File Selected:</b> " + this.files[0].name + "<br>";
})