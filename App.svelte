<script>
	// By  Peyman Borhani
	// Not completed game, Up to here is free :)
	
	//import {imgs, unselected} from './images,js';
	import   {images}   from   './imgData.js';  
	import   FlipCard   from   './FlipCard.svelte';
	
	let selectedPos=[];
	let selectedId =[];  
	let count=0; 
	let zoom = false;
	let start= false;
  
	const log = x=> console.log(x);
	
	let ln       = images.length;
	let remained = ln;
	
	//images.push(...images); log(ln)
	for(i=0; i<ln; i++) 
		              images.push(  { id : images[i].id,
																  on : false,
																  alt: images[i].alt,
																  src: images[i].src  }
									);

	let	 randomImages = images.sort(() => Math.random() - 0.5);
	log(randomImages);
	
	let imgLength    = (randomImages.length);
	
	function selections(event) {
			     if (count<2) {
			         selectedId  = [...selectedId,  event.detail.id];
			         selectedPos = [...selectedPos, event.detail.pos];
			         randomImages[event.detail.pos].on = true;
			         count++;
			     }
			     if (count===2)  { setTimeout(match,600) }
}
	
	function match() {
			     if (selectedId[0]!==selectedId[1]){
				       randomImages[selectedPos[0]].on=false;
				       randomImages[selectedPos[1]].on=false;
				       selectedId = [];
				       selectedPos =[];
				       count=0;
			     }  
		       else {  selectedId = [];
				           selectedPos =[];
				           count=0;
								   remained = (randomImages.filter(image => !image.on).length/2).toFixed(0);
			           }
	}

</script>

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

<main>
	
	<h2>  M e m o r y      <br> &nbsp &nbsp
		    G a m e   
	</h2>

	<div id='board'>
		{#each randomImages as image, index}
			<FlipCard   {...image}      pos = {index}
								                  on:card = {selections}
								                  on:openCard = {()=> zoom=!zoom}
								/>
		{/each}	
	</div>
	
		<h3>  {#if remained===0}  You Win!
	        {:else}             Remained 
				                      <hr> {remained} Pics
			                        <h2 id='ST'> Start </h2>
	        {/if}
		</h3>
</main>


<style>
  :global(body) {
		    height: 100vh;      margin : 0;
            width : 100vw;      padding: 0;
	        color : #888;     user-select: none;
			overflow: hidden;	font-size  : calc(3vw + 3vh);
		                        font-family: Gabriola, Calibri;
}
   main   { display: flex;      flex-direction: column;
            height : 100%;      overflow: hidden;
            width  : 100%;      place-items: center;
                                background-color: black;
					            place-content: center;
}
	 h2  {  display: flex;      text-align: center;             
            right  : 1ch;       position: fixed;
            top    : 1ch;       line-height: 1.5ch;
            margin : 0;         max-width: 1.4ch;
            padding: 0;         color: #62a;
                                text-shadow: 0 0 4pt #62a
}  h2:is(#ST) { visibility: hidden }
	
   h3     {  bottom: -2ch;       position : fixed;
             right : 1vw;        line-height: 1ch;
             color : #cb0;     font-size: 2ch;
}
	
   #board {                       
			display: grid;       position: relative;
            width  : 94%;        grid-template:  auto /  repeat(4, 22%);
            height : 90%;        box-shadow   :  0 0 3ch #529;
		    left   : 3vw;        border-radius: 4vw; 
			z-index: 0;          align-self: start;
		    overflow: hidden;    justify-items: center;
		 
		                              
}
	 #board:hover { cursor: pointer }	
	
@media screen and (orientation: portrait)  {
	 br     { display: none }
	
   #board { left: 0;
		    grid-template: repeat(4, 1fr) / repeat(4, 20%);
		    height: 86vh;      aspect-ratio: 1/2.2; 
		    width : 100vw;     gap: 1ch;
		    justify-content: space-around;
   }
		
    h2 { 
        left : 1ch;          position: fixed; 
        top  : 3vh;          font-size: calc(3vw + 3vh); 
        right: unset;        max-width: unset;
        color: inherit;      text-shadow: 0 0 3pt #000
}
		
	  h3, hr { display: flex;   align-items: center;  line-height: 1.5ch  }
		hr {  width: 3ch; visibility: hidden }
	  hr::before {content: '>';  color: red; visibility: visible}
}
	  /*.zoomed {  display: flex; position: absolute; 
		             place-self: center !important} */
	@media screen and (min-aspect-ratio: 3/4)  { 
	}
		
</style>  
