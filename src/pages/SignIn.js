import React, { useContext, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AuthContext } from '../helpers/Protected';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const validationSchema = Yup.object().shape({
  //   username: Yup.string().required('Lagyan mo ng username'),
  //   password: Yup.string().required('Walang password'),
  // });

  const handleLogin = () => {
    console.log(process.env);
    axios.post(`${process.env.REACT_APP_URL}/auth`, { email, password }).then((res) => {
      setAuth(res.data);
      navigate('/defaults', { replace: true });
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
        <Form>
          <label>Username: </label>
          <ErrorMessage name='username' component='span' />
          <Field id='inputCreatePost' name='username' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password: </label>
          <ErrorMessage name='password' component='span' />
          <Field id='inputCreatePost' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
