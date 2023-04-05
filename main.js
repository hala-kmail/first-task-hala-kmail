
//-------------------------------------- Time -------------------------------------------------------------------//
setInterval(updateTime, 1000);


function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM!' : 'AM!';
    hours = hours % 12;
    hours = hours ? hours : 12; // لما الساعة 0 يعني 12 بالليل 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById("time").innerHTML = strTime;
}
//----------------------------------- default picture (am or pm) -----------------------------------------------//
const Cat_Act = {
    "sleep":{"picture":"images/sleeping.jpg","text":"Sleeping!!"} ,
    "morning":{"picture":"images/good-morning.jpeg","text":"Good morning!!"} ,
    "evening":{"picture":"images/good-evning.jpg","text":"Good evening!!"} ,
    "lunch":{"picture":"images/food-time.jpg","text":"let\'s have some lunch !!"} ,
    "party":{"picture":"images/party-Time.jpg","text":"let\'s party!!"} ,
    "sleep-tight":{"picture":"images/sleep.jpg","text":"sleep tight!!"} ,
    "wakeUp":{"picture":"images/wake-up.jpg","text":"WAKE UP!!"} , 
    
  };
//************************************************************** */
let Time = new Date();
let h = Time.getHours();
let Cat_Picture =document.getElementById("pic");
let txt=document.getElementById("text");
//************************************************************* */

const SetCatAct =(index) =>{
    Cat_Picture.src=Cat_Act[index]["picture"];
    txt.innerHTML=Cat_Act[index]["text"];   
}

const default_Cat_Picture=()=>{
if(h>=12 && h<20){         //من الساعة 12 ظهرا حتى 8 مساء --مساء الخير  
SetCatAct("evening");
}
else if(h>=5 && h<12){       //من االساعة 5 صباحا حتى 12 ظهرا -صباح الخير
    SetCatAct("morning");
}
else if(h>=20 ||h<=5){      // من الساعة 8 مساءا حتى الخامسة صباحا --موعد نوم القطة
   SetCatAct("sleep");
    }
}
default_Cat_Picture();
let Pre_Picture_src=Cat_Picture.src;
let Pre_Picture_text=txt.innerHTML;
//-------------------------------------------------------------selection lists------------------------------------------------------//

const Set_Selectors_Time=()=>{
    let Am_time="";
    let Pm_time="";
    for(let i=1;i<=11;i++){
        if(i<11){
           Am_time+=`
        <option value="${i}">${i}AM-${i+1}AM</option>
        `  
        Pm_time+=`
        <option value="${i+12}">${i}PM-${i+1}PM</option>
        
        ` 
        }
        else{ //عندما تصبح الساعة من 11 الى 12 ومن 12 صباحا الى 1 مساء
            Am_time+=`
        <option value="${i}">${i}AM-${i+1}PM</option>
        <option value="${i+1}">${i+1}PM-${1}PM</option>
        `  
        Pm_time+=`
        <option value="${i+12}">${i}PM-${i+1}AM</option>
        <option value="${0}">${i+1}AM-${1}AM</option>  
        `   
        }
       
    }
   
   const selects= document.querySelectorAll("#wake-times, #lunch-times, #sleep-times");
   selects.forEach((select) => {
    select.innerHTML=Am_time+Pm_time;
    });

}
Set_Selectors_Time();
//------------------------------------------------------------------------party time overriding-------------------------------------------

const Party_Time=()=>{
    Clicks+=1;
if(Clicks%2!=0){
clicked.value="party over!";
SetCatAct("party");
clicked.style.cssText="background-color:#207df4"; 
}
else{
clicked.value="party time!"; 
Cat_Picture.src=Pre_Picture_src;
txt.innerHTML=Pre_Picture_text;
clicked.style.cssText="background-color:black";
}
}



let clicked=document.getElementById("click");
let Clicks=0;
clicked.addEventListener("click",Party_Time);

//---------------------------------------------------------------------lets start the game----------------------------------------



const handleSelectChange=(event)=> {
    const selectedValue = event.target.value;//    الذي تم اختياره (الوقت)option 
    const selectedId = event.target.id; //عند اي سيليكتر حدث التغيير
    let wakeUpTimeValue=document.getElementById("wake-times").value;
    let lunchTimeValue=document.getElementById("lunch-times").value;
    let sleepTimeValue=document.getElementById("sleep-times").value;

  
if(selectedId=="wake-times"){
if(selectedValue==h){
 SetCatAct("wakeUp"); 
}
else if(lunchTimeValue==h){
    SetCatAct("lunch");    
}
else if(sleepTimeValue==h){
     SetCatAct("sleep-tight");    
}
else{
    default_Cat_Picture();
}
}



else if(selectedId=="lunch-times" ){
if(selectedValue==h && wakeUpTimeValue!=h){
    SetCatAct("lunch");    
} 
else if(wakeUpTimeValue==h){
    SetCatAct("wakeUp"); 
}
else if(sleepTimeValue==h){
    SetCatAct("sleep-tight");   
}
else{
    default_Cat_Picture();
}

}


 else if( selectedId=="sleep-times"){
    if(selectedValue==h && wakeUpTimeValue!=h && lunchTimeValue!=h){
        SetCatAct("sleep-tight");    
    } 
    else if(wakeUpTimeValue==h){
        SetCatAct("wakeUp");   
    }
    else if(lunchTimeValue==h){
        SetCatAct("lunch"); 
            }
    else{
        default_Cat_Picture();
    }

     }


     Pre_Picture_src=Cat_Picture.src;
     Pre_Picture_text=txt.innerHTML;

}
const selects = document.querySelectorAll("#wake-times, #lunch-times, #sleep-times");
selects.forEach((select) => {
select.addEventListener("change", handleSelectChange);
});
