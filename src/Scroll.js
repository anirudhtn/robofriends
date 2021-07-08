import React from 'react';
const Scroll =(props) =>{
	return(
		<div style={{overflowY : 'scroll', border:'3px ', height:'900px'}}>
			{props.children}
		</div>
	);
};
export default Scroll;
