/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import SideMenuPCBox from '../../../../components/layout/side_menu/SideMenuPCBox';

test('SideMenuPCBox', () => {
  const { asFragment } = render(<SideMenuPCBox />);
  expect(asFragment()).toMatchSnapshot();
});