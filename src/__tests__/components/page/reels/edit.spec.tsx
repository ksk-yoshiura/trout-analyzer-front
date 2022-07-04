/**
 * @jest-environment jsdom
 */
import React from 'react';

import ReelEdit from '../../../../components/page/reels/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('ReelEdit', () => {
  const { asFragment } = render(<ReelEdit />);
  expect(asFragment()).toMatchSnapshot();
});