// node references
// const parkStreet = document.getElementById('Park_St');
// const boylston = document.getElementById('Boylston');
// const arlington = document.getElementById('Arlington');
// const copley = document.getElementById('Copley');
// const southSt= document.getElementById('South_St');
// const chestnutHill = document.getElementById('Chestnut_Hill_Ave');
// const sutherland = document.getElementById('Sutherland_Rd');
// const washington = document.getElementById('Washington_St');
// const warren = document.getElementById('Warren_St');
// const allston = document.getElementById('Allston_St');
// const griggs = document.getElementById('Griggs_St');
// const harvard = document.getElementById('Harvard_Ave');
// const packardsCorner = document.getElementById('Packards_Corner');
// const babcock = document.getElementById('Babcock_St');
// const pleasent = document.getElementById('Pleasant_St');
// const saintPaul = document.getElementById('Saint_Paul_St');
// const BUWest = document.getElementById('BU_West');
// const BUCentral = document.getElementById('BU_Central');
// const BUEast = document.getElementById('BU_East');
// const blandford = document.getElementById('Blandford_St');
// const kenmore = document.getElementById('Kenmore_Sq');
// const hynes = document.getElementById('Hynes');

const classname = document.getElementsByClassName("st1");
const stopData = { 
  "Boston_College":{ 
    "proper_name": "Boston College",
    "time_saved" : "This is the terminus",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "No bus connections",
    "nearbyTacos": "",
  },

  "Hynes":{ 
    "proper_name": "Hynes Convention Center",
    "time_saved" : "0m 52s",
    "nearbyTrainStops" : ["C Line, D Line"],
    "nearbyBusStops" : ["1, CT1"],
    "nearbyTacos": "",
  },

    "Kenmore_Sq":{ 
      "proper_name": "Kenmore",
      "time_saved" : "1m 1s",
      "nearbyTrainStops" : ["C Line, D Line"],
      "nearbyBusStops" : ["8, 19, 57, 57A, 60, 65"],
      "nearbyTacos": "",
  },

  "Blandford_St":{ 
    "proper_name": "Blandford Street",
    "time_saved" : "0m 50s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "BU_East":{ 
    "proper_name": "Boston University East",
    "time_saved" : "0m 54s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "BU_Central":{ 
    "proper_name": "Boston University Central",
    "time_saved" : "0m 49s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A", "47", "CT2"],
    "nearbyTacos": "",
  },

  "BU_West":{ 
    "proper_name": "Boston University West",
    "time_saved" : "0m 43s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "Saint_Paul_St":{ 
    "proper_name": "Saint Paul Street",
    "time_saved" : "0m 43s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "Pleasant_St":{ 
    "proper_name": "Pleasant Street",
    "time_saved" : "0m 48s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "Babcock_St":{
    "proper_name": "Babcock Street", 
    "time_saved" : "0m 47s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "Packards_Corner":{ 
    "proper_name": "Packards Corner",
    "time_saved" : "0m 56s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A"],
    "nearbyTacos": "",
  },

  "Harvard_Ave":{ 
    "proper_name": "Harvard Avenue",
    "time_saved" : "0m 50s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["57, 57A", "66"],
    "nearbyTacos": "",
  },

  "Griggs_St":{ 
    "proper_name": "Griggs Street",
    "time_saved" : "0m 47s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "No bus connections",
    "nearbyTacos": "",
  },

  "Allston_St":{ 
    "proper_name": "Allston Street",
    "time_saved" : "0m 50s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "No bus connections",
    "nearbyTacos": "",
  },

  "Warren_St":{ 
    "proper_name": "Warren Street",
    "time_saved" : "0m 40s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "No bus connections",
    "nearbyTacos": "",
  },

  "Washington_St":{ 
    "proper_name": "Washington Street",
    "time_saved" : "0m 39s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "65",
    "nearbyTacos": "",
  },

  "Sutherland_Rd":{ 
    "proper_name": "Sutherland Road",
    "time_saved" : "0m 49s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "No bus connections",
    "nearbyTacos": "",
  },

  "Chiswick_Rd":{ 
    "proper_name": "Chiswick Road",
    "time_saved" : "0m 48s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : "No bus connections",
    "nearbyTacos": "",
  },

  "Chestnut_Hill_Ave":{ 
    "proper_name": "Chestnut Hill Avenue",
    "time_saved" : "0m 40s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["51, 86"],
    "nearbyTacos": "",
  },

  "South_St":{ 
    "proper_name": "South Street",
    "time_saved" : "0m 40s",
    "nearbyTrainStops" : "No train connections",
    "nearbyBusStops" : ["51. 86"],
    "nearbyTacos": "",
  },

  "Copley":{ 
    "proper_name": "Copley",
    "time_saved" : "0m 54s",
    "nearbyTrainStops" : ["C Line, D Line, E Line"],
    "nearbyBusStops" : ["9, 10, 39, 43, 45, 98, 99"],
    "nearbyTacos": "",
  },

  "Arlington":{ 
    "proper_name": "Arlington",
    "time_saved" : "0m 54s",
    "nearbyTrainStops" : ["C Line, D Line, E Line"],
    "nearbyBusStops" : ["9, 43, 98, 99"],
    "nearbyTacos": "",
  },

  "Boylston":{ 
    "proper_name": "Boylston",
    "time_saved" : "0m 50s",
    "nearbyTrainStops" : ["C Line, D Line, E Line"],
    "nearbyBusStops" : ["43, 98, 99"],
    "nearbyTacos": "",
  },

  "Park_St":{ 
    "proper_name": "Park Street",
    "time_saved" : "This is the terminus",
    "nearbyTrainStops" : ["C Line, D Line, E Line"],
    "nearbyBusStops" : ["15, 39, 43, 55, 98, 99"],
    "nearbyTacos": "",
  }
};

timeHeader = document.getElementById('header');
timeVal = document.getElementById('min-sec');
console.log(stopData['Park_St'].time_saved);
console.log(stopData['Park_St'].proper_name);

var updateTime = function(stopName) {
    //alert(stopName.toString());
    stopName.toString();
    console.log(stopName);
    console.log(stopData['Hynes'].proper_name);
    stopDisplayName = stopData[stopName].proper_name;
    let timeSaved = stopData[stopName].time_saved;
    timeHeader.innerHTML = 'By eliminating ' + stopDisplayName + ' you would save:';
    timeVal.innerHTML = timeSaved;
};

for (var i = 0; i < classname.length; i++) {
    let idVar = classname[i].id;
    classname[i].addEventListener('click', function(){
      updateTime(idVar);
    });
}






$("circle, ellipse").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
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
