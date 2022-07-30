function birthyear2age(){
    event.preventDefault();

    var birthYear;
    var age;
    var d=new Date();
    
    birthYear=document.getElementById("age").value;
    age =  d.getFullYear() - birthYear;


    document.getElementById("result").innerHTML= "Dogum Yiliniz:" + age;

}