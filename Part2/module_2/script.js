function Ex1()
{
    let x = prompt("Enter numbers (1 per line) ");
    x = parseInt(x);
    if (isNaN(x))
    {
    x =  prompt("The input cannot be parsed to a number, try again");
    }
    let y = prompt("Enter numbers(1 per line)");
    Calculate(x,y);
    alert ("Check your console (Ctrl + Shift + J)")

        function Calculate(x , ...rest)
        {
        str = "Ex 1: ";
        let y = rest[0];
        if (rest!=""){
            let s = (x * y);
            str+= "Rectangle S = " + s;
            console.log(str);
        }
        else{
            let s = (x*x);
            str+= "Square S = " + s;
            console.log(str);
        }
        }
}

function Ex2(){
    let x = prompt("Enter numbers (1 per line) ");
    x = parseInt(x);
    if (isNaN(x))
    {
    x =  prompt("The input cannot be parsed to a number, try again");
    }

    let y = prompt("Enter numbers(1 per line)");
    y = parseInt(y);
    if (isNaN(y))
    {
    y =  prompt("The input cannot be parsed to a number, try again");
    }

    let z = prompt("Enter numbers (1 per line) ");
    z = parseInt(z);
    if (isNaN(z))
    {
    z =  prompt("The input cannot be parsed to a number, try again");
    }
    let s = "Your number is : " + x + y + z;
    console.log(s);

}

function Ex4(){
    
    S = "";
    S_res = "";
    var logElemInfo = document.querySelector(".info");
    logElemInfo.innerHTML =  S_res + "<br/>";

    var logElem = document.querySelector(".log");
    logElem.innerHTML =  S + "<br/>";


    var id1 = P1();
    var id2 = P2(); 
    console.log(id1 + " , " + id2);
    compare();
    function getRandomInt() {
        return Math.floor(Math.random() * Math.floor(3));
      }

    function P1(){
        var id_p1 = getRandomInt();
        P_log(id_p1);
        return id_p1;
       
    }

    function P2(){
        let id_p2 = getRandomInt();
        P_log(id_p2);
        return id_p2;
    }

            function compare(){
               
            var S_res = "";
            if(id1 === id2)
            {
                S_res += "The result is a tie!";
            }

            else if(id1 == 0)
            {
                if(id2 == 1)  
                {
                    S_res = "Rock wins";
                }
                else
                {
                    S_res = "Paper wins";
                }
            }

            else if(id1 == 2)
            {
                if(id2 == 0)
                {
                    S_res = "Paper wins";
                }
                else
                {
                    S_res = "Scissors wins";
                }
            }

            else if(id1 == 1)
            {
                if(id2 == 2)
                {
                    S_res = "Scissors wins";
                }
                else
                {
                    S_res = "Rock wins";
                }
            }
            
            console.log(S_res);
            var logElemInfo = document.querySelector(".info");
            logElemInfo.innerHTML +=  S_res + "<br/>";
            }

    function P_log (id){
        if (id == 0){
            S = "Stone";
        }
        else if (id == 1){
            S = "Shears"
        }
        else if (id == 2){
            S = "Paper"
        }
        else{
            S = "Ingame Error, please, refresh page";
        }
        var logElem = document.querySelector(".log");
        logElem.innerHTML +=  S + "<br/>";
    }


    function Main(){
       compare();
      
    }
}