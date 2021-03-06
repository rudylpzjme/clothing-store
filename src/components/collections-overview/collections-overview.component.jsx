import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForOverview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview key={ id } { ...collectionProps } />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionsOverview);