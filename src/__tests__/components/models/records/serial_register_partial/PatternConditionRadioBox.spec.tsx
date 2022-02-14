/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import PatternConditionRadioBox from '../../../../../components/model/records/serial_register_partial/PatternConditionRadioBox';

test('PatternConditionRadioBox', () => {
  // タイプ
  const typeNum = 1
  const { asFragment } = render(<PatternConditionRadioBox typeNum={typeNum}
  />);
  expect(asFragment()).toMatchSnapshot();
});