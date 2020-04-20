import React, { Component } from 'react'
import catItems from '../../categoryItems'
import PreviewItems from '../../components/previewItems/preview-items.component'

class Shop extends Component {
    constructor(props){
        super(props);

        this.state = {
            catitems : catItems
        }
    }

  render() {
    //   previews of the items that are with the selected category
    //   destructoring the data in tehe catItems object 
      const {catitems } = this.state

    return (
      <div>
        shop pagee
        {/* The filter() method creates an array filled with all array elements that pass a test (provided as a function) */}

        
       { catitems.map(({id, ...Nprops}) => (
            <PreviewItems key={id} {...Nprops} />
            
        ) ) 
       }
       
       
      </div> 
    )
  } 
}

export default Shop
