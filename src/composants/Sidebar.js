import { Container, makeStyles, Typography } from "@material-ui/core";
import { Dashboard, VoiceChat, School, MenuBook, Note, Group } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: "white",
        height: "100vh",
        color: '#555',
        border: "1px solid silver",
        position: "fixed",
        width: "15%",
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(1.5),
            fontSize: "18px",
            cursor: 'pointer',
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    }
}));

const Sidebar = () => {

    const classes = useStyles();

    return (
        <div className="sidebar">
            <Container className={classes.container}>
                <div className={classes.item}>
                    <Dashboard className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/accueil" className="">Accueil</NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <MenuBook className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/cours" className="">
                            Cours
                        </NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <School className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/lecons">
                            Leçons
                        </NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Group className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/professeur">
                            Professeurs
                        </NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Note className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to="/prevision">
                            Prévisions
                        </NavLink>
                    </Typography>
                </div>
                <div className={classes.item}>
                    <VoiceChat className={classes.icon} />
                    <Typography className={classes.text}>
                        <NavLink to='/chat'>
                            Chat
                        </NavLink>
                    </Typography>
                </div>
            </Container>
        </ div>
    );
}

export default Sidebar;