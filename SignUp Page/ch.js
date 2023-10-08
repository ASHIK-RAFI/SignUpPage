function password()
{
    let x=document.getElementById("pswd").value;
    let f1=0;
    if(x.length < 8)
    {
       f1=1;
    }
    let uc=0;
    let lc=0;
    let nc=0;
    let tc=0;
    for(var i=0;i<x.length;i++)
    {
        var l=x[i];
        if(l>=0 && l<=9){
            nc=nc+1;
        }
        else if(l>='A' && l<='Z')
        {
            uc=uc+1;
        }
        else if(l>='a' && l<='z')
        {
            lc=lc+1;
        }
    }
    tc=nc+uc+lc;
    tc=x.length-tc;
    if(uc<1 || tc<1 || nc<1)
    {
       f1=1;
    }
    let f2=0;
    let a=document.getElementById("name").value;
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!regex_pattern.test(a)) {
        f2=1
    }

    if(f2==1)
    {
        window.alert("Invalid Username");

    }
    else if(f1==1)
    {
        window.alert("Invalid Password");
    }
    else
    {
        window.alert("Successfull");
    }
}