
//-------------------------------------- Time -------------------------------------------------------------------//
setInterval(updateTime, 1000);
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? 'PM!' : 'AM!';
    hours = hours % 12;
    hours = hours ? hours : 12; // لما الساعة 0 يعني 12 بالليل 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById("time").innerHTML = strTime;
}
//----------------------------------- default picture (am or pm) -----------------------------------------------//
var Time = new Date();
var h = Time.getHours();
var pic=document.getElementById("pic");
var txt=document.getElementById("text");
default_pic();
function default_pic(){

if(h>=12 && h<20){         //من الساعة 12 ظهرا حتى 8 مساء --مساء الخير  
pic.src="images/good-evning.jpg";
txt.innerHTML='"Good evening!!"';
}
else if(h>=5 && h<12){       //من االساعة 5 صباحا حتى 12 ظهرا -صباح الخير
pic.src="images/good-morning.jpeg";
txt.innerHTML='"Good morning!!"';
}
else if(h>=20 ||h<=5){      // من الساعة 8 مساءا حتى الخامسة صباحا --موعد نوم القطة
   
    pic.src="images/sleeping.jpg";
    txt.innerHTML='"sleeping!!"';
    }
}
//-------------------------------------------------------------selection lists------------------------------------------------------//
set_wakeup_time();
function set_wakeup_time(){
    let data="";
    for(let i=1;i<=11;i++){
        if(i<11){
           data+=`
        <option value="${i}">${i}AM-${i+1}AM</option>
        `  
        }
        else{ //عندما تصبح الساعة من 11 الى 12 ومن 12 صباحا الى 1 مساء
            data+=`
        <option value="${i}">${i}AM-${i+1}PM</option>
        <option value="${i+1}">${i+1}PM-${1}PM</option>
        `    
        }
       
    }
    for(let i=1;i<=11;i++){
        if(i<11){
           data+=`
        <option value="${i+12}">${i}PM-${i+1}PM</option>
        
        `  
        }
        else{
            data+=`
        <option value="${i+12}">${i}PM-${i+1}AM</option>
        <option value="${0}">${i+1}AM-${1}AM</option>  
        `    
        }
       
    }
   const selects= document.querySelectorAll("#wake-times, #lunch-times, #sleep-times");
   selects.forEach((select) => {
    select.innerHTML=data;
    });

}
//------------------------------------------------------------------------party time overriding-------------------------------------------

let clicked=document.getElementById("click");
let c=0;
clicked.addEventListener("click",change);

function change(){
c++;
if(c%2!=0){
clicked.value="party over!";
pic.src="images/party-Time.jpg";
txt.innerHTML='"let\'s party!!"';
clicked.style.cssText="background-color:#207df4"; 
}
else{
clicked.value="party time!"; 
pic.src=str;
txt.innerHTML=default_text;
clicked.style.cssText="background-color:black";
}
}
//---------------------------------------------------------------------lets start the game----------------------------------------
var srt="";
var default_text="";

const selects = document.querySelectorAll("#wake-times, #lunch-times, #sleep-times");
selects.forEach((select) => {
select.addEventListener("change", handleSelectChange);
});


function handleSelectChange(event) {
    const selectedValue = event.target.value;//    الذي تم اختياره (الوقت)option 
    const selectedId = event.target.id; //عند اي سيليكتر حدث التغيير
    let op1=document.getElementById("wake-times");
    let op2=document.getElementById("lunch-times");
    let op3=document.getElementById("sleep-times");
    let party_img=document.querySelector("img");
var s=op1.value;
var s2=op2.value;
var s3=op3.value;
  
if(selectedId=="wake-times"){
if(selectedValue==h){
party_img.src="images/wake-up.jpg";

txt.innerHTML='"WAKE UP!!"'; 
}
else if(s2==h){
    party_img.src="images/food-time.jpg";
    txt.innerHTML='"let\'s have some lunch !!"';    
}
else if(s3==h){
    party_img.src="images/sleep.jpg";
    txt.innerHTML='"sleep tight!!"';     
}
else{
    default_pic();
}

}



else if(selectedId=="lunch-times" ){
if(selectedValue==h && s!=h){
  party_img.src="images/food-time.jpg"; 
  txt.innerHTML='"let\'s have some lunch !!"';   
} 
else if(s==h){
    party_img.src="images/wake-up.jpg"; 
    txt.innerHTML='"WAKE UP!!"'; 
}
else if(s3==h){
    party_img.src="images/sleep.jpg";  
    txt.innerHTML='"sleep tight!!"';   
}
else{
   default_pic();
}

}


 else if( selectedId=="sleep-times"){
    if(selectedValue==h && s!=h && s2!=h){
        party_img.src="images/sleep.jpg"; 
        txt.innerHTML='"sleep tight!!"';    
    } 
    else if(s==h){
        party_img.src="images/wake-up.jpg";
        txt.innerHTML='"WAKE UP!!"';  
    }
    else if(s2==h){
        party_img.src="images/food-time.jpg"; 
        txt.innerHTML='"let\'s have some lunch !!"';
            }
    else{
       default_pic(); 
    }

     }


     str=party_img.src;
     default_text=txt.innerHTML;

}