  
export const toast = (message) => {
    if(document.querySelectorAll(".toast").length === 0){
        const toast = document.createElement("div");
        toast.className = "toast";

        document.body.appendChild(toast);

        for(let i=0; i<message.length; i++){
            let span = document.createElement("span");
            let str = document.createTextNode(message[i]);

            if(message[i] == " ") str = document.createTextNode("\u00a0");

            span.append(str);
            span.style.opacity = 0;
            span.style.transition = "all 0.1s ease-in-out";
            span.style.display = "inline-block";
            span.style.transform = "translateY(-10px)";
            toast.append(span);
            setTimeout(() => {
                span.style.opacity = 1;
                span.style.transform = "translateY(0)";

                if(i == message.length-1){
                    setTimeout(() => {
                        for(let j=0; j<message.length; j++){
                            setTimeout(() => {
                                document.querySelectorAll(".toast > span")[j].style.opacity = 0;
                                document.querySelectorAll(".toast > span")[j].style.transform = "translateY(-10px)";
                            }, (100 * j));
                        }
                        setTimeout(() => {
                            toast.remove();
                        }, (100 * message.length-1));
                    }, 2000)
                }
            }, (100 * i));
        }
    }
}