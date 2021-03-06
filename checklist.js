var checklistMap
var finalResult
var art
var monument
var drinkingFountain
var sports
var suburbList
var tram
var bus
var railwayStation
var inSport = []
var outSport = []
var new_art = []
var new_drinkingFountain = []
var new_inSport = []
var new_outSport = []
var new_monument = []
var new_tram = []
var new_bus = []
var new_railwayStation = []
var ifPublic = false
var allowGeo = false
var markers = []
var autolist = []
var checkList 
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/suburb',
    function (result) {
        suburbList = result
        for(var i = 0;i<suburbList.length;i++){
            autolist.push([suburbList[i].suburb_name,suburbList[i].postcode])
        }
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/art',
    function (result) {
        art = result
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/drinking_fountain',
    function (result) {
        drinkingFountain = result
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/monument',
    function (result) {
        monument = result
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/sports',
    function (result) {
        sports = result
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/bus',
    function (result) {
        bus = result
        console.log(bus)
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/tram',
    function (result) {
        tram = result
    }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/railway_station',
    function (result) {
        railwayStation = result
    }
)
$(".big").hide()
function handleSubmit(e) {
    $("#form1").hide()
    $(".big").show()
    filtering($('#form1').serializeArray())
}
function filtering(submit) {
    var selectSub = []
    var placeType
    var interest = []
    var suburb
    var postcode
    console.log(submit)

    for (var i = 0; i < submit.length; i++) {
        if (submit[i].name == 'q1') {
            placeType = parseInt(submit[i].value)
        } else if (submit[i].name == 'q21') {
            interest.push(parseInt(submit[i].value))
        } else if (submit[i].name == 'q22') {
            interest.push(parseInt(submit[i].value))
        } else if (submit[i].name == 'q23') {
            interest.push(parseInt(submit[i].value))
        } else if (submit[i].name == 'q3') {
            if (submit[i].value == 'public') {
                ifPublic = true
            }
        } else if (submit[i].name == 'q51') {
            sss = submit[i].value.split(',')
            suburb = sss[0]
            postcode = sss[1]
        }
        // } else if (submit[i].name == 'q52') {
        //     postcode = parseInt(submit[i].value)
        // }
    }
    for (var i = 0; i < sports.length; i++) {
        if (sports[i].act_ind == 'Y') {
            inSport.push(sports[i])
        } else if (sports[i].act_ind == 'N') {
            outSport.push(sports[i])
        }
    }
    if (placeType == 1) {
        art = []
        monument = []
        drinkingFountain = []
        outSport = []
    } else if (placeType == 2 && interest.length == 3) {
        inSport = []
    } else if (placeType == 2 && interest.length == 2 && interest[0] == 1 && interest[1] == 2) {
        drinkingFountain = []
        inSport = []
    } else if (placeType == 2 && interest.length == 2 && interest[0] == 2 && interest[1] == 3) {
        inSport = []
        outSport = []
    } else if (placeType == 2 && interest.length == 2 && interest[0] == 1 && interest[1] == 3) {
        inSport = []
        art = []
        monument = []
    } else if (placeType == 2 && interest.length == 1) {
        if (interest[0] == 1) {
            art = []
            monument = []
            drinkingFountain = []
            inSport = []
        }
        else if (interest[0] == 2) {
            drinkingFountain = []
            outSport = []
            inSport = []
        }
        else if (interest[0] == 3) {
            art = []
            monument = []
            outSport = []
            inSport = []
        }
    } else if (placeType == 3) {
        if (interest.length == 3) {

        } else if (interest.length == 2 && interest[0] == 1 && interest[1] == 2) {
            drinkingFountain = []
        } else if (interest.length == 2 && interest[0] == 2 && interest[2] == 3) {
            inSport = []
            outSport = []
        } else if (interest.length == 2 && interest[0] == 1 && interest[3] == 3) {
            art = []
            monument = []
        } else if (interest.length == 1) {
            if (interest[0] == 1) {
                art = []
                monument = []
                drinkingFountain = []
            }
            else if (interest[0] == 2) {
                inSport = []
                outSport = []
                drinkingFountain = []
            }
            else if (interest[0] == 3) {
                art = []
                monument = []
                inSport = []
                outSport = []
            }
        }
    }
    if (suburb) {
        var q = getSubId(suburb)
        selectSub.push(q)
    } else {
        selectSub = getSubId(postcode)
    }
    for (var j = 0; j < selectSub.length; j++) {
        for (var i = 0; i < tram.length; i++) {
            if (tram[i].sub_id == selectSub[j].suburb_id) {
                new_tram.push(tram[i])
            }
        }
        for (var i = 0; i < bus.length; i++) {
            if (bus[i].sub_id == selectSub[j].suburb_id) {
                new_bus.push(bus[i])
            }
        }
        for (var i = 0; i < railwayStation.length; i++) {
            if (railwayStation[i].sub_id == selectSub[j].suburb_id) {
                new_railwayStation.push(railwayStation[i])
            }
        }
    }
    for (var j = 0; j < selectSub.length; j++) {
        if (art.length > 0) {
            for (var i = 0; i < art.length; i++) {
                if (art[i].sub_id == selectSub[j].suburb_id) {
                    new_art.push(art[i])
                }
            }
        }
        if (monument.length > 0) {
            for (var i = 0; i < monument.length; i++) {
                if (monument[i].sub_id == selectSub[j].suburb_id) {
                    new_monument.push(monument[i])
                }
            }
        }
        if (drinkingFountain.length > 0) {
            for (var i = 0; i < drinkingFountain.length; i++) {
                if (drinkingFountain[i].sub_id == selectSub[j].suburb_id) {
                    new_drinkingFountain.push(drinkingFountain[i])
                }
            }
        }
        if (inSport.length > 0) {
            for (var i = 0; i < inSport.length; i++) {
                if (inSport[i].sub_id == selectSub[j].suburb_id) {
                    new_inSport.push(inSport[i])
                }
            }
        }
        if (outSport.length > 0) {
            for (var i = 0; i < outSport.length; i++) {
                if (outSport[i].sub_id == selectSub[j].suburb_id) {
                    new_outSport.push(outSport[i])
                }
            }
        }
    }
    console.log(new_art)
    console.log(new_monument)
    console.log(new_drinkingFountain)
    console.log(new_inSport)
    console.log(new_outSport)
    var sub_patt = new RegExp("^[a-zA-Z]+$");
    var post_patt = new RegExp("^[0-9]+$")
    finalResult = randomSelect()
    initCheckListMap(finalResult, selectSub[0])
    printResult(finalResult)
}

function handleTableClick(i) {
    $("#" + i * 10).hide()
    $("#" + i * 100).show()
    $("#" + i * 100).parent().attr("id",'')
}

function handleCheckDelete(i) {
    $("#" + i * 10).show()
    $("#" + i * 100).hide()
    $("#" + i * 100).parent().attr("id",'resultArea')
}


function disableElements(num) {
    for (var m = 0; m < num; m++) {
        $("#" + (m + 1) * 100).hide();
    }
}
// function printMarkerDetails(marker){
//     var add = []
//     var details
//     //var disAdd = []
//     if(marker.type_id == 'art'){
//         add.push(marker.latitude)
//         add.push(marker.longitude)
//         // add = getAddress(disAdd)
//         jQuery.get(
//             "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ add[0]+","+add[1]+"&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
//         function(result) {
//             address = result.results[0].formatted_address
//             details = "<table class='table table-striped'><tr><th>Name</th><th>Artist</th><th>Date</th><th>Type</th><th>Address</th></tr><tr onclick='highLight("+marindex+")'><td>" + marker.art_name + "</td><td>" +marker.artist+ "</td><td>"+marker.art_date+"</td><td>"+marker.art_asset_type+"</td><td>"+address+"</td></tr></table>"
//             document.getElementById("detail").innerHTML = details
//             // return address
//           }
//         )
//     }else if(marker.type_id == 'monument'){
//         add.push(marker.latitude)
//         add.push(marker.longitude)
//         jQuery.get(
//             "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ add[0]+","+add[1]+"&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
//         function(result) {
//             address = result.results[0].formatted_address
//             details = "<table class='table table-striped'><tr><th>Theme</th><th>Sub Theme</th><th>Name</th><th>Address</th></tr><tr onclick='highLight("+index+")'><td>" + marker.mmt_theme + "</td><td>" + marker.mmt_subtheme + "</td> <td>" +marker.mmt_name+ "</td><td>" +address+ "</td></tr></table>"
//             document.getElementById("detail").innerHTML = details
//             // return address
//           }
//         )
//     }else if(marker.type_id == 'Sport'){
//         add.push(marker.latitude)
//         add.push(marker.longitude)
//         jQuery.get(
//             "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ add[0]+","+add[1]+"&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
//         function(result) {
//             address = result.results[0].formatted_address
//             details = "<table class='table table-striped'><tr><th>Name</th><th>Facility</th><th>Address</th></tr><tr onclick='highLight("+index+")'><td>" + marker.sp_name + "</td><td>" + marker.sp_facilityname + "</td><td>" + address + "</td></tr></table>"
//             document.getElementById("detail").innerHTML = details
//             // return address
//           }
//         )

//     }else if(marker.type_id == 'drinkingFountain'){
//         add.push(marker.latitude)
//         add.push(marker.longitude)
//         jQuery.get(
//             "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ add[0]+","+add[1]+"&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
//         function(result) {
//             address = result.results[0].formatted_address
//             details = "<table class='table table-striped'><tr><th>Name</th><th>Type</th><th>Address</th></tr><tr onclick='highLight("+index+")'><td>" + marker.df_type + "</td><td>" + marker.df_subtype + "</td><td>" + address + "</td></tr></table>"
//             document.getElementById("detail").innerHTML = details
//             // return address
//           }
//         )
//     }
//     // document.getElementById("detail").innerHTML = details

// }
function printDetails(index) {
    console.log(index)
    var add = []
    var details
    //var disAdd = []
    if (finalResult[index].type_id == 'art') {
        add.push(finalResult[index].art_lat)
        add.push(finalResult[index].art_long)
        // add = getAddress(disAdd)
        jQuery.get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + add[0] + "," + add[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
            function (result) {
                address = result.results[0].formatted_address
                details = "<table class='table table-striped'><tr onclick='highLight(" + index + ")'><th>Name</th><td>" + finalResult[index].art_name + "</td></tr><tr onclick='highLight(" + index + ")'><th>Artist</th><td>" + finalResult[index].artist + "</td></tr><tr onclick='highLight(" + index + ")'><th>Address</th><td>" + address + "</td></tr><tr><td class='jq'  onclick='handleTableClick(" + (index + 1) + ")'>Add" + "<ion-icon name='add-circle-outline'></ion-icon>" + "</td><td onclick='linkGoogleMap("+add[0]+","+add[1]+")'><a>Link to Google Map</a></td></tr></table>"
                document.getElementById("detail").innerHTML = details
                // return address
            }
        )
    } else if (finalResult[index].type_id == 'monument') {
        add.push(finalResult[index].mmt_lat)
        add.push(finalResult[index].mmt_long)
        jQuery.get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + add[0] + "," + add[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
            function (result) {
                address = result.results[0].formatted_address
                details = "<table class='table table-striped'><tr onclick='highLight(" + index + ")'><th>Theme</th><td>" + finalResult[index].mmt_theme + "</td></tr><tr onclick='highLight(" + index + ")'><th>Sub Theme</th><td>" + finalResult[index].mmt_subtheme + "</td></tr><tr onclick='highLight(" + index + ")'><th>Name</th><td>" + finalResult[index].mmt_name + "</td></tr><tr onclick='highLight(" + index + ")'><th>Address</th><td>" + address + "</td></tr><tr><td class='jq'  onclick='handleTableClick(" + (index + 1) + ")'>Add" + "<ion-icon name='add-circle-outline'></ion-icon>" + "</td><td onclick='linkGoogleMap("+add[0]+","+add[1]+")'><a>Link to Google Map</a></td></tr></table>"
                document.getElementById("detail").innerHTML = details
                // return address
            }
        )
    } else if (finalResult[index].type_id == 'Sport') {
        add.push(finalResult[index].sp_lat)
        add.push(finalResult[index].sp_long)
        jQuery.get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + add[0] + "," + add[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
            function (result) {
                address = result.results[0].formatted_address
                details = "<table class='table table-striped'><tr onclick='highLight(" + index + ")'><th>Name</th><td>" + finalResult[index].sp_name + "</td></tr><tr onclick='highLight(" + index + ")'><th>Facility</th><td>" + finalResult[index].sp_facilityname + "</td></tr><tr onclick='highLight(" + index + ")'><th>Address</th><td>" + address + "</td></tr><tr><td class='jq'  onclick='handleTableClick(" + (index + 1) + ")'>Add" + "<ion-icon name='add-circle-outline'></ion-icon>" + "</td><td onclick='linkGoogleMap("+add[0]+","+add[1]+")'><a>Link to Google Map</a></td></tr></table>"
                document.getElementById("detail").innerHTML = details
                // return address
            }
        )

    } else if (finalResult[index].type_id == 'drinkingFountain') {
        add.push(finalResult[index].df_lat)
        add.push(finalResult[index].df_long)
        jQuery.get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + add[0] + "," + add[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
            function (result) {
                address = result.results[0].formatted_address
                details = "<table class='table table-striped'><tr onclick='highLight(" + index + ")'><th>Name</th><td>" + finalResult[index].df_type +"</td></tr><tr onclick='highLight(" + index + ")'><th>Type</th><td>" + finalResult[index].df_subtype + "</td></tr><tr onclick='highLight(" + index + ")'><th>Address</th><td>" + address + "</td></tr><tr><td class='jq'  onclick='handleTableClick(" + (index + 1) + ")'>Add" + "<ion-icon name='add-circle-outline'></ion-icon>" + "</td><td onclick='linkGoogleMap("+add[0]+","+add[1]+")'><a>Link to Google Map</a></td></tr></table>"
                document.getElementById("detail").innerHTML = details
                // return address
            }
        )
    }
    // document.getElementById("detail").innerHTML = details

}
// function testss(){
//     console.log(1)
// }
function handleIput(i) {
    printDetails(i)
}
function  generateChecklist(addd,name,q,arr){
    jQuery.get(
                    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + addd[0] + "," + addd[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
                    function (result) {
                        var check = document.createElement('div');
                        check.setAttribute("id","resultArea")
                        console.log(arr)
                        console.log(q)
                        var addr = result.results[0].formatted_address
                        var checkk = "<table id ='"+ (q + 1) * 100 +"' class='table table-striped'><tr onclick='handleIput(" + q + ")'><td>Go to " + arr[q].type_id + " called " + name + " at " +addr +"</td><td onclick = handleCheckDelete(" + (q + 1) + ")><ion-icon name='close'></ion-icon></td></tr></table>"
                        // return address
                        check.innerHTML = checkk;
                        checkList.appendChild(check);
                        $("#" + (q + 1) * 100).hide()                       
                        // document.getElementById("checkelist").innerHTML += checkelist;
                    }
                )
}
function printResult(arr) {
    var address = []
    var addd = []
    var addr
    if (arr.length > 0) {
        var res = "<table class='table table-striped'><tr><th>name</th><th>type</th><th>add</th></tr>";
        var checkelist = "<table id ='printCheck' class='table table-striped'><tr><th>Checklist</th><th>Delete</th></tr>"
        for (var i = 0; i < arr.length; i++) {
            var name
            if (arr[i].type_id == 'Sport') {
                addd.push(arr[i].sp_lat)
                addd.push(arr[i].sp_long)
                    name = arr[i].sp_name
            } else if (arr[i].type_id == 'art') {
                name = arr[i].art_name
            } else if (arr[i].type_id == 'drinkingFountain') {
                name = arr[i].df_type
            } else if (arr[i].type_id == 'monument') {
                name = arr[i].mmt_theme
            }
            $.ajax({
                url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + addd[0] + "," + addd[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
                complete: function (result) {
                    console.log(result)
                    addr = result.responseJSON.results[0].formatted_address
                    checkelist += "<tr onclick='handleIput(" + i + ")' id=" + (i + 1) * 100 + "><td>There is a " + arr[i].type_id + " plase " + name + "</td><td>"+addr+"</td><td onclick = handleCheckDelete(" + (i + 1) + ")><ion-icon name='close'></ion-icon></td></tr>"
                }
            })
            // console.log(addr)
            // checkelist += "<tr onclick='handleIput(" + i + ")' id=" + (i + 1) * 100 + "><td>There is a " + arr[i].type_id + " plase " + name + "</td><td>"+addr+"</td><td onclick = handleCheckDelete(" + (i + 1) + ")><ion-icon name='close'></ion-icon></td></tr>"
            res += "<tr id=" + (i + 1) * 10 + "><td onclick='handleIput(" + i + ")'>" + name + "</td><td onclick='handleIput(" + i + ")'>" + arr[i].type_id + "</td><td class='jq'  onclick='handleTableClick(" + (i + 1) + ")'>" + "<ion-icon name='add-circle-outline'></ion-icon>" + "</td></tr>"
        }

        res += "</table>"
        checkelist += "</table><button id = 'cmd' onclick='printPdf();return false'>Download</button>"
        document.getElementById("checkelist").innerHTML = checkelist;
        document.getElementById("searchOutput").innerHTML = res;
        disableElements(i)
    } else {
        document.getElementById("searchOutput").innerHTML = "<p>NO RESULT FOUND</p>"
    }
}
// function printResult(arr){
//     if(arr.length > 0){
//     var res = '<table><tr><th>name</th><th>type</th></tr>';
//     for(var i = 0 ; i < arr.length; i ++){
//         var name 
//         if(arr[i].type_id == 'Sport'){
//             name = arr[i].sp_name
//         }else if(arr[i].type_id == 'art'){
//             name = arr[i].art_name
//         }else if(arr[i].type_id == 'drinkingFountain'){
//             name = arr[i].df_type
//         }else if(arr[i].type_id == 'monument'){
//             name = arr[i].mmt_theme
//         }
//         res += "<tr><td onclick='handleTableClick(" + i + ")'>" + name + "</td><td>" + arr[i].type_id + "</td></tr>"
//     }
//     res += "</table>"
//     document.getElementById("searchOutput").innerHTML=res;
//     }else{
//     document.getElementById("searchOutput").innerHTML="<p>NO RESULT FOUND</p>"
//     }
// }
function getAddress(a) {
    // a = [44.4647452,7.3553838]
    var address = "";
    // debugger
    // var request = new XMLHttpRequest();
    //request.open('GET', "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ a[0]+","+a[1]+"&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU", true);
    jQuery.get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + a[0] + "," + a[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
        function (result) {
            address = result.results[0].formatted_address
            console.log(address)
            // return address
        }
    )
    //address = request.send();
    return address
}
function randomSelect() {
    var total = []
    var final = []
    var a = []
    var check = false
    if (new_outSport.length > 0) {
        check = true
        for (var i = 0; i < new_outSport.length; i++) {
            new_outSport[i].type_id = 'Sport'
        }
    }
    if (new_inSport.length > 0) {
        check = true
        for (var i = 0; i < new_inSport.length; i++) {
            new_inSport[i].type_id = 'Sport'
        }
    }
    if (new_art.length > 0) {
        check = true
        for (var i = 0; i < new_art.length; i++) {
            new_art[i].type_id = 'art'
        }
    }
    if (new_monument.length > 0) {
        check = true
        for (var i = 0; i < new_monument.length; i++) {
            new_monument[i].type_id = 'monument'
        }
    }
    if (new_drinkingFountain.length > 0) {
        check = true
        for (var i = 0; i < new_drinkingFountain.length; i++) {
            new_drinkingFountain[i].type_id = 'drinkingFountain'
        }
    }
    total = total.concat(new_art)
    total = total.concat(new_monument)
    total = total.concat(new_drinkingFountain)
    total = total.concat(new_inSport)
    total = total.concat(new_outSport)

    console.log(total)
    if (total.length > 9) {
        while (final.length < 9) {
            var b = Math.floor(Math.random() * total.length)
            var find = false
            for (var i = 0; i < a.length; i++) {
                if (a[i] == b) {
                    find = true
                    continue
                }
            }
            if (!find) {
                a.push(b)
                final.push(total[b])
            }
        }
        console.log(final)
    } else {
        final = total
    }
    return final
}
function subValidation() {
    var post_patt = new RegExp("^[0-9]+$")
    var sub_patt = new RegExp("^[a-zA-Z]+$");
    if (suburb) {
        if (!sub_patt.test(suburb.replace(/\s/g, ''))) {
            ale.innerHTML = 'Invalid suburb name. Please recheck your input. e.g. Southbank'
        }
    }
    if (postcode) {
        if (!post_patt.test(suburb.replace(/\s/g, ''))) {
            ale.innerHTML = 'Invalid postcode. Please recheck your input. e.g. 3000'
        }
    }
}

function getSubId(a) {
    if (typeof a === 'string' || a instanceof String) {
        for (var i = 0; i < suburbList.length; i++) {
            if (suburbList[i].suburb_name.replace(/\s/g, '').toLowerCase() == a.replace(/\s/g, '').toLowerCase()) {
                console.log(suburbList[i])
                return suburbList[i]
            }
        }
    } else {
        var subId = []
        console.log(a)
        for (var i = 0; i < suburbList.length; i++) {
            if (suburbList[i].postcode == a.toString()) {

                subId.push(suburbList[i])
            }
        }
        console.log(subId)
        return subId
    }
}

function getGeoLocation() {
    function getLocation() {
        if (navigator.geolocation) {
            allowGeo = true
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var curr_lat = position.coords.latitude;
        var curr_long = position.coords.longitude;
    }
}


function opencWindow(map, marker) {
    informWindow = new google.maps.InfoWindow({
        content: marker.content,
        maxWidth: 200
    });
    informWindow.open(map, marker)
}
function closecWindow(map, marker) {
    informWindow.close(map, marker)
}
function highLight(index) {
    if (markers[index].getAnimation() != google.maps.Animation.BOUNCE) {
        markers[index].setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () { markers[index].setAnimation(null); }, 1500);
    } else {
        markers[index].setAnimation(null);
    }
}

function initCheckListMap(m, suburbLoc) {
    var bounds = new google.maps.LatLngBounds();
    if (suburbLoc) {
        var uluru = { lat: parseFloat(suburbLoc.sub_lat), lng: parseFloat(suburbLoc.sub_long) };
    }
    else {
        var uluru = { lat: -37.8136, lng: 144.9631 };
    }
    checklistMap = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: uluru })
    var icon = ''
    var j
    var marker
    // if (m[i].Type_Id == 1) {
    //     icon = 'https://healution.tk/wp-content/uploads/2019/04/newest_art-e1555563415757.png';
    // }
    // else if (m[0].Type_Id == 2) {
    //     icon = 'https://healution.tk/wp-content/uploads/2019/04/fountain_marker-e1555563362173.png'
    // }
    // else if (m[0].Type_Id == 3) {
    //     icon = 'https://healution.tk/wp-content/uploads/2019/04/monument_marker-e1555563396630.png'
    // }
    console.log(m)
    for (var i = 0; i < m.length; i++) {
        var myLatLng
        //console.log(myLatLng)
        if (m[i].type_id == 'art') {
            myLatLng = new google.maps.LatLng(parseFloat(m[i].art_lat), parseFloat(m[i].art_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/newest_art-e1555563415757.png',
                animation: google.maps.Animation.DROP,
                longitude: m[i].art_long,
                latitude: m[i].art_lat,
                type_id: m[i].type_id,
                art_asset_type: m[i].art_asset_type,
                art_name: m[i].art_name,
                art_address: m[i].art_address,
                artist: m[i].artist,
                art_date: m[i].art_date,
                content: m[i].art_name,
                index: i
            });
            markers.push(marker)
            bounds.extend(marker.position);
        }
        else if (m[i].type_id == 'drinkingFountain') {
            myLatLng = new google.maps.LatLng(parseFloat(m[i].df_lat), parseFloat(m[i].df_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/fountain_marker-e1555563362173.png',
                animation: google.maps.Animation.DROP,
                longitude: m[i].df_long,
                latitude: m[i].df_lat,
                type_id: m[i].type_id,
                df_type: m[i].df_type,
                df_subtype: m[i].df_subtype,
                content: m[i].df_type,
                index: i
            });
            markers.push(marker)
            bounds.extend(marker.position);
        }
        else if (m[i].type_id == 'monument') {
            myLatLng = new google.maps.LatLng(parseFloat(m[i].mmt_lat), parseFloat(m[i].mmt_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/monument_marker-e1555563396630.png',
                animation: google.maps.Animation.DROP,
                longitude: m[i].mmt_long,
                latitude: m[i].mmt_lat,
                type_id: m[i].type_Id,
                mmt_theme: m[i].mmt_theme,
                mmt_subtheme: m[i].mmt_subtheme,
                mmt_name: m[i].mmt_name,
                content: m[i].mmt_name,
                index: i
            });
            markers.push(marker)
            bounds.extend(marker.position);
        }
        else if (m[i].type_id == 'Sport') {
            myLatLng = new google.maps.LatLng(parseFloat(m[i].sp_lat), parseFloat(m[i].sp_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/Sports-Marker-e1556385283212.png',
                animation: google.maps.Animation.DROP,
                longitude: m[i].sp_long,
                latitude: m[i].sp_lat,
                type_id: m[i].type_id,
                sp_facilityname: m[i].sp_facilityname,
                sp_name: m[i].sp_name,
                content: m[i].sp_name,
                index: i
            });
            markers.push(marker)
            bounds.extend(marker.position);
        }


        // if (marker.type_id == 'art') {
        //     art_markers.push(marker)
        // }
        // else if (marker.type_id == 'drinkingFountain') {
        //     ft_markers.push(marker)
        // }
        // else if (marker.type_id == 'monument') {
        //     mon_markers.push(marker)
        // }
        // markers.push(marker)

        // var infowindow = new google.maps.InfoWindow({
        //     content: marker.content,
        //     maxWidth: 200
        //   });

        google.maps.event.addListener(marker, 'click', (function (marker, j) {
            return function () {
                printDetails(marker.index)
                checklistMap.setZoom(16);
                checklistMap.setCenter(marker.getPosition());
            }
        })(marker, j))
        google.maps.event.addListener(marker, 'mouseover', (function (marker, j) {
            return function () {
                opencWindow(checklistMap, marker, 'open');
            }
        })(marker, j))
        google.maps.event.addListener(marker, 'mouseout', (function (marker, j) {
            return function () {
                closecWindow(checklistMap, marker, 'close');
            }
        })(marker, j))
    }
    // google.maps.event.addDomListener(window, "load", initialize);

    // var markerCluster = new MarkerClusterer(map, total_markers,
    //     {
    //         imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    //         minimumClusterSize: 5
    //     }
    // );
    // MarkerClusterer.Mini
    if (ifPublic) {
        for (var i = 0; i < new_bus.length; i++) {
            myLatLng = new google.maps.LatLng(parseFloat(new_bus[i].bs_lat), parseFloat(new_bus[i].bs_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/Bus-Marker-e1556385118473.png'
            });
        }
        for (var i = 0; i < new_tram.length; i++) {
            myLatLng = new google.maps.LatLng(parseFloat(new_tram[i].tm_lat), parseFloat(new_tram[i].tm_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/Tram-Marker-e1556385190132.png'
            });
        }
        for (var i = 0; i < new_railwayStation.length; i++) {
            myLatLng = new google.maps.LatLng(parseFloat(new_railwayStation[i].rs_lat), parseFloat(new_railwayStation[i].rs_long));
            marker = new google.maps.Marker({
                position: myLatLng,
                map: checklistMap,
                icon: 'https://healution.tk/wp-content/uploads/2019/04/Train-Marker-e1556385147530.png'
            });
        }
    }
}
function printPdf() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var doc = new jsPDF()
    var header = 'Always Cherie'
    var footer = 'Thank You' + date
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    // doc.text('Hello world!' + date, 10, 10)
    // doc.save("Always Cherie" + date  +".pdf")
    $('#cmd').click(function () {
        doc.fromHTML($('#printCheck:visible').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save("Always Cherie" + date + ".pdf");
    });
}
function autocomplete(inp, arr) {
    var p = /[0-9]/;
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    var value = 
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        console.log(arr)
        var a, b, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        if(!p.test(val)){
            s = 0
        }else{
            s = 1
        }
        console.log(s)
        for (var i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if(s == 0){
                if (arr[i][s].substr(0, val.length).toUpperCase().replace(/\s/g, '') == val.toUpperCase().replace(/\s/g, '')) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    console.log(arr[i])
                    b.innerHTML = "<strong>" + arr[i][s].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i][s].substr(val.length);
                    b.innerHTML += ", "+arr[i][1];
                    b.innerHTML += "<input type='hidden' value='" + arr[i]+"'>"
                    b.addEventListener("click", function (e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    })
                    a.appendChild(b);
                }
            }else if(s == 1){
                    
                    if(parseInt(arr[i][s].substr(0, val.length)) == val){
                        console.log(arr[i])
                        b = document.createElement("DIV");
                        b.innerHTML = arr[i][0]+", ";
                        b.innerHTML += "<strong>" + arr[i][s].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i][s].substr(val.length);
                        b.innerHTML += "<input type='hidden' value='" + arr[i]+"'>"
                        b.addEventListener("click", function (e) {
                            b.innerHTML += "<input type='hidden' value='" + arr[i]+"'>"
                            inp.value = this.getElementsByTagName("input")[0].value;
                            closeAllLists();
                    })
                    a.appendChild(b);
                }
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
// var inp = document.getElementById(id)
autocomplete(document.getElementById("mySuburb"), autolist);
// autocomplete("myPostcode", postcodes);


//    function myScript(){
//   var elem = document.getElementById("myPostcodeautocomplete-list");
//   elem.style.left="182px";
//   elem.style.right="74px";
//    }