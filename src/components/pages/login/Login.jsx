import classes from '../../../styles/Login.module.css';
import Illustration from '../../helper/form/Illustration';
import Form from '../../helper/form/From';
import TextInput from '../../helper/inputFelid/TextInput';
import Button from '../../helper/button/Button';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
        <div className="column">
            <Illustration />
            <Form className={`${classes.login} form`} >
                <TextInput type="email" placeholder="Enter email"  icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password"  icon="lock" />
                <Button> 
                    <span>Login</span> 
                </Button>
                <div className="info"> Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
            </Form>
        </div> 
    </>
  )
}
