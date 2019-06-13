var n = "";
var str = "TÔI LÀ MỘT TÊN NGỐC!!!"
function typeTextarea() {
    let t = document.form.textarea.value;
    let j = t.length;
    if(j > 0){
        for(let i = 0; i < j; i++){
            n = n + str[i];

            // Khi gõ hết chuỗi tự động reset
            if(i === 21){
                document.form.textarea.value = "";
                n = "";
            }
        }
    }
    document.form.textarea.value = n;
    n = "";
    setTimeout("typeTextarea()",1);
}

document.form.textarea.addEventListener('keydown', typeTextarea);