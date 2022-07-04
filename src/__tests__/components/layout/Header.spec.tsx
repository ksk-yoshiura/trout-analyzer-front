/**
 * @jest-environment jsdom
 */
import React from 'react';

import Header from '../../../components/layout/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

jest.mock("next-auth/react")

test('Header', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});