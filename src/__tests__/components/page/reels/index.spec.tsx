/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import ReelIndex from '../../../../components/page/reels/index';

test('ReelIndex', () => {
  const { asFragment } = render(<ReelIndex />);
  expect(asFragment()).toMatchSnapshot();
});