import React from 'react';
import Tilt from 'react-tilt';
import brain from'./brain.png';

const Logo = () => {
	return(
	<div className='ma4 mt0'>
			<Tilt className="br1 shadow-0.5" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
	 		<div className="pa2">
	 			<img style={{paddingTop: '5px'}} alt = 'logo' src = {brain}/>
	 		</div>
		</Tilt>
	</div>
		);

}

export default Logo;