import React from 'react';
import PreviewItem from '../previewitem/preview-item.component'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    root: {
        // marginLeft: 250,
        // marginRight: 10,
        flexRow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    }
});

// items for each category coming from  the shop page 
// display only 4 items using the .filter method on the items array
// the filter method is like the for loop
// ES6+ dont have to use brackets using arrow functions
const PreviewItems = (({ items, title }) => {
    const classes = useStyles();

    return (

            <Container >
                <h1>{title}</h1>
                <GridList cols={4} >
                    {items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...props }) => (
                            <GridListTile key={id}>
                            
                                    <PreviewItem key={id} {...props} />
                              
                            </GridListTile>

                        ))}
                </GridList>
            </Container>

    )
})

export default PreviewItems;
