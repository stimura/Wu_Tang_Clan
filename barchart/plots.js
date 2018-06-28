/*
	RAW DATA
	*/
var alldata = [{'album': 'The Saga Continues',
  'song': 'Wu-Tang The Saga Continues Intro (feat. RZA)',
  'words': 177},
 {'album': 'The Saga Continues',
  'song': "Lesson Learn'd (feat. Inspectah Deck and Redman)",
  'words': 491},
 {'album': 'The Saga Continues',
  'song': 'Fast and Furious (feat. Hue Hef and Raekwon)',
  'words': 639},
 {'album': 'The Saga Continues',
  'song': 'Famous Fighters (Skit)',
  'words': 161},
 {'album': 'The Saga Continues',
  'song': 'If Time Is Money (Fly Navigation) [feat. Method Man]',
  'words': 545},
 {'album': 'The Saga Continues',
  'song': 'Frozen (feat. Method Man, Killa Priest and Chris Rivers)',
  'words': 781},
 {'album': 'The Saga Continues',
  'song': 'Berto and the Fiend (Skit) [feat. Ghostface Killa]',
  'words': 153},
 {'album': 'The Saga Continues',
  'song': 'Pearl Harbor (feat. Ghostface Killah, Method Man, RZA and Sean Price)',
  'words': 797},
 {'album': 'The Saga Continues',
  'song': 'People Say (feat. Redman)',
  'words': 346},
 {'album': 'The Saga Continues', 'song': 'Family (Skit)', 'words': 524},
 {'album': 'The Saga Continues',
  'song': 'Why Why Why (feat. RZA and Swnkah)',
  'words': 649},
 {'album': 'The Saga Continues',
  'song': "G'd up (feat. Method Man, R-Mean and Mzee Jones)",
  'words': 647},
 {'album': 'The Saga Continues',
  'song': 'If What You Say Is True (feat. Streetlife)',
  'words': 589},
 {'album': 'The Saga Continues',
  'song': 'Saga (Skit) [feat. RZA',
  'words': 1727},
 {'album': 'The Saga Continues',
  'song': 'Hood Go Bang! (feat. Redman and Method Man)',
  'words': 307},
 {'album': 'The Saga Continues',
  'song': 'My Only One (feat. Ghostface Killah, RZA, Cappadonna, and Steven Latorre)',
  'words': 629},
 {'album': 'The Saga Continues', 'song': 'Message', 'words': 334},
 {'album': 'The Saga Continues',
  'song': 'The Saga Continues Outro (feat. RZA)',
  'words': 138},
 {'album': 'A Better Tomorrow', 'song': 'Ruckus In B Minor', 'words': 962},
 {'album': 'A Better Tomorrow', 'song': 'Felt', 'words': 463},
 {'album': 'A Better Tomorrow',
  'song': '40th Street Black / We Will Fight',
  'words': 679},
 {'album': 'A Better Tomorrow', 'song': 'Mistaken Identity', 'words': 783},
 {'album': 'A Better Tomorrow', 'song': 'Hold The Heater', 'words': 705},
 {'album': 'A Better Tomorrow', 'song': 'Crushed Egos', 'words': 390},
 {'album': 'A Better Tomorrow', 'song': 'Keep Watch', 'words': 774},
 {'album': 'A Better Tomorrow', 'song': 'Miracle', 'words': 711},
 {'album': 'A Better Tomorrow', 'song': "Preacher's Daughter", 'words': 645},
 {'album': 'A Better Tomorrow', 'song': 'Pioneer The Frontier', 'words': 527},
 {'album': 'A Better Tomorrow', 'song': 'Necklace', 'words': 582},
 {'album': 'A Better Tomorrow', 'song': "Ron O'Neal", 'words': 665},
 {'album': 'A Better Tomorrow', 'song': 'A Better Tomorrow', 'words': 954},
 {'album': 'A Better Tomorrow', 'song': 'Never Let Go', 'words': 760},
 {'album': 'A Better Tomorrow', 'song': 'Wu-Tang Reunion', 'words': 438},
 {'album': '8 Diagrams', 'song': 'Campfire', 'words': 582},
 {'album': '8 Diagrams', 'song': 'Take it Back', 'words': 857},
 {'album': '8 Diagrams', 'song': 'Get Them Out Ya Way Pa', 'words': 534},
 {'album': '8 Diagrams', 'song': 'Rushing Elephants', 'words': 608},
 {'album': '8 Diagrams', 'song': 'Unpredictable', 'words': 470},
 {'album': '8 Diagrams',
  'song': 'The Heart Gently Weeps¾(featuring¾Erykah Badu)',
  'words': 0},
 {'album': '8 Diagrams',
  'song': 'Wolves¾(featuring¾George Clinton)',
  'words': 0},
 {'album': '8 Diagrams', 'song': 'Gun Will Go', 'words': 724},
 {'album': '8 Diagrams', 'song': 'Sunlight', 'words': 450},
 {'album': '8 Diagrams', 'song': 'Stick Me for My Riches', 'words': 1054},
 {'album': '8 Diagrams', 'song': 'Starter', 'words': 592},
 {'album': '8 Diagrams', 'song': 'Windmill', 'words': 789},
 {'album': '8 Diagrams', 'song': 'Weak Spot', 'words': 613},
 {'album': '8 Diagrams', 'song': 'Life Changes', 'words': 817},
 {'album': 'Wu-Tang Iron Flag', 'song': 'In the Hood', 'words': 796},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Rules', 'words': 744},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Chrome Wheels', 'words': 756},
 {'album': 'Wu-Tang Iron Flag',
  'song': 'Soul Power (Black Jungle)',
  'words': 911},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Uzi (Pinky Ring)', 'words': 934},
 {'album': 'Wu-Tang Iron Flag', 'song': 'One of These Days', 'words': 723},
 {'album': 'Wu-Tang Iron Flag', 'song': "Ya'll Been Warned", 'words': 869},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Babies', 'words': 721},
 {'album': 'Wu-Tang Iron Flag',
  'song': 'Radioactive (Four Assassins)',
  'words': 556},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Back In the Game', 'words': 752},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Iron Flag', 'words': 983},
 {'album': 'Wu-Tang Iron Flag', 'song': 'Dashing (Reasons)', 'words': 570},
 {'album': 'The W',
  'song': 'Intro (Shaolin Finger Jab) / Chamber Music - Explicit Album Version with Medley Segments',
  'words': 0},
 {'album': 'The W', 'song': 'Careful (Click, Click)', 'words': 642},
 {'album': 'The W', 'song': 'Hollow Bones', 'words': 522},
 {'album': 'The W', 'song': 'Redbull', 'words': 585},
 {'album': 'The W', 'song': 'One Blood Under W', 'words': 588},
 {'album': 'The W',
  'song': 'Conditioner (featuring Snoop Dogg)',
  'words': 858},
 {'album': 'The W', 'song': 'Protect Ya Neck (The Jump Off)', 'words': 757},
 {'album': 'The W',
  'song': 'Let My Niggas Live (featuring Nas)',
  'words': 858},
 {'album': 'The W', 'song': "I Can't Go to Sleep", 'words': 545},
 {'album': 'The W', 'song': 'Do You Really (Thang Thang)', 'words': 794},
 {'album': 'The W', 'song': 'The Monument', 'words': 469},
 {'album': 'The W', 'song': 'Gravel Pit', 'words': 756},
 {'album': 'The W',
  'song': 'Jah World (featuring Junior Reid) - Explicit Album Version',
  'words': 0},
 {'album': 'Wu-Tang Forever (Explicit)',
  'song': 'Wu-Revolution',
  'words': 798},
 {'album': 'Wu-Tang Forever (Explicit)', 'song': 'Reunited', 'words': 657},
 {'album': 'Wu-Tang Forever (Explicit)',
  'song': 'For Heavens Sake',
  'words': 584},
 {'album': 'Wu-Tang Forever (Explicit)',
  'song': "Cash Still Rules / Scary Hours (Still Don't Nothing Move but the Money)",
  'words': 620},
 {'album': 'Wu-Tang Forever (Explicit)', 'song': 'Visionz', 'words': 542},
 {'album': 'Wu-Tang Forever (Explicit)',
  'song': 'As High as Wu-Tang Get',
  'words': 502},
 {'album': 'Wu-Tang Forever (Explicit)',
  'song': 'Severe Punishment',
  'words': 776},
 {'album': 'Wu-Tang Forever (Explicit)', 'song': 'Older Gods', 'words': 573},
 {'album': 'Wu-Tang Forever (Explicit)', 'song': 'Maria', 'words': 572},
 {'album': 'Wu-Tang Forever (Explicit)',
  'song': 'A Better Tomorrow',
  'words': 954},
 {'album': 'Wu-Tang Forever (Explicit)', 'song': "It's Yourz", 'words': 767},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Bring Da Ruckus',
  'words': 652},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Shame On a Nigga',
  'words': 480},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Clan In Da Front',
  'words': 800},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Wu-Tang: 7th Chamber',
  'words': 1178},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Can It Be All So Simple / Intermission',
  'words': 1085},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': "Da Mystery of Chessboxin'",
  'words': 877},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': "Wu-Tang Clan Aint Nuthing ta F' Wit",
  'words': 868},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'C.R.E.A.M.',
  'words': 717},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Method Man',
  'words': 895},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Protect Ya Neck',
  'words': 1005},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Tearz',
  'words': 481},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Wu-Tang: 7th Chamber - Part II - Conclusion',
  'words': 4021},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Protect Ya Neck - Shao Lin Version',
  'words': 3695},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'Method Man - Home Grown Version',
  'words': 832},
 {'album': 'Enter The Wu-Tang (36 Chambers) [Expanded Edition]',
  'song': 'C.R.E.A.M. (Cash Rules Everything Around Me) - A Cappella',
  'words': 0}]


/*
	ORGANIZE DATA
		* all_albums: list of albums from 1-7
		* album1: list of dictionaries for songs in WTC's first album
	*/

// initialize album list
var album1 = [];
var album2 = [];
var album3 = [];
var album4 = [];
var album5 = [];
var album6 = [];
var album7 = [];

// indexing for loop
all_albums = [album1, album2, album3, album4, album5, album6, album7, alldata];
album_names = 
	["The Saga Continues", "A Better Tomorrow", "Wu-Tang Forever (Explicit)", 
	 "The W", "Wu-Tang Iron Flag", "Enter The Wu-Tang (36 Chambers) [Expanded Edition]",
	 "8 Diagrams"];

// push dict into corresponding album lists
for (var i = 0; i < alldata.length; i++) {
	for (var j = 0; j < album_names.length; j++) {
		if (alldata[i]["album"] == album_names[j]) {
			all_albums[j].push(alldata[i]);
		}
	}
}



/*
	ONCLICK METHOD FOR PLOT BUTTONS SELECTION
		Plot Buttons are assigned "value"
		Matches "values" for indexing with "value" object in html file
		Calls update function using corresponding album data
	*/
values = ["album1", "album2", "album3", "album4", "album5", "album6", "album7", "album8"]

function change(value) {
	for (var i = 0; i < values.length; i++) {
		if (value == values[i]) {
			update(all_albums[i]);
		}
	}
}



/*
	UPDATES PLOT UPON ONCLICK FOR PLOT BUTTONS SELECTION
		@params
			data: album1, album2, or etc... from all_albums variable

		@return
			Labels x-axis according to values from 'song' keys in the inputted album
			Labels y-axis consistently from min, max of all songs
			
			Y-Bar represents values from 'word' keys in the inputted album
	*/
function update(data) {
	xChart.domain(data.map(function(d){ return d.song; }) );
	yChart.domain( [0, d3.max(data, function(d){ return d.words; })] );

	var barWidth = width/ (data.length);

	//select all bars on graph and delete
	//exit data set
	//add new data
	var bars = chart.selectAll(".bar")
					.remove()
					.exit()
					.data(data)
					//give each rectangle the corresponding data
	bars.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d, i){ return i * barWidth + 1})
		.attr("y", function(d){ return yChart( d.words); })
		.attr("height", function(d){ return height - yChart(d.words); })
		.attr("width", barWidth-1)
		.attr("fill", function(d) {
			return "rgb(251,180,174)";
		});
	//left axis
	chart.select('.y')
		  .call(yAxis)
	//bottom axis
	chart.select('.xAxis')
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function(d){
				return "rotate(-65)";
			});
}//end update


// ~~~~`
// ~~~~`
// ~~~~`


//set up chart
var margin = {top: 20, right: 20, bottom: 95, left: 50};
var width = 800;
var height = 500;

var chart = d3.select(".chart")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xChart = d3.scaleBand()
				.range([0, width]);
				
var yChart = d3.scaleLinear()
				.range([height, 0]);

var xAxis = d3.axisBottom(xChart);
var yAxis = d3.axisLeft(yChart);

//set up axes
//left axis
	chart.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		  
	//bottom axis
	chart.append("g")
		.attr("class", "xAxis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function(d){
				return "rotate(-65)";
			});

//add labels
chart
	.append("text")
	.attr("transform", "translate(-35," +  (height+margin.bottom)/2 + ") rotate(-90)")
	.text("Word Count");
		
chart
	.append("text")
	.attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom - 5) + ")")
	.text("Song Name");

//use bothData to begin with
update(alldata);