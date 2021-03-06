console.log($( window ).width());

$("circle, ellipse").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle, ellipse").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();


var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
var stopData;
var classname;



    var classnameSMOL = document.getElementsByClassName("stop-button");
    var stopDataSMOL = { 
    "Boston_College2":{ 
      "proper_name": "Boston College",
      "time_saved" : "0m 0s: This is the terminus",
      "time_stamp" : "0:00",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "No bus connections",
      "nearbyTacos": "",
    },

    "Hynes2":{ 
      "proper_name": "Hynes Convention Center",
      "time_saved" : "0m 52s",
      "time_stamp" : "0:52",
      "nearbyTrainStops" : ["C Line, D Line"],
      "nearbyBusStops" : ["1, CT1"],
      "nearbyTacos": "",
    },

      "Kenmore_Sq2":{ 
        "proper_name": "Kenmore",
        "time_saved" : "1m 1s",
        "time_stamp" : "1:01",
        "nearbyTrainStops" : ["C Line, D Line"],
        "nearbyBusStops" : ["8, 19, 57, 57A, 60, 65"],
        "nearbyTacos": "",
    },

    "Blandford_St2":{ 
      "proper_name": "Blandford Street",
      "time_saved" : "0m 50s",
      "time_stamp" : "0:50",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "BU_East2":{ 
      "proper_name": "Boston University East",
      "time_saved" : "0m 54s",
      "time_stamp" : "0:54",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "BU_Central2":{ 
      "proper_name": "Boston University Central",
      "time_saved" : "0m 49s",
      "time_stamp" : "0:49",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A", "47", "CT2"],
      "nearbyTacos": "",
    },

    "BU_West2":{ 
      "proper_name": "Boston University West",
      "time_saved" : "0m 43s",
      "time_stamp" : "0:43",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "Saint_Paul_St2":{ 
      "proper_name": "Saint Paul Street",
      "time_saved" : "0m 43s",
      "time_stamp" : "0:43",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "Pleasant_St2":{ 
      "proper_name": "Pleasant Street",
      "time_saved" : "0m 48s",
      "time_stamp" : "0:48",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "Babcock_St2":{
      "proper_name": "Babcock Street", 
      "time_saved" : "0m 47s",
      "time_stamp" : "0:47",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "Packards_Corner2":{ 
      "proper_name": "Packards Corner",
      "time_saved" : "0m 56s",
      "time_stamp" : "0:56",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A"],
      "nearbyTacos": "",
    },

    "Harvard_Ave2":{ 
      "proper_name": "Harvard Avenue",
      "time_saved" : "0m 50s",
      "time_stamp" : "0:50",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["57, 57A", "66"],
      "nearbyTacos": "",
    },

    "Griggs_St2":{ 
      "proper_name": "Griggs Street",
      "time_saved" : "0m 47s",
      "time_stamp" : "0:47",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "No bus connections",
      "nearbyTacos": "",
    },

    "Allston_St2":{ 
      "proper_name": "Allston Street",
      "time_saved" : "0m 50s",
      "time_stamp" : "0:50",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "No bus connections",
      "nearbyTacos": "",
    },

    "Warren_St2":{ 
      "proper_name": "Warren Street",
      "time_saved" : "0m 40s",
      "time_stamp" : "0:40",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "No bus connections",
      "nearbyTacos": "",
    },

    "Washington_St2":{ 
      "proper_name": "Washington Street",
      "time_saved" : "0m 39s",
      "time_stamp" : "0:39",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "65",
      "nearbyTacos": "",
    },

    "Sutherland_Rd2":{ 
      "proper_name": "Sutherland Road",
      "time_saved" : "0m 49s",
      "time_stamp" : "0:49",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "No bus connections",
      "nearbyTacos": "",
    },

    "Chiswick_Rd2":{ 
      "proper_name": "Chiswick Road",
      "time_saved" : "0m 48s",
      "time_stamp" : "0:48",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : "No bus connections",
      "nearbyTacos": "",
    },

    "Chestnut_Hill_Ave2":{ 
      "proper_name": "Chestnut Hill Avenue",
      "time_saved" : "0m 40s",
      "time_stamp" : "0:40",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["51, 86"],
      "nearbyTacos": "",
    },

    "South_St2":{ 
      "proper_name": "South Street",
      "time_saved" : "0m 40s",
      "time_stamp" : "0:40",
      "nearbyTrainStops" : "No train connections",
      "nearbyBusStops" : ["51. 86"],
      "nearbyTacos": "",
    },

    "Copley2":{ 
      "proper_name": "Copley",
      "time_saved" : "0m 54s",
      "time_stamp" : "0:54",
      "nearbyTrainStops" : ["C Line, D Line, E Line"],
      "nearbyBusStops" : ["9, 10, 39, 43, 45, 98, 99"],
      "nearbyTacos": "",
    },

    "Arlington2":{ 
      "proper_name": "Arlington",
      "time_saved" : "0m 54s",
      "time_stamp" : "0:54",
      "nearbyTrainStops" : ["C Line, D Line, E Line"],
      "nearbyBusStops" : ["9, 43, 98, 99"],
      "nearbyTacos": "",
    },

    "Boylston2":{ 
      "proper_name": "Boylston",
      "time_saved" : "0m 50s",
      "time_stamp" : "0:50",
      "nearbyTrainStops" : ["C Line, D Line, E Line"],
      "nearbyBusStops" : ["43, 98, 99"],
      "nearbyTacos": "",
    },

    "Park_St2":{ 
      "proper_name": "Park Street",
      "time_saved" : "0m 0s: This is the terminus",
      "time_stamp" : "0:00",
      "nearbyTrainStops" : ["C Line, D Line, E Line"],
      "nearbyBusStops" : ["15, 39, 43, 55, 98, 99"],
      "nearbyTacos": "",
    }
  };


    var classnameBIG = document.getElementsByClassName("st1");
    var stopDataBIG = { 
      "Boston_College":{ 
        "proper_name": "Boston College",
        "time_saved" : "0m 0s: This is the terminus",
        "time_stamp" : "0:00",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "No bus connections",
        "nearbyTacos": "",
      },

      "Hynes":{ 
        "proper_name": "Hynes Convention Center",
        "time_saved" : "0m 52s",
        "time_stamp" : "0:52",
        "nearbyTrainStops" : ["C Line, D Line"],
        "nearbyBusStops" : ["1, CT1"],
        "nearbyTacos": "",
      },

        "Kenmore_Sq":{ 
          "proper_name": "Kenmore",
          "time_saved" : "1m 1s",
          "time_stamp" : "1:01",
          "nearbyTrainStops" : ["C Line, D Line"],
          "nearbyBusStops" : ["8, 19, 57, 57A, 60, 65"],
          "nearbyTacos": "",
      },

      "Blandford_St":{ 
        "proper_name": "Blandford Street",
        "time_saved" : "0m 50s",
        "time_stamp" : "0:50",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "BU_East":{ 
        "proper_name": "Boston University East",
        "time_saved" : "0m 54s",
        "time_stamp" : "0:54",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "BU_Central":{ 
        "proper_name": "Boston University Central",
        "time_saved" : "0m 49s",
        "time_stamp" : "0:49",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A", "47", "CT2"],
        "nearbyTacos": "",
      },

      "BU_West":{ 
        "proper_name": "Boston University West",
        "time_saved" : "0m 43s",
        "time_stamp" : "0:43",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "Saint_Paul_St":{ 
        "proper_name": "Saint Paul Street",
        "time_saved" : "0m 43s",
        "time_stamp" : "0:43",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "Pleasant_St":{ 
        "proper_name": "Pleasant Street",
        "time_saved" : "0m 48s",
        "time_stamp" : "0:48",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "Babcock_St":{
        "proper_name": "Babcock Street", 
        "time_saved" : "0m 47s",
        "time_stamp" : "0:47",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "Packards_Corner":{ 
        "proper_name": "Packards Corner",
        "time_saved" : "0m 56s",
        "time_stamp" : "0:56",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A"],
        "nearbyTacos": "",
      },

      "Harvard_Ave":{ 
        "proper_name": "Harvard Avenue",
        "time_saved" : "0m 50s",
        "time_stamp" : "0:50",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["57, 57A", "66"],
        "nearbyTacos": "",
      },

      "Griggs_St":{ 
        "proper_name": "Griggs Street",
        "time_saved" : "0m 47s",
        "time_stamp" : "0:47",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "No bus connections",
        "nearbyTacos": "",
      },

      "Allston_St":{ 
        "proper_name": "Allston Street",
        "time_saved" : "0m 50s",
        "time_stamp" : "0:50",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "No bus connections",
        "nearbyTacos": "",
      },

      "Warren_St":{ 
        "proper_name": "Warren Street",
        "time_saved" : "0m 40s",
        "time_stamp" : "0:40",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "No bus connections",
        "nearbyTacos": "",
      },

      "Washington_St":{ 
        "proper_name": "Washington Street",
        "time_saved" : "0m 39s",
        "time_stamp" : "0:39",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "65",
        "nearbyTacos": "",
      },

      "Sutherland_Rd":{ 
        "proper_name": "Sutherland Road",
        "time_saved" : "0m 49s",
        "time_stamp" : "0:49",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "No bus connections",
        "nearbyTacos": "",
      },

      "Chiswick_Rd":{ 
        "proper_name": "Chiswick Road",
        "time_saved" : "0m 48s",
        "time_stamp" : "0:48",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : "No bus connections",
        "nearbyTacos": "",
      },

      "Chestnut_Hill_Ave":{ 
        "proper_name": "Chestnut Hill Avenue",
        "time_saved" : "0m 40s",
        "time_stamp" : "0:40",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["51, 86"],
        "nearbyTacos": "",
      },

      "South_St":{ 
        "proper_name": "South Street",
        "time_saved" : "0m 40s",
        "time_stamp" : "0:40",
        "nearbyTrainStops" : "No train connections",
        "nearbyBusStops" : ["51. 86"],
        "nearbyTacos": "",
      },

      "Copley":{ 
        "proper_name": "Copley",
        "time_saved" : "0m 54s",
        "time_stamp" : "0:54",
        "nearbyTrainStops" : ["C Line, D Line, E Line"],
        "nearbyBusStops" : ["9, 10, 39, 43, 45, 98, 99"],
        "nearbyTacos": "",
      },

      "Arlington":{ 
        "proper_name": "Arlington",
        "time_saved" : "0m 54s",
        "time_stamp" : "0:54",
        "nearbyTrainStops" : ["C Line, D Line, E Line"],
        "nearbyBusStops" : ["9, 43, 98, 99"],
        "nearbyTacos": "",
      },

      "Boylston":{ 
        "proper_name": "Boylston",
        "time_saved" : "0m 50s",
        "time_stamp" : "0:50",
        "nearbyTrainStops" : ["C Line, D Line, E Line"],
        "nearbyBusStops" : ["43, 98, 99"],
        "nearbyTacos": "",
      },

      "Park_St":{ 
        "proper_name": "Park Street",
        "time_saved" : "0m 0s: This is the terminus",
        "time_stamp" : "0:00",
        "nearbyTrainStops" : ["C Line, D Line, E Line"],
        "nearbyBusStops" : ["15, 39, 43, 55, 98, 99"],
        "nearbyTacos": "",
      }
    };
  
var hasBeenScaled = false;
var windowSize= $( window ).width(); 
window.addEventListener('resize', changeData);
function changeData() {
  if($( window ).width() <= 765){
  hasBeenScaled = true;
  console.log($( window ).width());
  if($( window ).width() < 765){
    console.log("SMOL");
    stopData = stopDataSMOL;
    console.log("HEY");
    classname = classnameSMOL;
  }
  else{
    console.log("BIG");
    stopData = stopDataBIG;
    classname = classnameBIG;
  }
  for (var i = 0; i < classname.length; i++) {
  let idVar = classname[i].id;
  classname[i].addEventListener('click', function(){
      updateTime(idVar);
  });
}
  if(attachToScale && hasBeenScaled){
    console.log("ATTACHING EVENT LISTENER");
      for (var i = 0; i < classname.length; i++) {
        let idVar = classname[i].id;
        console.log("ADDING LISTNER" + idVar);
        classname[i].addEventListener('click', function(){
          updateRunningTotal(idVar);
        });
      }
      attachToScale = false;
    }
showRunningTotal();
}
}



if($( window ).width() < 765){
  stopData = stopDataSMOL;
  classname = classnameSMOL;
}
else{
  stopData = stopDataBIG;
  classname = classnameBIG;
}

// Hover Stop Info



/*******JS FOR TIMESAVE HTML*********/

//Global Variables
var timeHeader = document.getElementById('header');
var timeVal = document.getElementById('min-sec');
var totalTime = document.getElementById('time-save-total');
var totalToggle = document.getElementById('total-toggle');
const startOver = document.getElementById('reset');
var visitedStops = [];
var visitedStop = "";
var runningTotal = "0:00";
var updateCount = 0;
var attachToScale = true;


// Event Listeners

  for (var i = 0; i < classname.length; i++) {
    let idVar = classname[i].id;
    classname[i].addEventListener('click', function(){
      updateTime(idVar);
    });



totalToggle.addEventListener('click', showRunningTotal);
startOver.addEventListener('click', function(){
  runningTotal = "0:00";
  for (var j = 0; j < visitedStops.length; j++ ){
    visitedStops[j].style.fill = '';
    visitedStops[j].style.stroke = '';
    totalTime.innerHTML = "Total Time Saved: " + runningTotal;
  }
});
}



// Functions

// Function to display total time
function showRunningTotal(){
  if(totalToggle.checked){
    console.log("checked!");
    totalTime.style.display = "block";
    if(updateCount < 1){
      for (var i = 0; i < classname.length; i++) {
        let idVar = classname[i].id;
        classname[i].addEventListener('click', function(){
          updateRunningTotal(idVar);
        });
      }
    }
  }
  else{
    console.log('notchecked');
    totalTime.style.display = "none";
    for (var i = 0; i < classname.length; i++) {
      let idVar = classname[i].id;
      classname[i].removeEventListener('click', function(){
        updateRunningTotal(idVar);
      });
  }
}
}


function updateRunningTotal(stopName){
  console.log("UPDATING????");
  if(totalToggle.checked){
    updateCount++;
    stopName.toString();
    timeStamp = stopData[stopName].time_stamp;
    visitedStop = document.getElementById(stopName);
    if (visitedStop.style.fill == "grey"){
      visitedStop.style.fill = "";
      visitedStop.style.stroke = "";
      visitedStops.splice(visitedStops.indexOf(stopName), 1 );
      runningTotal = formatTime(timestrToSec(runningTotal) - timestrToSec(timeStamp));
      console.log("REPEAT" + runningTotal);
    }
    else{
      visitedStops.push(visitedStop);
      visitedStop.style.fill = "grey";
      visitedStop.style.stroke = "grey";
      runningTotal = formatTime(timestrToSec(runningTotal) + timestrToSec(timeStamp));
      console.log("NOREPEAT" + runningTotal);
    }
  }
  totalTime.innerHTML = "Total Time Saved: " + runningTotal;
}

// Function to update the time saving display
var updateTime = function(stopName) {
    //alert(stopName.toString());
    stopName.toString();
    console.log(stopName);
    stopDisplayName = stopData[stopName].proper_name;
    let timeSaved = stopData[stopName].time_saved;
    timeHeader.innerHTML = 'Eliminating ' + stopDisplayName + ' Saves:';
    timeVal.innerHTML = timeSaved;
};





// Functions for time addition and manipulation modified from https://stackoverflow.com/questions/26056434/sum-of-time-using-javascript
function timestrToSec(timestr) {
  console.log(timestr);
  var parts = timestr.toString().split(":");
  return (parts[0] * 3600) +
         (parts[1] * 60);
}
function pad(num) {
  if(num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}
function formatTime(seconds) {
  return [pad(Math.floor(seconds/3600)),
          pad(Math.floor(seconds/60)%60)
          ].join(":");
}

/*******END JS FOR TIMESAVE HTML*********/

//hover stop infor






