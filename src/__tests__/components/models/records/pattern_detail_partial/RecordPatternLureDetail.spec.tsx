/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordPatternLureDetail from '../../../../../components/model/records/pattern_detail_partial/RecordPatternLureDetail';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

test('RecordPatternLureDetail', () => {
  // ルアー
  const lureProps = {
    'lureName': 'good spoon',
    'lureCompany': 'daiwa',
    'lureColor': 'red',
    'lureWeight': '7',
    'lureImage': {
      'image_file': 'url'
    }
  }
  const { asFragment } = render(<RecordPatternLureDetail
    lureName={lureProps.lureName}
    lureCompany={lureProps.lureCompany}
    lureColor={lureProps.lureColor}
    lureWeight={lureProps.lureWeight}
    lureImage={lureProps.lureImage}
  />);
  expect(asFragment()).toMatchSnapshot();
});