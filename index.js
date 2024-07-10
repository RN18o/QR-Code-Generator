let imgbox = document.getElementById("Imgbox")
let qrImage = document.getElementById("qrimage")
let Input = document.getElementById("input")

function QrGenerate(){
    if(input.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Input.value;
    imgbox.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        },1000);
    }
}