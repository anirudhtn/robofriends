import React from 'react';

const SearchBox=({searchField, searchChange})=>{
		return(
			<div className='pa2 '>
				<input
					className='pa3 ba b--green bg-light-green' 
					type='search' 
					placeholder='Search for bots'
					onChange={searchChange}
				/>

			</div>
		);
	
}

export default SearchBox;