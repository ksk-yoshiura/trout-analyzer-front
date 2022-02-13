/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import Header from '../../../components/layout/Header';

test('Header', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});