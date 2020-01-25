import styled from 'styled-components';

const DashboardPageStyle = styled.section`
  background-color: #e3e8ee;
  display: grid;
  column-gap: 40px;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'GlobalSideNav GlobalContent';

  /* Side Nav */
  #GlobalSideNav {
    width: 300px;
    background-color: var(--white, #fff);
    height: 100vh;
    overflow: auto;
    grid-area: GlobalSideNav;

    .title {
      font-size: 20px;
      font-weight: 700;
      padding: 20px;
      font-weight: 500;
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

  /* Global content */
  #GlobalContent {
    grid-area: GlobalContent;
  }
`;

export default DashboardPageStyle;
