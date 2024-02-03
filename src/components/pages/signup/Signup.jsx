import classes from '../../../styles/Signup.module.css';
import Illustration from '../../helper/form/Illustration';
import Form from '../../helper/form/From';
import TextInput from '../../helper/inputFelid/TextInput';
import Checkbox from '../../helper/inputFelid/Checkbox';
import Button from '../../helper/button/Button';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
        <div className="column">
            <Illustration />
            <Form className={`${classes.signup} form`} >
              <TextInput type="text" placeholder="Enter Name" icon="person" />
              <TextInput type="email" placeholder="Enter email"  icon="alternate_email" />
              <TextInput type="password" placeholder="Enter password"  icon="lock" />
              <TextInput type="password" placeholder="Confirm password"  icon="lock_clock" />
              <Checkbox text="I agree to the Terms & Conditions" />
              <Button> 
                <span>Submit Now</span>
              </Button>
              <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
              </div>
            </Form>
        </div> 
    </>
  )
}
