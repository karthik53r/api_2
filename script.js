var d = " ";
var n1=" ";
var n2 =" ";
fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    .then((data) => {
        //  console.log(data);
        return data.json(); //converted to object
    })
    .then((objectData) => {
        for (var i = 0; i < 3; i++) {
            const obj = objectData.Employees[i];
            d += "<tr><td>" + obj.Name + "</td>";
            d += "<td>" + obj.Address + "</td>";
            d += "<td>" + obj.Salary + "</td>";
            d += "<td>" + obj.DateOfJoining + "</td></tr>";
            document.querySelector("#table_body").innerHTML = d;
            if(obj.Salary > 50000){
                n1+=obj.Name;
                document.querySelector('#s').innerHTML=n1;
                n1+=' , ';
            }
            if(obj.DateOfJoining[3] =='1' && obj.DateOfJoining[4] =='2'){
                n2+=obj.Name;
                document.querySelector('#m').innerHTML=n2;
                n2+=' , ';
            }
        }
    });