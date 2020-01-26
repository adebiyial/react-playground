import styled from 'styled-components';

const LandingPageStyle = styled.section`
  /* Global Header */
  header.globalHeader {
    height: var(--navHeight, 70px);

    .globalNav {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .globalNavStart {
        display: inherit;
        align-items: inherit;

        .logoIcon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #140b1c;
          margin-right: 20px;
        }

        .logoTitle {
          text-transform: uppercase;
          font-weight: var(--fw-bold, 600);
          font-size: 23px;
        }
      }

      .globalNavEnd {
        a {
          font-size: 19px;
          font-weight: 500;
          text-transform: capitalize;
          color: var(--black, #222);
        }

        .about {
          margin-right: 20px;
        }
      }
    }
  }

  /* Global Landing*/
  .globalLanding {
    height: calc(100vh - var(--navHeight) * 5);
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-content: center;
    gap: 100px;

    .globalLandingStart {
      .title {
        font-size: 73px;
        margin-bottom: 20px;
      }

      .subTitle {
        font-size: 20px;
        line-height: 1.5;
      }
    }

    .globalLandingEnd {
      outline: 2px dashed black;
      display: inherit;
      place-items: center;

      .animatedBlock {
        --dimension: 50%;
        width: var(--dimension);
        height: var(--dimension);
        background-color: var(--black, #222);
        box-shadow: inset 0 0 0px 5px #554040;
        animation: breathe 30s linear 0s infinite alternate forwards;
        animation-play-state: paused;

        @keyframes breathe {
          to {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

export default LandingPageStyle;
