<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
@media screen and (max-width: 800px) {
        .table-present-1{
            width:100% !important;}
        .table-present-2{
            width: 100% !important;
            position: initial !important
        }
    }
    #wrapper {
		border: 1px solid #888;
		display: inline-block;
		padding: 20px;
	}
	/* #carouselExampleIndicators{
		height: 300px;
	} */
	.carousel-item {
		text-align: center
	}
	.block{
		display:inline-block;
	}
	#header {
		text-align: center;
	}
	.img{
		display:inline-block
	}
	/*#outputTable{
		display: flex;
		justify-content: center
		display: grid;
		grid-template-columns: auto auto auto
		text-align: center 
	}*/
	#alert {
		color: red
	}
	.button {
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
	}
	/*.output {
		width: 33%;
		display: inline-block;
		vertical-align: top
	}*/
	#row {
		border: 1px solid black;

	}
	#form {
		display: inline
	}
	#suburb {
		width: 262px;
		height: 20px;
		display: inline-block
	}
	#label-type {
		height: 20px
	}
	.label-type-2 {
		width: 20%;
		height: 25px display： inline-block；
	}
	.table-present-1 {
		width: 60%;
		display: inline-block;
	}
	.table-present-2{
		width: 30%;
		display: inline-block;
		position: absolute;
		top: 3%;
		left: 65%
	}
	#button {
		width: 90px;
		display: inline;
	}
	/* #outputTableArt {
		border: 1px solid black;
		width: 33.33%
	} */
	/* Set the size of the div element that contains the map */
	#map {
		height: 400px;
		/* The height is 400 pixels */
		width: 100%;
		/* The width is the width of the web page */
	}
	#main-area{
		position: relative;
	}
	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	#locationField, #controls {
        position: relative;
        width: 480px;
    }
	#locationField {
        height: 20px;
        margin-bottom: 2px;
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
		top: 16%;
		left: 53px;
		right: 83px;
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
<h3 id='test'>Search by themes</h3>
<div id='main-area'>
    <div class="table-present-1">
        <div id="map"></div>
    </div>
    <div class="table-present-2">
        <fieldset id="legend">
            <legend>Filter</legend>
            Suburb: <input type='text' name='suburb' id='suburb' placeholder="Enter your preferred suburb name">
			<br/>
			<br/>
			<br/>
            <legend>Theme</legend>
            <div>   Art:          
                <input type='image' src='https://www.alwayscherie.ml/wp-content/uploads/2019/04/art-e1554804124459.png' id='icon_art' class='img' onclick="handleSubmit('art');return false">
                <label onclick="handleSubmit('art')">
                      <input type="checkbox" id='checkArt' data-toggle="toggle" checked>
                    </label></div>
            <br></br>
            <div>Fountain:      
                <input type='image' src='https://www.alwayscherie.ml/wp-content/uploads/2019/04/new_fountain-e1554968248774.png' id='icon_fountain' class='img' onclick="handleSubmit('drinkingFountain');return false">
                <label onclick="handleSubmit('drinkingFountain')">
                        <input type="checkbox" id='checkFt' data-toggle="toggle" checked>
                      </label>
                <br></br>
            </div>
            <div>Monument:
                <input type='image' src='https://www.alwayscherie.ml/wp-content/uploads/2019/04/monument_new-e1556386212609.jpeg' id='icon_monument' class='img' onclick="handleSubmit('monument');return false">
                <label onclick="handleSubmit('monument')">
                        <input type="checkbox" id='checkMon' data-toggle="toggle" checked>
                </label>
                <br></br>
            </div>
            <input id='button' class='button' type="button" value="Show" onclick="handleSubmit()">
        </fieldset>
        <p id="alert">Note: The number within the cluster indicates the density of activities in that suburb</p>
    </div>
</div>
<div id='outputTable' class="container">
</div>
<script type="text/javascript" src="http://healution.tk/wp-content/uploads/2019/04/suburb.js"></script>
<script type="text/javascript" src="http://healution.tk/wp-content/uploads/2019/04/drinkingfountain.js"></script>
<script type="text/javascript" src="http://healution.tk/wp-content/uploads/2019/04/art.js"></script>
<script type="text/javascript" src="http://healution.tk/wp-content/uploads/2019/04/monument.js"></script>
<script>
    var suburbLists = ["Melbourne", "East Melbourne", "West Melbourne", "Melbourne", "South Wharf", "Southbank", "Docklands", "Footscray", "Seddon", "Brooklyn", "Kingsville", "Maidstone", "Tottenham", "West Footscray", "Yarraville", "Newport", "South Kingsville", "Spotswood", "Williamstown", "Williamstown North", "Altona", "Seaholme", "Braybrook", "Albion", "Sunshine", "Sunshine North", "Sunshine West", "Albanvale", "Kealba", "Kings Park", "St Albans", "Ardeer", "Burnside", "Burnside Heights", "Cairnlea", "Caroline Springs", "Deer Park", "Ravenhall", "Fieldstone", "Mambourin", "Manor Lakes", "Mount Cottrell", "Wyndham Vale", "Altona North", "Derrimut", "Laverton North", "Williams Landing", "Altona Meadows", "Laverton", "Seabrook", "Hoppers Crossing", "Tarneit", "Truganina", "Point Cook", "Quandong", "Werribee", "Werribee South", "Flemington", "Kensington", "Ascot Vale", "Maribyrnong", "Travancore", "Keilor East", "Avondale Heights", "Keilor", "Keilor North", "Delahey", "Hillside", "Sydenham", "Taylors Hill", "Keilor Downs", "Keilor Lodge", "Taylors Lakes", "Moonee Ponds", "Aberfeldie", "Essendon", "Essendon West", "Essendon Fields", "Essendon North", "Strathmore", "Strathmore Heights", "Airport West", "Keilor Park", "Niddrie", "Gladstone Park", "Gowanbrae", "Tullamarine", "Pascoe Vale", "Pascoe Vale South", "Melbourne Airport", "Glenroy", "Hadfield", "Oak Park", "Broadmeadows", "Dallas", "Jacana", "Coolaroo", "Meadow Heights", "Attwood", "Westmeadows", "North Melbourne", "Parkville", "Carlton", "Carlton North", "Princes Hill", "Brunswick West", "Brunswick", "Brunswick East", "Coburg", "Coburg North", "Greenvale", "Fawkner", "Campbellfield", "Somerton", "Oaklands Junction", "Yuroke", "Craigieburn", "Donnybrook", "Kalkallo", "Mickleham", "Roxburgh Park", "Fitzroy", "Collingwood", "Abbotsford", "Clifton Hill", "Fitzroy North", "Northcote", "Thornbury", "Preston", "Reservoir", "Thomastown", "Lalor", "Epping", "Alphington", "Fairfield", "Ivanhoe", "Ivanhoe East", "Bellfield", "Heidelberg Heights", "Heidelberg West", "Mill Park", "Bundoora", "Kingsbury", "Eaglemont", "Heidelberg", "Rosanna", "Viewbank", "Macleod", "Yallambie", "Watsonia", "Watsonia North", "Briar Hill", "Greensborough", "St Helena", "Diamond Creek", "Plenty", "Yarrambat", "Lower Plenty", "Montmorency", "Eltham", "Eltham North", "Research", "Wattle Glen", "Bend Of Islands", "Kangaroo Ground", "Watsons Creek", "Arthurs Creek", "Cottles Bridge", "Hurstbridge", "Nutfield", "Strathewen", "Kew", "Kew East", "Balwyn", "Deepdene", "Balwyn North", "Bulleen", "Templestowe", "Templestowe Lower", "Doncaster", "Doncaster East", "Donvale", "North Warrandyte", "Warrandyte", "Park Orchards", "Wonga Park", "Chirnside Park", "Burnley", "Cremorne", "Richmond", "Hawthorn", "Hawthorn East", "Camberwell", "Burwood", "Canterbury", "Mont Albert", "Surrey Hills", "Box Hill", "Box Hill South", "Box Hill North", "Mont Albert North", "Blackburn", "Blackburn North", "Blackburn South", "Forest Hill", "Nunawading", "Mitcham", "Vermont", "Vermont South", "Ringwood", "Ringwood North", "Warrandyte South", "Warranwood", "Heathmont", "Ringwood East", "Croydon", "Croydon Hills", "Croydon North", "Croydon South", "Kilsyth", "Kilsyth South", "Mooroolbark", "Beenak", "Don Valley", "Hoddles Creek", "Launching Place", "Seville", "Seville East", "Wandin East", "Wandin North", "Woori Yallock", "Yellingbo", "Lilydale", "South Yarra", "Toorak", "Armadale", "Kooyong", "Malvern", "Caulfield East", "Malvern East", "Glen Iris", "Ashburton", "Ashwood", "Chadstone", "Mount Waverley", "Glen Waverley", "Wheelers Hill", "Burwood East", "Wantirna", "Wantirna South", "Bayswater", "Bayswater North", "The Basin", "Boronia", "Ferntree Gully", "Lysterfield", "Lysterfield South", "Upper Ferntree Gully", "Upwey", "Menzies Creek", "Selby", "Belgrave", "Belgrave Heights", "Belgrave South", "Tecoma", "Caulfield North", "Caulfield", "Caulfield South", "Carnegie", "Glen Huntly", "Murrumbeena", "Bentleigh East", "Hughesdale", "Huntingdale", "Oakleigh", "Oakleigh East", "Oakleigh South", "Clayton", "Notting Hill", "Clarinda", "Clayton South", "Mulgrave", "Springvale", "Dingley Village", "Springvale South", "Keysborough", "Noble Park", "Noble Park North", "Bangholme", "Dandenong", "Dandenong North", "Dandenong South", "Doveton", "Eumemmerring", "Rowville", "Scoresby", "Knoxfield", "Prahran", "Windsor", "St Kilda", "St Kilda West", "Balaclava", "St Kilda East", "Elwood", "Elsternwick", "Gardenvale", "Ripponlea", "Brighton", "Brighton East", "Hampton", "Hampton East", "Moorabbin", "Highett", "Sandringham", "Cheltenham", "Beaumaris", "Black Rock", "Mentone", "Moorabbin Airport", "Aspendale", "Aspendale Gardens", "Braeside", "Mordialloc", "Parkdale", "Waterways", "Bonbeach", "Chelsea", "Chelsea Heights", "Edithvale", "Carrum", "Patterson Lakes", "Seaford", "Frankston", "Frankston South", "Frankston North", "Carrum Downs", "Heatherton", "Bentleigh", "McKinnon", "Ormond", "South Melbourne", "Albert Park", "Middle Park", "Port Melbourne", "Little River", "Avalon", "Lara", "Anakie", "Batesford", "Lovely Banks", "Moorabool", "Corio", "Norlane", "North Shore", "Bell Park", "Bell Post Hill", "Drumcondra", "Hamlyn Heights", "North Geelong", "Rippleside", "Belmont", "Grovedale", "Highton", "Marshall", "Wandana Heights", "Waurn Ponds", "Armstrong Creek", "Charlemont", "Freshwater Creek", "Mount Duneed", "Fyansford", "Geelong West", "Herne Hill", "Manifold Heights", "Murgheboluc", "Stonehaven", "Breakwater", "East Geelong", "Newcomb", "St Albans Park", "Thomson", "Whittington", "Geelong", "Newtown", "South Geelong", "Barrabool", "Ceres", "Gnarwarre", "Clifton Springs", "Curlewis", "Drysdale", "Mannerim", "Marcus Hill", "Wallington", "Bellarine", "Indented Head", "Portarlington", "St Leonards", "Leopold", "Moolap", "Point Lonsdale", "Queenscliff", "Swan Bay", "Ocean Grove", "Barwon Heads", "Breamlea", "Connewarre", "Bellbrae", "Bells Beach", "Jan Juc", "Torquay", "Anglesea", "Aireys Inlet", "Big Hill", "Eastern View", "Fairhaven", "Moggs Creek", "Lorne", "Apollo Bay", "Cape Otway", "Marengo", "Petticoat Creek", "Skenes Creek", "Skenes Creek North", "Grey River", "Kennett River", "Separation Creek", "Sugarloaf", "Wongarra", "Wye River", "Benwerrin", "Boonah", "Deans Marsh", "Pennyroyal", "Forrest", "Beech Forest", "Ferguson", "Gellibrand Lower", "Wattle Hill", "Weeaproinah", "Wyelangta", "Yuulong", "Glenaire", "Hordern Vale", "Johanna", "Lavers Hill", "Carlisle River", "Chapple Vale", "Gellibrand", "Kennedys Creek", "Buckley", "Gherang", "Modewarre", "Moriac", "Mount Moriac", "Paraparap", "Bambra", "Ombersley", "Wensleydale", "Winchelsea", "Winchelsea South", "Wurdiboluc", "Birregurra", "Barwon Downs", "Murroon", "Warncoort", "Whoorel", "Alvie", "Balintore", "Barongarook", "Barongarook West", "Barramunga", "Coragulac", "Corunnun", "Dreeite", "Dreeite South", "Gerangamete", "Irrewarra", "Irrewillipe", "Irrewillipe East", "Kawarren", "Larpent", "Nalangil", "Ondit", "Pirron Yallock", "Pomborneit East", "Swan Marsh", "Tanybryn", "Warrion", "Wool Wool", "Yeo", "Yeodene", "Colac", "Colac East", "Colac West", "Elliminyt", "Beeac", "Cundare", "Cundare North", "Eurack", "Weering", "Cororooke", "Bookaar", "Bostocks Creek", "Bungador", "Camperdown", "Carpendeit", "Chocolyn", "Gnotuk", "Kariah", "Koallah", "Leslie Manor", "Pomborneit", "Pomborneit North", "Skibo", "South Purrumbete", "Stonyford", "Tandarook", "Tesbury", "Weerite", "Terang", "Boorcan", "Cudgee", "Dixie", "Ecklin South", "Ellerslie", "Framlingham", "Framlingham East", "Garvoc", "Glenormiston North", "Glenormiston South", "Kolora", "Laang", "Noorat", "Noorat East", "Panmure", "Taroon", "The Sisters", "Bullaharre", "Cobden", "Cobrico", "Elingamite", "Elingamite North", "Glenfyne", "Jancourt", "Jancourt East", "Naroghid", "Simpson", "Scotts Creek", "Ayrford", "Brucknell", "Cooriemungle", "Cowleys Creek", "Curdies River", "Curdievale", "Heytesbury Lower", "Newfield", "Nirranda", "Nirranda East", "Nirranda South", "Nullawarre", "Nullawarre North", "Paaratte", "The Cove", "Timboon", "Timboon West", "Port Campbell", "Princetown", "Waarre", "Peterborough", "Darlington", "Dundonnell", "Pura Pura", "Mortlake", "Woorndoo", "Hexham", "Caramut", "Mailors Flat", "Minjah", "Woolsthorpe", "Allansford", "Mepunga", "Mepunga East", "Mepunga West", "Naringal", "Naringal East", "Purnim", "Purnim West", "Ballangeich", "Wangoom", "Dennington", "Warrnambool", "Bushfield", "Grassmere", "Winslow", "Woodford", "Illowa", "Koroit", "Crossley", "Killarney", "Kirkstall", "Southern Cross", "Tarrone", "Tower Hill", "Warrong", "Willatook", "Yangery", "Yarpturk", "Orford", "Port Fairy", "Codrington", "Narrawong", "Rosebrook", "St Helens", "Toolong", "Tyrendarra", "Tyrendarra East", "Yambuk", "Condah Swamp", "Knebsworth", "Macarthur", "Warrabkook", "Hawkesdale", "Minhamite", "Gazette", "Gerrigerrup", "Penshurst", "Purdeet", "Tabor", "Nelson", "Glenthompson", "Nareeb", "Narrapumelap South", "Dunkeld", "Karabeal", "Mirranatwa", "Moutajup", "Victoria Point", "Victoria Valley", "Woodhouse", "Byaduk North", "Hamilton", "Bochara", "Broadwater", "Buckley Swamp", "Byaduk", "Croxton East", "Hensley Park", "Morgiana", "Mount Napier", "Strathkellar", "Tahara", "Tarrington", "Wannon", "Warrayure", "Yatchaw", "Yulecart", "Branxholme", "Grassdale", "Breakaway Creek", "Condah", "Hotspur", "Lake Condah", "Wallacedale", "Bessiebelle", "Dartmoor", "Drik Drik", "Drumborg", "Greenwald", "Heywood", "Homerton", "Lyons", "Milltown", "Mumbannar", "Myamyn", "Winnap", "Allestree", "Bolwarra", "Cape Bridgewater", "Cashmore", "Dutton Way", "Gorae", "Gorae West", "Heathmere", "Mount Richmond", "Portland", "Portland North", "Portland West", "Digby", "Merino", "Tahara West", "Casterton", "Corndale", "Bahgallah", "Brimboal", "Carapook", "Chetwynd", "Dergholm", "Dorodong", "Dunrobin", "Henty", "Killara", "Lake Mundi", "Lindsay", "Nangeela", "Poolaijelo", "Powers Creek", "Sandford", "Strathdownie", "Wando Bridge", "Wando Vale", "Warrock", "Bulart", "Cavendish", "Glenisla", "Mooralla", "Brit Brit", "Clover Flat", "Coleraine", "Coojar", "Culla", "Gringegalgona", "Gritjurk", "Hilgay", "Konongwootong", "Melville Forest", "Muntham", "Nareen", "Paschendale", "Tahara Bridge", "Tarrayoukyan", "Tarrenlea", "Wootong Vale", "Harrow", "Charam", "Connewirricoo", "Edenhope", "Kadnook", "Langkoop", "Patyah", "Ullswater", "Apsley", "Benayeo", "Bringalbert", "Hesse", "Inverleigh", "Wingeel", "Cressy", "Berrybank", "Duverney", "Foxhow", "Lismore", "Mingay", "Mount Bute", "Derrinallum", "Larralea", "Vite Vite", "Vite Vite North", "Teesdale", "Barunah Park", "Barunah Plains", "Shelford", "Rokewood", "Bannockburn", "Gheringhap", "Maude", "Russells Bridge", "She Oaks", "Steiglitz", "Sutherlands Creek", "Lethbridge", "Bamganie", "Meredith", "Bungal", "Cargerie", "Elaine", "Morrisons", "Mount Doran", "Bonnie Brook", "Grangefields", "Plumpton", "Rockbank", "Thornhill Park", "Aintree", "Deanside", "Fraser Rise", "Harkness", "Kurunjang", "Melton", "Melton West", "Toolern Vale", "Brookfield", "Cobblebank", "Exford", "Eynesbury", "Melton South", "Strathtulloh", "Weir Views", "Bacchus Marsh", "Balliang", "Balliang East", "Coimadai", "Darley", "Glenmore", "Hopetoun Park", "Long Forest", "Maddingley", "Merrimu", "Parwan", "Rowsley", "Staughton Vale", "Dales Creek", "Greendale", "Korobeit", "Myrniong", "Pentland Hills", "Ballan", "Beremboke", "Blakeville", "Bunding", "Colbrook", "Durdidwarrah", "Fiskville", "Ingliston", "Mount Wallace", "Gordon", "Alfredton", "Bakery Hill", "Ballarat Central", "Ballarat East", "Ballarat North", "Black Hill", "Brown Hill", "Canadian", "Eureka", "Golden Point", "Invermay Park", "Lake Wendouree", "Lucas", "Mount Clear", "Mount Helen", "Mount Pleasant", "Nerrina", "Newington", "Redan", "Soldiers Hill", "Berringa", "Bo Peep", "Cape Clear", "Carngham", "Chepstowe", "Haddon", "Hillcrest", "Illabarook", "Lake Bolac", "Mininera", "Mount Emu", "Nerrin Nerrin", "Newtown", "Nintingbool", "Piggoreet", "Pitfield", "Rokewood Junction", "Ross Creek", "Scarsdale", "Smythes Creek", "Smythesdale", "Snake Valley", "Springdallah", "Staffordshire Reef", "Streatham", "Wallinduc", "Westmere", "Addington", "Blowhard", "Bolwarrah", "Bonshaw", "Brewster", "Bullarook", "Bungaree", "Bunkers Hill", "Burrumbeet", "Cambrian Hill", "Cardigan", "Cardigan Village", "Clarendon", "Claretown", "Clarkes Hill", "Corindhap", "Dereel", "Dunnstown", "Durham Lead", "Enfield", "Ercildoune", "Garibaldi", "Glen Park", "Glenbrae", "Gong Gong", "Grenville", "Invermay", "Lal Lal", "Lamplough", "Langi Kal Kal", "Learmonth", "Leigh Creek", "Lexton", "Magpie", "Millbrook", "Miners Rest", "Mitchell Park", "Mollongghip", "Mount Bolton", "Mount Egerton", "Mount Mercer", "Mount Rowan", "Napoleons", "Navigators", "Pootilla", "Scotchmans Lead", "Scotsburn", "Springbank", "Sulky", "Wallace", "Warrenheip", "Wattle Flat", "Waubra", "Weatherboard", "Werneth", "Windermere", "Yendon", "Lake Gardens", "Mitchell Park", "Wendouree", "Delacombe", "Sebastopol", "Buninyong", "Winter Valley", "Happy Valley", "Linton", "Mannibadar", "Pittong", "Willowvale", "Bradvale", "Carranballac", "Skipton", "Creswick", "Creswick North", "Dean", "Glendaruel", "Langdons Hill", "Mount Beckworth", "Tourello", "Allendale", "Ascot", "Bald Hills", "Barkstead", "Blampied", "Broomfield", "Cabbage Tree", "Campbelltown", "Coghills Creek", "Glendonald", "Joyces Creek", "Kingston", "Kooroocheang", "Lawrence", "Mount Prospect", "Newlyn", "Newlyn North", "Rocklyn", "Smeaton", "Smokeytown", "Springmount", "Strathlea", "Werona", "Clunes", "Glengower", "Mount Cameron", "Ullina", "Amherst", "Burnbank", "Caralulup", "Dunach", "Evansford", "Lillicur", "Mount Glasgow", "Red Lion", "Stony Creek", "Talbot", "Beaufort", "Chute", "Cross Roads", "Lake Goldsmith", "Lake Wongan", "Main Lead", "Mena Park", "Nerring", "Raglan", "Stockyard Hill", "Stoneleigh", "Trawalla", "Waterloo", "Great Western", "Ballyrogan", "Bayindeen", "Buangor", "Middle Creek", "Ararat", "Armstrong", "Bulgana", "Cathcart", "Crowlands", "Denicull Creek", "Dobie", "Dunneworthy", "Eversley", "Langi Logan", "Maroona", "Mount Cole", "Mount Cole Creek", "Moyston", "Norval", "Rhymney", "Rocky Point", "Rossbridge", "Shays Flat", "Warrak", "Tatyoon", "Yalla-Y-Poora", "Bornes Hill", "Chatsworth", "Mafeking", "Stavely", "Wickliffe", "Willaura", "Willaura North", "Stawell", "Bellellen", "Black Range", "Fyans Creek", "Halls Gap", "Illawarra", "Lake Fyans", "Lake Lonsdale", "Mokepilly", "Mount Dryden", "Pomonal", "Barkly", "Concongella", "Frenchmans", "Joel Joel", "Joel South", "Landsborough", "Landsborough West", "Navarre", "Tulkara", "Wattle Creek", "Dadswells Bridge", "Deep Lead", "Glenorchy", "Ledcourt", "Lubeck", "Riachella", "Roses Gap", "Wal Wal", "Bolangum", "Callawadda", "Campbells Bridge", "Germania", "Greens Creek", "Kanya", "Marnoo", "Marnoo West", "Morrl Morrl", "Wallaloo", "Wallaloo East", "Banyena", "Rupanyup", "Kewell", "Murtoa", "Brim", "Boolite", "Minyip", "Sheep Hills", "Aubrey", "Bangerang", "Cannum", "Crymelon", "Kellalac", "Lah", "Warracknabeal", "Wilkur", "Willenabrina", "Beulah", "Kenmare", "Reedy Dam", "Rosebery", "Hopetoun", "Horsham", "Blackheath", "Brimpaen", "Bungalally", "Cherrypool", "Dooen", "Drung", "Gymbowen", "Haven", "Jung", "Kalkee", "Kanagulk", "Karnak", "Laharum", "Longerenong", "Lower Norton", "McKenzie Creek", "Mockinya", "Murra Warra", "Nurcoung", "Nurrabiel", "Pimpinio", "Quantong", "Riverside", "Rocklands", "St Helens Plains", "Telangatuk East", "Toolondo", "Vectis", "Wail", "Wallup", "Wartook", "Wonwondah", "Balmoral", "Englefield", "Gatum", "Pigeon Ponds", "Vasey", "Arapiles", "Clear Lake", "Douglas", "Duchembegarra", "Grass Flat", "Jilpanger", "Miga Lake", "Mitre", "Natimuk", "Noradjuha", "Tooan", "Wombelano", "Goroke", "Minimay", "Neuarpurr", "Ozenkadnook", "Peronne", "Antwerp", "Dimboola", "Tarranyurk", "Miram", "Broughton", "Gerang Gerung", "Glenlee", "Kiata", "Lawloit", "Little Desert", "Lorquon", "Netherby", "Nhill", "Yanac", "Kaniva", "Lillimur", "Serviceton", "Telopea Downs", "Jeparit", "Rainbow", "Yaapeet", "Diggers Rest", "Bulla", "Sunbury", "Wildwood", "Clarkefield", "Riddells Creek", "Bolinda", "Monegeetta", "Cherokee", "Kerrie", "Romsey", "Springfield", "Benloch", "Goldie", "Lancefield", "Nulla Vale", "Bullengarook", "Gisborne", "Gisborne South", "New Gisborne", "Macedon", "Mount Macedon", "Ashbourne", "Cadello", "Carlsruhe", "Cobaw", "Hesket", "Newham", "Rochford", "Woodend", "Woodend North", "Barfold", "Baynton", "Baynton East", "Edgecombe", "Glenhope", "Greenhill", "Kyneton", "Kyneton South", "Langley", "Lauriston", "Lyal", "Metcalfe East", "Mia Mia", "Pastoria", "Pastoria East", "Pipers Creek", "Redesdale", "Sidonia", "Spring Hill", "Tylden", "Tylden South", "Drummond North", "Malmsbury", "Taradale", "Elphinstone", "Metcalfe", "Sutton Grange", "Castlemaine", "Moonlight Flat", "Barkers Creek", "Campbells Creek", "Chewton", "Chewton Bushlands", "Faraday", "Fryerstown", "Glenluce", "Golden Point", "Guildford", "Irishtown", "McKenzie Hill", "Muckleford", "Tarilta", "Vaughan", "Yapeen", "Harcourt", "Harcourt North", "Ravenswood", "Ravenswood South", "Barrys Reef", "Blackwood", "Fern Hill", "Lerderderg", "Little Hampton", "Newbury", "North Blackwood", "Trentham", "Trentham East", "Basalt", "Daylesford", "Bullarto", "Bullarto South", "Clydesdale", "Coomoora", "Denver", "Drummond", "Dry Diggings", "Eganstown", "Elevated Plains", "Franklinford", "Glenlyon", "Hepburn", "Hepburn Springs", "Korweinguboora", "Leonards Hill", "Lyonville", "Mount Franklin", "Musk", "Musk Vale", "Porcupine Ridge", "Sailors Falls", "Sailors Hill", "Shepherds Flat", "Spargo Creek", "Strangways", "Wheatsheaf", "Yandoit", "Yandoit Hills", "Green Gully", "Muckleford South", "Newstead", "Sandon", "Welshmans Reef", "Baringhup", "Baringhup West", "Bradford", "Eastville", "Gower", "Laanecoorie", "Maldon", "Neereman", "Nuggetty", "Tarrengower", "Walmer", "Woodstock West", "Carisbrook", "Adelaide Lead", "Alma", "Bowenvale", "Bung Bong", "Cotswold", "Craigie", "Daisy Hill", "Flagstaff", "Golden Point", "Havelock", "Homebush", "Majorca", "Maryborough", "Moolort", "Moonlight Flat", "Natte Yallock", "Rathscar", "Rathscar West", "Simson", "Timor", "Timor West", "Wareek", "Avoca", "Amphitheatre", "Mount Lonarch", "Elmhurst", "Glenlofty", "Glenlogie", "Glenpatrick", "Nowhere Creek", "Bet Bet", "Betley", "Bromley", "Dunluce", "Dunolly", "Eddington", "Goldsborough", "Inkerman", "McIntyre", "Moliagul", "Mount Hooghly", "Archdale", "Archdale Junction", "Bealiba", "Burkes Flat", "Cochranes Creek", "Emu", "Logan", "Avon Plains", "Beazleys Bridge", "Carapooee", "Carapooee West", "Coonooer Bridge", "Coonooer West", "Dalyenong", "Gooroc", "Gowar East", "Gre Gre", "Gre Gre North", "Gre Gre South", "Kooreh", "Marnoo East", "Moolerr", "Moyreisk", "Paradise", "Redbank", "Rostron", "Slaty Creek", "St Arnaud East", "St Arnaud North", "Stuart Mill", "Sutherland", "Swanwater", "Tottington", "Traynors Lagoon", "Winjallok", "Dooboobetic", "Moonambel", "Percydale", "St Arnaud", "Tanwood", "Warrenmang", "Yawong Hills", "Areegra", "Carron", "Cope Cope", "Corack", "Corack East", "Donald", "Gil Gil", "Jeffcott", "Jeffcott North", "Laen", "Laen East", "Laen North", "Lawler", "Litchfield", "Rich Avon", "Rich Avon East", "Rich Avon West", "Swanwater West", "Massey", "Morton Plains", "Warmur", "Watchem", "Watchem West", "Ballapur", "Birchip", "Birchip West", "Curyo", "Jil Jil", "Karyrie", "Kinnabulla", "Marlbed", "Narraport", "Whirily", "Banyan", "Watchupga", "Willangie", "Woomelang", "Lascelles", "Speed", "Turriff", "Turriff East", "Tempy", "Big Desert", "Boinka", "Kulwin", "Mittyack", "Ouyen", "Torrita", "Tutye", "Patchewollock", "Carwarp", "Colignan", "Iraak", "Nangiloc", "Cardross", "Cullulleraine", "Lindsay Point", "Meringur", "Merrinee", "Neds Corner", "Red Cliffs", "Werrimull", "Irymple", "Mildura", "Hattah", "Koorlong", "Nichols Point", "Birdwoodton", "Cabarita", "Merbein", "Merbein South", "Merbein West", "Wargan", "Yelta", "Cowangie", "Walpeup", "Linga", "Underbool", "Carina", "Murrayville", "Panitya", "Marong", "Shelbourne", "Wilsons Hill", "Bridgewater", "Bridgewater North", "Bridgewater On Loddon", "Derby", "Leichardt", "Yarraberb", "Bears Lagoon", "Brenanah", "Glenalbyn", "Inglewood", "Jarklin", "Kingower", "Kurting", "Powlett Plains", "Rheola", "Salisbury West", "Serpentine", "Berrimal", "Borung", "Fentons Creek", "Fernihurst", "Fiery Flat", "Kurraca", "Kurraca West", "Mysia", "Nine Mile", "Richmond Plains", "Skinners Flat", "Wedderburn", "Wedderburn Junction", "Wehla", "Woolshed Flat", "Woosang", "Kinypanial", "Korong Vale", "Pyalong", "Glenhope East", "Tooborac", "Argyle", "Costerfield", "Derrinal", "Heathcote", "Heathcote South", "Knowsley", "Ladys Pass", "Moormbool West", "Mount Camel", "Redcastle", "Barrakee", "Buckrabanyule", "Charlton", "Chirrip", "Lake Marmal", "Nareewillock", "Terrappee", "Wooroonook", "Wychitella", "Wychitella North", "Yeungroon", "Yeungroon East", "Bunguluke", "Dumosa", "Glenloth", "Glenloth East", "Jeruk", "Ninyeunook", "Teddywaddy", "Teddywaddy West", "Thalia", "Towaninny", "Towaninny South", "Wycheproof", "Wycheproof South", "Kalpienung", "Nullawil", "Culgoa", "Sutton", "Wangie", "Warne", "Berriwillock", "Boigbeat", "Bimbourie", "Myall", "Nandaly", "Ninda", "Nyarrin", "Pier Milan", "Sea Lake", "Straten", "Tyenna", "Tyrrell", "Tyrrell Downs", "Barraport", "Barraport West", "Boort", "Canary Island", "Catumnal", "Gredgwin", "Leaghur", "Minmindie", "Yando", "Cannie", "Oakvale", "Quambatook", "Cokum", "Lalbert", "Tittybong", "Chinangin", "Gowanford", "Murnungin", "Springfield", "Ultima", "Ultima East", "Waitchie", "Bolton", "Chinkapook", "Cocamba", "Gerahmin", "Manangatang", "Turoar", "Winnambool", "Annuello", "Bannerton", "Happy Valley", "Liparoo", "Robinvale", "Tol Tol", "Wandown", "Wemen", "Bendigo", "East Bendigo", "Flora Hill", "Ironbark", "Kennington", "Long Gully", "North Bendigo", "Quarry Hill", "Spring Gully", "Strathdale", "West Bendigo", "White Hills", "Arnold", "Arnold West", "Ascot", "Axe Creek", "Axedale", "Bagshot", "Bagshot North", "Cornella", "Emu Creek", "Eppalock", "Epsom", "Huntly", "Huntly North", "Junortoun", "Kimbolton", "Llanelly", "Lockwood", "Lockwood South", "Longlea", "Maiden Gully", "Mandurang", "Mandurang South", "Murphys Creek", "Myola", "Myrtle Creek", "Newbridge", "Painswick", "Sedgwick", "Strathfieldsaye", "Tarnagulla", "Toolleen", "Waanyarra", "Wellsford", "Woodstock On Loddon", "Big Hill", "Golden Gully", "Golden Square", "Kangaroo Flat", "California Gully", "Campbells Forest", "Eaglehawk", "Eaglehawk North", "Jackass Flat", "Myers Flat", "Sailors Gully", "Sebastian", "Whipstick", "Woodvale", "Barnadown", "Fosterville", "Goornong", "Muskerry", "Burnewang", "Creek View", "Elmore", "Hunter", "Runnymede", "Avonmore", "Burramboot", "Colbinabbin", "Corop", "Gobarup", "Ballendella", "Bamawm", "Bonn", "Diggora", "Fairy Dell", "Nanneella", "Rochester", "Timmering", "Torrumbarry", "Lockington", "Bamawm Extension", "Echuca", "Echuca Village", "Echuca West", "Kanyapella", "Patho", "Roslynmead", "Wharparilla", "Kotta", "Gunbower", "Horfield", "Leitchville", "Burkes Bridge", "Cohuna", "Cullen", "Daltons Bridge", "Gannawarra", "Keely", "Macorna North", "McMillans", "Mead", "Mincha West", "Wee Wee Rup", "Auchmore", "Drummartin", "Kamarooka", "Neilborough", "Raywood", "Dingee", "Kamarooka North", "Pompapiel", "Tandarra", "Milloo", "Prairie", "Tennyson", "Calivil", "Mitiamo", "Pine Grove", "Terrick Terrick East", "Gladfield", "Loddon Vale", "Mincha", "Mologa", "Pyramid Hill", "Sylvaterre", "Terrick Terrick", "Yarrawalla", "Durham Ox", "Appin", "Appin South", "Bael Bael", "Beauchamp", "Benjeroop", "Budgerum East", "Capels Crossing", "Dingwall", "Fairley", "Gonn Crossing", "Kerang", "Kerang East", "Koroop", "Lake Meran", "Macorna", "Meering West", "Milnes Bridge", "Murrabit", "Murrabit West", "Myall", "Mystic Park", "Normanville", "Pine View", "Reedy Lake", "Sandhill Lake", "Teal Point", "Tragowel", "Wandella", "Westby", "Koondrook", "Lake Charm", "Tresco", "Lake Boga", "Tresco West", "Castle Donnington", "Chillingollah", "Fish Point", "Goschen", "Kunat", "Meatian", "Nowie", "Nyrraby", "Pira", "Polisbet", "Speewa", "Swan Hill", "Swan Hill West", "Winlaton", "Bulga", "Murrawee", "Murraydale", "Pental Island", "Tyntynder", "Tyntynder South", "Woorinen South", "Woorinen", "Woorinen North", "Beverford", "Vinifera", "Nyah", "Nyah West", "Towan", "Wood Wood", "Kenley", "Kooloonong", "Lake Powell", "Narrung", "Natya", "Piangil", "Boundary Bend", "Tabilk", "Bailieston", "Goulburn Weir", "Graytown", "Kirwans Bridge", "Mitchellstown", "Nagambie", "Wahring", "Wirrate", "Dhurringile", "Moorilim", "Murchison", "Murchison East", "Murchison North", "Moora", "Rushworth", "Wanalta", "Waranga Shores", "Whroo", "Toolamba", "Toolamba West", "Cooma", "Gillieston", "Girgarre East", "Harston", "Mooroopna North West", "Tatura", "Tatura East", "Waranga", "Byrneside", "Merrigum", "Kyabram", "Kyabram South", "Lancaster", "St Germains", "Wyuna", "Wyuna East", "Kyvalley", "Tongala", "Yambuna", "Koyuga", "Strathallan", "Carag Carag", "Stanhope", "Stanhope South", "Girgarre", "Ardmona", "Coomboona", "Mooroopna", "Mooroopna North", "Undera", "Caniambo", "Shepparton", "Arcadia", "Arcadia South", "Cosgrove", "Cosgrove South", "Grahamvale", "Karramomus", "Kialla", "Kialla East", "Kialla West", "Lemnos", "Orrvale", "Pine Lodge", "Shepparton East", "Shepparton North", "Congupna", "Bunbartha", "Katandra", "Katandra West", "Marionvale", "Marungi", "Tallygaroopna", "Zeerust", "Kaarimba", "Mundoona", "Wunghnu", "Drumanure", "Invergordon", "Naring", "Numurkah", "Waaia", "Yalca", "Kotupna", "Nathalia", "Yielima", "Barmah", "Lower Moira", "Picola", "Picola West", "Katunga", "Bearii", "Mywee", "Strathmerton", "Ulupna", "Cobram", "Cobram East", "Koonoomoo", "Muckatah", "Yarroweyah", "Dookie", "Mount Major", "Nalinga", "Waggarandall", "Yabba North", "Yabba South", "Youanmite", "Dookie College", "Katamatite", "Katamatite East", "Broadford", "Clonbinane", "Reedy Creek", "Strath Creek", "Sugarloaf Creek", "Sunday Creek", "Tyaak", "Waterford Park", "Tallarook", "Caveat", "Dropmore", "Highlands", "Hilldene", "Kerrisdale", "Northwood", "Seymour", "Trawool", "Whiteheads Creek", "Puckapunyal", "Mangalore", "Avenel", "Upton Hill", "Locksley", "Longwood", "Balmattum", "Creightons Creek", "Euroa", "Gooram", "Kelvin View", "Kithbrook", "Longwood East", "Miepoll", "Moglonemby", "Molka", "Pranjip", "Riggs Creek", "Ruffy", "Sheans Creek", "Strathbogie", "Tarcombe", "Boho", "Boho South", "Creek Junction", "Earlston", "Gowangardie", "Koonda", "Marraweeney", "Tamleugh", "Tamleugh North", "Upotipotpon", "Violet Town", "Baddaginnie", "Tarnook", "Warrenbayne", "Benalla", "Broken Creek", "Goomalibee", "Lima", "Lima East", "Lima South", "Lurg", "Molyullah", "Moorngag", "Samaria", "Swanpool", "Tatong", "Upper Lurg", "Upper Ryans Creek", "Winton", "Winton North", "Boweya", "Boweya North", "Glenrowan", "Glenrowan West", "Greta", "Greta South", "Greta West", "Hansonville", "Mount Bruno", "Taminick", "Wangaratta", "Bobinawarrah", "Boorhaman", "Boorhaman East", "Bowser", "Byawatha", "Carboor", "Cheshunt", "Docker", "Dockers Plains", "East Wangaratta", "Edi", "Edi Upper", "Everton", "Everton Upper", "Killawarra", "King Valley", "Laceby", "Londrigan", "Markwood", "Meadow Creek", "Milawa", "North Wangaratta", "Oxley", "Oxley Flats", "Peechelba", "Peechelba East", "Rose River", "Tarrawingee", "Waldara", "Wangandary", "Wangaratta South", "Whitlands", "Boralma", "Lilliput", "Norong", "Springhurst", "Chiltern", "Chiltern Valley", "Cornishtown", "Boorhaman North", "Brimin", "Browns Plains", "Carlyle", "Gooramadda", "Rutherglen", "Wahgunyah", "Barnawartha", "Indigo Valley", "West Wodonga", "Wodonga", "Allans Flat", "Bandiana", "Baranduda", "Barnawartha North", "Bellbridge", "Berringama", "Bethanga", "Bonegilla", "Bungil", "Castle Creek", "Coral Bank", "Dederang", "Ebden", "Gateway Island", "Glen Creek", "Gundowring", "Huon Creek", "Kancoona", "Kergunyah", "Kergunyah South", "Kiewa", "Killara", "Leneva", "Lucyvale", "Mongans Bridge", "Osbornes Flat", "Running Creek", "Staghorn Flat", "Talgarno", "Tangambalanga", "Thologolong", "Upper Gundowring", "Charleroi", "Huon", "Sandy Creek", "Tawonga", "Tawonga South", "Bogong", "Falls Creek", "Mount Beauty", "Bullioh", "Georges Creek", "Jarvis Creek", "Tallangatta", "Tallangatta East", "Dartmouth", "Eskdale", "Granya", "Mitta Mitta", "Old Tallangatta", "Shelley", "Tallandoon", "Tallangatta South", "Tallangatta Valley", "Koetong", "Cudgewa", "Biggara", "Colac Colac", "Corryong", "Nariel Valley", "Thowgla Valley", "Tom Groggin", "Towong", "Towong Upper", "Tintaldra", "Burrowye", "Guys Forest", "Mount Alfred", "Pine Mountain", "Walwa", "Buxton", "Rubicon", "Thornton", "Eildon", "Lake Eildon", "Taylor Bay", "Acheron", "Alexandra", "Cathkin", "Devils River", "Fawcett", "Koriella", "Maintongoon", "Taggerty", "Whanregarwen", "Ancona", "Merton", "Woodfield", "Flowerdale", "Ghin Ghin", "Glenburn", "Homewood", "Killingworth", "Limestone", "Murrindindi", "Yea", "Molesworth", "Gobur", "Kanumbra", "Terip Terip", "Yarck", "Bonnie Doon", "Barwite", "Mansfield", "Archerton", "Barjarg", "Boorolite", "Bridge Creek", "Delatite", "Gaffneys Creek", "Goughs Bay", "Howes Creek", "Howqua", "Howqua Hills", "Howqua Inlet", "Jamieson", "Kevington", "Knockwood", "Macs Cove", "Maindample", "Matlock", "Merrijig", "Mount Buller", "Mountain Bay", "Piries", "Sawmill Settlement", "Tolmie", "Woods Point", "Boxwood", "Chesney Vale", "Goorambat", "Major Plains", "Stewarton", "Bungeet", "Bungeet West", "Devenish", "Thoona", "Almonds", "Lake Rowan", "Pelluebla", "St James", "Yundool", "Boomahnoomoonah", "Tungamah", "Wilby", "Youarang", "Bathumi", "Boosey", "Bundalong", "Bundalong South", "Burramine", "Burramine South", "Esmond", "Telford", "Yarrawonga", "Yarrawonga South", "Moyhu", "Myrrhee", "Whitfield", "Bowmans Forest", "Whorouly", "Whorouly East", "Whorouly South", "Abbeyard", "Barwidgee", "Buffalo River", "Dandongadale", "Gapsted", "Havilah", "Merriang", "Merriang South", "Mudgegonga", "Myrtleford", "Nug Nug", "Rosewhite", "Ovens", "Eurobin", "Buckland", "Mount Buffalo", "Porepunkah", "Bright", "Freeburgh", "Germantown", "Harrietville", "Hotham Heights", "Smoko", "Wandiligong", "Eldorado", "Beechworth", "Murmungee", "Stanley", "Wooragee", "Bruarong", "Yackandandah", "Wollert", "Woodstock", "South Morang", "Beveridge", "Doreen", "Mernda", "Yan Yean", "Chintin", "Darraweit Guim", "Upper Plenty", "Wallan", "Eden Park", "Humevale", "Kinglake Central", "Kinglake West", "Pheasant Creek", "Whittlesea", "Heathcote Junction", "Wandong", "Panton Hill", "Smiths Gully", "St Andrews", "Bylands", "Kinglake", "Forbes", "Glenaroua", "High Camp", "Kilmore", "Kilmore East", "Moranding", "Tantaraboo", "Willowmavin", "Montrose", "Kalorama", "Mount Dandenong", "Coldstream", "Gruyere", "Yering", "Christmas Hills", "Dixons Creek", "Steels Creek", "Tarrawarra", "Yarra Glen", "Badger Creek", "Castella", "Chum Creek", "Healesville", "Mount Toolebewong", "Toolangi", "Narbethong", "Marysville", "Cockatoo", "Mount Burnett", "Nangana", "Avonsleigh", "Clematis", "Emerald", "Macclesfield", "Gembrook", "Tremont", "Ferny Creek", "Sassafras", "Olinda", "Sherbrooke", "Kallista", "The Patch", "Monbulk", "Silvan", "Mount Evelyn", "Gilderoy", "Gladysdale", "Powelltown", "Three Bridges", "Yarra Junction", "Big Pats Creek", "East Warburton", "McMahons Creek", "Millgrove", "Reefton", "Warburton", "Wesburn", "Endeavour Hills", "Hallam", "Narre Warren East", "Narre Warren North", "Narre Warren", "Narre Warren South", "Berwick", "Harkaway", "Beaconsfield", "Guys Hill", "Beaconsfield Upper", "Dewhurst", "Officer", "Officer South", "Pakenham", "Pakenham South", "Pakenham Upper", "Rythdale", "Maryknoll", "Nar Nar Goon", "Nar Nar Goon North", "Tynong", "Tynong North", "Cora Lynn", "Garfield", "Garfield North", "Vervale", "Bunyip", "Bunyip North", "Iona", "Tonimbuk", "Labertouche", "Longwarry", "Longwarry North", "Modella", "Athlone", "Drouin", "Drouin East", "Drouin South", "Drouin West", "Hallora", "Jindivick", "Ripplebrook", "Bona Vista", "Lillico", "Warragul", "Brandy Creek", "Bravington", "Buln Buln", "Buln Buln East", "Crossover", "Ellinbank", "Ferndale", "Lardner", "Nilma", "Nilma North", "Rokeby", "Seaview", "Shady Creek", "Tetoora Road", "Torwood", "Warragul South", "Warragul West", "Cloverlea", "Darnum", "Gainsborough", "Allambee", "Yarragon", "Yarragon South", "Childers", "Narracan", "Thorpdale South", "Trafalgar", "Trafalgar East", "Trafalgar South", "Aberfeldy", "Amor", "Caringal", "Coalville", "Erica", "Fumina", "Fumina South", "Hernes Oak", "Hill End", "Jacob Creek", "Moe", "Moe South", "Moondarra", "Newborough", "Rawson", "Tanjil South", "Thalloo", "Walhalla", "Westbury", "Willow Grove", "Yallourn", "Yallourn North", "Neerim", "Neerim East", "Neerim South", "Nayook", "Neerim Junction", "Neerim North", "Baw Baw Village", "Icy Creek", "Noojee", "Piedmont", "Tanjil Bren", "Vesper", "Thorpdale", "Driffield", "Hazelwood", "Hazelwood North", "Hazelwood South", "Jeeralang", "Jeeralang Junction", "Maryvale", "Morwell", "Churchill", "Blackwarry", "Callignee", "Callignee North", "Callignee South", "Carrajung", "Carrajung Lower", "Carrajung South", "Flynn", "Flynns Creek", "Koornalla", "Traralgon", "Traralgon East", "Traralgon South", "Tyers", "Hiamdale", "Nambrok", "Rosedale", "Willung", "Willung South", "Sale", "Wurruk", "Airly", "Bundalaguah", "Clydebank", "Cobains", "Darriman", "Dutson", "Flamingo Beach", "Fulham", "Giffard", "Giffard West", "Glomar Beach", "Golden Beach", "Kilmany", "Loch Sport", "Longford", "Montgomery", "Myrtlebank", "Paradise Beach", "Pearsondale", "Seacombe", "Seaspray", "Stradbroke", "The Heart", "The Honeysuckles", "East Sale", "Glengarry", "Glengarry North", "Glengarry West", "Toongabbie", "Cowwarr", "Dawson", "Denison", "Glenfalloch", "Glenmaggie", "Heyfield", "Licola", "Licola North", "Seaton", "Winnindoo", "Maffra West Upper", "Newry", "Tinamba", "Tinamba West", "Boisdale", "Briagolong", "Bushy Park", "Coongulla", "Maffra", "Riverslea", "Valencia Creek", "Woolenook", "Cobbannah", "Crooked River", "Dargo", "Hawkhurst", "Hollands Landing", "Llowalong", "Meerlieu", "Moornapa", "Munro", "Perry Bridge", "Stockdale", "Stratford", "Fernbank", "Glenaladale", "Lindenow", "Jumbuk", "Yinnar", "Yinnar South", "Boolarra", "Boolarra South", "Budgeree", "Grand Ridge", "Allambee Reserve", "Allambee South", "Baromi", "Darlimurla", "Delburn", "Dollar", "Mirboo", "Mirboo North", "Gormandale", "McLoughlins Beach", "Woodside", "Woodside Beach", "Woodside North", "Bairnsdale", "Banksia Peninsula", "Bengworden", "Broadlands", "Bullumwaal", "Calulu", "Clifton Creek", "East Bairnsdale", "Eastwood", "Ellaswood", "Flaggy Creek", "Forge Creek", "Goon Nure", "Granite Rock", "Hillside", "Iguana Creek", "Lindenow South", "Lucknow", "Melwood", "Mount Taylor", "Newlands Arm", "Sarsfield", "Walpa", "Waterholes", "Woodglen", "Wuk Wuk", "Wy Yung", "Eagle Point", "Boole Poole", "Ocean Grange", "Paynesville", "Raymond Island", "Nicholson", "Bruthen", "Buchan", "Buchan South", "Butchers Ridge", "Gelantipy", "Mossiface", "Murrindal", "Suggan Buggan", "Tambo Upper", "W Tree", "Wiseleigh", "Wulgulmerang", "Wulgulmerang East", "Newmerella", "Lake Tyers", "Nowa Nowa", "Wairewa", "Bendoc", "Bete Bolong", "Bete Bolong North", "Bonang", "Brodribb River", "Cape Conran", "Corringle", "Deddick Valley", "Delegate River", "Goongerah", "Jarrahmond", "Marlo", "Nurran", "Orbost", "Simpsons Creek", "Tostaree", "Tubbut", "Waygara", "Wombat Creek", "Bellbird Creek", "Bemm River", "Cabbage Tree Creek", "Club Terrace", "Combienbar", "Manorina", "Buldah", "Cann River", "Chandlers Creek", "Noorinbee", "Noorinbee North", "Tamboon", "Tonghi Creek", "Genoa", "Gipsy Point", "Maramingo Creek", "Wallagaraugh", "Wangarabell", "Wingan River", "Wroxham", "Mallacoota", "Double Bridges", "Tambo Crossing", "Doctors Flat", "Ensay", "Ensay North", "Reedy Flat", "Bindi", "Brookville", "Swifts Creek", "Tongio", "Anglers Rest", "Bingo Munjie", "Cassilis", "Cobungra", "Dinner Plain", "Glen Valley", "Hinnomunjie", "Omeo", "Omeo Valley", "Shannonvale", "Benambra", "Bumberrah", "Johnsonville", "Swan Reach", "Metung", "Kalimna", "Kalimna West", "Lake Bunga", "Lake Tyers Beach", "Lakes Entrance", "Nungurner", "Nyerimilang", "Toorloo Arm", "Langwarrin", "Baxter", "Langwarrin South", "Pearcedale", "Somerville", "Tyabb", "Hastings", "Tuerong", "Merricks", "Point Leo", "Shoreham", "Bittern", "Crib Point", "Hmas Cerberus", "Elizabeth Island", "French Island", "Cowes", "Silverleaves", "Smiths Beach", "Sunderland Bay", "Sunset Strip", "Surf Beach", "Ventnor", "Wimbledon Heights", "Rhyll", "Cape Woolamai", "Churchill Island", "Newhaven", "San Remo", "Balnarring", "Balnarring Beach", "Merricks Beach", "Merricks North", "Somers", "Main Ridge", "Flinders", "Mount Eliza", "Mornington", "Moorooduc", "Mount Martha", "Arthurs Seat", "Dromana", "Safety Beach", "Red Hill", "Red Hill South", "McCrae", "Boneo", "Cape Schanck", "Fingal", "Rosebud", "Capel Sound", "Rye", "St Andrews Beach", "Tootgarook", "Blairgowrie", "Sorrento", "Portsea", "Jeetho", "Krowera", "Loch", "Woodleigh", "Bena", "Kardella South", "Korumburra", "Korumburra South", "Strzelecki", "Whitelaw", "Arawata", "Fairbank", "Jumbunna", "Kardella", "Kongwak", "Moyarra", "Outtrim", "Ranceby", "Berrys Creek", "Boorool", "Hallston", "Koorooman", "Leongatha", "Leongatha North", "Leongatha South", "Mardan", "Mount Eccles", "Mount Eccles South", "Nerrena", "Ruby", "Trida", "Wild Dog Valley", "Wooreen", "Koonwarra", "Dumbalk", "Dumbalk North", "Meeniyan", "Middle Tarwin", "Tarwin", "Tarwin Lower", "Venus Bay", "Walkerville", "Walkerville North", "Walkerville South", "Stony Creek", "Buffalo", "Fish Creek", "Sandy Point", "Waratah Bay", "Bennison", "Boolarong", "Foster", "Foster North", "Gunyah", "Mount Best", "Tidal River", "Turtons Creek", "Wilsons Promontory", "Wonga", "Woorarra West", "Yanakie", "Agnes", "Toora", "Toora North", "Wonyip", "Woorarra East", "Port Franklin", "Port Welshpool", "Binginwarri", "Hazel Park", "Welshpool", "Hedley", "Alberton", "Alberton West", "Balook", "Calrossie", "Devon North", "Gelliondale", "Hiawatha", "Hunterston", "Jack River", "Langsborough", "Macks Creek", "Madalya", "Manns Beach", "Port Albert", "Robertsons Beach", "Staceys Bridge", "Tarra Valley", "Tarraville", "Won Wron", "Yarram", "Lynbrook", "Lyndhurst", "Hampton Park", "Botanic Ridge", "Cannons Creek", "Cranbourne", "Cranbourne East", "Cranbourne North", "Cranbourne South", "Cranbourne West", "Devon Meadows", "Junction Village", "Sandhurst", "Skye", "Cardinia", "Clyde", "Clyde North", "Almurta", "Glen Alvie", "Kernot", "Blind Bight", "Tooradin", "Warneet", "Bayles", "Catani", "Dalmore", "Heath Hill", "Koo Wee Rup", "Koo Wee Rup North", "Yannathan", "Adams Estate", "Caldermeade", "Corinella", "Coronet Bay", "Grantville", "Jam Jerrup", "Lang Lang", "Lang Lang East", "Monomeith", "Pioneer Bay", "Queensferry", "Tenby Point", "The Gurdies", "Nyora", "Mountain View", "Poowong", "Poowong East", "Poowong North", "Glen Forbes", "Bass", "Dalyston", "Ryanston", "West Creek", "Anderson", "Archies Creek", "Cape Paterson", "Harmers Haven", "Kilcunda", "Lance Creek", "North Wonthaggi", "South Dudley", "St Clair", "Wattle Bank", "Wonthaggi", "Woolamai", "Inverloch", "Pound Creek"];
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
            icon = 'https://www.alwayscherie.ml/wp-content/uploads/2019/04/newest_art-e1555563415757.png';
        }
        else if (m.Type_Id == 2) {
            icon = 'https://www.alwayscherie.ml/wp-content/uploads/2019/04/fountain_marker-e1555563362173.png'
        }
        else if (m.Type_Id == 3) {
            icon = 'https://www.alwayscherie.ml/wp-content/uploads/2019/04/monument_marker-e1555563396630.png'
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
            icon = 'https://www.alwayscherie.ml/wp-content/uploads/2019/04/newest_art-e1555563415757.png';
        }
        else if (m[0].Type_Id == 2) {
            icon = 'https://www.alwayscherie.ml/wp-content/uploads/2019/04/fountain_marker-e1555563362173.png'
        }
        else if (m[0].Type_Id == 3) {
            icon = 'https://www.alwayscherie.ml/wp-content/uploads/2019/04/monument_marker-e1555563396630.png'
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
                    minimumClusterSize: 5
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
    
    }
    
    
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
    function autocomplete(inp) {
       
        var arr = suburbLists
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        var value = 
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
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
            for (var i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase().replace(/\s/g, '') == val.toUpperCase().replace(/\s/g, '')) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        console.log(arr[i])
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        b.innerHTML += "<input type='hidden' value='" + arr[i]+"'>"
                        b.addEventListener("click", function (e) {
                            inp.value = this.getElementsByTagName("input")[0].value;
                            closeAllLists();
                        })
                        a.appendChild(b);
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
                if (elmnt != x[i]) {
                    x[i].parentNode.removeChild(x[i]);
                }
                if (elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
                
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }
    autocomplete(document.getElementById('suburb'))
</script>
<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyFJft-jNj7_wcp56wVfEvdem46_p8-XE&language=en&region=AU&callback=initMap"></script>