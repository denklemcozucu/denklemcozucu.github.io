function helloWorld(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    document.getElementById("sonuc").style.backgroundColor = "rgb(216, 69, 184)"
    document.getElementById("sonuc").style.fontSize = "115%"
    document.getElementById("sonuc").style.paddingTop = "1mm"
    document.getElementById("sonuc").style.paddingBottom = "1mm"
    document.getElementById("sonuc").style.marginLeft = "20%"
    document.getElementById("sonuc").style.marginRight = "20%"
    document.getElementById("sonuc").style.borderRadius = "12px"
    document.getElementById("delta").style.backgroundColor = "rgb(69, 184, 216)"
    document.getElementById("delta").style.fontSize = "115%"
    document.getElementById("delta").style.paddingTop = "1mm"
    document.getElementById("delta").style.paddingBottom = "1mm"
    document.getElementById("delta").style.marginLeft = "20%"
    document.getElementById("delta").style.marginRight = "20%"
    document.getElementById("delta").style.borderRadius = "12px"
    var [sonuc, delta] = trying_part(a, b, c);
    document.getElementById("sonucb").innerHTML = sonuc;
    document.getElementById("deltab").innerHTML = delta;

}

//LIST FUNCTION
function list(iterable){
  return [...iterable];  
}

function GCD(a,b)
{ 
    if(b==0)
    { 
        if (a == 0)
            return 1;
        else
            return a;
    }

    else
        return GCD(b, a % b);
}

function primecheck(value)
{
    var num;

    for (num = 2; num <= Math.floor(num); num++) 
    {
        if (value % num == 0)
            return false;
    }

    return true;
}

function asallara_ayir(n) 
{
    var c = n;
    var a = 1;
    var l = [];
    var i, j;

    for (i = 2; i < n; i++) 
    {
        if (primecheck(i))
        {
            if (n % i == 0)
                l.push(i);
        }
    }

    for (j in l) 
    {
        while (n % (Math.pow(j, 2)) == 0)
        {
            a *= j;
            n /= Math.pow(j, 2);
        }
    }

    return [a, Math.floor(c / Math.pow(a, 2))];
}

function sadelestir(out, A)
{
    var outlist, s, sayi, gcd, sayi1, index, sayi2;
    if (out[0] != "x")
    {
        outlist = list(out)
        if (out[0] == "+")
        {
            s = 4;
            try
            {
                while (true)
                {
                    sayi = Math.floor(out.slice(3, s));
                    s += 1;
                }
            }
            catch
            {
                gcd = GCD(sayi, A);
            }

            //out = out.replace(f" {sayi}", f" {int(sayi / gcd)}")
            //out = out.replace(f"/ {A}", f"/ {int(A / gcd)}")

            out = out.replace(`${sayi}', '${Math.floor(sayi / gcd)}`);
            out = out.replace(`/ ${A}', '/ ${Math.floor(A / gcd)}`);

            return out;
        }
        else
        {
            if (out[1] == "-")
            {
                s = 3;
                try
                {
                    while (true)
                    {
                        sayi1 = Math.floor(out.slice(2, s));
                        s = s + 1;
                    }
                }

                catch
                {
                    gcd = GCD(sayi1, A)
                }
                    
                index = outlist.indexOf("+") + 3;
                s = index + 1;

                try
                {
                    while (true) 
                    {
                        sayi2 = Math.floor(out.slice(index, s));
                        s = s + 1;
                    }
                }

                catch
                {
                    gcd = GCD(sayi2, gcd)
                }
                
                //out = out.replace(f"(-{sayi1}", f"(-{int(sayi1 / gcd)}")
                //out = out.replace(f"- {sayi2}", f"- {int(sayi2 / gcd)}")
                //out = out.replace(f"/ {A}", f"/ {int(A / gcd)}")

                out = out.replace(`-${sayi1}`, `(-${Math.floor(sayi1 / gcd)})`);
                out = out.replace(`-${sayi2}`, `-${Math.floor(sayi2 / gcd)}`);
                out = out.replace(`/ ${A}`, `${Math.floor(A / gcd)}`);

                return out;
            }

            else
            {
                s = 2;
                try
                {
                    while (true) 
                    {
                        sayi1 = Math.floor(out.slice(1, s));
                        s = s + 1;
                    }
                }

                catch
                {
                    gcd = GCD(sayi1, A);
                }
                    
                index = outlist.indexof("+") + 3;
                s = index + 1;

                try
                {
                    while (true) 
                    {
                        sayi2 = Math.floor(out.slice(index, s));
                        s = s + 1;
                    }
                }

                catch
                {
                    gcd = GCD(sayi2, gcd);
                }
                
                //out = out.replace(f"(-{sayi1}", f"(-{int(sayi1 / gcd)}")
                //out = out.replace(f"- {sayi2}", f"- {int(sayi2 / gcd)}")
                //out = out.replace(f"/ {A}", f"/ {int(A / gcd)}")

                out = out.replace(`(-${sayi1}`, `(-${Math.floor(sayi1 / gcd)})`);
                out = out.replace(`-${sayi2}`, `-${Math.floor(sayi2 / gcd)}`);
                out = out.replace(`/ ${A}`, `${Math.floor(A / gcd)}`);

                return out;    
            }   
        }
    }

    else
        return out;
}      

function trying_part(a, b, c)
{
    //print("\nif your equation is  a*x^2 + b*x + c = 0")
    console.log("\nIf your equation is  AX^2 + BX + C = 0");
    var output;

    var x1 = (-b+(b**2 - 4*a*c)**0.5) / (2*a);
    var x2 = (-b-(b**2 - 4*a*c)**0.5) / (2*a);

    var [kokdisi, kokici] = asallara_ayir(b**2 - 4*a*c);
    //var kokici = asallara_ayir(b**2 - 4*a*c);

    var a1 = x1.toString();
    var a2 = x2.toString();

    var xc1 = x1 * 9;
    var xc2 = x2 * 9;

    d = b**2 - 4*a*c
    if (d >= 0)
    {
        if (((x1 == parseFloat(a1.slice(0, 6))) && (x2 == parseFloat(a2.slice(0, 6)))) || ((x1 * 9 == Math.floor(xc1)) && (x2 * 9 === Math.floor(xc2))))
        {
            if ((x1 == parseFloat(a1.slice(0, 6))) && (x2 == parseFloat(a2.slice(0, 6))))
            {
                //output = f"x1 = {x1}"
                //output += f"\nx2 = {x2}"

                output = `x1 = ${x1}`;
                output = output + `<br>x2 = ${x2}`;
            }

            else if ((x1 * 3 == Math.floor(xc1 / 3)) && (x2 * 3 == Math.floor(xc2 / 3)))
            {
                //output = f"x1 = {int(x1 * 3)}/3"
                //output += f"\nx2 = {int(x2 * 3)}/3"

                output = `x1 = ${Math.floor(x1 * 3) / 3}`;
                output = output + `<br>x2 = ${Math.floor(x2 * 3) / 3}`;
            }

            else if ((x1 * 9 == Math.floor(xc1)) && (x2 * 9 == Math.floor(xc2)))
            {
                //output = f"x1 = {int(x1 * 9)}/9"
                //output += f"\nx2 = {int(x2 * 9)}/9"

                output = `x1 = ${Math.floor(x1 * 9) / 9}`;
                output = output + `<br>x2 = ${Math.floor(x2 * 9) / 9}`;
            }

        }

        else
        {
            if (kokdisi == 1)
            {
                if (kokici == 1)
                {
                    if (b == 0)
                        output = `± 1 / ${2 * a}`;
                        //output = f"± 1 / {2 * a}"
                    else
                        output = `(${-b} ± 1) / ${2 * a}`;
                        //output = f"({-b} ± 1) / {2 * a}"
                }
                else
                {
                    if (b == 0)
                        output = `± √${kokici} / ${2 * a}`;
                        //output = f"± √{kokici} / {2 * a}"
                    else
                        output = `(${-b} ± √${kokici}) / ${2 * a}`;
                        //output = f"({-b} ± √{kokici}) / {2 * a}"
                }
            }
            else
            {
                if (kokici == 1)
                {
                    if (b == 0)
                        output = `± ${kokdisi} / ${2 * a}`;
                        //output = f"± {kokdisi} / {2 * a}"
                    else
                        output = `(${-b} ± ${kokdisi}) / ${2 * a}`;
                        //output = f"({-b} ± {kokdisi}) / {2 * a}"
                }
                else
                {
                    if (b == 0)
                        output = `± ${kokdisi}√${kokici} / ${2 * a}`;
                        //output = f"± {kokdisi}√{kokici} / {2 * a}"
                    else
                        output = `(${-b} ± ${kokdisi}√${kokici}) / ${2 * a}`;
                        //output = f"({-b} ± {kokdisi}√{kokici}) / {2 * a}"
                }
            }
        }
    }

    else
    {
        x1 = (-b+(4*a*c - b**2)**0.5) / (2*a);
        x2 = (-b-(4*a*c - b**2)**0.5) / (2*a);

        [kokdisi, kokici] = asallara_ayir(4*a*c - b**2);
        //kokici = asallara_ayir(4*a*c - b**2);
        
        if (kokdisi == 1)
        {
            if (kokici == 1)
            {
                if (b == 0)
                    output = `± i / ${2 * a}`;
                    //output = f"± i / {2 * a}"
                else
                    output = `(${-b} ± i) / ${2 * a}`;
                    //output = f"({-b} ± i) / {2 * a}"
            }
            else 
            {
                if (b == 0)
                    output = `± i*√${kokici} / ${2 * a}`;
                    //output = f"± i*√{kokici} / {2 * a}"
                else
                    output = `(${-b} ± i*√${kokici}) / ${2 * a}`;
                    //output = f"({-b} ± i*√{kokici}) / {2 * a}"
            }
        }
        else
        {
            if (kokici == 1)
            {
                if (b == 0)
                    output = `± ${kokdisi}*i / ${2 * a}`;
                    //output = f"± {kokdisi}*i / {2 * a}"
                else
                    output = `(${-b} ± ${kokdisi}*i) / ${2 * a}`;
                    //output = f"({-b} ± {kokdisi}*i) / {2 * a}"
            }
            else
            {
                if (b == 0)
                    output = `± ${kokdisi}i*√${kokici} / ${2 * a}`;
                    //output = f"± {kokdisi}i*√{kokici} / {2 * a}"
                else
                    output = `(${-b} ± ${kokdisi}i*√${kokici}) / ${2 * a}`;
                    //output = f"({-b} ± {kokdisi}i*√{kokici}) / {2 * a}"
            }
        }
    }
    return[output, (`Δ = ${(b**2 - 4*a*c)}`)];
}
