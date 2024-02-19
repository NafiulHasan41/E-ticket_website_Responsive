
var maxSeat=0;
const seatNumber = document.getElementsByClassName("selectBtn ");

for(const seat of seatNumber)
{
    seat.addEventListener("click", function (){
         
        if(seat.classList.contains("text-gray-400"))
        {
             if(maxSeat<4)
             {
                maxSeat++;
                confirmSeat(seat)
             }
             else
             {
                alert("One can not book more than 4 tickets ")
             }
        }
        else if(seat.classList.contains("bg-green-500"))
        {
            if(maxSeat>0 && maxSeat<=4)
            {
                maxSeat--;
                discartSeat(seat)
            }
        }

    } )
}


function confirmSeat(parrentId)
{
      backGreen(parrentId);
      availableSeatDec(parrentId);
      addListDetails(parrentId);
}


function discartSeat(parrentId)
{

       backGray(parrentId);
       availableSeatInc(parrentId);
      rmoveListDetails(parrentId);
}



//confirm seat

function backGreen(parrentId){

    const cId=document.getElementById(parrentId.id);

    cId.classList.remove("text-gray-400");
    cId.classList.add("text-white");
    cId.classList.add("bg-green-500");

}

function availableSeatDec(parrentId)
{
    const aSeat=document.getElementById("seatRemainig1");

    var seatNumber=parseInt(aSeat.innerText);
    seatNumber-=1;
    aSeat.innerText=seatNumber;

    const cSeat=document.getElementById("SelectedSeat1");
    var cSeatNumber=parseInt(cSeat.innerText);
    cSeatNumber+=1;
    cSeat.innerText=cSeatNumber;



    // console.log(aSeat)
    // console.log(seatNumber)
    

}

function addListDetails(parrentId)
{
    const total=document.getElementById("totalpriceshow1");
    var seatNumber=parseInt(total.innerText);
    seatNumber+=550;
    total.innerText=seatNumber;


    const cSeat=document.getElementById("grandtotalpriceshow");
    var cSeatNumber=parseInt(cSeat.innerText);
    cSeatNumber+=550;
    cSeat.innerText=cSeatNumber;

     //adding details
       var newParagraph = document.createElement("p");
       var textNode = document.createTextNode(parrentId.id);
       newParagraph.appendChild(textNode);
       newParagraph.classList.add("p-2");
       var targetDiv = document.getElementById("seat11");
       targetDiv.appendChild(newParagraph);

       var newParagraph2 = document.createElement("p");
       var textNode2 = document.createTextNode("Economoy");
       newParagraph2.appendChild(textNode2);
       newParagraph2.classList.add("p-2");
       var targetDiv = document.getElementById("class11");
       targetDiv.appendChild(newParagraph2);

       var newParagraph3 = document.createElement("p");
       var textNode3 = document.createTextNode("550");
       newParagraph3.appendChild(textNode3);
       newParagraph3.classList.add("p-2");
       var targetDiv = document.getElementById("price11");
       targetDiv.appendChild(newParagraph3);
}


//discard seat

function backGray(parrentId){

    const cId=document.getElementById(parrentId.id);

    cId.classList.remove("text-white");
    cId.classList.add("text-gray-400");
    cId.classList.remove("bg-green-500");

}

function availableSeatInc(parrentId)
{
    const aSeat=document.getElementById("seatRemainig1");
    var seatNumber=parseInt(aSeat.innerText);

    seatNumber+=1;
    
    aSeat.innerText=seatNumber;

    const cSeat=document.getElementById("SelectedSeat1");
    var cSeatNumber=parseInt(cSeat.innerText);
    cSeatNumber-=1;
    cSeat.innerText=cSeatNumber;



}


function rmoveListDetails(parrentId)
{
    const total=document.getElementById("totalpriceshow1");
    var seatNumber=parseInt(total.innerText);
    seatNumber-=550;
    total.innerText=seatNumber;


    const cSeat=document.getElementById("grandtotalpriceshow");
    var cSeatNumber=parseInt(cSeat.innerText);
    cSeatNumber-=550;
    cSeat.innerText=cSeatNumber;
   
}


const nextBtn = document.getElementById("next11");

nextBtn.addEventListener("click", function()
{
    var inputElement = document.getElementById("number11");
    var inputElement2 = document.getElementById("name11");

    if (!inputElement || inputElement.value.trim() === "") {
        alert("Phone Number field Can not be empy") 
    } 
    else if(!inputElement2 || inputElement2.value.trim() === "")
    {
        alert("Passenger name field Can not be empy") 
    }
    else
    {
        const md=document.getElementById("my_modal_1");

        md.showModal();
    }
})


 function closeModal()
{
    my_modal_1.close();
    location.reload();
}