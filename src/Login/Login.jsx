import {
    Button,
    Container,
    Grid,
    TextField,
} from '@material-ui/core';
import LoginStyle from './Login.module.scss';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

function Login() {
    // Form states
    const {handleSubmit, register} = useForm();

    // Router history
    const history = useHistory();

    // onSubmit Handler
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        // Go to dashboard after login
        history.push("/dashboard");
    });

    return (
        <Container 
            className={LoginStyle.container} 
            maxWidth="xs"
        >
            <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={register}
                                    label="Email"
                                    name="email"
                                    size="small"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={register}
                                    label="Password"
                                    name="password"
                                    size="small"
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color="secondary"
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;