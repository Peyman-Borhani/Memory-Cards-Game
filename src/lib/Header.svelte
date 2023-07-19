<script>
import 	sLogo 	from '../assets/svelte.svg';
import 	vLogo 	from '/vite.svg';
</script>


<header>	
        <h2>  M e m o r y       <br> &nbsp <br> &nbsp
              G a m e
        </h2>
        <a  href="https://github.com/Peyman-Borhani/memory-game#readme" 
            target="_blank" rel="noreferrer" class='github' > Github
        </a>
        <a  href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={vLogo} class="logo" alt="Vite Logo" />
        </a>
        <a  href="https://svelte.dev" target="_blank" rel="noreferrer">
            <img src={sLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
</header>


<style>

header {                     position: absolute;
        height  : 6vmin;     will-change: filter;
        width   : 6vmin;     max-width  : 3ch; 
        right   : 14vmin;    transition : filter 300ms; 
        top     : 1vmin;     z-index: 1000
} 
.svelte, .github   {max-width:0}

.logo {padding: 2vmin; }
.logo:hover { max-width: 3ch; filter: drop-shadow(0 0 4vmin #646cffaa) }
.logo.svelte:hover  { filter: drop-shadow(0 0 4vmin #ff3e00aa) }

@media screen and (orientation: portrait) {  h2>br {display: none}  }
</style>