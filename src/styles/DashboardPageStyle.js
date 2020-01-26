import styled from 'styled-components';

const DashboardPageStyle = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'GlobalSideNav GlobalContent';

  /* Side Nav */
  #GlobalSideNav {
    width: 300px;
    background-color: var(--white, #fff);
    height: 100vh;
    overflow: auto;
    grid-area: GlobalSideNav;
    border-right: 1px solid #e3e8ee;

    .title {
      font-size: 20px;
      font-weight: 700;
      display: flex;
      align-items: center;
      height: var(--navHeight);
      padding-left: 20px;
      text-transform: uppercase;
      background-color: var(--white, #fff);
      border-bottom: 1px solid #e3e8ee;
      color: var(--black, #222);
    }

    .topicsBlock {
      font-size: 18px;
      display: flex;
      flex-direction: column;
    }

    .topic {
      padding: 20px;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 10px;
      align-content: center;
      color: var(--black, #222);
      text-transform: capitalize;
      transition: 0.2s ease-out;
      font-weight: 600;

      &:hover {
        background-color: #e3e8ee;
      }
    }

    .topicIcon {
      width: 20px;
      height: 100%;
      background-color: black;
    }
  }

  .globalContent {
    position: relative;
  }

  /* Global Top Nav */
  #GlobalTopNav {
    height: var(--navHeight);
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e8ee;
    padding-left: 50px;
  }

  /* Global content */
  #GlobalContent {
    grid-area: GlobalContent;

    #content {
      padding: 50px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: hsla(0, 0%, 100%, 0.8);
    z-index: 10000;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease-in-out;
    transition: opacity 0.25s ease-in-out;
  }
`;

export default DashboardPageStyle;
