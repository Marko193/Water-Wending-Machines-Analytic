import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Row, Col, Alert, Container, CardBody, Card } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { userLogin } from '../../store/actions';

// import images
import waterLogo from '../../assets/images/water-image-logo.png';

const Login = (props) => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    console.log(login, password, remember);
    dispatch(userLogin(login, password, props.history, remember));
  };

  const userSignin = useSelector((state) => state.Login);
  const { userData, accessToken } = userSignin;

  useEffect(() => {
    if (userData && accessToken) {
      console.log("LOGIN", props.history);
      props.history.push('/dashboard');
    }
  }, [props.history, userData]);

  // handleValidSubmit
  // const handleValidSubmit = (event, values) => {
  //   console.log(values)
  //   props.loginUser(values, props.history)
  // }

  // const signIn = (res, type) => {
  //   const { socialLogin } = props
  //   if (type === "google" && res) {
  //     const postData = {
  //       name: res.profileObj.name,
  //       email: res.profileObj.email,
  //       token: res.tokenObj.access_token,
  //       idToken: res.tokenId,
  //     }
  //     socialLogin(postData, props.history, type)
  //   } else if (type === "facebook" && res) {
  //     const postData = {
  //       name: res.name,
  //       email: res.email,
  //       token: res.accessToken,
  //       idToken: res.tokenId,
  //     }
  //     socialLogin(postData, props.history, type)
  //   }
  // }

  //handleGoogleLoginResponse
  // const googleResponse = response => {
  //   signIn(response, "google")
  // }

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  // const facebookResponse = response => {
  //   signIn(response, "facebook")
  // }

  useEffect(() => {
    document.body.className = 'authentication-bg';
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = '';
    };
  });

  return (
    <React.Fragment>
      <Container id="login-form-container">
        <Row className="d-flex justify-content-end  h-100 p-0">
          <Col md={12} lg={7} xl={8} className="h-100 p-0">
            <Card className="h-100">
              <CardBody className="p-4">
                <div className="text-center">
                  <Link to="/">
                    <img src={waterLogo} alt="" height="22" id="water-logo-img" />
                  </Link>
                </div>
                <div className="p-2 mt-4">
                  <AvForm
                    className="form-horizontal"
                  // onValidSubmit={(e, v) => {
                  //   handleValidSubmit(e, v)
                  // }}
                  >
                    {props.error && typeof props.error === 'string' ? (
                      <Alert color="danger">{props.error}</Alert>
                    ) : null}

                    <div className="mb-3">
                      <AvField
                        name="login"
                        label="Логин"
                        value={login}
                        onInput={(e) => loginHandler(e)}
                        className="form-control"
                        placeholder="Введите логин"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      {/* <div className="float-end">
                        <Link to="/forgot-password" className="text-muted">Забыли пароль?</Link>
                      </div> */}
                      <AvField
                        name="password"
                        label="Пароль"
                        value={password}
                        onInput={(e) => passwordHandler(e)}
                        type="password"
                        required
                        placeholder="Введите пароль"
                      />
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customControlInline"
                        onChange={() => setRemember((prev) => !prev)}
                      />
                      <label className="form-check-label" htmlFor="customControlInline">
                        Запомнить меня
                      </label>
                    </div>

                    <div className="mt-3">
                      <button className="btn btn-primary w-100 waves-effect waves-light" onClick={submitHandler}>
                        Войти
                      </button>
                    </div>

                    {/*<div className="mt-4 text-center">*/}
                    {/*  <h5 className="font-size-14 mb-3">Sign in with</h5>*/}

                    {/*  <ul className="list-inline">*/}
                    {/*    <li className="list-inline-item">*/}
                    {/*      <FacebookLogin*/}
                    {/*        appId={facebook.APP_ID}*/}
                    {/*        autoLoad={false}*/}
                    {/*        callback={facebookResponse}*/}
                    {/*        render={renderProps => (*/}
                    {/*          <Link*/}
                    {/*            to="#"*/}
                    {/*            className="social-list-item bg-primary text-white border-primary"*/}
                    {/*            onClick={renderProps.onClick}*/}
                    {/*          >*/}
                    {/*            <i className="mdi mdi-facebook" />*/}
                    {/*          </Link>*/}
                    {/*        )}*/}
                    {/*      />*/}
                    {/*    </li>*/}
                    {/*    /!*<li className="list-inline-item">*!/*/}
                    {/*    /!*  <TwitterLogin*!/*/}
                    {/*    /!*    loginUrl={*!/*/}
                    {/*    /!*      "http://localhost:4000/api/v1/auth/twitter"*!/*/}
                    {/*    /!*    }*!/*/}
                    {/*    /!*    onSuccess={this.twitterResponse}*!/*/}
                    {/*    /!*    onFailure={this.onFailure}*!/*/}
                    {/*    /!*    requestTokenUrl={*!/*/}
                    {/*    /!*      "http://localhost:4000/api/v1/auth/twitter/revers"*!/*/}
                    {/*    /!*    }*!/*/}
                    {/*    /!*    showIcon={false}*!/*/}
                    {/*    /!*    tag={"div"}*!/*/}
                    {/*    /!*  >*!/*/}
                    {/*    /!*    <a*!/*/}
                    {/*    /!*      href=""*!/*/}
                    {/*    /!*      className="social-list-item bg-info text-white border-info"*!/*/}
                    {/*    /!*    >*!/*/}
                    {/*    /!*      <i className="mdi mdi-twitter"/>*!/*/}
                    {/*    /!*    </a>*!/*/}
                    {/*    /!*  </TwitterLogin>*!/*/}
                    {/*    /!*</li>*!/*/}
                    {/*    <li className="list-inline-item">*/}
                    {/*      <GoogleLogin*/}
                    {/*        clientId={google.CLIENT_ID}*/}
                    {/*        render={renderProps => (*/}
                    {/*          <Link*/}
                    {/*            to="#"*/}
                    {/*            className="social-list-item bg-danger text-white border-danger"*/}
                    {/*            onClick={renderProps.onClick}*/}
                    {/*          >*/}
                    {/*            <i className="mdi mdi-google" />*/}
                    {/*          </Link>*/}
                    {/*        )}*/}
                    {/*        onSuccess={googleResponse}*/}
                    {/*        onFailure={() => { }}*/}
                    {/*      />*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</div>*/}
                    {/*<div className="mt-4 text-center">*/}
                    {/*  <p className="mb-0">Don't have an account ? <a href="/register" className="fw-medium text-primary"> Signup now </a> </p>*/}
                    {/*</div>*/}
                  </AvForm>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
};

// ********************************************

// import PropTypes from 'prop-types'
// import React, { useEffect } from "react"

// import { Row, Col, Alert, Container, CardBody, Card } from "reactstrap"

// // Redux
// import { connect } from "react-redux"
// import { withRouter, Link } from "react-router-dom"

// // availity-reactstrap-validation
// import { AvForm, AvField } from "availity-reactstrap-validation"

// //Social Media Imports
// import { GoogleLogin } from "react-google-login"
// // import TwitterLogin from "react-twitter-auth"
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

// // actions
// import { loginUser, apiError, socialLogin } from "../../store/actions"

// // import images
// import waterLogo from "../../assets/images/water-image-logo.png"

// //Import config
// import { facebook, google } from "../../config"

// const Login = (props) => {
//   // handleValidSubmit
//   const handleValidSubmit = (event, values) => {
//     console.log(values)
//     props.loginUser(values, props.history)
//   }

//   const signIn = (res, type) => {
//     const { socialLogin } = props
//     if (type === "google" && res) {
//       const postData = {
//         name: res.profileObj.name,
//         email: res.profileObj.email,
//         token: res.tokenObj.access_token,
//         idToken: res.tokenId,
//       }
//       socialLogin(postData, props.history, type)
//     } else if (type === "facebook" && res) {
//       const postData = {
//         name: res.name,
//         email: res.email,
//         token: res.accessToken,
//         idToken: res.tokenId,
//       }
//       socialLogin(postData, props.history, type)
//     }
//   }

//   //handleGoogleLoginResponse
//   const googleResponse = response => {
//     signIn(response, "google")
//   }

//   //handleTwitterLoginResponse
//   // const twitterResponse = e => {}

//   //handleFacebookLoginResponse
//   const facebookResponse = response => {
//     signIn(response, "facebook")
//   }

//   useEffect(() => {
//     document.body.className = "authentication-bg";
//     // remove classname when component will unmount
//     return function cleanup() {
//       document.body.className = "";
//     };
//   });

//   return (
//     <React.Fragment>
//       <Container id="login-form-container">
//         <Row className="d-flex justify-content-end  h-100 p-0">
//           <Col md={12} lg={8} xl={9} className="h-100 p-0">
//             <Card className="h-100">
//               <CardBody className="p-4">
//                 <div className="text-center">
//                   <Link to="/">
//                     <img src={waterLogo} alt="" height="22" id="water-logo-img" />
//                   </Link>
//                 </div>
//                 <div className="p-2 mt-4">
//                   <AvForm
//                     className="form-horizontal"
//                     onValidSubmit={(e, v) => {
//                       handleValidSubmit(e, v)
//                     }}
//                   >
//                     {props.error && typeof props.error === "string" ? (
//                       <Alert color="danger">{props.error}</Alert>
//                     ) : null}

//                     <div className="mb-3">
//                       <AvField
//                         name="email"
//                         label="Логин"
//                         value="admin@themesbrand.com"
//                         className="form-control"
//                         placeholder="Введите логин"
//                         type="email"
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <div className="float-end">
//                         <Link to="/forgot-password" className="text-muted">Забыли пароль?</Link>
//                       </div>
//                       <AvField
//                         name="password"
//                         label="Пароль"
//                         value="123456"
//                         type="password"
//                         required
//                         placeholder="Введите пароль"
//                       />
//                     </div>

//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customControlInline"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customControlInline"
//                       >
//                         Запомнить меня
//                         </label>
//                     </div>

//                     <div className="mt-3">
//                       <button
//                         className="btn btn-primary w-100 waves-effect waves-light"
//                         type="submit"
//                       >
//                         Войти
//                         </button>
//                     </div>

//                     {/*<div className="mt-4 text-center">*/}
//                     {/*  <h5 className="font-size-14 mb-3">Sign in with</h5>*/}

//                     {/*  <ul className="list-inline">*/}
//                     {/*    <li className="list-inline-item">*/}
//                     {/*      <FacebookLogin*/}
//                     {/*        appId={facebook.APP_ID}*/}
//                     {/*        autoLoad={false}*/}
//                     {/*        callback={facebookResponse}*/}
//                     {/*        render={renderProps => (*/}
//                     {/*          <Link*/}
//                     {/*            to="#"*/}
//                     {/*            className="social-list-item bg-primary text-white border-primary"*/}
//                     {/*            onClick={renderProps.onClick}*/}
//                     {/*          >*/}
//                     {/*            <i className="mdi mdi-facebook" />*/}
//                     {/*          </Link>*/}
//                     {/*        )}*/}
//                     {/*      />*/}
//                     {/*    </li>*/}
//                     {/*    /!*<li className="list-inline-item">*!/*/}
//                     {/*    /!*  <TwitterLogin*!/*/}
//                     {/*    /!*    loginUrl={*!/*/}
//                     {/*    /!*      "http://localhost:4000/api/v1/auth/twitter"*!/*/}
//                     {/*    /!*    }*!/*/}
//                     {/*    /!*    onSuccess={this.twitterResponse}*!/*/}
//                     {/*    /!*    onFailure={this.onFailure}*!/*/}
//                     {/*    /!*    requestTokenUrl={*!/*/}
//                     {/*    /!*      "http://localhost:4000/api/v1/auth/twitter/revers"*!/*/}
//                     {/*    /!*    }*!/*/}
//                     {/*    /!*    showIcon={false}*!/*/}
//                     {/*    /!*    tag={"div"}*!/*/}
//                     {/*    /!*  >*!/*/}
//                     {/*    /!*    <a*!/*/}
//                     {/*    /!*      href=""*!/*/}
//                     {/*    /!*      className="social-list-item bg-info text-white border-info"*!/*/}
//                     {/*    /!*    >*!/*/}
//                     {/*    /!*      <i className="mdi mdi-twitter"/>*!/*/}
//                     {/*    /!*    </a>*!/*/}
//                     {/*    /!*  </TwitterLogin>*!/*/}
//                     {/*    /!*</li>*!/*/}
//                     {/*    <li className="list-inline-item">*/}
//                     {/*      <GoogleLogin*/}
//                     {/*        clientId={google.CLIENT_ID}*/}
//                     {/*        render={renderProps => (*/}
//                     {/*          <Link*/}
//                     {/*            to="#"*/}
//                     {/*            className="social-list-item bg-danger text-white border-danger"*/}
//                     {/*            onClick={renderProps.onClick}*/}
//                     {/*          >*/}
//                     {/*            <i className="mdi mdi-google" />*/}
//                     {/*          </Link>*/}
//                     {/*        )}*/}
//                     {/*        onSuccess={googleResponse}*/}
//                     {/*        onFailure={() => { }}*/}
//                     {/*      />*/}
//                     {/*    </li>*/}
//                     {/*  </ul>*/}
//                     {/*</div>*/}
//                     {/*<div className="mt-4 text-center">*/}
//                     {/*  <p className="mb-0">Don't have an account ? <a href="/register" className="fw-medium text-primary"> Signup now </a> </p>*/}
//                     {/*</div>*/}

//                   </AvForm>

//                 </div>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </React.Fragment>
//   )
// }

// const mapStateToProps = state => {
//   const { error } = state.Login
//   return { error }
// }

// export default withRouter(
//   connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
// )

// Login.propTypes = {
//   error: PropTypes.any,
//   history: PropTypes.object,
//   loginUser: PropTypes.func,
//   socialLogin: PropTypes.func
// }
