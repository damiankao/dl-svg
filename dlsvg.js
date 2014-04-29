;(function() {

dlsvg = function(svgid) {
	var svg = document.getElementById(svgid);
	var wrap = document.createElement('div');

	//clone the svg node without children nodes
	var clone = svg.cloneNode(false);

	//give the svg correct attributes
	clone.setAttribute('version','1.1');
	clone.setAttribute('baseProfile','full')
	clone.setAttribute('xmlns','http://www.w3.org/2000/svg')

	//append the clone in the wrapper
	wrap.appendChild(clone);

	//the svg HTML itself can now be obtained using innerHTML on the wrapper
	var opener = wrap.innerHTML.split('><')[0] + '>'

	//the svg content
	var content = opener + svg.innerHTML + "</svg>";

	//send the data as a encoded data-url for user to download
	document.location = 'data:Application/octet-stream,' + encodeURIComponent(content);
}

})()