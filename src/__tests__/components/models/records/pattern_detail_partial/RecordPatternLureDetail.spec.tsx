/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import RecordPatternLureDetail from '../../../../../components/model/records/pattern_detail_partial/RecordPatternLureDetail';

test('RecordPatternLureDetail', () => {
  // ルアー
  const lureProps = { 
    'lureName': 'good spoon',
    'lureType': 'spoon',
    'lureCompany': 'daiwa',
    'lureColor': 'red',
    'lureWeight': '7',
  }
  const { asFragment } = render(<RecordPatternLureDetail 
    lureName={lureProps.lureName} 
    lureType={lureProps.lureType} 
    lureCompany={lureProps.lureCompany}
    lureColor={lureProps.lureColor}
    lureWeight={lureProps.lureWeight}
  />);
  expect(asFragment()).toMatchSnapshot();
});