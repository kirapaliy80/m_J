let count=0;
let soung= ['Bad','The Way You Make Me Feel','Speed Demon','Liberian Girl','Just Good Friends','Another Part of Me',
'Man In the Mirror',"I Just Can't Stop Loving You",'Dirty Diana','Smooth Criminal','Leave Me Alone'];
window.onload=function(){
	let mp3 = document.getElementById('mp3');
	document.getElementById('next').onclick=next;
	document.getElementById('stop').onclick=stop;	
	document.getElementById('play').onclick=play;	
	document.getElementById('prev').onclick=prev;	

	let ul=document.getElementById('ul');
	for (let i=0; i < soung.length; i++)
	{
		let li= document.createElement('li');
		li.innerHTML=soung[i];
		ul.appendChild(li);
	}
}

function changeColor()
{
	let color = document.getElementsByTagName('li')
	for (let x=0; x < color.length; x++)
	if(count == x)
	{	
		color[x].classList.add('active')
	}
	else
	{
		color[x].classList.remove('active');	
	}		
	
}
function next()
{
	if(count < soung.length-1)
	{
		count++;
		play();
	}	
}
function prev()
{
	if(count > 0)
	{
		count--;
		play()
	}
}
function play()
{
	changeColor();
	mp3.src='mus\\'+soung[count]+'.mp3'
}
function stop()
{
	mp3.pause();
}