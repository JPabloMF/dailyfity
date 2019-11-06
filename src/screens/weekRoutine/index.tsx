import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

/* Components */
import Header from '../../components/header';
import Tab from '../../components/tab';
import List from '../../components/list';

/* Utils */
import { GlobalStyle } from '../../utils/styles';
import { changeThemeColor } from '../../store/actions';

interface Props {
  colorTheme: string;
  dispatch: any;
  path: string;
}

interface PropsStyledTitle {
  isWhiteTheme: boolean;
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
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

const mockData = [
  {
    title: 'Flex week',
    routines: [
      {
        day: 'Monday',
        muscles: [
          {
            name: 'Upper chest',
            exercises: [
              {
                name: 'Flights with dumbells',
                quantity: ['4 series', '12 > 10 > 12 > 6 reps'],
                Considerations: [
                  'For each serie take a rest of 30 seconds',
                  'When the reps'
                ],
                img: ''
              }
            ]
          },
          {
            name: 'Triceps',
            exercises: [
              {
                name: 'Trapezius with bar',
                quantity: ['4 series', '12 > 10 > 12 > 6 reps'],
                Considerations: [
                  'For each serie take a rest of 30 seconds',
                  'When the reps'
                ],
                img: ''
              }
            ]
          }
        ],
        checked: false
      }
    ]
  },
  { title: 'Week 1', routines: [{}, {}] },
  { title: 'Week 2', routines: [{}, {}] }
];

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

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3} style={{ padding: '0', paddingTop: '20px' }}>
          {children}
        </Box>
      </Typography>
    );
  }

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
        {mockData.map((week, indexWeek) => (
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
  global: { colorTheme }
}: {
  global: { colorTheme: string };
}) => ({
  colorTheme
});

export default connect(mapStateToProps)(WeekRoutine);
