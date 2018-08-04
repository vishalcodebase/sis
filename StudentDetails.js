var StudntDtl = [
    {

    }
]
var TotalStudent=0;

var GetData=function()
{
    StudntDtl[TotalStudent].Name=document.getElementById("StudentName").value;
    StudntDtl[TotalStudent].EmployeeId=document.getElementById("EmployeeId").value;
    StudntDtl[TotalStudent].Company=document.getElementById("CompanyName").value;
    StudntDtl[TotalStudent].Password=document.getElementById("Password").value;

    console.log("Got Std Details");
    
    localStorage.setItem("StudntDtl",JSON.stringify(StudntDtl));
    alert("Got Your Details");
}