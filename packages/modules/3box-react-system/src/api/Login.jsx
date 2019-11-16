/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react';
import { Span } from '@horizin/design-system-atoms';
import { BoxInject } from '3box-react-state';
import { useOpenRequestEffect } from './effects';
import Avatar from './Avatar';

/* --- React Component --- */
const Login = ({ box, ...props }) => {
  const [request, setRequest] = useState();
  const login = useOpenRequestEffect(box, { request });

  // console.log(login, 'login effects')
  // const login = {}

  /* --- Effects --- */
  return (
    <>
      {
        <Span onClick={() => setRequest(true)}>
          {!login.isDispatched && !login.isLoggedIn
            ? !React.isValidElement(props.componentIsLoggedOut)
              ? React.createElement(props.componentIsLoggedOut)
              : props.componentIsLoggedOut || null
            : null}
        </Span>
      }

      {login.isDispatched && !login.isLoggedIn
        ? !React.isValidElement(props.componentIsLoading)
          ? React.createElement(props.componentIsLoading)
          : props.componentIsLoading || null
        : null}

      {login.isLoggedIn && (
        <Span>
          {props.children || !React.isValidElement(props.componentIsLoggedIn)
            ? React.createElement(props.componentIsLoggedIn)
            : props.componentIsLoggedIn || null}
        </Span>
      )}
    </>
  );
};

Login.defaultProps = {
  componentIsLoggedOut: <Avatar />,
  componentIsLoading: <Avatar />,
  componentIsLoggedIn: <Avatar />
};

Login.propTypes = {
  spaceAuto: PropTypes.bool
};

export default props => (
  <BoxInject>
    <Login {...props} />
  </BoxInject>
);
