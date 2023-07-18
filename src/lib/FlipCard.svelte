<script>
	import  {createEventDispatcher}   from  'svelte';
	
	import  {off}          from     './imgData.js';
	import  {scale}        from     'svelte/transition';
	
	export let pos;
	export let id;
	export let src;
	export let alt;
	export let on;
	

	let zoom = false;
	
	const zoomer   = ()=> zoom = !zoom;
	const dispatch = createEventDispatcher();
	

	function selectCard(){
		if (!on){ dispatch('card',{id,pos}) }
		else { zoomer();   dispatch('openCard',{id,pos}) }; 
	}

</script>


{#if !zoom} 
	<div	class="isize  card"
			on:pointerdown={selectCard} >
	
		<div  	class="isize	c-inner"    
				class:c-selected ={on}
				
			>
			<img	{src}	class = "c-front c-notselect" 
							alt   = "unselected"
							on:pointerdown={zoomer}>

			<img	class:zoom		class:c-selected = {!on} 
					src = {off}		class ="c-back" 
					{alt}			transition:scale    >
		</div>
	</div>
{:else }
			 <img   class = 'zoom  isize'   {src}
							transition:scale        {alt} 
							on:click = {zoomer}     on:keypress >
{/if}

<style>
  .isize    { width: 20vw;				height: 24vmin }
	
	img     {	width: 100%;						box-shadow: 0 0 .14ch #a3e;
            	border-radius: 6px;		border: solid 4px black;
}
  .card     {    
		        border-radius: 3px;     perspective  : 20vmin;
				z-index: 2;             box-shadow: 0 0 1ch #c3f;
				transition: .2s  ease-in;		
}
	.card:hover {						transition: .2s ease-out;
		        z-index: 5;             transform : scale(1.4);
				box-shadow: inset 0 0 12ch #000, 0 0 1ch #d4f
}
  .c-inner { 
		        position  : absolute;	transform: rotateY(-20deg);  
		    	transition:  .3s;		transform-style: preserve-3d;
}
	.c-selected {transform: rotateY(-200deg) translateX(-2vw);    transition: ease-in .27s}
	
	.c-notselect,
	.c-front, 
	.c-back     {position: absolute;		transform-style: preserve-3d}

 .c-back,
 .c-front    {transform: rotateY(20deg)}
	
 .zoom    {   					         transition   : .3s ease-out;
			display : flex;		background   : black;
			position: fixed;	align-self   : center;
			width   : 100vw;    justify-self : center;
			height  : 100vh;	place-items  : center;
			z-index : 12;		place-content: center;
								object-fit   : contain;
			box-shadow:  0 0 0 10% #000, inset 0 0 0 20vh #000 
	}


</style>