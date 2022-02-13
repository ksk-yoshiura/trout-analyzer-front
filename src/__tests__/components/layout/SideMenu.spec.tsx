/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';
import SideMenu from '../../../components/layout/SideMenu';

test('SideMenu', () => {
  const { asFragment } = render(<SideMenu />);
  expect(asFragment()).toMatchSnapshot();
});