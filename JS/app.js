function cal(){
        let n1 = parseInt(document.getElementById("num1").value);
        let n2 = parseInt(document.getElementById("num2").value);

        let operation = document.getElementById("operation").value;
        let res = "";
        if(operation === "add"){
            res = n1 + n2;
        }
        else if(operation === "sub"){
            res = n1 - n2;
        }
        else if(operation === "mul"){
            res = n1 * n2;
        }
        else{
            res = n1 / 2;
        }
        alert(`Result : ${res}`);
}