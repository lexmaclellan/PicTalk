import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../constants";
import { EmailRegex } from "../utils/regex.js";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    Logo: {
        fontFamily: "Grand Hotel, cursive",
        margin: "0px 0px 20px 0px",
    },
    paper: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        backgroundSize: "cover",
        backgroundColor: "#fafafa",
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

const Login = () => {
    const history = useNavigate();
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formatValidation, setFormatValidation] = useState(false);
    const [authValidation, setAuthValidation] = useState(false);
    const isSignedin = JSON.parse(localStorage.getItem('isSignedin') || 'false');

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handlePostData = () => {
        if (EmailRegex.test(email)) {
            axios.post(LOGIN_URL, { password, email })
                .then((res) => {
                    const data = res.data;
                    if (data.error) {
                        setFormatValidation(false);
                        setAuthValidation(true);
                    } else {
                        localStorage.setItem('isSignedin', 'true');
                        localStorage.setItem("user", JSON.stringify(data.user));
                        history("/Home");
                    }
                })
                .catch(() => setAuthValidation(true));
        } else {
            setAuthValidation(false);
            setFormatValidation(true);
        }
    };

    if (isSignedin) {
        return (
            <div>
                You are already signed in!
            </div>
        );
    }

    return (
        <Grid container>
            <Grid className={classes.image} item sm={4} md={6} />
            <Grid item xs={12} sm={8} md={6}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography className={classes.Logo} variant="h2" gutterBottom>
                            PicTalk
                        </Typography>
                        {formatValidation && (
                            <Alert variant="outlined" severity="error">
                                Invalid Email format — check it out!
                            </Alert>
                        )}
                        {authValidation && (
                            <Alert variant="outlined" severity="error">
                                Invalid given Email/Password — check it out!
                            </Alert>
                        )}
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={handleInputChanges}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handleInputChanges}
                            />
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                className={classes.submit}
                                disabled={!email || !password}
                                onClick={handlePostData}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/signup" style={{ textDecoration: "none" }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Login;
