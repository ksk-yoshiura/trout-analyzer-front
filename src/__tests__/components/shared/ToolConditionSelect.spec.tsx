/**
 * @jest-environment jsdom
 */
import React from 'react';

import ToolConditionSelect from '../../../components/shared/ToolConditionSelect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('ToolConditionSelect', () => {
  const typeNum = 1
  const { asFragment } = render(<ToolConditionSelect typeNum={typeNum} />);
  expect(asFragment()).toMatchSnapshot();
});