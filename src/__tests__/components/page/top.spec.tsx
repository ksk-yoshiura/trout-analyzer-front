/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import TopPage from '../../../components/page/top';

test('TopPage', () => {
  const { asFragment } = render(<TopPage />);
  expect(asFragment()).toMatchSnapshot();
});