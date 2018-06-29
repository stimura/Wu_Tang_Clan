var wutangData =
  {
    "name": "Wu Tang Clan",
    "children": [
      { "name": "Enter the Wu-Tang (36 Chambers)",
      "children": [
          { "name": "Bring Da Ruckus" },
          { "name": "Shame On a Nigga" },
          { "name": "Clan In Da Front" },
          { "name": "Wu-Tang: 7th Chamber" },
          { "name": "Can It Be All So Simple / Intermission" },
          { "name": "Da Mystery of Chessboxin'" },
          { "name": "Wu-Tang Clan Aint Nuthing ta F' Wit" },
          { "name": "C.R.E.A.M." },
          { "name": "Method Man" },
          { "name": "Protect Ya Neck" },
          { "name": "Tearz" },
          { "name": "Wu-Tang: 7th Chamber - Part II - Conclusion" }
        ]
      },
      { "name": "Wu-Tang Forever",
      "children": [
          { "name": "Intro" },
          { "name": "Wu-Revolution" },
          { "name": "Reunited" },
          { "name": "Triumph" },
          { "name": "For Heavens Sake" },
          { "name": "Impossible" },
          { "name": "Cash Still Rules / Scary Hours" },
          { "name": "Little Ghetto Boys" },
          { "name": "Visionz" },
          { "name": "Deadly Melody" },
          { "name": "As High as Wu-Tang Get" },
          { "name": "The City" },
          { "name": "Severe Punishment" },
          { "name": "The Projects" },
          { "name": "Older Gods" },
          { "name": "Bells of War" },
          { "name": "Maria" },
          { "name": "The M.G.M." },
          { "name": "A Better Tomorrow" },
          { "name": "Dog Sh*t" },
          { "name": "It's Yourz" },
          { "name": "Duck Seazon" },
          { "name": "Hellz Wind Staff" },
          { "name": "Heaterz" },
          { "name": "Black Shampoo" },
          { "name": "Second Coming" },
          { "name": "The Closing" }
        ]
      },
      { "name": "The W",
        "children": [
          { "name": "Intro (Shaolin Finger Jab) / Chamber Music" },
          { "name": "Careful (Click, Click)" },
          { "name": "Hollow Bones" },
          { "name": "Redbull" },
          { "name": "One Blood Under W" },
          { "name": "Conditioner (featuring Snoop Dogg)" },
          { "name": "Protect Ya Neck (The Jump Off)" },
          { "name": "Let My Niggas Live (featuring Nas)" },
          { "name": "I Can't Go to Sleep" },
          { "name": "Do You Really (Thang Thang)" },
          { "name": "The Monument" },
          { "name": "Gravel Pit" },
          { "name": "Jah World (featuring Junior Reid)" }
        ]
      },
      { "name": "Iron Flag",
      "children": [
          { "name": "In the Hood" },
          { "name": "Rules" },
          { "name": "Chrome Wheels" },
          { "name": "Soul Power (Black Jungle)" },
          { "name": "Uzi (Pinky Ring)" },
          { "name": "One of These Days" },
          { "name": "Ya'll Been Warned" },
          { "name": "Babies" },
          { "name": "Radioactive (Four Assassins)" },
          { "name": "Iron Flag" },
          { "name": "Back In the Game" },
          { "name": "Dashing (Reasons)" }
        ]
      },
      { "name": "8 Diagrams",
      "children": [
          { "name": "Campfire" },
          { "name": "Take it Back" },
          { "name": "Get Them Out Ya Way Pa" },
          { "name": "Rushing Elephants" },
          { "name": "Unpredictable" },
          { "name": "The Heart Gently Weeps" },
          { "name": "Wolves" },
          { "name": "Gun Will Go" },
          { "name": "Sunlight" },
          { "name": "Stick Me for My Riches" },
          { "name": "Starter" },
          { "name": "Windmill" },
          { "name": "Weak Spot" },
          { "name": "Life Changes" }
        ]
      },
      { "name": "A Better Tomorrow",
      "children": [
          { "name": "Ruckus In B Minor" },
          { "name": "Felt" },
          { "name": "40th Street Black / We Will Fight" },
          { "name": "Mistaken Identity" },
          { "name": "Hold The Heater" },
          { "name": "Crushed Egos" },
          { "name": "Keep Watch" },
          { "name": "Miracle" },
          { "name": "Preacher's Daughter" },
          { "name": "Pioneer The Frontier" },
          { "name": "Necklace" },
          { "name": "Ron O'Neal" },
          { "name": "A Better Tomorrow" },
          { "name": "Never Let Go" },
          { "name": "Wu-Tang Reunion" }
        ]
      },
      { "name": "The Saga Continues",
      "children": [
          { "name": "Wu-Tang The Saga Continues Intro" },
          { "name": "Lesson Learn'd" },
          { "name": "Fast and Furious" },
          { "name": "Famous Fighters (Skit)" },
          { "name": "If Time Is Money (Fly Navigation)" },
          { "name": "Frozen" },
          { "name": "Berto and the Fiend" },
          { "name": "Pearl Harbor" },
          { "name": "People Say" },
          { "name": "Family (Skit)" },
          { "name": "Why Why Why" },
          { "name": "G'd up" },
          { "name": "If What You Say Is True" },
          { "name": "Saga (Skit)" },
          { "name": "Hood Go Bang!" },
          { "name": "Message" },
          { "name": "The Saga Continues Outro" }
        ]
      },
    ]
  };

// margins of the diagram
var margin = {top: 20, right: 80, bottom: 30, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#tree").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");
var i = 0,
    duration = 750,
    base;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
base = d3.hierarchy(wutangData, function(d) { return d.children; });
base.x0 = height / 2;
base.y0 = 0;

// Collapse after the second level
base.children.forEach(collapse);
update(base);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d.collapsedChildren = d.children
    d.collapsedChildren.forEach(collapse)
    d.children = null
  }
}
function update(source) {
  // Assigns the x and y position for the nodes
  var wutangData = treemap(base);

  // Compute the new tree layout.
  var nodes = wutangData.descendants(),
      links = wutangData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 180});

  // Update the nodes
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d.collapsedChildren ? "lightsteelblue" : "#fff";
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d.collapsedChildren ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d.collapsedChildren ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

  // Add Links DELETE IF DOESN'T WORK
  nodeEnter
      .append("a")
         .attr("xlink:href", function (d) { return "http://127.0.0.1:5000/" + d.children; })
      .append("rect")
          .attr("class", "clickable")
          .attr("y", -6)
          .attr("x", function (d) { return d.children || d._children ? -60 : 10; })
          .attr("width", 50) //2*4.5)
          .attr("height", 12)
          .style("fill", "lightsteelblue")
          .style("fill-opacity", .3)       
          ;

  // Update nodes
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d.collapsedChildren ? "yellow" : "#fff";
    })
    .attr('cursor', 'pointer');

  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // Update the links
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // Update the links
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {
    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`
    return path
  }
  // Toggle children on click.
  function click(d) {
    if (d.children) {
      console.log(d)
        d.collapsedChildren = d.children;
        d.children = null;
      } else {
        console.log(d)
        d.children = d.collapsedChildren;
        d.collapsedChildren = null;
      }
    if (d.children === undefined) {
      $.ajax({
        type: "GET",
        url: "/lyrics/" + d.data.name.replace(" ", "%20"),
        dataType: 'json',
        success: function(data) {
          d3.select('#lyrics').text(data);
          console.log(JSON.stringify(data));
        },
        error: function(request, status, error) {
          console.log(error)
        }
      })
    }
    update(d);
  }
}
