import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from "@material-ui/core/ListSubheader";
import PropTypes from 'prop-types';

export const Interests = [
    'Sports', 'Politics', 'Nature', 'Movies', 'Books', 'Fashion', 'Makeup'
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: '1px solid lightgray',
        borderRadius: '4px'
    },
}));

InterestListComponent.propTypes = {
    updateSelectedInterests: PropTypes.func
}

export default function InterestListComponent(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        props.updateSelectedInterests(newChecked)
        setChecked(newChecked);
    };

    return (
        <List className={classes.root}
              subheader={
                  <ListSubheader disableSticky={true}>
                      Pick some of your interests
                  </ListSubheader>
              }>
            {Interests.map((value) => {
                return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText id={value} primary={value} />
                    </ListItem>
                );
            })}
        </List>
    );
}
