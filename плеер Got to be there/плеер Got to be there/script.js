let count=0;
let soung= ['You ve Got a Friend','Wings of My Love','Rockin Robin','Maria (You Were the Only One)','Love Is Here and Now You re Gone','In Our Small Way',
'I Wanna Be Where You Are','Got to Be There','Girl Dont Take Your Love From Me','Aint No Sunshine'];
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