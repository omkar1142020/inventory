import React from 'react';
import CollectionItem from '../collectionitem/collectionitem.component';
import './collectionpreview.style.scss';

const CollectionPreview = ( { title, items } ) =>(
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{
				items
				.filter((item , index) =>(index<4))
				.map(({id, ...othersCollectionProps}) =>(
					<CollectionItem key={id} {...othersCollectionProps} />
					))
			}
		</div>
	</div>
	);

export default CollectionPreview;