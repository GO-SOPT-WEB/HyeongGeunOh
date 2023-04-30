const CommonButtonStyle = `
border: none;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
transition-duration: 0.3s;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1), 0px 3.6px 13px rgba(0, 0, 0, 0.07), 0px 8.4px 23px rgba(0, 0, 0, 0.06), 0px 23px 35px rgba(0, 0, 0, 0.05), 0px 4.5px 10px rgba(0, 0, 0, 0.05);
:hover {
  color: white;
  background-color: #a11818;
}
`;

const theme = {
  Background: '#F1C85E',
  SubBackground: '#ebccb0',
  Text: '#a11818',
  CardShadow:
    '0px 1px 5px rgba(0, 0, 0, 0.1), 0px 3.6px 13px rgba(0, 0, 0, 0.07), 0px 8.4px 23px rgba(0, 0, 0, 0.06), 0px 23px 35px rgba(0, 0, 0, 0.05), 0px 4.5px 10px rgba(0, 0, 0, 0.05);',
  CommonButtonStyle,
};

export default theme;
