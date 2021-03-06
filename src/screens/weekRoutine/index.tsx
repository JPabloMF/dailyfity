import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

/* Components */
import Header from '../../components/header';
import Tab from '../../components/tab';
import List from '../../components/list';
import TabPanel from '../../components/tabPanel';

/* Utils */
import { getWeekNumber, getDayOfWeek, hasPassedWeek } from '../../utils';
import { GlobalStyle } from '../../utils/styles';
import { changeThemeColor } from '../../store/actions';

/* DATA */
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
  const [value, setValue] = useState(getWeekNumber());
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const theme = localStorage.getItem('colorTheme');

    if (!theme) {
      window.localStorage.setItem('colorTheme', colorTheme);
    } else {
      dispatch(changeThemeColor(theme));
    }

    setData(MOCKDATA);
  }, []);

  const hasPassedDay = (day: string): boolean =>
    getDayOfWeek(day) > 0 && getDayOfWeek(day) < new Date().getDay();

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
      <Tab setValue={setValue} data={data} value={value} theme={theme}>
        {data.length &&
          data.map((week, indexWeek) => (
            <TabPanel
              key={indexWeek}
              value={value}
              index={indexWeek}
              dir={theme.direction}
            >
              {(week.routines as Array<object>).map(
                (routine: any, indexRoutine: number) => (
                  <List
                    key={indexRoutine}
                    day={routine.day}
                    muscles={routine.muscles}
                    checked={routine.checked}
                    indexWeek={indexWeek}
                    indexRoutine={indexRoutine}
                    data={data}
                    setData={setData}
                    passedDay={hasPassedDay(routine.day)}
                    passedWeek={hasPassedWeek(indexWeek)}
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
