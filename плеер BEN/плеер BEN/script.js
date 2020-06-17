let count=0;
let soung= ['Ben',
'Greatest Show On',
'People Make The World Go Round',
'We ve got a good thing going',
'Everybodys Somebodys Fool',
'My Girl',
'What Goes Around Comes Around',
'In Our Small Way',
' You Can Cry On My Shoulder',
'Shoo Be Doo Be Doo Da Day'];
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