/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import Header from '../../../components/layout/Header';

jest.mock("next-auth/react")

test('Header', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});