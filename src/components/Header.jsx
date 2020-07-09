import React, { Component } from 'react';
import logoSVG from '../svg/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export default class Header extends Component {
  render() {
    return (
      <HeaderComponent className='header-container'>
        <div className='header-top'>
          <img src={logoSVG} alt='logo_svg' />
          <NavLink className='signIn-btn' to='/signin'>
            sign In
          </NavLink>
        </div>
      </HeaderComponent>
    );
  }
}

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.25rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
  }
`;
