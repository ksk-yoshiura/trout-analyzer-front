/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import RecordPatternRodDetail from '../../../../../components/model/records/pattern_detail_partial/RecordPatternRodDetail';

test('RecordPatternRodDetail', () => {
  // ロッド
  const rodProps = { 
    'rodName': 'great rod',
    'rodHardness': 'L',
    'rodCompany': 'daiwa',
    'rodLength': '6',
  }
  const { asFragment } = render(<RecordPatternRodDetail 
    rodName={rodProps.rodName} 
    rodHardness={rodProps.rodHardness}
    rodCompany={rodProps.rodCompany}
    rodLength={rodProps.rodLength}
  />);
  expect(asFragment()).toMatchSnapshot();
});