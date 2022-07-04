/**
 * @jest-environment jsdom
 */
import React from 'react';

import SideMenuMobileBox from '../../../../components/layout/side_menu/SideMenuMobileBox';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('SideMenuMobileBox', () => {
  const { asFragment } = render(<SideMenuMobileBox />);
  expect(asFragment()).toMatchSnapshot();
});