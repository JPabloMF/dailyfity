import React from 'react';
import { connect } from 'react-redux';

/* Components */
import Header from '../../components/header';
import List from "../../components/list";

/* Utils */
import { GlobalStyle } from '../../utils/styles';

interface Props {
  colorTheme: string;
  dispatch: any;
  path: string;
}

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
