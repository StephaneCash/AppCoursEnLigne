import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, SettingsPower } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    tooBar: {
        display: "flex",
        justifyContent: 'space-between',
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    logout: {
        marginLeft: theme.spacing(1),
        cursor: "pointer"
    }
}));

const NavBar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar className={classes.tooBar}>
                    <Typography variant="h6" component="h2" className={classes.logoLg}>
                        Cours
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.logoSm}>
                        Cours
                    </Typography>
                    <div className={classes.icons}>
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={5} style={{ color: "#fff" }} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar style={{ backgroundColor: "#555" }} alt="K" src="s" />
                        <SettingsPower />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;