
export const off = 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

defer export let pics = Array(8).fill(fillup);

function  fillup() {  	//"https://picsum.photos/seed/10/200/300?random=1"
	
					for(i=0;  i<9;  i++) {					
							pics[i]= {  id: i+1,
												  on: false,
												  alt: 'image '+ (i+1),
												  src: "https://placem.at/animals?w=300&h=300&random"+(i+2);
							} console.log(pics[i])
					}								 
	};

// export const imgs = [ {...}, {...}, .... ]
