var markers = []
var art_markers = []
var ft_markers = []
var mon_markers = []
var map, x
var informWindow
function openWindow(map, marker) {
    informWindow = new google.maps.InfoWindow({
        content: marker.content,
        maxWidth: 200
    });
    informWindow.open(map, marker)
}
function closeWindow(map, marker) {
    informWindow.close(map, marker)
}
function checkMarkers(m) {
    var icon;
    if (m.Type_Id == 1) {
        icon = 'https://healution.tk/wp-content/uploads/2019/04/newest_art-e1555563415757.png';
    }
    else if (m.Type_Id == 2) {
        icon = 'https://healution.tk/wp-content/uploads/2019/04/fountain_marker-e1555563362173.png'
    }
    else if (m.Type_Id == 3) {
        icon = 'https://healution.tk/wp-content/uploads/2019/04/monument_marker-e1555563396630.png'
    }
    return icon
}
function addMark(m, map) {
    var total_markers = []
    var icon = ''
    var j
    var marker
    var contentString
    if (m[0].Type_Id == 1) {
        icon = 'https://healution.tk/wp-content/uploads/2019/04/newest_art-e1555563415757.png';
    }
    else if (m[0].Type_Id == 2) {
        icon = 'https://healution.tk/wp-content/uploads/2019/04/fountain_marker-e1555563362173.png'
    }
    else if (m[0].Type_Id == 3) {
        icon = 'https://healution.tk/wp-content/uploads/2019/04/monument_marker-e1555563396630.png'
    }
    for (var i = 0; i < m.length; i++) {
        var myLatLng = new google.maps.LatLng(parseFloat(m[i].Latitude), parseFloat(m[i].Longitude));
        //console.log(myLatLng)
        if (m[0].Type_Id == 1) {
            marker = new google.maps.Marker({
                position: myLatLng,
                icon: icon,
                animation: google.maps.Animation.DROP,
                Postcode: m[i].Postcode,
                Suburb: m[i].Suburb,
                longitude: m[i].Longitude,
                latitude: m[i].Latitude,
                Type_Id: m[i].Type_Id,
                Asset_Type: m[i].Asset_Type,
                Name: m[i].Name,
                Address: m[i].Address,
                Artist: m[i].Artist,
                Structure: m[i].Structure,
                Art_date: m[i].Art_date,
                content: m[i].Name
            });
        }
        else if (m[0].Type_Id == 2) {
            marker = new google.maps.Marker({
                position: myLatLng,
                icon: icon,
                animation: google.maps.Animation.DROP,
                Postcode: m[i].Postcode,
                Suburb: m[i].Suburb,
                longitude: m[i].Longitude,
                latitude: m[i].Latitude,
                Type_Id: m[i].Type_Id,
                D1: m[i].D1,
                D2: m[i].D2,
                D3: m[i].D3,
                content: m[i].D2
            });
        }
        else if (m[0].Type_Id == 3) {
            marker = new google.maps.Marker({
                position: myLatLng,
                icon: icon,
                animation: google.maps.Animation.DROP,
                Postcode: m[i].Postcode,
                Suburb: m[i].Suburb,
                longitude: m[i].Longitude,
                latitude: m[i].Latitude,
                Type_Id: m[i].Type_Id,
                Theme: m[i].Theme,
                Sub_Theme: m[i].Sub_Theme,
                Feature_Name: m[i].Feature_Name,
                content: m[i].Feature_Name
            });
        }


        if (marker.Type_Id == 1) {
            art_markers.push(marker)
        }
        else if (marker.Type_Id == 2) {
            ft_markers.push(marker)
        }
        else if (marker.Type_Id == 3) {
            mon_markers.push(marker)
        }
        markers.push(marker)

        // var infowindow = new google.maps.InfoWindow({
        //     content: marker.content,
        //     maxWidth: 200
        //   });

        google.maps.event.addListener(marker, 'click', (function (marker, j) {
            return function () {
                displayTable([marker])
                map.setZoom(16);
                map.setCenter(marker.getPosition());
            }
        })(marker, j))
        google.maps.event.addListener(marker, 'mouseover', (function (marker, j) {
            return function () {
                openWindow(map, marker, 'open');
            }
        })(marker, j))
        google.maps.event.addListener(marker, 'mouseout', (function (marker, j) {
            return function () {
                closeWindow(map, marker, 'close');
            }
        })(marker, j))


        total_markers.push(marker)

    }

    var markerCluster = new MarkerClusterer(map, total_markers,
        {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
            minimumClusterSize: 5
        }
    );
    MarkerClusterer.Mini
}
function showInfo(m) {
    //console.log(m);
    var outputart = document.getElementById('outputTableArt');
    var outputdt = document.getElementById('outputTableDf');
    var outputmonument = document.getElementById('outputTableMonument');
    var output_art = '';
    var output_dt = '';
    var output_monument = '';
    if (m.Type_Id == 1) {
        output_art += "<div id = 'row'>"
            + "<p> Name: " + m.Name + "</p>"
            + "<p> Structure: " + m.Structure + "</p>"
            + "<p> Artist: " + m.Artist + "</p>"
            + "<p> Date: " + m.Art_date + "</p>"
            + "<p> Type: " + m.Asset_Type + "</p>"
            + "<p> Suburb: " + m.Suburb + "</p>"
            + "<p> Postcode: " + m.Postcode + "</p>" + "</div>";
        outputart.innerHTML = output_art;
    }
    else if (m.Type_Id == 2) {
        output_dt += "<div id = 'row'>"
            + "<p> Name: " + m.D2 + "</p>"
            + "<p> Type: " + m.D3 + "</p>"
            + "<p> Suburb: " + m.Suburb + "</p>"
            + "<p> Postcode: " + m.Postcode + "</p>" + "</div>";
        outputdt.innerHTML = output_dt;
    }

    else if (m.Type_Id == 3) {
        output_monument += "<div id = 'row'>"
            + "<p> Theme: " + m.Theme + "</p>"
            + "<p> Sub Theme: " + m.Sub_Theme + "</p>"
            + "<p> Name: " + m.Feature_Name + "</p>"
            + "<p> Suburb: " + m.Suburb + "</p>"
            + "<p> Postcode: " + m.Postcode + "</p>" + "</div>";
        outputmonument.innerHTML = output_monument;
    }
}
// Initialize and add the map
//var art = axions('get',)

function showLocation(position) {
    return position.coords;
    //var longitude = position.coords.longitude;

}

function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: Access is denied!");
    } else if (err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}

function initMap(a,b) {
    var infoWindow
    var k
    var alert = document.getElementById('alert');
    if (!a) {
        var uluru = { lat: -37.8136, lng: 144.9631 };
        // The map, centered at Uluru
        map = new google.maps.Map(
            document.getElementById('map'), { zoom: 12, center: uluru });
        infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Your Current location');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }
        // The marker, positioned at Uluru
        // var total = [];
        // total.push.apply(total, monument);
        // total.push.apply(total, art);
        // total.push.apply(total, drinkingfountain);
        // var markers = total.map(function (ele, i) {
        //     return new google.maps.Marker({
        //         position: { lat: Number(ele.Latitude), lng: Number(ele.Longitude) }
        //         //label: labels[i % labels.length]
        //     });
        // });

        // // Add a marker clusterer to manage the markers.
        // var markerCluster = new MarkerClusterer(map, markers,
        //     { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        // console.log(markerCluster);
        // debugger;
        addMark(art, map);
        addMark(monument, map);
        addMark(drinkingfountain, map);
        //console.log(map)
    } else if (a.length == 0) {
        //window.confirm('Sorry, Our current datasets have not cover this area');
        //alert("Sorry, Our current datasets have not cover this area");
        alert.innerHTML = "Sorry, there is no data for this area";
    }
    else {
        alert.innerHTML = "There are " + a.length + " results found";
        if (b!=''&&b!=null) {
            //console.log(a)
            var loc = locateMap(a[1].Suburb);
            var uluru = { lat: Number(loc.Latitude), lng: Number(loc.Longitude) };
            displayTable(a);
        } else {
            var uluru = { lat: -37.8136, lng: 144.9631 };
        }

        // The map, centered at Uluru
        map = new google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: uluru });
        for (var i = 0; i < a.length; i++) {
            google.maps.event.addListener(a[i], 'click', (function (marker, k) {
                return function () {
                    map.setZoom(16);
                    map.setCenter(marker.getPosition());
                }
            })(a[i], k))

        }
        var markerCluster = new MarkerClusterer(map, a,
            {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                minimumClusterSize: 100
            });
    }
    //console.log(markerCluster);


}

//locate Map by suburb
function locateMap(sub) {
    //debugger;
    for (var i = 0; i < suburb.length; i++) {
        if (suburb[i].Suburb.toLowerCase().replace(/\s/g, '') == sub.toLowerCase().replace(/\s/g, '')) {
            //debugger;
            return suburb[i];
            break;
        }
    }
}

//var json = require('./drinking_fountain.csv.json');

//get location by type
// function getTypeLocation(e) {
//     if (e == 'art') {
//         return art_markers;
//     }
//     else if (e == 'monument') {
//         return mon_markers;
//     }
//     else if (e == 'drinkingFountain') {
//         return ft_markers;
//     }
// }
function highLight() {
    var imgProp = {
        'padding': '3px',
        'backgroundColor': '#eded01',
        'borderSize': '1ps',
        'borderStyle': 'dashed',
        'borderColor': '#0001fe'
    };

}
function handleSubmit(e) {
    var ale = document.getElementById('alert');
    var patt = new RegExp("^[a-zA-Z]+$");
    var live_markers = []
    var suburb = document.getElementById('suburb').value
    var checkMon = document.getElementById('checkMon').checked
    var checkArt = document.getElementById('checkArt').checked
    var checkFt = document.getElementById('checkFt').checked
    if (e) {
        if (e == 'art') {
            checkArt = !checkArt
        } else if (e == 'drinkingFountain') {
            checkFt = !checkFt
        } else if (e == 'monument') {
            checkMon = !checkMon
        }
    }
    if (!(checkArt | checkFt | checkMon)) {
        ale.innerHTML = 'Please select at least 1 types'
        return
    }
    if (checkArt) {
        live_markers = art_markers
        console.log(live_markers)
    }
    if (checkFt) {
        live_markers = live_markers.concat(ft_markers)
        console.log(live_markers)
    }
    if (checkMon) {
        live_markers = live_markers.concat(mon_markers)
        console.log(live_markers)
    }
    if (suburb) {
        if (patt.test(suburb.replace(/\s/g, ''))) {
            handleSuburb(suburb, live_markers)
        }
        else {
            ale.innerHTML = 'Please input the right suburb name like SouthBank'
            return
        }
    } else if (suburb == '' || suburb == null) {
        initMap(live_markers,suburb)
    } else {
        ale.innerHTML = 'Unexpected error caught'
        return
    }
    // var checkMon = document.getElementById('checkMon').checked
    // var checkMon = document.getElementById('checkArt').checked
    // var checkMon = document.getElementById('checkFt').checked


}
// function handleSubmit(e) {
//     var ale = document.getElementById('alert');
//     var type = ''
//     if(e){
//         type = e
//     }
//     else{
//         type = document.getElementById('select').value;
//    }
//     var suburb = document.getElementById('suburb').value
//     var patt=new RegExp("^[a-zA-Z]+$");
//     if (suburb != '' && suburb != null && type == "" ) {
//         if(patt.test(suburb.replace(/\s/g, ''))){
//         handlesubmit(suburb)}
//         else{
//             ale.innerHTML = 'Please input the right suburb name like SouthBank';
//         }
//     }
//     else if ((suburb == '' || suburb == null )&& type != "") {
//         var getinfo = getTypeLocation(e);
//         console.log(getinfo)
//         initMap(getinfo);

//     }
//     else if (suburb != '' && suburb != null && type != '') {
//         if(patt.test(suburb.replace(/\s/g, ''))){
//             var result = getTypeLocation(type);
//             console.log(result)
//             var arr = []
//             for (var i = 0; i < result.length; i++) {
//                 if (result[i].Suburb.replace(/\s/g, '').toLowerCase() == suburb.replace(/\s/g, '').toLowerCase()) {
//                     arr.push(result[i])
//                 }
//             }
//             initMap(arr);
//         }
//             else{
//                 ale.innerHTML = '<div style = { background-color: yellow;}>' + 'Please input the right suburb name like SouthBank' + '</div>';
//             }

//         //outputType.innerHTML = type;
//     }
//     else if ((suburb == '' || suburb == null ) && type == ""){
//         var total = [];
//         total.push.apply(total, monument);
//         total.push.apply(total, art);
//         total.push.apply(total, drinkingfountain);
//         initMap(total)
//     }
// }


//filterling
// function handlefilter(e) {
//     //e.preventDefault()
//     // console.log('asdf')
//     // var type = document.getElementById('select').value;
//     // document.getElementById('display').innerHTML = type;
//     var getinfo = getTypeLocation(e);
//     initMap(getinfo);
// }

// function getlocation(suburb) {
//     var arr = [];
//     // total.push.apply(total, monument);
//     // total.push.apply(total, art);
//     // total.push.apply(total, drinkingfountain);
//     for (var i = 0; i < markers.length; i++) {
//         if (markers[i].Suburb.toLowerCase().replace(/\s/g, '') == suburb.toLowerCase().replace(/\s/g, '')) {
//             arr.push(markers[i]);
//         }
//     }
//     return arr;
// }
function handleSuburb(suburb, l) {

    var arr = [];
    for (var i = 0; i < l.length; i++) {
        if (l[i].Suburb.toLowerCase().replace(/\s/g, '') == suburb.toLowerCase().replace(/\s/g, '')) {
            arr.push(l[i]);
        }
    }
    initMap(arr,suburb)
}

function displayTable(row) {
    //console.log(row);
    var artArr = []
    var ftArr = []
    var monArr = []
    var outputTab = "<ul class='nav nav-tabs'>"
    var output = "<div class='tab-content'>"

    var num_type = 0
    var outputart = document.getElementById('artOutput');
    var outputdt = document.getElementById('ftOutput');
    var outputmonument = document.getElementById('monOutput');

    // outputTab += "<li><a data-toggle='tab' href='#artOutput'>Art</a></li>"
    // outputTab += "<li><a data-toggle='tab' href='#ftOutput'>Fountain</a></li>"
    // outputTab += "<li><a data-toggle='tab' href='#monOutput'>Monument</a></li>"
    // outputTab += '</ul>'

    for (var i = 0; i < row.length; i++) {
        if (row[i].Type_Id == 1) {
            artArr.push(row[i])
        }
        else if (row[i].Type_Id == 2) {
            ftArr.push(row[i])
        }
        else if (row[i].Type_Id == 3) {
            monArr.push(row[i])
        }
    }
    if (artArr.length >= 1) {
        outputTab += "<li><a data-toggle='tab' href='#artOutput' >Art</a></li>"
        output += "<div id = 'artOutput' class = 'output tab-pane fade'> <h3 id = 'header'>Art</h3><table class='table'><thead><tr><th scope='row'>Name</th><th scope='row'>Structure</th><th scope='row'>Date</th><th scope='row'>Type</th><th scope='row'>Suburb</th><th scope='row'>Postcode</th></tr></thead>";
        for (var i = 0; i < artArr.length; i++) {
            output += "<tr><td>" + artArr[i].Name + "</td><td>" + artArr[i].Structure + "</td><td>" + artArr[i].Art_date + "</td><td>" + artArr[i].Asset_Type + "</td><td>" + artArr[i].Suburb + "</td><td>" + artArr[i].Postcode + "</td></tr>"
        }
        output += '</table></div>'
    }else{
        outputTab += "<li><a data-toggle='tab' href='#artOutput' cursor: not-allowed style='background-color: lightgray;'>Art</a></li>"
        //output += '<p>There is no result</p>'
    }
    if (ftArr.length >= 1) {
        outputTab += "<li><a data-toggle='tab' href='#ftOutput'>Fountain</a></li>"
        output += "<div id = 'ftOutput' class = 'output tab-pane fade'><h3 id = 'header'>Fountain</h3><table class='table'><thead><tr><th scope='row'>Name</th><th scope='row'>Type</th><th scope='row'>Suburb</th><th scope='row'>Postcode</th></tr></thead>";
        // for(var i = 0; i < ftArr.length; i++){
        //     output += "<div id = 'row'>"
        //         + "<p> Name: " + ftArr[i].D2 + "</p>"
        //         + "<p> Type: " + ftArr[i].D3 + "</p>"
        //         + "<p> Suburb: " + ftArr[i].Suburb + "</p>"
        //         + "<p> Postcode: " + ftArr[i].Postcode + "</p>"
        // }
        for (var i = 0; i < ftArr.length; i++) {
            output += "<tr><td>" + ftArr[i].D2 + "</td><td>" + ftArr[i].D3 + "</td><td>" + ftArr[i].Suburb + "</td><td>" + ftArr[i].Postcode + "</td></tr>"
        }
        output += '</table></div>'
    }else{
        outputTab += "<li><a data-toggle='tab' href='#ftOutput' cursor: not-allowed style='background-color: lightgray;'>Fountain</a></li>"
        // output += '<p>There is no result</p>'
    }
    if (monArr.length >= 1) {
        outputTab += "<li><a data-toggle='tab' href='#monOutput'>Monument</a></li>"
        output += "<div id = 'monOutput' class = 'output tab-pane fade'><h3 id = 'header'>Mountain</h3><table class='table'><thead><tr><th scope='row'>Theme</th><th scope='row'>Sub Theme</th><th scope='row'>Feature Name</th><th scope='row'>Suburb</th><th scope='row'>Postcode</th></tr></thead>";
        // for(var i = 0; i < monArr.length; i++){
        //     output += "<div id = 'row'>"
        //             + "<p> Name: " + monArr[i].Name + "</p>"
        //             + "<p> Structure: " + monArr[i].Structure + "</p>"
        //             + "<p> Artist: " + monArr[i].Artist + "</p>"
        //             + "<p> Date: " + monArr[i].Art_date + "</p>"
        //             + "<p> Type: " + monArr[i].Asset_Type + "</p>"
        //             + "<p> Suburb: " + monArr[i].Suburb + "</p>"
        //             + "<p> Postcode: " + monArr[i].Postcode + "</p>" + "</div>";
        // }
        for (var i = 0; i < monArr.length; i++) {
            output += "<tr><td>" + monArr[i].Theme + "</td><td>" + monArr[i].Sub_Theme + "</td><td>" + monArr[i].Feature_Name + "</td><td>" + monArr[i].Suburb + "</td><td>" + monArr[i].Postcode + "</td></tr>"
        }
        output += '</table></div>'
    }else{
        outputTab += "<li><a data-toggle='tab' href='#monOutput' cursor: not-allowed style='background-color: lightgray;'}>Monument</a></li>"
        //output += '<p>There is no result</p>'
    }

    // outputTab += '</ul>'
    output += '</div>'
    document.getElementById('outputTable').innerHTML = (outputTab + output)
    // for (var i = 0; i < row.length; i++) {
    //     if (row[i].Type_Id == 1) {

    //         output_art += "<div id = 'row'>"
    //             + "<p> Name: " + row[i].Name + "</p>"
    //             + "<p> Structure: " + row[i].Structure + "</p>"
    //             + "<p> Artist: " + row[i].Artist + "</p>"
    //             + "<p> Date: " + row[i].Art_date + "</p>"
    //             + "<p> Type: " + row[i].Asset_Type + "</p>"
    //             + "<p> Suburb: " + row[i].Suburb + "</p>"
    //             + "<p> Postcode: " + row[i].Postcode + "</p>" + "</div>";
    //     }
    //     else if (row[i].Type_Id == 2) {
    //         output_dt += "<div id = 'row'>"
    //             + "<p> Name: " + row[i].D2 + "</p>"
    //             + "<p> Type: " + row[i].D3 + "</p>"
    //             + "<p> Suburb: " + row[i].Suburb + "</p>"
    //             + "<p> Postcode: " + row[i].Postcode + "</p>" + "</div>";
    //     }

    //     else if (row[i].Type_Id == 3) {
    //         output_monument += "<div id = 'row'>"
    //             + "<p> Theme: " + row[i].Theme + "</p>"
    //             + "<p> Sub Theme: " + row[i].Sub_Theme+ "</p>" 
    //             + "<p> Name: " + row[i].Feature_Name + "</p>"
    //             + "<p> Suburb: " + row[i].Suburb + "</p>"
    //             + "<p> Postcode: " + row[i].Postcode + "</p>" + "</div>";
    //     }

    // }
    // outputart.innerHTML = output_art;
    // outputdt.innerHTML = output_dt;
    // outputmonument.innerHTML = output_monument;
}
function newclick() {
    var checkMon = document.getElementById('checkMon').checked
    var checkArt = document.getElementById('checkArt').checked
    var checkFt = document.getElementById('checkFt').checked
    console.log(checkFt)
    console.log(checkArt)
    console.log(checkMon)
}

var display = true
function handleDisplay(){
    if(display){
    document.getElementById("test").style.display = 'none';

    }else{
    document.getElementById("test").style.display = 'block'
    }
    display = !display
}



