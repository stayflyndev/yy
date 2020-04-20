// CLASS DIRECTORY COMPONENT
// USE A CLASS COMPONENT WHEN YOU NEED STATE
// FOR STYLING CLASS COMPONENTS USE withStyles 

import React, { Component } from 'react';
import MenuItem from './menu-item/MenuItem.component';
import Categories from '../category';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = theme => ({
    root: {
        // marginLeft: 250,
        // marginRight: 10,
        flexRow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    heading: {
        fontSize: "1rem",
        fontWeight: theme.typography.fontWeightRegular
    },
    container: {
        padding: theme.spacing(8),
        background: 'linear-gradient(to bottom, #ff9966 0%, #ffff99 100%);',
        height: '100vh'

    },
    grid: {
        padding: theme.spacing(4),

    }
});


class Directory extends Component {


    constructor(props) {
        super(props);

        this.state = {
            category: Categories //category json data
        }

    }


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>

                <Container className={classes.container}>

                    <h1> ... </h1>

                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">Lets Eat Some Food</ListSubheader>
                        </GridListTile>
                        {Categories.map(({id, ...props}) => (
                            <GridListTile key={id}>
                                <img src={props.imageURL} alt={props.title} />
                                <MenuItem key={id} {...props} />
                            </GridListTile>
                        ))}
                    </GridList>


                </Container>

            </div>
        )
    }
}

export default withStyles(useStyles)(Directory)