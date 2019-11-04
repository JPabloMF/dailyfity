import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

/* Components */
import Header from '../../components/header';
import Tab from '../../components/tab';
import List from '../../components/list';

/* Utils */
import { GlobalStyle } from '../../utils/styles';

interface Props {
  colorTheme: string;
  dispatch: any;
  path: string;
}

interface PropsStyledTitle {
  isWhiteTheme: boolean;
}

/* Styles */
const StyledTitle = styled.p`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  color: ${(props: PropsStyledTitle) => (props.isWhiteTheme ? '#000' : '#fff')};
  & span {
    color: #c68bff;
  }
`;

const WeekRoutine = ({ colorTheme, dispatch }: Props) => {
  const isWhiteTheme = colorTheme === 'white' ? true : false;

  return (
    <div>
      <GlobalStyle whiteTheme={isWhiteTheme} />
      <Header
        whiteTheme={isWhiteTheme}
        colorTheme={colorTheme}
        dispatch={dispatch}
      />
      <StyledTitle isWhiteTheme={isWhiteTheme}>
        <span>¡Hello!</span> This is your fitness plan for this week
      </StyledTitle>
      <Tab />
      <List />
    </div>
  );
};

const mapStateToProps = ({
  global: { colorTheme }
}: {
  global: { colorTheme: string };
}) => ({
  colorTheme
});

export default connect(mapStateToProps)(WeekRoutine);
