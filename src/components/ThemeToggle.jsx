import React from 'react'
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsSunFill,
  BsMoonFill,
} from 'react-icons/bs'
import { useDashboardContext } from '../pages/DashboardLayout'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext()
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  )
}

export default ThemeToggle

//css
import styled from 'styled-components'

const Wrapper = styled.div`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`
