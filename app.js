// let count = 0;
// let sum = 0;
// let avg=0;
// Array.prototype.Avg= function () {

//     for (i = 0; i <this.length; i++) {
//         sum += this[i];
//         count++;
//     }
//     avg=sum/count;
//     console.log(avg);
// }  
// let array = [1, 2, 3,2];
// array.Avg()


const text = document.querySelector("#message-content");
const duration = document.querySelector("#duration");
const cancel = document.querySelector("#cancelable");
const toast = document.querySelector("#toasts")
const addtost = document.querySelector("#add-button");
const clear = document.querySelector("#clear-button");
const error = document.querySelector("#error-toast");
const success = document.querySelector("#success-toast");
const errorbutton = document.querySelector("#error");
const successbutton = document.querySelector("#succes");
const toastext = document.querySelector(".toast error-toast");
const iscancel= document.querySelector(".cancel-botton");



addtost.addEventListener("click", () => {
    if ((text.value == "") &&(successbutton.checked == true)  && (cancel.checked==true )) {
        toast.innerHTML = `<div class="toast error-toast">
                <p>error</p> <button class="cancel-botton">X</button>
            </div>`;
    }
    else if(errorbutton.checked == true && cancel.checked==true){
        toast.innerHTML = `<div class="toast error-toast">
        <p>${text.value}</p> <button class="cancel-botton">X</button>
    </div>`;
    }
    else if ((text.value == "") &&(successbutton.checked == true)  && (cancel.checked==true )) {
        toast.innerHTML = `<div class="toast success-toast">
                <p>succes</p> <button class="cancel-botton">X</button>
            </div>`;
    }
    else if((successbutton.checked == true)  && (cancel.checked==true )){
        toast.innerHTML = `<div class="toast success-toast">
        <p>succes</p> <button class="cancel-botton">X</button>
    </div>`;
    }

    else if ((text.value == "") &&(successbutton.checked == true)  && (cancel.checked=false )) {
        toast.innerHTML = `<div class="toast success-toast">
                <p>succes</p>
            </div>`;
    }
    else  {
        toast.innerHTML = `<div class="toast success-toast">
            <p>${text.value}</p>
        </div>`;
    }



})

clear.addEventListener("click", () => {
    clearall()
})

function clearall() {
    toast.innerText = ""
}

