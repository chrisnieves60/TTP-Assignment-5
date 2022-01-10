console.log("Hello from script.js")


$(document).ready(function () {
    let p=0;
    $('.add-row').click(function(){ //adds new row
        console.log("add-row button clicked");
        let newRow = document.createElement("div"); //create new div of row
        $(newRow).addClass("row new"); //give it two classes
        let rows = document.querySelector(".rows"); //rows = entire div of rows
        rows.append(newRow) //append our new row to entire div of rows

        let newCol = document.createElement("div"); //we need 1 col, so we create div of col
        $(newCol).addClass("col newBox border border-dark d-flex justify-content-center align-items-center") //give it class
        newRow.append(newCol); //append col to new row 
        })
        
    $('.add-col').click(function(){ //Adds new column 
          console.log("add-col button clicked");
          
          let newCol=document.createElement("div"); //we need 1 col, so we create div of col
          $(newCol).addClass("col newBox border border-dark d-flex justify-content-center align-items-center") //give it class
          let newRow=document.getElementsByClassName("new");
          
          console.log(p)
          let arrlen=document.getElementsByClassName("new")[p].childElementCount;
          
          if (arrlen<3){
          $(newRow[p]).append(newCol); //append col to new row 
          }
          else
          p++;
          })
    $('.rem-row').click(function(){ //remove row
        $('.rows').children().last().detach(); 

    })
    $('.rem-col').click(function(){ //remove col 
        $('.rows').children().last().children().last().detach();

    })

    $(".rows").on("click", ".newBox", function () { //We listen for clicks on the "rows" and we evaluate whether they came from a newBox element. This will now respond to clicks from newBox elements loaded when the page loaded, as well as those that are added dynamically later.
        let colorVal = document.getElementById("colors").value; 
        $(this).css('background-color', colorVal)
        $(this).addClass("styled"); 
    });

    $(".col").click(function(){ //can maybe fix this by merging with function above
        let colorVal = document.getElementById("colors").value; 
        $(this).css('background-color',colorVal)
        $(this).addClass("styled"); 
    })

    $('.one').click(function () {
        console.log("Inside one - mouse clicked")
        let c = document.querySelector('.one') 
        c.innerText = "Hello from div 1" 

        $(this).css('background-color', "red")
        $(this).addClass("red").removeClass('blue') 

    })

    $('.change-to-select').click(function () {
        $('.row').children().each(function () {//all children of row
         let colorVal = document.getElementById("colors").value; 
           //$(this).css('background-color', colorVal)
           $('.col').filter(':not(.styled)').css('background-color', colorVal)
           $(this).addClass("styled"); 
        })
    })

    $('.change-all').click(function(){
        $('.row').children().each(function () {//all children of row
            let colorVal = document.getElementById("colors").value; 
              $(this).css('background-color', colorVal)
        })
    })

    let isDown = false
    $(document).mousedown(function () {
        isDown = true
    }).mouseup(function () {
        isDown = false
    })

    $('.box').hover(function () {
        if (isDown) {
            let currentSize = $('.box').css('font-size');
            currentSize = parseFloat(currentSize) * 1.5;
            $(this).css('font-size', currentSize)
        } else {
            let currentSize = $('.box').css('font-size');
            currentSize = 16;
            $(this).css('font-size', currentSize)
        }
    })

    $('.col').click(function () {
        let c = document.querySelector("#colors")
        console.log(c.value)
    })

})