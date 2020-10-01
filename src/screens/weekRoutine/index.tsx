import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

/* Components */
import Header from '../../components/header';
import Tab from '../../components/tab';
import List from '../../components/list';
import TabPanel from '../../components/tabPanel';

/* Utils */
import { GlobalStyle } from '../../utils/styles';
import { changeThemeColor } from '../../store/actions';
import { MOCKDATA } from '../../utils/mocks';

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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const theme = window.localStorage.getItem('colorTheme');
    if (!theme) {
      window.localStorage.setItem('colorTheme', colorTheme);
    } else {
      dispatch(changeThemeColor(theme));
    }
  }, []);

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
      <Tab setValue={setValue} value={value} theme={theme}>
        {MOCKDATA.map((week, indexWeek) => (
          <TabPanel
            key={indexWeek}
            value={value}
            index={indexWeek}
            dir={theme.direction}
          >
            {(week.routines as Array<object>).map(
              (routine: any, indexRoutine: number) => (
                <List
                  day={routine.day}
                  muscles={routine.muscles}
                  checked={routine.checked}
                  key={indexRoutine}
                />
              )
            )}
          </TabPanel>
        ))}
      </Tab>
    </div>
  );
};

const mapStateToProps = ({
  global: { colorTheme },
}: {
  global: { colorTheme: string };
}) => ({
  colorTheme,
});

export default connect(mapStateToProps)(WeekRoutine);
