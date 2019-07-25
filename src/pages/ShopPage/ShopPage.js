import React, { Component } from "react";
import { SHOP_DATA } from "./ShopData";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <div key={id}>
            <CollectionPreview {...otherCollectionProps} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
