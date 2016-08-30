import React from 'react';

const Greeting = ({currentUser, logout}) => {
  let text;
  if(currentUser){
    text = (<div>
              <span>Welcome {currentUser.username}!</span>
              <button onClick={logout}>Log out</button>
            </div>);
  } else{
    text = (<div className="sign-in-links">
              <a href='/#/login'>Sign in</a>
              <a href='/#/signup'>Sign up</a>
            </div>);
  }

  return (
    <div className='greetingArea'>
      {text}
    </div>
  );
};

export default Greeting;
