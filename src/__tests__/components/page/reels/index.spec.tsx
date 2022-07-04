/**
 * @jest-environment jsdom
 */
import React from 'react';

import ReelIndex from '../../../../components/page/reels/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('ReelIndex', () => {
  const { asFragment } = render(<ReelIndex />);
  expect(asFragment()).toMatchSnapshot();
});