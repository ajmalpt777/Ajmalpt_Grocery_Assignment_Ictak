var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){

    if(this.readyState==4 && this.status==200)
     {
         var response=JSON.parse(this.responseText);
        //  console.log(response);
         var Jpeople=response.item;
        //  console.log(Jpeople);
         var row;
    for(var i=0; i<Jpeople.length;i++){
            row = `
                        <tr>
                        <td>${Jpeople[i].SN}</td>
                        <td>${Jpeople[i].Name}</td>
                        <td>${Jpeople[i].Quantity}</td>
                        <td>${Jpeople[i].Unit}</td>
                        <td>${Jpeople[i].Department}</td>
                        <td>${Jpeople[i].Notes}</td>
                        <tr>`
            document.getElementById("mytable").innerHTML+=row; 
        }
        // console.log(row);
        // document.getElementById("mytable").innerHTML+=row; 
     }
    }
   xhttp.open("GET","grocery.json",true);
   xhttp.send();