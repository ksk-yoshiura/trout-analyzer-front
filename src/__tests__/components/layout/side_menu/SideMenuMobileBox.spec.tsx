/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import SideMenuMobileBox from '../../../../components/layout/side_menu/SideMenuMobileBox';

test('SideMenuMobileBox', () => {
  const { asFragment } = render(<SideMenuMobileBox />);
  expect(asFragment()).toMatchSnapshot();
});