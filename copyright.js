const HighElements = document.getElementsByTagName('js-item')

for(let i = 0; i < HighElements.length; i++)
{
	let legend = HighElements[i].innerHTML
	HighElements[i].innerHTML = `<div class="box-content"><div class="box-square"></div><b class="box-legend">${legend}</b></div>`;

	if(!HighElements[i].hasAttribute('checked')) HighElements[i].setAttribute('checked', 'false');
	if(!HighElements[i].hasAttribute('value')) HighElements[i].setAttribute('value', '0');

	let boxContent = HighElements[i].querySelector('.box-content')
	boxContent.setAttribute('onclick', `itemCheck(${i})`);
	boxContent.style.display = 'flex';
	boxContent.style.padding = '2px';
	boxContent.style.margin = '2px';
	
	let boxSquare = HighElements[i].querySelector('.box-square')
	boxSquare.style.width = '10px';
	boxSquare.style.height = '10px';
	boxSquare.style.border = '2px solid black';
	if(HighElements[i].getAttribute('checked') == 'true') {
		boxSquare.style.backgroundColor = '#00AAFF';
	} else {
		boxSquare.style.backgroundColor = 'gray';
	}
	
	let boxLegend = HighElements[i].querySelector('.box-legend')
	boxLegend.style.fontSize = '12px';
	boxLegend.style.marginLeft = '2px';
}

var bElement = document.createElement('b');
bElement.innerHTML = 'DeviceBlack';
bElement.style.fontSize = '20px';
bElement.style.color = 'blue';
bElement.style.position = 'fixed';
bElement.style.right = '5px';
bElement.style.bottom = '2%';
document.body.appendChild(bElement);
