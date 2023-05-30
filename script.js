function iniciarMap(){
    var coord = {lat:40.41897000 ,lng:-3.69690000};
    var map = new google.maps.Map(document.getElementById('map') , { 
        zoom: 10,
    center:coord
    });

}