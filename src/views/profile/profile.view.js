import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProfileHeaderComponent from "../../components/profile/profile-header.component";
import PostGridComponent from "../../components/profile/post-grid.component";
import {makeStyles} from "@material-ui/core/styles";
import PostGridHeaderComponent, {TabPanel} from "../../components/profile/post-grid-header.component";

const useStyles = makeStyles((theme) => ({
    profileHeader: {
        padding: theme.spacing(4, 0, 1),
    },
    cardGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
}));

export default function ProfileView() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChangePanel = (val) => {
        setValue(val);
    }

    return (
        <React.Fragment>
            <main>
                <div className={classes.profileHeader}>
                    <Container>
                        <ProfileHeaderComponent/>
                    </Container>
                </div>
                <Container className={classes.cardGrid}>
                    <Grid container spacing={2}>
                        <PostGridHeaderComponent changePanel={handleChangePanel}/>
                        <TabPanel value={value} index={0}>
                            <PostGridComponent/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <PostGridComponent/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <PostGridComponent/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <PostGridComponent/>
                        </TabPanel>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}