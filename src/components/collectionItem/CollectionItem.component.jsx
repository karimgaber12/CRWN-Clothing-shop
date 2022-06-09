/* eslint-disable no-unused-vars */
import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './collectionItem.style.scss'
import { addItem } from "../../redux/cart/cart.actions";
import {connect} from "react-redux"
const CollectionItem = ({item,addItem}) => {
    const {name , price , imageUrl} = item;
    return(
        <div className="collection-item">
            <div style={{
                backgroundImage:`url(${imageUrl})`
            }} className="image"/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={()=> addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

// have access to this add item dispatched into our props
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)