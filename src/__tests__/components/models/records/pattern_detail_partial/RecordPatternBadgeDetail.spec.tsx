/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import RecordPatternBadgeDetail from '../../../../../components/model/records/pattern_detail_partial/RecordPatternBadgeDetail';

test('RecordPatternBadgeDetail', () => {
  // バッヂ値
  const badgeProps = { 
    'result': 'caught',
    'lureType': 'spoon',
    'weather': 'sunny',
    'depth': 'bottom',
    'speed': 'fast',
  }
  const { asFragment } = render(<RecordPatternBadgeDetail 
    result={badgeProps.result} 
    lureType={badgeProps.lureType} 
    weather={badgeProps.weather}
    depth={badgeProps.depth}
    speed={badgeProps.speed}
  />);
  expect(asFragment()).toMatchSnapshot();
});