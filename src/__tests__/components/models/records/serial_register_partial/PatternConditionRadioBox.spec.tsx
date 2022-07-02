/**
 * @jest-environment jsdom
 */
import React from 'react';

import PatternConditionRadioBox from '../../../../../components/model/records/serial_register_partial/PatternConditionRadioBox';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

test('PatternConditionRadioBox', () => {
  // タイプ
  const typeNum = 1
  const { asFragment } = render(<PatternConditionRadioBox typeNum={typeNum}
  />);
  expect(asFragment()).toMatchSnapshot();
});