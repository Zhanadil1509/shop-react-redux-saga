import styled from 'styled-components'

export const Sidebar = styled.div`
  border: 1px solid #e1e8ed;
  background: #ffffff;
  &#left-sidebar {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 240px;
    height: 100%;
    position: fixed;
    left: 0px;
    z-index: 9;
  }
`