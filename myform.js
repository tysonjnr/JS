let myform =document.getElementById("myform");
myform.addEventListener("submit",
    function(e){
        e.preventDefault();
        if (document.getElementById("1stname").value.length==0||document.getElementById("2ndname").value.length==0||document.getElementById("mail").value.length==0) {
            document.getElementById("Invalid").innerText="Enter all fields"
            
        } else {
            document.getElementById("Invalid").innerText=""
        }
    });
    let list1 = [];
    let list2 = [];
    let list3 = [];
    let n =1;
    let x =0;
    function addrow(){
        let addwer = document.getElementById("tabletop");
        let newwer= addwer.insertRow(n);

        list1[x] =document.getElementById("1stname").value;

        list2[x] =document.getElementById("2ndname").value;

        list3[x] =document.getElementById("mail").value;

        var cel1 =newwer.insertCell(0);
        var cel2 =newwer.insertCell(1);
        var cel3 =newwer.insertCell(2);

        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];

        list1[x] = "First name";
        list1[x] = "Second name";
        list1[x] = "Email";
        
        n++;
        x++;
    }

          