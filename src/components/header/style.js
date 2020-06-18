import styled from 'styled-components'

export const Nav = styled.nav`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: .5rem 1rem;
  &.top-navbar {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8;
    padding: 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
        border-bottom-color: rgba(255, 255, 255, 0.1);
    border-color: #e1e8ed;
    margin: 0;
    width: calc(100% - 240px);
    background: #ffffff;
  }
`