function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  information(data.Education);
  skill(data.Skills);
})

/* writing the data from console to dynamic.html*/
var main=document.querySelector(".Parent");
var left=document.querySelector(".child");
var right=document.querySelector(".child2");
function profile(pro) {
  var image=document.createElement("img");/*Creating type of element*/
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);

  var name1=document.createElement("h2");
  name1.textContent=pro.name;
  left.appendChild(name1);
  main.appendChild(left);
  var course1=document.createElement("h3");
  course1.textContent=pro.Course;
  left.appendChild(course1);
  main.appendChild(left);
  var roll1=document.createElement("h3");
  roll1.textContent=pro.Rollno;
  left.appendChild(roll1);
  main.appendChild(left);
  var personal=document.createElement("h1");
  personal.textContent=pro.Institute;
  left.appendChild(personal);
  main.appendChild(left);
}
function information(info) {
  var chin=document.createElement("h1");
  chin.textContent="Carrer objective:";
  right.appendChild(chin);
  main.appendChild(right);

  var d1=document.createElement("h4");
  d1.textContent="i want to seek a position in a company where i can explore my thoughts";
  right.appendChild(d1);
  main.appendChild(right);

  var d2=document.createElement("hr");
  d2.textContent="";
  right.appendChild(d2);
  main.appendChild(right);

  var d3=document.createElement("h1");
  d3.textContent="Educational Details:";
  right.appendChild(d3);
  main.appendChild(right);

 var table=document.createElement('table');
 let row='';
 for(i in info){
   row +="<tr>"+"<td>"+info[i].Sno+"</td>"+
   "<td>"+info[i].Degree +"</td>"+
   "<td>"+info[i].Percent +"</td>"
   "</tr>";
   table.innerHTML=row;
   right.appendChild(table);
 }

 var d4=document.createElement("hr");
 d4.textContent="";
 right.appendChild(d4);
 main.appendChild(right);
}

 function skill(l){
   var hh=document.createElement("h2");
   hh.textContent="Skills Set:";
   right.appendChild(hh);
   main.appendChild(right);

   var ul=document.createElement(ul);
   right.append(ul);
   for ( i in l){
     var li=document.createElement("li");
     li.textContent=l[i].one;
     ul.appendChild(li);



   }
   var d5=document.createElement("a");
   d5.setAttribute('href',"index.html");
   d5.innerHTML="Static page";
   right.appendChild(d5);
   main.appendChild(right);


 }
