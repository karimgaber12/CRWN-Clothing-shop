import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // convert keys object into an array
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    // this kind of finding data called data normalization (we store data in object not array and find it) 
    collections => collections[collectionUrlParam]
    // this king of finding data called binary search (collection search on every id until find what you need)
    //collections => collections.find(collection=> collection.id === COLLECTION_ID_MAP[collectionUrlParam] )
  );