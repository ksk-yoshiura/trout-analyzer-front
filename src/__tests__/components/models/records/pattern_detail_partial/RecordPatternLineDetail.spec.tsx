/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import RecordPatternLineDetail from '../../../../../components/model/records/pattern_detail_partial/RecordPatternLineDetail';

test('RecordPatternLineDetail', () => {
  // ライン
  const lineProps = { 
    'lineName': 'good line',
    'lineThickness': '2',
    'lineCompany': 'daiwa',
    'lineType': 'PE',
  }

  const { asFragment } = render(<RecordPatternLineDetail 
    lineName={lineProps.lineName} 
    lineThickness={lineProps.lineThickness}
    lineCompany={lineProps.lineCompany}
    lineType={lineProps.lineType}
  />);
  expect(asFragment()).toMatchSnapshot();
});