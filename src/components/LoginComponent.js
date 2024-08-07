import React, { useEffect, useState } from 'react';
import Imports from '../commons/AllImports';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import LoginComponentThree from './LoginComponentThree';
import LoginComponentFour from './LoginComponentFour';
import 'firebase/auth';

const LoginComponent = () => {
  const [user, setUser] = useState(null);
  const [first, setFirst] = useState(true);
  const [signup, setSignup] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(person => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Clean up the subscription on component unmount
  }, []);

  const handleDisplay = () => {
    setFirst(false);
  };

  const handlePhone = () => {
    setFirst(true);
  };

  return (
    <>
      {signup ? (
        <Imports.Grid container xs={12} justifyContent='center' my={8}>
          <LoginComponentThree signup={signup} setSignup={setSignup} />
        </Imports.Grid>
      ) : (
        <LoginComponentFour
          first={first}
          setFirst={setFirst}
          handlePhone={handlePhone}
          handleDisplay={handleDisplay}
          setSignup={setSignup}
        />
      )}
    </>
  );
};

export default LoginComponent;
