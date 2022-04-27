/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import ReelEdit from '../../../../components/page/reels/edit';

test('ReelEdit', () => {
  const { asFragment } = render(<ReelEdit />);
  expect(asFragment()).toMatchSnapshot();
});