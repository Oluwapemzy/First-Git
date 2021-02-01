var len;
var strs;
var input_of_exponentiation, what_to_find_root;



function getNum(num) {
    nume = document.querySelector('.like-white').value;
    len = document.querySelector('.typed').innerHTML
    console.log(typeof(len));
    
    if (len.length < 40) {
        if (len == "" && num == 0) {
            return
        } else {
            document.querySelector('.typed').append(num);
            len += num;
        }
    }
}


function delOne() {
    strs = document.querySelector('.typed').innerHTML;
    what_to_del = strs[strs.length - 1];
    inde = strs.lastIndexOf(what_to_del);
    console.log(inde);
    new_str = strs.substr(0, inde);
    document.querySelector('.typed').innerHTML = new_str;
}


function square() {
    input_of_exponentiation = document.querySelector('.typed').innerHTML;
    var whatToDo = document.querySelector(".cube").style.display;
    

    if (whatToDo == "inherit") {
        document.querySelector('.result').innerHTML = input_of_exponentiation ** 3;
    } else {
        document.querySelector('.typed').innerHTML = `sqr(${input_of_exponentiation})`;
        document.querySelector('.result').innerHTML = input_of_exponentiation ** 2;
    }

    document.querySelector('.typed').innerHTML = ""
}


function plusOperation() {
    var plu = document.querySelector('.typed').innerHTML;
    var las = plu.length -1;
    console.log(las);
    var mrek = document.querySelector(".result").innerHTML
    if (plu == "") {
        document.querySelector('.typed').innerHTML = `${mrek} + `
    }
    else {
        document.querySelector(".typed").innerHTML += " + "
    }
}


function subtractOperation() {
    var subt = document.querySelector('.typed').innerHTML;
    var sa = subt.length -1;
    console.log(sa);
    var hen = document.querySelector(".result").innerHTML;
    if (subt == "") {
        document.querySelector('.typed').innerHTML = `${hen} - `
    }
    else {
        document.querySelector(".typed").innerHTML += " - "
    }  
}


function multiplicationOperation() {
    var multi = document.querySelector('.typed').innerHTML;
    var mul = multi.length -1;
    console.log(mul);
    var res = document.querySelector(".result").innerHTML;
    if (multi == "") {
        document.querySelector('.typed').innerHTML = `${res} * `
    }
    else {
        document.querySelector(".typed").innerHTML += " * "
    }  
}


function divisionOperation() {
    var divid = document.querySelector('.typed').innerHTML;
    var div = divid.length -1;
    console.log(div);
    var div = document.querySelector(".result").innerHTML;
    if (divid == "") {
        document.querySelector('.typed').innerHTML = `${div} / `
    }
    else {
        document.querySelector(".typed").innerHTML += " / "
    }  
}


function squareRoot() {
    what_to_find_root = document.querySelector('.typed').innerHTML;

    var whatToDo = document.querySelector("#recip").style.display;

    console.log(what_to_find_root);
    if (whatToDo == "inherit") {
        document.querySelector(".result").innerHTML = `${1/what_to_find_root}`
    } else {
        document.querySelector('.typed').innerHTML = `&Sqrt;(${what_to_find_root})`
    document.querySelector('.result').innerHTML = what_to_find_root ** 0.5;
    }
    
    setTimeout (
        function () {
            document.querySelector(".typed").innerHTML = ""
        }
    ,1000)
}


function clearResult() {
    document.querySelector('.result').innerHTML = 0; 
}


function clearAllDisplay() {
    document.querySelector('.typed').innerHTML = "";

    document.querySelector('.result').innerHTML = 0;
}


function pie() {
    pi = Math.PI;
    document.querySelector('.typed').innerHTML = pi;
    console.log(pi);
}


function exponent() {
    var num = document.querySelector(".typed");
    console.log(num.innerHTML);

    num.innerHTML += ` **  `
}


function tenRaisePower() {
    var get = document.querySelector(".typed").innerHTML;
    var epo = document.querySelector("#epow").style.display;
    if (epo == "inherit") {
        var epow = Math.exp(get);
        document.querySelector(".result").innerHTML = `${epow}`
    } else {
        var tenraise = 10 ** get;
        document.querySelector(".typed").innerHTML = `10 ^ ${get} `
        document.querySelector(".result").innerHTML = `${tenraise}`;
    }
    
    setTimeout (
        function () {
            document.querySelector(".typed").innerHTML = ""
        }
    ,1000)
}


function changeToArc() {
    var squareToCube = document.querySelector("#square");
    var cub = document.querySelector(".cube");
    console.log(squareToCube.style.display);
    var sine = document.querySelector("#raise");
    var cos = document.querySelector("#raisecos");
    var tan = document.querySelector("#raisetan");
    var reciprocal = document.querySelector("#recip");
    var lin = document.querySelector("#lin");
    var epo = document.querySelector("#epow");

    if (squareToCube.style.display == "inline" && sine.style.display == "none" && cos.style.display == "none" && tan.style.display == "none" && reciprocal
    .style.display == "none" && lin.style.display == "none" && epo.style.display == "none") {
        squareToCube.style.display = "none";
        cub.style.display = "inherit";
        sine.style.display = "inherit";
        cos.style.display = "inherit";
        tan.style.display = "inherit";
        reciprocal.style.display = "inherit";
        epo.style.display = "inherit";
        document.querySelector("#tenpow").style.display = "none"
        document.querySelector("#sqrt").style.display = "none";
        document.querySelector("#bot").style.borderBottom = "2px solid blue";
        lin.style.display = "inherit";
        document.querySelector("#log").style.display = "none";
    }
    else {
        squareToCube.style.display = "inline";
        cub.style.display = "none";
        sine.style.display = "none";
        cos.style.display = "none";
        tan.style.display = "none";
        reciprocal.style.display = "none";
        lin.style.display = "none";
        epo.style.display = "none";
        document.querySelector("#tenpow").style.display = "inherit";
        document.querySelector("#log").style.display = "inherit";
        document.querySelector("#sqrt").style.display = "inherit";
        document.querySelector("#bot").style.borderBottom = "inherit";
    }
}


function remainder() {
    var remain = document.querySelector(".typed").innerHTML;
    document.querySelector(".typed").innerHTML += ` Mod `;
}


function log() {
    var whatLog = document.querySelector(".typed").innerHTML;
    
    var line = document.querySelector("#lin").style.display;

    if (line == "inherit") {
        var linOfAns = Math.log(whatLog);
        document.querySelector(".result").innerHTML = `${linOfAns}`
        // console.log(Math.log(whatLog));
    } else {
        document.querySelector(".result").innerHTML = Math.log10(whatLog);
    }
    document.querySelector(".typed").innerHTML = ""
}


function factorial() {
    var factr = document.querySelector(".typed").innerHTML;
    parseInt(factr);
    document.querySelector(".typed").innerHTML = `fact(${factr})`
    if (factr == 0) {
        document.querySelector(".result").innerHTML = 1;
    } else if (factr < 0) {
        document.querySelector(".result").innerHTML = "Invalid Input";
    } else {
        var arr = [];
        var factmulti = 1;
        for (var index = 1; index <= factr; index++) {;
            arr.push(index);            
        }
        
        for (var inde = 0; inde < arr.length; inde++) {
            factmulti = factmulti * arr[inde];
            console.log(`${inde} --> ${arr[inde]}`);
        }
        console.log(`factorial is ${factmulti}`);
        document.querySelector(".result").innerHTML = factmulti;
    }
    setTimeout( 
        function() {
            document.querySelector(".typed").innerHTML = "";
        }
        , 3000);
}


function sine() {
    var whatSine = document.querySelector(".typed").innerHTML;
    var whatToDo = document.querySelector("#raise").style.display;
    if (whatSine == "") {
        whatSine = 0
    }

    if (whatToDo == "inherit") {
        var asi = Math.asin(whatSine)
        console.log(asi);
        var degAsi = (asi / Math.PI) * 180
        document.querySelector(".result").innerHTML = `${degAsi}`
    } else {
        var sines = (whatSine / 180) * Math.PI;
        var sinAns = Math.sin(sines);
        document.querySelector(".result").innerHTML = `${sinAns}`;
    }
    document.querySelector(".typed").innerHTML = ""
    
}


function cos() {
    var whatCos = document.querySelector(".typed").innerHTML;
    var whatToDo = document.querySelector("#raisecos").style.display;
    if (whatCos == "") {
        whatCos = 0
    }

    if (whatToDo == "inherit") {
        var aco = Math.acos(whatCos)
        console.log(aco);
        var degAco = (aco / Math.PI) * 180
        document.querySelector(".result").innerHTML = `${degAco}`
    } else {
        var coss = (whatCos / 180) * Math.PI;
        var cosAns = Math.cos(coss);
        document.querySelector(".result").innerHTML = `${cosAns}`;
    }
    document.querySelector(".typed").innerHTML = ""
}


function tan() {
    var whatTan = document.querySelector(".typed").innerHTML;
    var whatToDo = document.querySelector("#raisetan").style.display;
    if (whatTan == "") {
        whatTan = 0
    }
    
    if (whatToDo == "inherit") {
        var ata = Math.atan(whatTan)
        var degAta = (ata / Math.PI) * 180
        document.querySelector(".result").innerHTML = `${degAta}`
    } else {
        var tan = (whatTan / 180) * Math.PI;
    
        var tanAns = Math.tan(tan);
        document.querySelector(".result").innerHTML = `${tanAns}`;
    }

    document.querySelector(".typed").innerHTML = ""
}


function evaluae() {
    var eva = document.querySelector(".typed").innerHTML;
    var resu = eval(eva)

    if (resu == undefined) {
        // document.querySelector(".typed").innerHTML = ""
        document.querySelector(".result").innerHTML = "Thank you",0;
        // alert("0")
    }else {
        document.querySelector(".result").innerHTML = resu;
    }
    console.log(eva);
    document.querySelector(".typed").innerHTML = "";
}

