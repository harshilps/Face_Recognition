import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
		<p className = 'f3 white'>
			{'This magic Brain will detect faces in your pictures. Give it a try'}
		</p>
		<div className= 'center'>
		<div className= 'form center pa4 br3'>
		<input className='f4 pa2 w-80 center' type='tex' onChange={onInputChange}/>
		<button className= 'w-40 grow f4 link ph3 pv2 dib white bg-black'
		onClick= {onButtonSubmit}
		>Detect
		</button>
		</div>
		</div>
		</div>
		);
}
export default ImageLinkForm;