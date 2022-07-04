/**
 * @jest-environment jsdom
 */
import React from 'react';

import SideMenuPCBox from '../../../../components/layout/side_menu/SideMenuPCBox';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('SideMenuPCBox', () => {
  const { asFragment } = render(<SideMenuPCBox />);
  expect(asFragment()).toMatchSnapshot();
});