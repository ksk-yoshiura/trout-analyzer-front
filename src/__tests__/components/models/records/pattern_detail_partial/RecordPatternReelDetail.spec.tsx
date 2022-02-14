/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import RecordPatternReelDetail from '../../../../../components/model/records/pattern_detail_partial/RecordPatternReelDetail';

test('RecordPatternReelDetail', () => {
  // リール
  const reelProps = { 
    'reelName': 'super reel',
    'reelType': '1000',
    'reelCompany': 'daiwa',
    'reelGear': 'HG',
  }
  const { asFragment } = render(<RecordPatternReelDetail 
    reelName={reelProps.reelName} 
    reelType={reelProps.reelType}
    reelCompany={reelProps.reelCompany}
    reelGear={reelProps.reelGear}
  />);
  expect(asFragment()).toMatchSnapshot();
});