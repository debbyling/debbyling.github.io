// start svg


var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height")
    
    
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink())
    .force("charge", d3.forceManyBody().strength([-120]).distanceMax([150]))
    .force("center", d3.forceCenter(width / 2, height / 2));

var container = svg.append('g');

var dataPath = "D3datakpop.json";

// Zooming function translates the size of the svg container.
function zoomed() {
    container.attr(
    "transform", 
    "translate(" + d3.event.transform.x + ", " + d3.event.transform.y + ") scale(" + d3.event.transform.k + ")"
  );
}



// Call zoom for svg container.
// svg.call(d3.zoom().on('zoom', zoomed));

// define a zoom behavior:
var zoom = d3.zoom()
  .on("zoom", zoomed);
  

svg.call(zoom)


svg.call(zoom.transform,d3.zoomIdentity.scale(0.8).translate(0,10));


// functions for dragging nodes on D3 drag events
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}


function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// toggle to switch on and off neighbour view
var toggle = 0;

// Modern search bar: render inside .container above SVG
var containerDiv = d3.select('.container');
var searchBarDiv = containerDiv.insert('div', ':first-child')
  .attr('class', 'search-bar');

searchBarDiv.append('input')
  .attr('type', 'text')
  .attr('id', 'searchTerm')
  .attr('placeholder', "Type artiste's twitter handle to search...");

searchBarDiv.append('input')
  .attr('type', 'button')
  .attr('value', 'Search')
  .on('click', () => searchNodes());

// Improved search function: only show nodes/links matching the search term, hide others. Restore all if search is empty.
function searchNodes() {
  var term = document.getElementById('searchTerm').value.trim().toLowerCase();

  var nodes = container.selectAll('.node');
  var links = container.selectAll('.link');

  if (!term) {
    // Restore all if search is empty
    nodes.style('opacity', '1');
    links.style('stroke-opacity', '0.6');
    return;
  }

  // Show only nodes that match by name or aName
  nodes.each(function(d) {
    var match = (d.name && d.name.toLowerCase().includes(term)) ||
                (d.aName && d.aName.toLowerCase().includes(term));
    d3.select(this).style('opacity', match ? '1' : '0.1');
  });

  // Show only links where both source and target are visible
  links.each(function(d) {
    var sourceVisible = (d.source.name && d.source.name.toLowerCase().includes(term)) ||
                       (d.source.aName && d.source.aName.toLowerCase().includes(term));
    var targetVisible = (d.target.name && d.target.name.toLowerCase().includes(term)) ||
                       (d.target.aName && d.target.aName.toLowerCase().includes(term));
    d3.select(this).style('stroke-opacity', (sourceVisible || targetVisible) ? '0.6' : '0.1');
  });
}



// --- Betweenness Centrality Calculation ---
function computeBetweennessCentrality(nodes, links) {
  // Build adjacency list
  const adj = {};
  nodes.forEach((n, i) => { adj[i] = []; });
  links.forEach(l => {
    const s = typeof l.source === 'object' ? l.source.index : l.source;
    const t = typeof l.target === 'object' ? l.target.index : l.target;
    adj[s].push(t);
    adj[t].push(s);
  });
  // Brandes algorithm (simplified for unweighted graphs)
  const n = nodes.length;
  const Cb = new Array(n).fill(0);
  for (let s = 0; s < n; s++) {
    let S = [], P = Array.from({length: n}, () => []);
    let sigma = new Array(n).fill(0); sigma[s] = 1;
    let d = new Array(n).fill(-1); d[s] = 0;
    let Q = [s];
    while (Q.length) {
      let v = Q.shift(); S.push(v);
      adj[v].forEach(w => {
        if (d[w] < 0) {
          Q.push(w); d[w] = d[v] + 1;
        }
        if (d[w] === d[v] + 1) {
          sigma[w] += sigma[v];
          P[w].push(v);
        }
      });
    }
    let delta = new Array(n).fill(0);
    while (S.length) {
      let w = S.pop();
      P[w].forEach(v => {
        delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]);
      });
      if (w !== s) Cb[w] += delta[w];
    }
  }
  // Normalize
  const scale = 1 / ((n-1)*(n-2));
  return Cb.map(c => c * scale);
}

// master Function
d3.json(dataPath, function(error, graph) {
  if (error) throw error; 
  
  // Make object of all neighboring nodes.
  var linkedByIndex = {};
    graph.links.forEach(function(d) {
    linkedByIndex[d.source + ',' + d.target] = 1;
    linkedByIndex[d.target + ',' + d.source] = 1;
    console.log("linked",linkedByIndex[d.source] = 1);
  });

  // --- Compute betweenness centrality and add to nodes ---
  var centralities = computeBetweennessCentrality(graph.nodes, graph.links);
  graph.nodes.forEach((d, i) => d.centrality = centralities[i]);

  // --- Remove SVG filter glow logic; will use blurred <circle> for halo instead ---



  
  // A function to test if two nodes are neighbours.
  function neighboring(a, b) {
    return linkedByIndex[a.index + ',' + b.index];
  }

  console.log("linked",linkedByIndex)


  // Linear scale for degree centrality.
  var degreeSize = d3.scaleLinear()
    .domain(
      [d3.min(graph.nodes, d => d.degree),
       d3.max(graph.nodes, d => d.degree)
      ]
     )
    .range([3,20]);
  
  // Collision detection based on degree centrality.
  simulation.force("collide", d3.forceCollide().radius(d => degreeSize(d.degree)));
  
  // Scale for link thickness using a logarithmic scale to emphasize differences
  var linkWidth = d3.scaleLog()
    .domain(d3.extent(graph.links, d => d.value))
    .range([2, 25])
    .clamp(true);

  var link = container.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links, d => d.source + ", " + d.target)
    .enter().append("line")
    .attr('class', 'link')
    .style('stroke', '#808080')
    .style('stroke-width', d => linkWidth(d.value));
  
  var node = container.selectAll(".node")
    .data(graph.nodes)
    .enter()
    .append("g")
    .attr("class", "node");
    
  // Find threshold for top 5% centrality
  var sortedCentralities = graph.nodes.map(d => d.centrality).sort((a, b) => a - b);
  var threshold = sortedCentralities[Math.floor(0.95 * sortedCentralities.length)];

  // Add blurred halo <circle> behind main node for high-centrality nodes
  node.filter(d => (d.centrality || 0) >= threshold)
    .insert('circle', ':first-child')
    .attr('r', d => degreeSize(d.degree) * 2.2)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('fill', '#fff700')
    .attr('opacity', 0.45)
    .style('filter', 'blur(7px)');

  node.append("circle")
    // Scale based on degree centrality 
    .attr('r', d => degreeSize(d.degree))
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    // Color by group (political party)
    .attr("fill", d => d.colour)
    .attr('class', 'node');

  node.append("title")
    .text(d => d.aName +' (@' + d.name + ')' + '\nNo. of followers: ' + d.followers +  '\nGroup: ' + d.aGroup + '\nCompany: ' + d.company + '\nBetweenness Centrality: ' + (d.centrality||0).toFixed(4))
    .style('font-size', '120%');

  function ticked() {
    // update edge coords
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y)
    .style('stroke-width', d => linkWidth(d.value));
    
    // update node coords
    node
      .attr("transform", d => "translate(" + d.x + "," + d.y + ")");
  }

  // run ticked function and move nodes on every tick
  simulation
    .nodes(graph.nodes)
    .on("tick", ticked);
  
  // update edges immediately
  simulation.force("link")
    .links(graph.links);
    

  // create Twitter image patters for nodes 
  node
    .append("defs")
    .append("pattern")
    .attr('id', d => 'image-' + d.name.split(" ").join(""))
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('x', d => -degreeSize(d.degree))
    .attr('y', d => -degreeSize(d.degree))
    .attr('height', d => degreeSize(d.degree) * 2)
    .attr('width', d => degreeSize(d.degree) * 2)
    .append("image")
    .attr('height', d => degreeSize(d.degree) * 2)
    .attr('width', d => degreeSize(d.degree) * 2)
    .attr('xlink:href', function(d) {
      if (d.name === '2amkwon') {
        console.log('[DEBUG] Creating pattern for 2amkwon:', d);
        console.log('[DEBUG] 2amkwon image URL:', d.url);
      }
      return d.url;
    })
    .on('error', function(d) {
      if (d.name === '2amkwon') {
        console.error('[DEBUG] Pattern image error for 2amkwon:', d, 'URL:', d.url, this);
      }
    });
  
  // append patterns and add neighbour search and dragging
  node
  .append("circle")
  .attr('r', d => 0.8 * degreeSize(d.degree))
  .attr('fill', function(d) {
    return 'url(#image-' + d.name.split(" ").join("") + ')';
  })
  // On click, toggle ego networks for the selected node 
  .on('click', function(d) {
    if (toggle == 0) {
      // Ternary operator restyles links and nodes if they are adjacent.
      d3.selectAll('.link').style('stroke-opacity', function (l) {
        return l.target == d || l.source == d ? 1 : 0.1;
      });
      d3.selectAll('.node').style('opacity', function (n) {
        return neighboring(d, n) ? 1 : 0.1;
      });
      d3.select(node.nodes()[d.index])
        .style('opacity', '1')
        .attr("fill", d => d.colour)

      toggle = 1;
    }
    else {
      // Restore nodes and links to normal opacity.
      d3.selectAll('.link').style('stroke-opacity', '0.6');
      d3.selectAll('.node').style('opacity', '1');
      toggle = 0;
    }
  })
  

  // call functions to drag nodes
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));


});
