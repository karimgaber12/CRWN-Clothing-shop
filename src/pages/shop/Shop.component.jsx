import React from "react";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import SHOP_DATA from "./Shop_Data";

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
                }    
            </div>
        )
    }
}
export default Shop