import styled from 'styled-components';

const LoaderStyle = styled.div`
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #globalContentLoaderBlock {
    margin-top: var(--navHeight);
  }

  .spinner {
    position: relative;
    animation: rotate-all 1s linear infinite;
    width: 50px;
    height: 50px;
    border-color: black;
    margin-bottom: 20px;
  }

  .right-side,
  .left-side {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
  }

  .left-side {
    left: 0;
  }

  .right-side {
    right: 0;
  }

  .bar {
    width: 100%;
    height: 100%;
    border-radius: 200px 0 0 200px;
    border-style: solid;
    position: relative;
    border-width: 4px;
  }

  .right-side .bar {
    border-radius: 0 200px 200px 0;
    border-left: none;
    transform-origin: left center;
    animation: rotate-right 0.75s linear infinite alternate;
  }

  .left-side .bar {
    border-right: none;
    transform-origin: right center;
    animation: rotate-left 0.75s linear infinite alternate;
  }

  @keyframes rotate-left {
    to {
      transform: rotate(30deg);
    }
    from {
      transform: rotate(175deg);
    }
  }
  @keyframes rotate-right {
    from {
      transform: rotate(-175deg);
    }
    to {
      transform: rotate(-30deg);
    }
  }
  @keyframes rotate-all {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .loaderMessageBlock {
    margin-top: 15px;

    .loaderMessage {
      text-align: center;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;
export default LoaderStyle;
