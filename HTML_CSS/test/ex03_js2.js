const num = document.getElementById("num");

    const btnPlus = document.getElementById("btn-plus"); 
    const btnMinus = document.getElementById("btn-minus"); 


    btnPlus.addEventListener("click", function(){

        let n = Number(num.textContent);
        n += 1; 
        num.textContent = n;
        console.log(n);

        n.textContent 

    })
    btnMinus.addEventListener("click", function(){

        let m = Number(num.textContent);
        if (m>0){ 
            m -= 1;
        }
        

        num.textContent = m;
        console.log(m);

        m.textContent

    })

    reset.addEventListener("click", function(){
        let m = Number(num.textContent);
        m = 0;
        num.textContent = m;
        m.textContent

    })
