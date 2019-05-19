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
<script>
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
var inp
var suburbs = ["Melbourne","East Melbourne","West Melbourne","Melbourne","South Wharf","Southbank","Docklands","Footscray","Seddon","Brooklyn","Kingsville","Maidstone","Tottenham","West Footscray","Yarraville","Newport","South Kingsville","Spotswood","Williamstown","Williamstown North","Altona","Seaholme","Braybrook","Albion","Sunshine","Sunshine North","Sunshine West","Albanvale","Kealba","Kings Park","St Albans","Ardeer","Burnside","Burnside Heights","Cairnlea","Caroline Springs","Deer Park","Ravenhall","Fieldstone","Mambourin","Manor Lakes","Mount Cottrell","Wyndham Vale","Altona North","Derrimut","Laverton North","Williams Landing","Altona Meadows","Laverton","Seabrook","Hoppers Crossing","Tarneit","Truganina","Point Cook","Quandong","Werribee","Werribee South","Flemington","Kensington","Ascot Vale","Maribyrnong","Travancore","Keilor East","Avondale Heights","Keilor","Keilor North","Delahey","Hillside","Sydenham","Taylors Hill","Keilor Downs","Keilor Lodge","Taylors Lakes","Moonee Ponds","Aberfeldie","Essendon","Essendon West","Essendon Fields","Essendon North","Strathmore","Strathmore Heights","Airport West","Keilor Park","Niddrie","Gladstone Park","Gowanbrae","Tullamarine","Pascoe Vale","Pascoe Vale South","Melbourne Airport","Glenroy","Hadfield","Oak Park","Broadmeadows","Dallas","Jacana","Coolaroo","Meadow Heights","Attwood","Westmeadows","North Melbourne","Parkville","Carlton","Carlton North","Princes Hill","Brunswick West","Brunswick","Brunswick East","Coburg","Coburg North","Greenvale","Fawkner","Campbellfield","Somerton","Oaklands Junction","Yuroke","Craigieburn","Donnybrook","Kalkallo","Mickleham","Roxburgh Park","Fitzroy","Collingwood","Abbotsford","Clifton Hill","Fitzroy North","Northcote","Thornbury","Preston","Reservoir","Thomastown","Lalor","Epping","Alphington","Fairfield","Ivanhoe","Ivanhoe East","Bellfield","Heidelberg Heights","Heidelberg West","Mill Park","Bundoora","Kingsbury","Eaglemont","Heidelberg","Rosanna","Viewbank","Macleod","Yallambie","Watsonia","Watsonia North","Briar Hill","Greensborough","St Helena","Diamond Creek","Plenty","Yarrambat","Lower Plenty","Montmorency","Eltham","Eltham North","Research","Wattle Glen","Bend Of Islands","Kangaroo Ground","Watsons Creek","Arthurs Creek","Cottles Bridge","Hurstbridge","Nutfield","Strathewen","Kew","Kew East","Balwyn","Deepdene","Balwyn North","Bulleen","Templestowe","Templestowe Lower","Doncaster","Doncaster East","Donvale","North Warrandyte","Warrandyte","Park Orchards","Wonga Park","Chirnside Park","Burnley","Cremorne","Richmond","Hawthorn","Hawthorn East","Camberwell","Burwood","Canterbury","Mont Albert","Surrey Hills","Box Hill","Box Hill South","Box Hill North","Mont Albert North","Blackburn","Blackburn North","Blackburn South","Forest Hill","Nunawading","Mitcham","Vermont","Vermont South","Ringwood","Ringwood North","Warrandyte South","Warranwood","Heathmont","Ringwood East","Croydon","Croydon Hills","Croydon North","Croydon South","Kilsyth","Kilsyth South","Mooroolbark","Beenak","Don Valley","Hoddles Creek","Launching Place","Seville","Seville East","Wandin East","Wandin North","Woori Yallock","Yellingbo","Lilydale","South Yarra","Toorak","Armadale","Kooyong","Malvern","Caulfield East","Malvern East","Glen Iris","Ashburton","Ashwood","Chadstone","Mount Waverley","Glen Waverley","Wheelers Hill","Burwood East","Wantirna","Wantirna South","Bayswater","Bayswater North","The Basin","Boronia","Ferntree Gully","Lysterfield","Lysterfield South","Upper Ferntree Gully","Upwey","Menzies Creek","Selby","Belgrave","Belgrave Heights","Belgrave South","Tecoma","Caulfield North","Caulfield","Caulfield South","Carnegie","Glen Huntly","Murrumbeena","Bentleigh East","Hughesdale","Huntingdale","Oakleigh","Oakleigh East","Oakleigh South","Clayton","Notting Hill","Clarinda","Clayton South","Mulgrave","Springvale","Dingley Village","Springvale South","Keysborough","Noble Park","Noble Park North","Bangholme","Dandenong","Dandenong North","Dandenong South","Doveton","Eumemmerring","Rowville","Scoresby","Knoxfield","Prahran","Windsor","St Kilda","St Kilda West","Balaclava","St Kilda East","Elwood","Elsternwick","Gardenvale","Ripponlea","Brighton","Brighton East","Hampton","Hampton East","Moorabbin","Highett","Sandringham","Cheltenham","Beaumaris","Black Rock","Mentone","Moorabbin Airport","Aspendale","Aspendale Gardens","Braeside","Mordialloc","Parkdale","Waterways","Bonbeach","Chelsea","Chelsea Heights","Edithvale","Carrum","Patterson Lakes","Seaford","Frankston","Frankston South","Frankston North","Carrum Downs","Heatherton","Bentleigh","McKinnon","Ormond","South Melbourne","Albert Park","Middle Park","Port Melbourne","Little River","Avalon","Lara","Anakie","Batesford","Lovely Banks","Moorabool","Corio","Norlane","North Shore","Bell Park","Bell Post Hill","Drumcondra","Hamlyn Heights","North Geelong","Rippleside","Belmont","Grovedale","Highton","Marshall","Wandana Heights","Waurn Ponds","Armstrong Creek","Charlemont","Freshwater Creek","Mount Duneed","Fyansford","Geelong West","Herne Hill","Manifold Heights","Murgheboluc","Stonehaven","Breakwater","East Geelong","Newcomb","St Albans Park","Thomson","Whittington","Geelong","Newtown","South Geelong","Barrabool","Ceres","Gnarwarre","Clifton Springs","Curlewis","Drysdale","Mannerim","Marcus Hill","Wallington","Bellarine","Indented Head","Portarlington","St Leonards","Leopold","Moolap","Point Lonsdale","Queenscliff","Swan Bay","Ocean Grove","Barwon Heads","Breamlea","Connewarre","Bellbrae","Bells Beach","Jan Juc","Torquay","Anglesea","Aireys Inlet","Big Hill","Eastern View","Fairhaven","Moggs Creek","Lorne","Apollo Bay","Cape Otway","Marengo","Petticoat Creek","Skenes Creek","Skenes Creek North","Grey River","Kennett River","Separation Creek","Sugarloaf","Wongarra","Wye River","Benwerrin","Boonah","Deans Marsh","Pennyroyal","Forrest","Beech Forest","Ferguson","Gellibrand Lower","Wattle Hill","Weeaproinah","Wyelangta","Yuulong","Glenaire","Hordern Vale","Johanna","Lavers Hill","Carlisle River","Chapple Vale","Gellibrand","Kennedys Creek","Buckley","Gherang","Modewarre","Moriac","Mount Moriac","Paraparap","Bambra","Ombersley","Wensleydale","Winchelsea","Winchelsea South","Wurdiboluc","Birregurra","Barwon Downs","Murroon","Warncoort","Whoorel","Alvie","Balintore","Barongarook","Barongarook West","Barramunga","Coragulac","Corunnun","Dreeite","Dreeite South","Gerangamete","Irrewarra","Irrewillipe","Irrewillipe East","Kawarren","Larpent","Nalangil","Ondit","Pirron Yallock","Pomborneit East","Swan Marsh","Tanybryn","Warrion","Wool Wool","Yeo","Yeodene","Colac","Colac East","Colac West","Elliminyt","Beeac","Cundare","Cundare North","Eurack","Weering","Cororooke","Bookaar","Bostocks Creek","Bungador","Camperdown","Carpendeit","Chocolyn","Gnotuk","Kariah","Koallah","Leslie Manor","Pomborneit","Pomborneit North","Skibo","South Purrumbete","Stonyford","Tandarook","Tesbury","Weerite","Terang","Boorcan","Cudgee","Dixie","Ecklin South","Ellerslie","Framlingham","Framlingham East","Garvoc","Glenormiston North","Glenormiston South","Kolora","Laang","Noorat","Noorat East","Panmure","Taroon","The Sisters","Bullaharre","Cobden","Cobrico","Elingamite","Elingamite North","Glenfyne","Jancourt","Jancourt East","Naroghid","Simpson","Scotts Creek","Ayrford","Brucknell","Cooriemungle","Cowleys Creek","Curdies River","Curdievale","Heytesbury Lower","Newfield","Nirranda","Nirranda East","Nirranda South","Nullawarre","Nullawarre North","Paaratte","The Cove","Timboon","Timboon West","Port Campbell","Princetown","Waarre","Peterborough","Darlington","Dundonnell","Pura Pura","Mortlake","Woorndoo","Hexham","Caramut","Mailors Flat","Minjah","Woolsthorpe","Allansford","Mepunga","Mepunga East","Mepunga West","Naringal","Naringal East","Purnim","Purnim West","Ballangeich","Wangoom","Dennington","Warrnambool","Bushfield","Grassmere","Winslow","Woodford","Illowa","Koroit","Crossley","Killarney","Kirkstall","Southern Cross","Tarrone","Tower Hill","Warrong","Willatook","Yangery","Yarpturk","Orford","Port Fairy","Codrington","Narrawong","Rosebrook","St Helens","Toolong","Tyrendarra","Tyrendarra East","Yambuk","Condah Swamp","Knebsworth","Macarthur","Warrabkook","Hawkesdale","Minhamite","Gazette","Gerrigerrup","Penshurst","Purdeet","Tabor","Nelson","Glenthompson","Nareeb","Narrapumelap South","Dunkeld","Karabeal","Mirranatwa","Moutajup","Victoria Point","Victoria Valley","Woodhouse","Byaduk North","Hamilton","Bochara","Broadwater","Buckley Swamp","Byaduk","Croxton East","Hensley Park","Morgiana","Mount Napier","Strathkellar","Tahara","Tarrington","Wannon","Warrayure","Yatchaw","Yulecart","Branxholme","Grassdale","Breakaway Creek","Condah","Hotspur","Lake Condah","Wallacedale","Bessiebelle","Dartmoor","Drik Drik","Drumborg","Greenwald","Heywood","Homerton","Lyons","Milltown","Mumbannar","Myamyn","Winnap","Allestree","Bolwarra","Cape Bridgewater","Cashmore","Dutton Way","Gorae","Gorae West","Heathmere","Mount Richmond","Portland","Portland North","Portland West","Digby","Merino","Tahara West","Casterton","Corndale","Bahgallah","Brimboal","Carapook","Chetwynd","Dergholm","Dorodong","Dunrobin","Henty","Killara","Lake Mundi","Lindsay","Nangeela","Poolaijelo","Powers Creek","Sandford","Strathdownie","Wando Bridge","Wando Vale","Warrock","Bulart","Cavendish","Glenisla","Mooralla","Brit Brit","Clover Flat","Coleraine","Coojar","Culla","Gringegalgona","Gritjurk","Hilgay","Konongwootong","Melville Forest","Muntham","Nareen","Paschendale","Tahara Bridge","Tarrayoukyan","Tarrenlea","Wootong Vale","Harrow","Charam","Connewirricoo","Edenhope","Kadnook","Langkoop","Patyah","Ullswater","Apsley","Benayeo","Bringalbert","Hesse","Inverleigh","Wingeel","Cressy","Berrybank","Duverney","Foxhow","Lismore","Mingay","Mount Bute","Derrinallum","Larralea","Vite Vite","Vite Vite North","Teesdale","Barunah Park","Barunah Plains","Shelford","Rokewood","Bannockburn","Gheringhap","Maude","Russells Bridge","She Oaks","Steiglitz","Sutherlands Creek","Lethbridge","Bamganie","Meredith","Bungal","Cargerie","Elaine","Morrisons","Mount Doran","Bonnie Brook","Grangefields","Plumpton","Rockbank","Thornhill Park","Aintree","Deanside","Fraser Rise","Harkness","Kurunjang","Melton","Melton West","Toolern Vale","Brookfield","Cobblebank","Exford","Eynesbury","Melton South","Strathtulloh","Weir Views","Bacchus Marsh","Balliang","Balliang East","Coimadai","Darley","Glenmore","Hopetoun Park","Long Forest","Maddingley","Merrimu","Parwan","Rowsley","Staughton Vale","Dales Creek","Greendale","Korobeit","Myrniong","Pentland Hills","Ballan","Beremboke","Blakeville","Bunding","Colbrook","Durdidwarrah","Fiskville","Ingliston","Mount Wallace","Gordon","Alfredton","Bakery Hill","Ballarat Central","Ballarat East","Ballarat North","Black Hill","Brown Hill","Canadian","Eureka","Golden Point","Invermay Park","Lake Wendouree","Lucas","Mount Clear","Mount Helen","Mount Pleasant","Nerrina","Newington","Redan","Soldiers Hill","Berringa","Bo Peep","Cape Clear","Carngham","Chepstowe","Haddon","Hillcrest","Illabarook","Lake Bolac","Mininera","Mount Emu","Nerrin Nerrin","Newtown","Nintingbool","Piggoreet","Pitfield","Rokewood Junction","Ross Creek","Scarsdale","Smythes Creek","Smythesdale","Snake Valley","Springdallah","Staffordshire Reef","Streatham","Wallinduc","Westmere","Addington","Blowhard","Bolwarrah","Bonshaw","Brewster","Bullarook","Bungaree","Bunkers Hill","Burrumbeet","Cambrian Hill","Cardigan","Cardigan Village","Clarendon","Claretown","Clarkes Hill","Corindhap","Dereel","Dunnstown","Durham Lead","Enfield","Ercildoune","Garibaldi","Glen Park","Glenbrae","Gong Gong","Grenville","Invermay","Lal Lal","Lamplough","Langi Kal Kal","Learmonth","Leigh Creek","Lexton","Magpie","Millbrook","Miners Rest","Mitchell Park","Mollongghip","Mount Bolton","Mount Egerton","Mount Mercer","Mount Rowan","Napoleons","Navigators","Pootilla","Scotchmans Lead","Scotsburn","Springbank","Sulky","Wallace","Warrenheip","Wattle Flat","Waubra","Weatherboard","Werneth","Windermere","Yendon","Lake Gardens","Mitchell Park","Wendouree","Delacombe","Sebastopol","Buninyong","Winter Valley","Happy Valley","Linton","Mannibadar","Pittong","Willowvale","Bradvale","Carranballac","Skipton","Creswick","Creswick North","Dean","Glendaruel","Langdons Hill","Mount Beckworth","Tourello","Allendale","Ascot","Bald Hills","Barkstead","Blampied","Broomfield","Cabbage Tree","Campbelltown","Coghills Creek","Glendonald","Joyces Creek","Kingston","Kooroocheang","Lawrence","Mount Prospect","Newlyn","Newlyn North","Rocklyn","Smeaton","Smokeytown","Springmount","Strathlea","Werona","Clunes","Glengower","Mount Cameron","Ullina","Amherst","Burnbank","Caralulup","Dunach","Evansford","Lillicur","Mount Glasgow","Red Lion","Stony Creek","Talbot","Beaufort","Chute","Cross Roads","Lake Goldsmith","Lake Wongan","Main Lead","Mena Park","Nerring","Raglan","Stockyard Hill","Stoneleigh","Trawalla","Waterloo","Great Western","Ballyrogan","Bayindeen","Buangor","Middle Creek","Ararat","Armstrong","Bulgana","Cathcart","Crowlands","Denicull Creek","Dobie","Dunneworthy","Eversley","Langi Logan","Maroona","Mount Cole","Mount Cole Creek","Moyston","Norval","Rhymney","Rocky Point","Rossbridge","Shays Flat","Warrak","Tatyoon","Yalla-Y-Poora","Bornes Hill","Chatsworth","Mafeking","Stavely","Wickliffe","Willaura","Willaura North","Stawell","Bellellen","Black Range","Fyans Creek","Halls Gap","Illawarra","Lake Fyans","Lake Lonsdale","Mokepilly","Mount Dryden","Pomonal","Barkly","Concongella","Frenchmans","Joel Joel","Joel South","Landsborough","Landsborough West","Navarre","Tulkara","Wattle Creek","Dadswells Bridge","Deep Lead","Glenorchy","Ledcourt","Lubeck","Riachella","Roses Gap","Wal Wal","Bolangum","Callawadda","Campbells Bridge","Germania","Greens Creek","Kanya","Marnoo","Marnoo West","Morrl Morrl","Wallaloo","Wallaloo East","Banyena","Rupanyup","Kewell","Murtoa","Brim","Boolite","Minyip","Sheep Hills","Aubrey","Bangerang","Cannum","Crymelon","Kellalac","Lah","Warracknabeal","Wilkur","Willenabrina","Beulah","Kenmare","Reedy Dam","Rosebery","Hopetoun","Horsham","Blackheath","Brimpaen","Bungalally","Cherrypool","Dooen","Drung","Gymbowen","Haven","Jung","Kalkee","Kanagulk","Karnak","Laharum","Longerenong","Lower Norton","McKenzie Creek","Mockinya","Murra Warra","Nurcoung","Nurrabiel","Pimpinio","Quantong","Riverside","Rocklands","St Helens Plains","Telangatuk East","Toolondo","Vectis","Wail","Wallup","Wartook","Wonwondah","Balmoral","Englefield","Gatum","Pigeon Ponds","Vasey","Arapiles","Clear Lake","Douglas","Duchembegarra","Grass Flat","Jilpanger","Miga Lake","Mitre","Natimuk","Noradjuha","Tooan","Wombelano","Goroke","Minimay","Neuarpurr","Ozenkadnook","Peronne","Antwerp","Dimboola","Tarranyurk","Miram","Broughton","Gerang Gerung","Glenlee","Kiata","Lawloit","Little Desert","Lorquon","Netherby","Nhill","Yanac","Kaniva","Lillimur","Serviceton","Telopea Downs","Jeparit","Rainbow","Yaapeet","Diggers Rest","Bulla","Sunbury","Wildwood","Clarkefield","Riddells Creek","Bolinda","Monegeetta","Cherokee","Kerrie","Romsey","Springfield","Benloch","Goldie","Lancefield","Nulla Vale","Bullengarook","Gisborne","Gisborne South","New Gisborne","Macedon","Mount Macedon","Ashbourne","Cadello","Carlsruhe","Cobaw","Hesket","Newham","Rochford","Woodend","Woodend North","Barfold","Baynton","Baynton East","Edgecombe","Glenhope","Greenhill","Kyneton","Kyneton South","Langley","Lauriston","Lyal","Metcalfe East","Mia Mia","Pastoria","Pastoria East","Pipers Creek","Redesdale","Sidonia","Spring Hill","Tylden","Tylden South","Drummond North","Malmsbury","Taradale","Elphinstone","Metcalfe","Sutton Grange","Castlemaine","Moonlight Flat","Barkers Creek","Campbells Creek","Chewton","Chewton Bushlands","Faraday","Fryerstown","Glenluce","Golden Point","Guildford","Irishtown","McKenzie Hill","Muckleford","Tarilta","Vaughan","Yapeen","Harcourt","Harcourt North","Ravenswood","Ravenswood South","Barrys Reef","Blackwood","Fern Hill","Lerderderg","Little Hampton","Newbury","North Blackwood","Trentham","Trentham East","Basalt","Daylesford","Bullarto","Bullarto South","Clydesdale","Coomoora","Denver","Drummond","Dry Diggings","Eganstown","Elevated Plains","Franklinford","Glenlyon","Hepburn","Hepburn Springs","Korweinguboora","Leonards Hill","Lyonville","Mount Franklin","Musk","Musk Vale","Porcupine Ridge","Sailors Falls","Sailors Hill","Shepherds Flat","Spargo Creek","Strangways","Wheatsheaf","Yandoit","Yandoit Hills","Green Gully","Muckleford South","Newstead","Sandon","Welshmans Reef","Baringhup","Baringhup West","Bradford","Eastville","Gower","Laanecoorie","Maldon","Neereman","Nuggetty","Tarrengower","Walmer","Woodstock West","Carisbrook","Adelaide Lead","Alma","Bowenvale","Bung Bong","Cotswold","Craigie","Daisy Hill","Flagstaff","Golden Point","Havelock","Homebush","Majorca","Maryborough","Moolort","Moonlight Flat","Natte Yallock","Rathscar","Rathscar West","Simson","Timor","Timor West","Wareek","Avoca","Amphitheatre","Mount Lonarch","Elmhurst","Glenlofty","Glenlogie","Glenpatrick","Nowhere Creek","Bet Bet","Betley","Bromley","Dunluce","Dunolly","Eddington","Goldsborough","Inkerman","McIntyre","Moliagul","Mount Hooghly","Archdale","Archdale Junction","Bealiba","Burkes Flat","Cochranes Creek","Emu","Logan","Avon Plains","Beazleys Bridge","Carapooee","Carapooee West","Coonooer Bridge","Coonooer West","Dalyenong","Gooroc","Gowar East","Gre Gre","Gre Gre North","Gre Gre South","Kooreh","Marnoo East","Moolerr","Moyreisk","Paradise","Redbank","Rostron","Slaty Creek","St Arnaud East","St Arnaud North","Stuart Mill","Sutherland","Swanwater","Tottington","Traynors Lagoon","Winjallok","Dooboobetic","Moonambel","Percydale","St Arnaud","Tanwood","Warrenmang","Yawong Hills","Areegra","Carron","Cope Cope","Corack","Corack East","Donald","Gil Gil","Jeffcott","Jeffcott North","Laen","Laen East","Laen North","Lawler","Litchfield","Rich Avon","Rich Avon East","Rich Avon West","Swanwater West","Massey","Morton Plains","Warmur","Watchem","Watchem West","Ballapur","Birchip","Birchip West","Curyo","Jil Jil","Karyrie","Kinnabulla","Marlbed","Narraport","Whirily","Banyan","Watchupga","Willangie","Woomelang","Lascelles","Speed","Turriff","Turriff East","Tempy","Big Desert","Boinka","Kulwin","Mittyack","Ouyen","Torrita","Tutye","Patchewollock","Carwarp","Colignan","Iraak","Nangiloc","Cardross","Cullulleraine","Lindsay Point","Meringur","Merrinee","Neds Corner","Red Cliffs","Werrimull","Irymple","Mildura","Hattah","Koorlong","Nichols Point","Birdwoodton","Cabarita","Merbein","Merbein South","Merbein West","Wargan","Yelta","Cowangie","Walpeup","Linga","Underbool","Carina","Murrayville","Panitya","Marong","Shelbourne","Wilsons Hill","Bridgewater","Bridgewater North","Bridgewater On Loddon","Derby","Leichardt","Yarraberb","Bears Lagoon","Brenanah","Glenalbyn","Inglewood","Jarklin","Kingower","Kurting","Powlett Plains","Rheola","Salisbury West","Serpentine","Berrimal","Borung","Fentons Creek","Fernihurst","Fiery Flat","Kurraca","Kurraca West","Mysia","Nine Mile","Richmond Plains","Skinners Flat","Wedderburn","Wedderburn Junction","Wehla","Woolshed Flat","Woosang","Kinypanial","Korong Vale","Pyalong","Glenhope East","Tooborac","Argyle","Costerfield","Derrinal","Heathcote","Heathcote South","Knowsley","Ladys Pass","Moormbool West","Mount Camel","Redcastle","Barrakee","Buckrabanyule","Charlton","Chirrip","Lake Marmal","Nareewillock","Terrappee","Wooroonook","Wychitella","Wychitella North","Yeungroon","Yeungroon East","Bunguluke","Dumosa","Glenloth","Glenloth East","Jeruk","Ninyeunook","Teddywaddy","Teddywaddy West","Thalia","Towaninny","Towaninny South","Wycheproof","Wycheproof South","Kalpienung","Nullawil","Culgoa","Sutton","Wangie","Warne","Berriwillock","Boigbeat","Bimbourie","Myall","Nandaly","Ninda","Nyarrin","Pier Milan","Sea Lake","Straten","Tyenna","Tyrrell","Tyrrell Downs","Barraport","Barraport West","Boort","Canary Island","Catumnal","Gredgwin","Leaghur","Minmindie","Yando","Cannie","Oakvale","Quambatook","Cokum","Lalbert","Tittybong","Chinangin","Gowanford","Murnungin","Springfield","Ultima","Ultima East","Waitchie","Bolton","Chinkapook","Cocamba","Gerahmin","Manangatang","Turoar","Winnambool","Annuello","Bannerton","Happy Valley","Liparoo","Robinvale","Tol Tol","Wandown","Wemen","Bendigo","East Bendigo","Flora Hill","Ironbark","Kennington","Long Gully","North Bendigo","Quarry Hill","Spring Gully","Strathdale","West Bendigo","White Hills","Arnold","Arnold West","Ascot","Axe Creek","Axedale","Bagshot","Bagshot North","Cornella","Emu Creek","Eppalock","Epsom","Huntly","Huntly North","Junortoun","Kimbolton","Llanelly","Lockwood","Lockwood South","Longlea","Maiden Gully","Mandurang","Mandurang South","Murphys Creek","Myola","Myrtle Creek","Newbridge","Painswick","Sedgwick","Strathfieldsaye","Tarnagulla","Toolleen","Waanyarra","Wellsford","Woodstock On Loddon","Big Hill","Golden Gully","Golden Square","Kangaroo Flat","California Gully","Campbells Forest","Eaglehawk","Eaglehawk North","Jackass Flat","Myers Flat","Sailors Gully","Sebastian","Whipstick","Woodvale","Barnadown","Fosterville","Goornong","Muskerry","Burnewang","Creek View","Elmore","Hunter","Runnymede","Avonmore","Burramboot","Colbinabbin","Corop","Gobarup","Ballendella","Bamawm","Bonn","Diggora","Fairy Dell","Nanneella","Rochester","Timmering","Torrumbarry","Lockington","Bamawm Extension","Echuca","Echuca Village","Echuca West","Kanyapella","Patho","Roslynmead","Wharparilla","Kotta","Gunbower","Horfield","Leitchville","Burkes Bridge","Cohuna","Cullen","Daltons Bridge","Gannawarra","Keely","Macorna North","McMillans","Mead","Mincha West","Wee Wee Rup","Auchmore","Drummartin","Kamarooka","Neilborough","Raywood","Dingee","Kamarooka North","Pompapiel","Tandarra","Milloo","Prairie","Tennyson","Calivil","Mitiamo","Pine Grove","Terrick Terrick East","Gladfield","Loddon Vale","Mincha","Mologa","Pyramid Hill","Sylvaterre","Terrick Terrick","Yarrawalla","Durham Ox","Appin","Appin South","Bael Bael","Beauchamp","Benjeroop","Budgerum East","Capels Crossing","Dingwall","Fairley","Gonn Crossing","Kerang","Kerang East","Koroop","Lake Meran","Macorna","Meering West","Milnes Bridge","Murrabit","Murrabit West","Myall","Mystic Park","Normanville","Pine View","Reedy Lake","Sandhill Lake","Teal Point","Tragowel","Wandella","Westby","Koondrook","Lake Charm","Tresco","Lake Boga","Tresco West","Castle Donnington","Chillingollah","Fish Point","Goschen","Kunat","Meatian","Nowie","Nyrraby","Pira","Polisbet","Speewa","Swan Hill","Swan Hill West","Winlaton","Bulga","Murrawee","Murraydale","Pental Island","Tyntynder","Tyntynder South","Woorinen South","Woorinen","Woorinen North","Beverford","Vinifera","Nyah","Nyah West","Towan","Wood Wood","Kenley","Kooloonong","Lake Powell","Narrung","Natya","Piangil","Boundary Bend","Tabilk","Bailieston","Goulburn Weir","Graytown","Kirwans Bridge","Mitchellstown","Nagambie","Wahring","Wirrate","Dhurringile","Moorilim","Murchison","Murchison East","Murchison North","Moora","Rushworth","Wanalta","Waranga Shores","Whroo","Toolamba","Toolamba West","Cooma","Gillieston","Girgarre East","Harston","Mooroopna North West","Tatura","Tatura East","Waranga","Byrneside","Merrigum","Kyabram","Kyabram South","Lancaster","St Germains","Wyuna","Wyuna East","Kyvalley","Tongala","Yambuna","Koyuga","Strathallan","Carag Carag","Stanhope","Stanhope South","Girgarre","Ardmona","Coomboona","Mooroopna","Mooroopna North","Undera","Caniambo","Shepparton","Arcadia","Arcadia South","Cosgrove","Cosgrove South","Grahamvale","Karramomus","Kialla","Kialla East","Kialla West","Lemnos","Orrvale","Pine Lodge","Shepparton East","Shepparton North","Congupna","Bunbartha","Katandra","Katandra West","Marionvale","Marungi","Tallygaroopna","Zeerust","Kaarimba","Mundoona","Wunghnu","Drumanure","Invergordon","Naring","Numurkah","Waaia","Yalca","Kotupna","Nathalia","Yielima","Barmah","Lower Moira","Picola","Picola West","Katunga","Bearii","Mywee","Strathmerton","Ulupna","Cobram","Cobram East","Koonoomoo","Muckatah","Yarroweyah","Dookie","Mount Major","Nalinga","Waggarandall","Yabba North","Yabba South","Youanmite","Dookie College","Katamatite","Katamatite East","Broadford","Clonbinane","Reedy Creek","Strath Creek","Sugarloaf Creek","Sunday Creek","Tyaak","Waterford Park","Tallarook","Caveat","Dropmore","Highlands","Hilldene","Kerrisdale","Northwood","Seymour","Trawool","Whiteheads Creek","Puckapunyal","Mangalore","Avenel","Upton Hill","Locksley","Longwood","Balmattum","Creightons Creek","Euroa","Gooram","Kelvin View","Kithbrook","Longwood East","Miepoll","Moglonemby","Molka","Pranjip","Riggs Creek","Ruffy","Sheans Creek","Strathbogie","Tarcombe","Boho","Boho South","Creek Junction","Earlston","Gowangardie","Koonda","Marraweeney","Tamleugh","Tamleugh North","Upotipotpon","Violet Town","Baddaginnie","Tarnook","Warrenbayne","Benalla","Broken Creek","Goomalibee","Lima","Lima East","Lima South","Lurg","Molyullah","Moorngag","Samaria","Swanpool","Tatong","Upper Lurg","Upper Ryans Creek","Winton","Winton North","Boweya","Boweya North","Glenrowan","Glenrowan West","Greta","Greta South","Greta West","Hansonville","Mount Bruno","Taminick","Wangaratta","Bobinawarrah","Boorhaman","Boorhaman East","Bowser","Byawatha","Carboor","Cheshunt","Docker","Dockers Plains","East Wangaratta","Edi","Edi Upper","Everton","Everton Upper","Killawarra","King Valley","Laceby","Londrigan","Markwood","Meadow Creek","Milawa","North Wangaratta","Oxley","Oxley Flats","Peechelba","Peechelba East","Rose River","Tarrawingee","Waldara","Wangandary","Wangaratta South","Whitlands","Boralma","Lilliput","Norong","Springhurst","Chiltern","Chiltern Valley","Cornishtown","Boorhaman North","Brimin","Browns Plains","Carlyle","Gooramadda","Rutherglen","Wahgunyah","Barnawartha","Indigo Valley","West Wodonga","Wodonga","Allans Flat","Bandiana","Baranduda","Barnawartha North","Bellbridge","Berringama","Bethanga","Bonegilla","Bungil","Castle Creek","Coral Bank","Dederang","Ebden","Gateway Island","Glen Creek","Gundowring","Huon Creek","Kancoona","Kergunyah","Kergunyah South","Kiewa","Killara","Leneva","Lucyvale","Mongans Bridge","Osbornes Flat","Running Creek","Staghorn Flat","Talgarno","Tangambalanga","Thologolong","Upper Gundowring","Charleroi","Huon","Sandy Creek","Tawonga","Tawonga South","Bogong","Falls Creek","Mount Beauty","Bullioh","Georges Creek","Jarvis Creek","Tallangatta","Tallangatta East","Dartmouth","Eskdale","Granya","Mitta Mitta","Old Tallangatta","Shelley","Tallandoon","Tallangatta South","Tallangatta Valley","Koetong","Cudgewa","Biggara","Colac Colac","Corryong","Nariel Valley","Thowgla Valley","Tom Groggin","Towong","Towong Upper","Tintaldra","Burrowye","Guys Forest","Mount Alfred","Pine Mountain","Walwa","Buxton","Rubicon","Thornton","Eildon","Lake Eildon","Taylor Bay","Acheron","Alexandra","Cathkin","Devils River","Fawcett","Koriella","Maintongoon","Taggerty","Whanregarwen","Ancona","Merton","Woodfield","Flowerdale","Ghin Ghin","Glenburn","Homewood","Killingworth","Limestone","Murrindindi","Yea","Molesworth","Gobur","Kanumbra","Terip Terip","Yarck","Bonnie Doon","Barwite","Mansfield","Archerton","Barjarg","Boorolite","Bridge Creek","Delatite","Gaffneys Creek","Goughs Bay","Howes Creek","Howqua","Howqua Hills","Howqua Inlet","Jamieson","Kevington","Knockwood","Macs Cove","Maindample","Matlock","Merrijig","Mount Buller","Mountain Bay","Piries","Sawmill Settlement","Tolmie","Woods Point","Boxwood","Chesney Vale","Goorambat","Major Plains","Stewarton","Bungeet","Bungeet West","Devenish","Thoona","Almonds","Lake Rowan","Pelluebla","St James","Yundool","Boomahnoomoonah","Tungamah","Wilby","Youarang","Bathumi","Boosey","Bundalong","Bundalong South","Burramine","Burramine South","Esmond","Telford","Yarrawonga","Yarrawonga South","Moyhu","Myrrhee","Whitfield","Bowmans Forest","Whorouly","Whorouly East","Whorouly South","Abbeyard","Barwidgee","Buffalo River","Dandongadale","Gapsted","Havilah","Merriang","Merriang South","Mudgegonga","Myrtleford","Nug Nug","Rosewhite","Ovens","Eurobin","Buckland","Mount Buffalo","Porepunkah","Bright","Freeburgh","Germantown","Harrietville","Hotham Heights","Smoko","Wandiligong","Eldorado","Beechworth","Murmungee","Stanley","Wooragee","Bruarong","Yackandandah","Wollert","Woodstock","South Morang","Beveridge","Doreen","Mernda","Yan Yean","Chintin","Darraweit Guim","Upper Plenty","Wallan","Eden Park","Humevale","Kinglake Central","Kinglake West","Pheasant Creek","Whittlesea","Heathcote Junction","Wandong","Panton Hill","Smiths Gully","St Andrews","Bylands","Kinglake","Forbes","Glenaroua","High Camp","Kilmore","Kilmore East","Moranding","Tantaraboo","Willowmavin","Montrose","Kalorama","Mount Dandenong","Coldstream","Gruyere","Yering","Christmas Hills","Dixons Creek","Steels Creek","Tarrawarra","Yarra Glen","Badger Creek","Castella","Chum Creek","Healesville","Mount Toolebewong","Toolangi","Narbethong","Marysville","Cockatoo","Mount Burnett","Nangana","Avonsleigh","Clematis","Emerald","Macclesfield","Gembrook","Tremont","Ferny Creek","Sassafras","Olinda","Sherbrooke","Kallista","The Patch","Monbulk","Silvan","Mount Evelyn","Gilderoy","Gladysdale","Powelltown","Three Bridges","Yarra Junction","Big Pats Creek","East Warburton","McMahons Creek","Millgrove","Reefton","Warburton","Wesburn","Endeavour Hills","Hallam","Narre Warren East","Narre Warren North","Narre Warren","Narre Warren South","Berwick","Harkaway","Beaconsfield","Guys Hill","Beaconsfield Upper","Dewhurst","Officer","Officer South","Pakenham","Pakenham South","Pakenham Upper","Rythdale","Maryknoll","Nar Nar Goon","Nar Nar Goon North","Tynong","Tynong North","Cora Lynn","Garfield","Garfield North","Vervale","Bunyip","Bunyip North","Iona","Tonimbuk","Labertouche","Longwarry","Longwarry North","Modella","Athlone","Drouin","Drouin East","Drouin South","Drouin West","Hallora","Jindivick","Ripplebrook","Bona Vista","Lillico","Warragul","Brandy Creek","Bravington","Buln Buln","Buln Buln East","Crossover","Ellinbank","Ferndale","Lardner","Nilma","Nilma North","Rokeby","Seaview","Shady Creek","Tetoora Road","Torwood","Warragul South","Warragul West","Cloverlea","Darnum","Gainsborough","Allambee","Yarragon","Yarragon South","Childers","Narracan","Thorpdale South","Trafalgar","Trafalgar East","Trafalgar South","Aberfeldy","Amor","Caringal","Coalville","Erica","Fumina","Fumina South","Hernes Oak","Hill End","Jacob Creek","Moe","Moe South","Moondarra","Newborough","Rawson","Tanjil South","Thalloo","Walhalla","Westbury","Willow Grove","Yallourn","Yallourn North","Neerim","Neerim East","Neerim South","Nayook","Neerim Junction","Neerim North","Baw Baw Village","Icy Creek","Noojee","Piedmont","Tanjil Bren","Vesper","Thorpdale","Driffield","Hazelwood","Hazelwood North","Hazelwood South","Jeeralang","Jeeralang Junction","Maryvale","Morwell","Churchill","Blackwarry","Callignee","Callignee North","Callignee South","Carrajung","Carrajung Lower","Carrajung South","Flynn","Flynns Creek","Koornalla","Traralgon","Traralgon East","Traralgon South","Tyers","Hiamdale","Nambrok","Rosedale","Willung","Willung South","Sale","Wurruk","Airly","Bundalaguah","Clydebank","Cobains","Darriman","Dutson","Flamingo Beach","Fulham","Giffard","Giffard West","Glomar Beach","Golden Beach","Kilmany","Loch Sport","Longford","Montgomery","Myrtlebank","Paradise Beach","Pearsondale","Seacombe","Seaspray","Stradbroke","The Heart","The Honeysuckles","East Sale","Glengarry","Glengarry North","Glengarry West","Toongabbie","Cowwarr","Dawson","Denison","Glenfalloch","Glenmaggie","Heyfield","Licola","Licola North","Seaton","Winnindoo","Maffra West Upper","Newry","Tinamba","Tinamba West","Boisdale","Briagolong","Bushy Park","Coongulla","Maffra","Riverslea","Valencia Creek","Woolenook","Cobbannah","Crooked River","Dargo","Hawkhurst","Hollands Landing","Llowalong","Meerlieu","Moornapa","Munro","Perry Bridge","Stockdale","Stratford","Fernbank","Glenaladale","Lindenow","Jumbuk","Yinnar","Yinnar South","Boolarra","Boolarra South","Budgeree","Grand Ridge","Allambee Reserve","Allambee South","Baromi","Darlimurla","Delburn","Dollar","Mirboo","Mirboo North","Gormandale","McLoughlins Beach","Woodside","Woodside Beach","Woodside North","Bairnsdale","Banksia Peninsula","Bengworden","Broadlands","Bullumwaal","Calulu","Clifton Creek","East Bairnsdale","Eastwood","Ellaswood","Flaggy Creek","Forge Creek","Goon Nure","Granite Rock","Hillside","Iguana Creek","Lindenow South","Lucknow","Melwood","Mount Taylor","Newlands Arm","Sarsfield","Walpa","Waterholes","Woodglen","Wuk Wuk","Wy Yung","Eagle Point","Boole Poole","Ocean Grange","Paynesville","Raymond Island","Nicholson","Bruthen","Buchan","Buchan South","Butchers Ridge","Gelantipy","Mossiface","Murrindal","Suggan Buggan","Tambo Upper","W Tree","Wiseleigh","Wulgulmerang","Wulgulmerang East","Newmerella","Lake Tyers","Nowa Nowa","Wairewa","Bendoc","Bete Bolong","Bete Bolong North","Bonang","Brodribb River","Cape Conran","Corringle","Deddick Valley","Delegate River","Goongerah","Jarrahmond","Marlo","Nurran","Orbost","Simpsons Creek","Tostaree","Tubbut","Waygara","Wombat Creek","Bellbird Creek","Bemm River","Cabbage Tree Creek","Club Terrace","Combienbar","Manorina","Buldah","Cann River","Chandlers Creek","Noorinbee","Noorinbee North","Tamboon","Tonghi Creek","Genoa","Gipsy Point","Maramingo Creek","Wallagaraugh","Wangarabell","Wingan River","Wroxham","Mallacoota","Double Bridges","Tambo Crossing","Doctors Flat","Ensay","Ensay North","Reedy Flat","Bindi","Brookville","Swifts Creek","Tongio","Anglers Rest","Bingo Munjie","Cassilis","Cobungra","Dinner Plain","Glen Valley","Hinnomunjie","Omeo","Omeo Valley","Shannonvale","Benambra","Bumberrah","Johnsonville","Swan Reach","Metung","Kalimna","Kalimna West","Lake Bunga","Lake Tyers Beach","Lakes Entrance","Nungurner","Nyerimilang","Toorloo Arm","Langwarrin","Baxter","Langwarrin South","Pearcedale","Somerville","Tyabb","Hastings","Tuerong","Merricks","Point Leo","Shoreham","Bittern","Crib Point","Hmas Cerberus","Elizabeth Island","French Island","Cowes","Silverleaves","Smiths Beach","Sunderland Bay","Sunset Strip","Surf Beach","Ventnor","Wimbledon Heights","Rhyll","Cape Woolamai","Churchill Island","Newhaven","San Remo","Balnarring","Balnarring Beach","Merricks Beach","Merricks North","Somers","Main Ridge","Flinders","Mount Eliza","Mornington","Moorooduc","Mount Martha","Arthurs Seat","Dromana","Safety Beach","Red Hill","Red Hill South","McCrae","Boneo","Cape Schanck","Fingal","Rosebud","Capel Sound","Rye","St Andrews Beach","Tootgarook","Blairgowrie","Sorrento","Portsea","Jeetho","Krowera","Loch","Woodleigh","Bena","Kardella South","Korumburra","Korumburra South","Strzelecki","Whitelaw","Arawata","Fairbank","Jumbunna","Kardella","Kongwak","Moyarra","Outtrim","Ranceby","Berrys Creek","Boorool","Hallston","Koorooman","Leongatha","Leongatha North","Leongatha South","Mardan","Mount Eccles","Mount Eccles South","Nerrena","Ruby","Trida","Wild Dog Valley","Wooreen","Koonwarra","Dumbalk","Dumbalk North","Meeniyan","Middle Tarwin","Tarwin","Tarwin Lower","Venus Bay","Walkerville","Walkerville North","Walkerville South","Stony Creek","Buffalo","Fish Creek","Sandy Point","Waratah Bay","Bennison","Boolarong","Foster","Foster North","Gunyah","Mount Best","Tidal River","Turtons Creek","Wilsons Promontory","Wonga","Woorarra West","Yanakie","Agnes","Toora","Toora North","Wonyip","Woorarra East","Port Franklin","Port Welshpool","Binginwarri","Hazel Park","Welshpool","Hedley","Alberton","Alberton West","Balook","Calrossie","Devon North","Gelliondale","Hiawatha","Hunterston","Jack River","Langsborough","Macks Creek","Madalya","Manns Beach","Port Albert","Robertsons Beach","Staceys Bridge","Tarra Valley","Tarraville","Won Wron","Yarram","Lynbrook","Lyndhurst","Hampton Park","Botanic Ridge","Cannons Creek","Cranbourne","Cranbourne East","Cranbourne North","Cranbourne South","Cranbourne West","Devon Meadows","Junction Village","Sandhurst","Skye","Cardinia","Clyde","Clyde North","Almurta","Glen Alvie","Kernot","Blind Bight","Tooradin","Warneet","Bayles","Catani","Dalmore","Heath Hill","Koo Wee Rup","Koo Wee Rup North","Yannathan","Adams Estate","Caldermeade","Corinella","Coronet Bay","Grantville","Jam Jerrup","Lang Lang","Lang Lang East","Monomeith","Pioneer Bay","Queensferry","Tenby Point","The Gurdies","Nyora","Mountain View","Poowong","Poowong East","Poowong North","Glen Forbes","Bass","Dalyston","Ryanston","West Creek","Anderson","Archies Creek","Cape Paterson","Harmers Haven","Kilcunda","Lance Creek","North Wonthaggi","South Dudley","St Clair","Wattle Bank","Wonthaggi","Woolamai","Inverloch","Pound Creek"];
var postcodes = ["3000","3002","3003","3004","3006","3008","3011","3012","3013","3015","3016","3018","3019","3020","3021","3022","3023","3024","3025","3026","3027","3028","3029","3030","3031","3032","3033","3034","3036","3037","3038","3039","3040","3041","3042","3043","3044","3045","3046","3047","3048","3049","3051","3052","3053","3054","3055","3056","3057","3058","3059","3060","3061","3062","3063","3064","3065","3066","3067","3068","3070","3071","3072","3073","3074","3075","3076","3078","3079","3081","3082","3083","3084","3085","3087","3088","3089","3090","3091","3093","3094","3095","3096","3097","3099","3101","3102","3103","3104","3105","3106","3107","3108","3109","3111","3113","3114","3115","3116","3121","3122","3123","3124","3125","3126","3127","3128","3129","3130","3131","3132","3133","3134","3135","3136","3137","3138","3139","3140","3141","3142","3143","3144","3145","3146","3147","3148","3149","3150","3151","3152","3153","3154","3155","3156","3158","3159","3160","3161","3162","3163","3165","3166","3167","3168","3169","3170","3171","3172","3173","3174","3175","3177","3178","3179","3180","3181","3182","3183","3184","3185","3186","3187","3188","3189","3190","3191","3192","3193","3194","3195","3196","3197","3198","3199","3200","3201","3202","3204","3205","3206","3207","3211","3212","3213","3214","3215","3216","3217","3218","3219","3220","3221","3222","3223","3224","3225","3226","3227","3228","3230","3231","3232","3233","3234","3235","3236","3237","3238","3239","3240","3241","3242","3243","3249","3250","3251","3254","3260","3264","3265","3266","3267","3268","3269","3270","3271","3272","3273","3274","3275","3276","3277","3278","3279","3280","3281","3282","3283","3284","3285","3286","3287","3289","3292","3293","3294","3300","3301","3302","3303","3304","3305","3309","3310","3311","3312","3314","3315","3317","3318","3319","3321","3322","3323","3324","3325","3328","3329","3330","3331","3332","3333","3334","3335","3336","3337","3338","3340","3341","3342","3345","3350","3351","3352","3355","3356","3357","3358","3360","3361","3363","3364","3370","3371","3373","3374","3375","3377","3378","3379","3380","3381","3384","3385","3387","3388","3390","3391","3392","3393","3395","3396","3400","3401","3407","3409","3412","3413","3414","3415","3418","3419","3420","3423","3424","3427","3428","3429","3430","3431","3432","3433","3434","3435","3437","3438","3440","3441","3442","3444","3446","3447","3448","3450","3451","3453","3458","3460","3461","3462","3463","3464","3465","3467","3468","3469","3472","3475","3477","3478","3480","3482","3483","3485","3487","3488","3489","3490","3491","3494","3496","3498","3500","3501","3505","3506","3507","3509","3512","3515","3516","3517","3518","3520","3521","3522","3523","3525","3527","3529","3530","3531","3533","3537","3540","3542","3544","3546","3549","3550","3551","3555","3556","3557","3558","3559","3561","3562","3563","3564","3565","3566","3567","3568","3570","3571","3572","3573","3575","3576","3579","3580","3581","3583","3584","3585","3586","3588","3589","3590","3591","3594","3595","3596","3597","3599","3607","3608","3610","3612","3614","3616","3617","3618","3620","3621","3622","3623","3624","3629","3630","3631","3633","3634","3635","3636","3637","3638","3639","3640","3641","3644","3646","3647","3649","3658","3659","3660","3662","3663","3664","3665","3666","3669","3670","3672","3673","3675","3677","3678","3682","3683","3685","3687","3688","3690","3691","3695","3697","3698","3699","3700","3701","3704","3705","3707","3708","3709","3711","3712","3713","3714","3715","3717","3718","3719","3720","3722","3723","3725","3726","3727","3728","3730","3732","3733","3735","3737","3738","3739","3740","3741","3744","3746","3747","3749","3750","3751","3752","3753","3754","3755","3756","3757","3758","3759","3760","3761","3762","3763","3764","3765","3766","3767","3770","3775","3777","3778","3779","3781","3782","3783","3785","3786","3787","3788","3789","3791","3792","3793","3795","3796","3797","3799","3802","3803","3804","3805","3806","3807","3808","3809","3810","3812","3813","3814","3815","3816","3818","3820","3821","3822","3823","3824","3825","3831","3832","3833","3835","3840","3842","3844","3847","3850","3851","3852","3854","3856","3857","3858","3859","3860","3862","3864","3865","3869","3870","3871","3873","3874","3875","3878","3880","3882","3885","3886","3887","3888","3889","3890","3891","3892","3893","3895","3896","3898","3900","3902","3903","3904","3909","3910","3911","3912","3913","3915","3916","3918","3919","3920","3921","3922","3923","3925","3926","3927","3928","3929","3930","3931","3933","3934","3936","3937","3938","3939","3940","3941","3942","3943","3944","3945","3946","3950","3951","3953","3954","3956","3957","3958","3959","3960","3962","3964","3965","3966","3967","3971","3975","3976","3977","3978","3979","3980","3981","3984","3987","3988","3990","3991","3992","3995","3996"];
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
function(result) {
    art = result
  }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/drinking_fountain',
function(result) {
    drinkingFountain = result
  }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/monument',
function(result) {
    monument = result
  }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/sports',
function(result) {
    sports = result
  }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/bus',
function(result) {
    bus = result
    console.log(bus)
  }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/tram',
function(result) {
    tram = result
  }
)
jQuery.get(
    'https://healution.tk/?rest_route=/petes-custom-api/v1/railway_station',
function(result) {
    railwayStation = result
  }
)
$("#11").hide();
    $(".next-1").prop('disabled', true);
    $("#q11").click(function(){
        $("#11").hide()
    })
    $("#q12").click(function(){
        $("#11").show()
    })
    $("#q13").click(function(){
        $("#11").show()
    })
    $(".q11").click(function(){
        $(".next-1").prop('disabled', false);
    })
    $(".next-2").prop('disabled', true);
    $(".q3").click(function(){
        $(".next-2").prop('disabled', false);
    })
    // $("#31").hide();
    // $("#q41").click(function(){
    //  $("#31").show()
    // })
    $("#q42").click(function(){
        $("#31").hide()
    })
    $("#submit").prop('disabled', true);
    $("#q41").click(function(){
        $("#submit").prop('disabled', true);
    })
    $("#q42").click(function(){
        $("#submit").prop('disabled', false);
    })
    $(".q33").change(function(){
        $("#submit").prop('disabled', false);
    })
    var a = 0;
    var arr = document.getElementsByClassName("form-1")
    function displayForm(num){
        for(var i = 0 ; i< arr.length; i++){
            if(i !== a){
                arr[i].style.display = 'none'
            }else{
                arr[i].style.display = 'inline-block'
            }
        }
    }

    displayForm(a)

    function handleClickNext(){
        a+=1
        console.log(a)
        displayForm(a)
    }

    function handleClickBack(){
        a-=1
        displayForm(a)
    }

$(".big").hide()
function handleSubmit(e){
    $("#form1").hide()
    $(".big").show()
    filtering($('#form1').serializeArray())
}

function filtering(submit){
    var selectSub = []
    var placeType
    var interest = []
    var suburb 
    var postcode
    console.log(suburb)
    for(var i = 0;i<submit.length;i++){
        if(submit[i].name == 'q1'){
            placeType = parseInt(submit[i].value)
        }else if(submit[i].name == 'q21'){
            interest.push(parseInt(submit[i].value))
        }else if(submit[i].name == 'q22'){
            interest.push(parseInt(submit[i].value))
        }else if(submit[i].name == 'q23'){
            interest.push(parseInt(submit[i].value))
        }else if(submit[i].name == 'q3'){
            if(submit[i].value == 'public'){
                ifPublic = true
            }
        } else if (submit[i].name == 'q51') {
            sss = submit[i].value.split(',')
            suburb = sss[0]
            postcode = sss[1]
        }
    }
    for(var i = 0; i < sports.length;i++)
    {
        if(sports[i].act_ind == 'Y'){
            inSport.push(sports[i]) 
        }else if(sports[i].act_ind == 'N'){
            outSport.push(sports[i])
        }
    } 
    console.log(placeType)
    console.log(interest)
    if(placeType == 1){
        art = []
        monument = []
        drinkingFountain = []
        outSport = []
    }else if(placeType == 2 && interest.length == 3 ){
        inSport = []
    }else if(placeType ==2 && interest.length == 2 && interest[0] == 1 && interest[1] == 2){
        drinkingFountain = []
        inSport = []
    }else if(placeType ==2 && interest.length == 2 && interest[0] == 2 && interest[1] == 3){
        inSport = []
        outSport = []
    }else if(placeType ==2 && interest.length == 2 && interest[0] == 1 && interest[1] == 3){
        inSport = []
        art = []
        monument = []
    }else if(placeType ==2 && interest.length == 1){
        if(interest[0] == 1){
            art = []
            monument = []
            drinkingFountain = []
            inSport = []
        }
        else if(interest[0] == 2){
            drinkingFountain = []
            outSport = []
            inSport = []
        }
        else if(interest[0] == 3){
            art = []
            monument = []
            outSport = []
            inSport = []
        }
    }else if(placeType == 3){
        if(interest.length == 3){

        }else if(nterest.length == 2 && interest[0] == 1 && interest[1] == 2){
            drinkingFountain = []
        }else if(interest.length == 2 && interest[0] == 2 && interest[2] == 3){
            inSport = []
            outSport = []
        }else if(interest.length == 2 && interest[0] == 1 && interest[3] == 3){
            art = []
            monument = []
        }else if(interest.length == 1){
            if(interest[0] == 1){
                art = []
                monument = []
                drinkingFountain = []
            }
            else if(interest[0] == 2){
                inSport = []
                outSport = []
                drinkingFountain = []
            }
            else if(interest[0] == 3){
                art = []
                monument = []
                inSport = []
                outSport = []
            }
        }
    }
    console.log(art)
    console.log(monument)
    console.log(drinkingFountain)
    console.log(inSport)
    console.log(outSport)
    if(suburb){
        var q = getSubId(suburb)
        selectSub.push(q)
    }else{
        selectSub = getSubId(postcode)
        
    }
    for(var j = 0; j < selectSub.length; j++){
        for(var i = 0; i < tram.length; i++){
            if(tram[i].sub_id == selectSub[j].suburb_id){
                new_tram.push(tram[i])
            }
        }
        for(var i = 0; i < bus.length; i++){
            if(bus[i].sub_id == selectSub[j].suburb_id){
                new_bus.push(bus[i])
            }
        }
        for(var i = 0; i < railwayStation.length; i++){
            if(railwayStation[i].sub_id == selectSub[j].suburb_id){
                new_railwayStation.push(railwayStation[i])
            }
        }
    }
    for(var j = 0; j < selectSub.length; j++){
        if(art.length > 0){
            for(var i = 0; i < art.length; i++){
                if(art[i].sub_id == selectSub[j].suburb_id){
                new_art.push(art[i])
            }
            }
        }
        if(monument.length > 0){
            for(var i = 0; i < monument.length; i++){
                if(monument[i].sub_id == selectSub[j].suburb_id){
                new_monument.push(monument[i])}
            }
        }
        if(drinkingFountain.length > 0){
            for(var i = 0; i < drinkingFountain.length; i++){
                if(drinkingFountain[i].sub_id == selectSub[j].suburb_id){
                new_drinkingFountain.push(drinkingFountain[i])}
            }
        }
        if(inSport.length > 0){
            for(var i = 0; i < inSport.length; i++){
                console.log(inSport[i].sub_id)
                console.log(selectSub[j].suburb_id)
                if(inSport[i].sub_id == selectSub[j].suburb_id){
                new_inSport.push(inSport[i])
            }
            }
        }
        if(outSport.length > 0){
            for(var i = 0; i < outSport.length; i++){
                if(outSport[i].sub_id == selectSub[j].suburb_id){
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
    initCheckListMap(finalResult,selectSub[0])
    printResult(finalResult)
}

function handleTableClick(i){
    console.log(i)
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


function disableElements(num){
    for(var m=0;m<num;m++){
        $("#"+(m+1)*100).hide();
    }
}
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
function handleIput(i){
    printDetails(i)
}
function generateChecklist(addd,name,q,arr){
    jQuery.get(
                    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + addd[0] + "," + addd[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
                    function (result) {
                        var check = document.createElement('div');
                        check.setAttribute("id","resultArea")
                        console.log(arr)
                        console.log(q)
                        var addr = result.results[0].formatted_address
                        var checkk = "<table id ='"+ (q + 1) * 100 +"' class='table table-striped'><tr onclick='handleIput(" + q + ")'><td>Go to " + arr[q].type_id + " called " + name + " at " +addr +"</td><td id = 'remove' onclick = handleCheckDelete(" + (q + 1) + ")>Remove<ion-icon name='close'></ion-icon></td></tr></table>"
                        // return address
                        check.innerHTML = checkk;
                        checkList.appendChild(check);
                        $("#" + (q + 1) * 100).hide()                       
                        // document.getElementById("checkelist").innerHTML += checkelist;
                    }
                )
}
function printResult(arr) {
    checkList = document.getElementById("checkelist")
    var checkelists = "<h2 style='display:none'>Always Cherie</h2><table id ='printCheck' class='table table-striped'><tr><th>Checklist</th><th><button id = 'cmd' onclick='printPdf();return false'>Download</button></th></tr></table>"
    checkList.innerHTML = checkelists;
    var Articon = 'https://healution.tk/wp-content/uploads/2019/04/art-e1554804124459.png'
    var Sporticon = 'https://healution.tk/wp-content/uploads/2019/04/Sports-e1556383453142.png'
	var Monumenticon = 'https://healution.tk/wp-content/uploads/2019/04/monument_new-e1556386212609.jpeg'
	var Fountainicon = 'https://healution.tk/wp-content/uploads/2019/04/new_fountain-e1554968248774.png'
    var icon
    if (arr.length > 0) {
        var res = "<table class='table table-striped'><tr><th>Name</th><th>Type</th><th>Marker</th></tr>";
        // var checkelist = "<table id ='printCheck' class='table table-striped'><tr><th>Checklist</th><th>Delete</th></tr>"
        for (var q = 0; q < arr.length; q++) {
            var name
            var addd = []
            console.log(q)
            if (arr[q].type_id == 'Sport') {
                icon = Sporticon
                name = arr[q].sp_name
                addd.push(arr[q].sp_lat)
                addd.push(arr[q].sp_long)
                generateChecklist(addd,name,q,arr)
                res += "<tr id=" + (q + 1) * 10 + "><td onclick='handleIput(" + q + ")'>" + name + "</td><td onclick='handleIput(" + q + ")'>" + arr[q].type_id + "</td><td onclick='handleIput(" + q + ")'><img src =" + icon + "></td></tr>"
                // jQuery.get(
                //     "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + addd[0] + "," + addd[1] + "&key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU",
                //     function (result) {
                        
                //         var addr = result.results[0].formatted_address
                //         checkelist += "<tr onclick='handleIput(" + q + ")' id=" + (q + 1) * 100 + "><td>There is a " + arr[q].type_id + " place " + name + " at " +addr +"</td><td onclick = handleCheckDelete(" + (q + 1) + ")><ion-icon name='close'></ion-icon></td></tr>"
                //         res += "<tr id=" + (q + 1) * 10 + "><td onclick='handleIput(" + q + ")'>" + name + "</td><td onclick='handleIput(" + q + ")'>" + arr[q].type_id + "</td><td onclick='handleIput(" + q + ")'><img src =" + icon + "></td></tr>"
                //         // return address
                //     }
                // )
            } else if (arr[q].type_id == 'art') {
                icon = Articon
                name = arr[q].art_name
                addd.push(arr[q].art_lat)
                addd.push(arr[q].art_long)
                generateChecklist(addd,name,q,arr)
                res += "<tr id=" + (q + 1) * 10 + "><td onclick='handleIput(" + q + ")'>" + name + "</td><td onclick='handleIput(" + q + ")'>" + arr[q].type_id + "</td><td onclick='handleIput(" + q + ")'><img src =" + icon + "></td></tr>"
            } else if (arr[q].type_id == 'drinkingFountain') {
                icon = Fountainicon
                name = arr[q].df_type
                addd.push(arr[q].df_lat)
                addd.push(arr[q].df_long)
                generateChecklist(addd,name,q,arr)
                res += "<tr id=" + (q + 1) * 10 + "><td onclick='handleIput(" + q + ")'>" + name + "</td><td onclick='handleIput(" + q + ")'>" + arr[q].type_id + "</td><td onclick='handleIput(" + q + ")'><img src =" + icon + "></td></tr>"
            } else if (arr[q].type_id == 'monument') {
                icon = Monumenticon
                name = arr[q].mmt_theme
                addd.push(arr[q].mmt_lat)
                addd.push(arr[q].mmt_long)
                generateChecklist(addd,name,q,arr)
                res += "<tr id=" + (q + 1) * 10 + "><td onclick='handleIput(" + q + ")'>" + name + "</td><td onclick='handleIput(" + q + ")'>" + arr[q].type_id + "</td><td onclick='handleIput(" + q + ")'><img src =" + icon + "></td></tr>"
            }
        }

        res += "</table>"
        // checkelist += "</table><button id = 'cmd' onclick='printPdf();return false'>Download</button>"
        // document.getElementById("checkelist").innerHTML = checkelist;
        document.getElementById("searchOutput").innerHTML = res;
        disableElements(q)
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
function linkGoogleMap(lat,long){
    window.open("https://maps.google.com/?q="+lat+","+long);
    // window.location.href = "https://maps.google.com/?q="+lat+","+long;
} 
function randomSelect(){ 
    var total = []
    var final = []
    var a = []
    var check = false
    if(new_outSport.length > 0){
        check = true
    for(var i = 0;i < new_outSport.length;i++){
        new_outSport[i].type_id = 'Sport'
    }
    }
    if(new_inSport.length > 0){
        check = true
        for(var i = 0;i < new_inSport.length;i++){
            new_inSport[i].type_id = 'Sport'
        }
        }
    if(new_art.length > 0){
        check = true
    for(var i = 0;i < new_art.length;i++){
        new_art[i].type_id = 'art'
        }
    }
    if(new_monument.length > 0){
        check = true
        for(var i = 0;i < new_monument.length;i++){
            new_monument[i].type_id = 'monument'
        }
     }
     if(new_drinkingFountain.length > 0){
        check = true
        for(var i = 0;i < new_drinkingFountain.length;i++){
            new_drinkingFountain[i].type_id = 'drinkingFountain'
        }
    }
    total = total.concat(new_art)
    total = total.concat(new_monument) 
    total = total.concat(new_drinkingFountain) 
    total = total.concat(new_inSport) 
    total = total.concat(new_outSport)

    console.log(total)
    if(total.length > 9){
    while(final.length < 9){
        var b = Math.floor(Math.random() * total.length)
        var find = false
        for(var i = 0;i < a.length;i++){
            if(a[i] == b){
                find = true
                continue
            }
        }
        if(!find){
            a.push(b)
            final.push(total[b])  
        }
    }  
    console.log(final)
    }else{
        final = total
    } 
    return final   
}
function subValidation(){
    var post_patt = new RegExp("^[0-9]+$")
    var sub_patt = new RegExp("^[a-zA-Z]+$");
    if(suburb){
        if (!sub_patt.test(suburb.replace(/\s/g, ''))) {
            ale.innerHTML = 'Invalid suburb name. Please recheck your input. e.g. Southbank'
        }
    }
    if(postcode){
        if (!post_patt.test(suburb.replace(/\s/g, ''))){
        ale.innerHTML = 'Invalid postcode. Please recheck your input. e.g. 3000'
        }
    }  
}

function getSubId(a){
    if(typeof a === 'string' || a instanceof String){
        for(var i = 0;i < suburbList.length;i++){
            if(suburbList[i].suburb_name.replace(/\s/g, '').toLowerCase() == a.replace(/\s/g, '').toLowerCase()){
                console.log(suburbList[i])
                return suburbList[i]
            }
        }
    }else{
        var subId =[]
        console.log(a)
        for(var i = 0;i < suburbList.length;i++){
            if(suburbList[i].postcode == a.toString()){
                
                subId.push(suburbList[i])
            }
        }
        console.log(subId)
        return subId
    }
}

function getGeoLocation(){
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
        setTimeout(function(){ markers[index].setAnimation(null); }, 1500);
    } else {
        markers[index].setAnimation(null);
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
        },
        '#printCheck': function (element, renderer) {
            return true;
        },
        '#remove': function (element, renderer) {
            return true;
        },
        '#cmd': function (element, renderer) {
            return true;
        },
        '#resultArea':function (element, renderer) {
            return true;
        }
    };
    // doc.text('Hello world!' + date, 10, 10)
    // doc.save("Always Cherie" + date  +".pdf")
        doc.fromHTML($('#checkelist').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save("Always Cherie" + date + ".pdf");

}
function initCheckListMap(m,suburbLoc) {
    var bounds = new google.maps.LatLngBounds();
    if(suburbLoc){
    var uluru = { lat: parseFloat(suburbLoc.sub_lat), lng: parseFloat(suburbLoc.sub_long) };}
    else{
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
                index:i
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
                index:i
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
                index:i
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
                index:i
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

    // var markerCluster = new MarkerClusterer(map, total_markers,
    //     {
    //         imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    //         minimumClusterSize: 5
    //     }
    // );
    // MarkerClusterer.Mini
    if(ifPublic){
    for(var i = 0;i < new_bus.length;i++){
        myLatLng = new google.maps.LatLng(parseFloat(new_bus[i].bs_lat), parseFloat(new_bus[i].bs_long));
        marker = new google.maps.Marker({
            position: myLatLng,
            map: checklistMap,
            icon: 'https://healution.tk/wp-content/uploads/2019/04/Bus-Marker-e1556385118473.png'
        });
    }
    for(var i = 0;i < new_tram.length;i++){
        myLatLng = new google.maps.LatLng(parseFloat(new_tram[i].tm_lat), parseFloat(new_tram[i].tm_long));
        marker = new google.maps.Marker({
            position: myLatLng,
            map: checklistMap,
            icon: 'https://healution.tk/wp-content/uploads/2019/04/Tram-Marker-e1556385190132.png'
        });
    }
    for(var i = 0;i < new_railwayStation.length;i++){
        myLatLng = new google.maps.LatLng(parseFloat(new_railwayStation[i].rs_lat), parseFloat(new_railwayStation[i].rs_long));
        marker = new google.maps.Marker({
            position: myLatLng,
            map: checklistMap,
            icon: 'https://healution.tk/wp-content/uploads/2019/04/Train-Marker-e1556385147530.png'
        });
    }}
}
function autocomplete() {
    var inp = document.getElementById("mySuburb")
    var p = /[0-9]/;
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        console.log(autolist)
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
        for (var i = 0; i < autolist.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if(s == 0){
                if (autolist[i][s].substr(0, val.length).toUpperCase().replace(/\s/g, '') == val.toUpperCase().replace(/\s/g, '')) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    console.log(autolist[i])
                    b.innerHTML = "<strong>" + autolist[i][s].substr(0, val.length) + "</strong>";
                    b.innerHTML += autolist[i][s].substr(val.length);
                    b.innerHTML += ", "+autolist[i][1];
                    b.innerHTML += "<input type='hidden' value='" + autolist[i]+"'>"
                    b.addEventListener("click", function (e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    })
                    a.appendChild(b);
                }
            }else if(s == 1){
                    
                    if(parseInt(autolist[i][s].substr(0, val.length)) == val){
                        console.log(autolist[i])
                        b = document.createElement("DIV");
                        b.innerHTML = autolist[i][0]+", ";
                        b.innerHTML += "<strong>" + autolist[i][s].substr(0, val.length) + "</strong>";
                        b.innerHTML += autolist[i][s].substr(val.length);
                        b.innerHTML += "<input type='hidden' value='" + autolist[i]+"'>"
                        b.addEventListener("click", function (e) {
                            b.innerHTML += "<input type='hidden' value='" + autolist[i]+"'>"
                            inp.value = this.getElementsByTagName("input")[0].value;
                            closeAllLists();
                    })
                    a.appendChild(b);
                }
            }
        }
    });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
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
// autocomplete(document.getElementById("mySuburb"), autolist);
</script>
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