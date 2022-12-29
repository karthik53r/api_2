var d = " ";
var n1=" ";
var n2 =" ";
fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    .then((data) => {
        return data.json(); 
    })
    .then((objectData) => {
        // console.log(objectData);
        for (var i = 0; i < objectData.Employees.length; i++) {
            const obj = objectData.Employees[i];
            d += "<tr><td>" + obj.Name + "</td>";
            d += "<td>" + obj.Address + "</td>";
            d += "<td>" + obj.Salary + "</td>";
            d += "<td>" + obj.DateOfJoining + "</td></tr>";
            if(obj.Salary > 50000){
                n1+="<li>"+obj.Name+"</li>";
            }
            
            if(obj.DateOfJoining[3] =='1' && obj.DateOfJoining[4] =='2'){
                n2+="<li>"+obj.Name+"</li>";
            }
        }
        document.querySelector("#table_body").innerHTML = d;
        document.querySelector('#s').innerHTML=n1;
        document.querySelector('#m').innerHTML=n2;
    });
