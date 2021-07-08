import React from 'react';
// import ReactDOM from 'react-dom'

const Card = (props) => {
	return(
		<div className='bg-light-blue on hover dib br3 pa3 ma2 grow shadow-5 bw2'>
			<img alt='robots' src={`https://robohash.org/${props.id}`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
				<p>Click to see the magic, mate!</p>
			</div>
		</div>
	);
}

export default Card;