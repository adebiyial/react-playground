import styled from 'styled-components';

const GlobalContentSectionStyle = styled.section`
  #globalContentSection {
    .heading {
      margin-bottom: 20px;

      .header {
        font-size: 32px;
      }
    }

    .content {
      .intro {
        font-size: 20px;
        margin-bottom: 20px;
      }

      button {
        font-size: 20px;
        padding: 5px 10px;
        margin-bottom: 20px;
        background-color: lightblue;
        border-radius: 4px;
        color: whitesmoke;
        background-color: rgb(84, 105, 212);
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export default GlobalContentSectionStyle;
