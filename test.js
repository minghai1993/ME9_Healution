<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>  
	#detailss{
		border:1px solid black 
	}
	.big{
		width: 1200px;
		height: 800px;
	}
	.left{
		width: 70%;
		height: 100%;
		display: inline-block;
	}
	.right{
		width: 29%;
		height: 100%;
		display: inline-block;
		float: right 
	}
	.first{
		height: 10% 
	}
	.second{
		height: 65% 
	}
	.forth{
		border:1px solid #ccc;
        height: 65%;
        overflow:auto;
        border-bottom: 5px solid #ccc
	}
	.fifth{
		height: 49%;
		overflow: auto 
    }
    #cmd{
        /* width: 40px; */
        height: 40px;
        float: right;
    }
    #cmd:hover{
        border: 1px solid #bfc4ce;
        border-radius: 8px;
    }
	#map {
		height: 100%;
		/* The height is 400 pixels */
		width: 100%;
		/* The width is the width of the web page */
	}
	#form1{
		width: 50%;
		margin: auto;
		text-align: left;
	}
	.form-area{
		display: block 
	}
	.form-1{
		width: 500px;
		background-color: #f1f1f1;
		border-radius: 15px;
	}
	.next-button{
		width: 120px;
		height: 40px;
		border: 1px solid lightblue;
		border-radius: 5px;
        display: inline-block;
        float: right
    }
	.next-button:hover{
		background-color: lightblue ;
		
	}
	.back-button{
			width: 120px;
			height: 40px;
			border: 1px solid lightblue;
			border-radius: 5px;
            display: inline-block;
            float: left;
		}
	.q11{
		border: 1px solid black;
		background-color: gray;
		width: 3%;
	}
	#next{
		height: 100%;
		width: 100%;
	}
	#back{
		height: 100%;
		width: 100% 
	}
	#submit{
		display: block;
		margin: auto;
    }
    .form-1{
		width: 500px;
		background-color: #f5fafd;
		border-radius: 15px;
	}
	#mySuburb{
        width: 60%;
	    height: 40px;
	}
	#myPostcode{
	    height: 40px;
	}
	p{
		margin: 0px;
	}
	.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: inline-block;
	}
	.autocomplete-items {
		position: absolute;
		border: 1px solid #d4d4d4;
		border-bottom: none;
		border-top: none;
		z-index: 99;
		/*position the autocomplete items to be the same width as the container:*/
		top: 100%;
		left: 0;
		right: 256px;
	}
	.autocomplete-items div {
		padding: 10px;
		cursor: pointer;
		background-color: #fff;
		border-bottom: 1px solid #d4d4d4;
	}
	.autocomplete-items div:hover {
		/*when hovering an item:*/
		background-color: #e9e9e9;
	}
	.autocomplete-active {
		/*when navigating through the items using the arrow keys:*/
		background-color: DodgerBlue !important;
		color: #ffffff;
	}

</style>

<form id="form1">
<div class="form-1" id="1">
	<div class="form-area">
		<h3><p>What type of activities do you prefer?</p></h3>
		<input type="radio"  name="q1" style="width:12px;height:30px;border: 1px solid black" class='q11' id="q11" value="1">Indoor<br>
		<input type="radio"  name="q1" style="width:12px;height:30px;border: 1px solid black" class='q11' id="q12" value="2">Outdoor<br>
		<input type="radio" name="q1" style="width:12px;height:30px;border: 1px solid black" class='q11' id="q13" value="3">Both<br>
	</div>
	<div id="11">
		<br><h3><p>What theme of activities do you prefer?</p></h3>
		<input type="checkbox" name="q21" id="test123" value="1" checked>Sport<br>
		<input type="checkbox" name="q22" value="2" checked>History<br>
		<input type="checkbox" name="q23" value="3" checked>Nature<br>
	</div>
	<div class="next-button">
	<button id="next" class = 'next-1' onclick="handleClickNext();return false">Next</button>
	</div>
</div>

<div class="form-1" id="2">
	<div class="form-area">
	<h3><p>What type of transport do you prefer?</p></h3>
	<input type="checkbox" name="q3" class='q3' value="public" style="height:30px">Public
	<input type="checkbox" name="q3" class='q3' value="private">Private
	<br>
	</div>
	<div class = 'back-button'>
	<button id="back"  onclick="handleClickBack();return false">Back</button>
	</div>
	<div class="next-button">
	<button id="next" class="next-2" onclick="handleClickNext();return false">Next</button>
	</div>
</div>

<div class="form-1" id="3">
	<div id="31" class="autocomplete">
	<h3><p>Please enter your preferred suburb name or postcode</p></h3>
	<input id="mySuburb" type="text" name="q51" placeholder="suburb name/postcode" class="q33">
	</div>
	<div class = 'back-button'>
	<button id="back" class = 'back-button' onclick="handleClickBack();return false">Back</button>
	
	
	</div>
	<div class="submit">
	    <input id="submit" type="button" class="next-button" value="Submit" onclick="handleSubmit()">
	</div>
	
</div>
	
</form>
<div class="big the">
		<div class="left the">
				<div class="second the"><div id='map'></div></div>
				<div class="fifth"><div id='checkelist'></div></div>
		</div>
		<div class="right">
			<div class="forth"><div id="searchOutput">
				</div></div>
			<div class="third"><div id="detail"></div></div>
		</div>
</div>

<div id="editor"></div>
<script type="application/javascript" src="https://github.com/minghai1993/ME9_Healution/blob/master/checklist_it3.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>
<script
src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU&callback=initCheckListMap"></script>
<script>
autocomplete(document.getElementById("mySuburb"), suburbs);
autocomplete(document.getElementById("myPostcode"), postcodes);
</script>

<script type="text/javascript">
 function myScript(){
var elem = document.getElementById("myPostcodeautocomplete-list");
elem.style.left="182px";
elem.style.right="74px";

 }
</script>