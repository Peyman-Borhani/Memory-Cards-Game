<script>
	// By  Peyman Borhani
	// Not the complete game, Up to here is free :)
	
	import   {images}   from   './lib/imgData.js';  //import {imgs, unselected} from './images,js';
	import   FlipCard   from   './lib/FlipCard.svelte';
	import   Header		from   './lib/Header.svelte';
	
	let selectedPos=[];
	let selectedId =[];  
	let count=0; 
	let zoom = false;
	let start= false;
  
	const log = x=> console.log(x);
	
	let ln       = images.length;
	let remained = ln;
	
	//images.push(...images); log(ln)
	for(let i=0; i<ln; i++) 
				images.push(  { id : images[i].id,
								on : false,
								alt: images[i].alt,
								src: images[i].src  }  );

	let	 randomImages = images.sort( ()=> Math.random() - 0.5);
	//log(randomImages);	
	let imgLength    = (randomImages.length);


function  selections(event) {
	if (count<2) {
		selectedId  = [...selectedId,  event.detail.id];
		selectedPos = [...selectedPos, event.detail.pos];
		randomImages[event.detail.pos].on = true;
		count++;
	}
	if (count===2)  { setTimeout(match,600) }
}


function  match() {
	
	if (selectedId[0]!==selectedId[1]) {
		randomImages[selectedPos[0]].on=false;
		randomImages[selectedPos[1]].on=false;
		selectedId = [];
		selectedPos =[];
		count=0;
	}  
	else {  
		selectedId = [];
		selectedPos =[];
		count=0;
		remained = parseInt( (randomImages.filter(
							  image=> !image.on).length/2
					).toFixed(0) );
	}
}
</script>



<main>
	<div id='board'>
		{#each randomImages as image, index}
			<FlipCard   {...image}      pos = {index}
						on:card = {selections}
						on:openCard = {()=> zoom=!zoom}	/>
		{/each}	
	</div>
	
	<h3>  	{#if remained===0}  You Win!
			{:else}             Remained 
								<hr> {remained} Pics
								<h2 id='ST'> Start </h2>
			{/if}
	</h3>
</main>

<!-- <svelte:head>
       <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
     </svelte:head>  -->


<!--svg xmlns="http://www.w3.org/2000/svg" width="168" height="215" 
	style="position:fixed; z-index:9; left: 1ch;top:1ch; width: 50vw; height: 50vh">>
   <defs>
      <pattern id="gothicPattern" viewbox="0 0 32 32" patternUnits="userSpaceOnUse">
         <line x1=".08" y1=".41" x2=".08" y2=".59"/>
      </pattern>
   </defs>
   <rect rx="2" ry="2" fill="#FFFFFF" stroke="#000" stroke-width="2" />
   <path d="M100,2 L68,2 V2 Z" fill="url(#myOtherGradient)" stroke="#000" stroke-opacity="0.8" stroke-width="10"/>
</svg>
-->