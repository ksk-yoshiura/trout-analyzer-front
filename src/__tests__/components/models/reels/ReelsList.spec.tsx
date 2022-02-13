/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import ReelsList from '../../../../components/model/reels/ReelsList';

test('ReelsList', () => {
  const { asFragment } = render(<ReelsList />);
  expect(asFragment()).toMatchSnapshot();
});