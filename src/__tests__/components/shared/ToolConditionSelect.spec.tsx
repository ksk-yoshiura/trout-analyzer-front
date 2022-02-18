/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import ToolConditionSelect from '../../../components/shared/ToolConditionSelect';

test('ToolConditionSelect', () => {
  const typeNum = 1
  const { asFragment } = render(<ToolConditionSelect typeNum={typeNum} />);
  expect(asFragment()).toMatchSnapshot();
});