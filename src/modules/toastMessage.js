  
export const toastMessage = (message) => {

    const createToast = () => {
        const toast = document.createElement("div");
        toast.className = "toast";

        document.body.appendChild(toast);

        for(let i=0; i<message.length; i++){
            let span = document.createElement("span");
            let str = document.createTextNode(message[i]);

            if(message[i] == " ") str = document.createTextNode("\u00a0");

            span.appendChild(str);
            span.style.opacity = 0;
            span.style.transition = "all 0.2s ease-in-out";
            span.style.display = "inline-block";
            span.style.transform = "translateY(-10px)";
            toast.appendChild(span);
            setTimeout(() => {
                span.style.opacity = 1;
                span.style.transform = "translateY(0)";

                clearToast(i, toast);
                
            }, (50 * i));
        }

        const clearToast = (i, toast) => {

            if(i == message.length-1){
                setTimeout(() => {
                    for(let j=0; j<message.length; j++){
                        setTimeout(() => {
                            toast.childNodes[j].style.opacity = 0;
                            toast.childNodes[j].style.transform = "translateY(-10px)";
                        }, (50 * j));
                    }
                    setTimeout(() => {
                        document.body.removeChild(toast);
                    }, (50 * message.length-1));
                }, 2000)
            }
        }
    }



    if(document.querySelectorAll(".toast").length === 0){
        createToast();
    }
}

export default toastMessage;