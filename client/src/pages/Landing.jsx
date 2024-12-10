import React from 'react';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <img src={logo} alt='jobify' className='logo' />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby brunch crucifix synth selvage same blackbird spyplane.
              Ugh grailed art party VHS retro Brooklyn iPhone kitsch
              farm-to-table jawn cornhole pickled. Schlitz bruh Brooklyn ugh.
              Intelligentsia lo-fi la croix literally, crucifix subway tile ugh
              8-bit cupping. Hella 90's beard gochujang truffaut chambray tonx
              post-ironic pabst franzen helvetica ennui.
            </p>
            <Link to='/register' className='btn register-link'>
              Register
            </Link>
            <Link to='/login' className='btn'>
              Login / Demo User
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
