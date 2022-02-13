/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import Layout from '../../../components/layout/Layout';

test('Layout', () => {
  const { asFragment } = render(<Layout />);
  expect(asFragment()).toMatchSnapshot();
});