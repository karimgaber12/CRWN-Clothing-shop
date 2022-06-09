import React from "react";
import CollectionItem from "../collectionItem/CollectionItem.component";
import './collectionPreview.style.scss'
function CollectionPreview({title,items}) {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {/*use filter to display only 4 items in collection preview*/}
                {items.filter((item,index)=> index < 4).map(item => (
                    <CollectionItem key={item.id} item = {item}/>
                ))}
                
            </div>
        </div>
    )
}

export default CollectionPreview