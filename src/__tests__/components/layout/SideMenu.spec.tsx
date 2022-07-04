/**
 * @jest-environment jsdom
 */
import React from 'react';

import SideMenu from '../../../components/layout/SideMenu';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../utils';

test('SideMenu', () => {
  const { asFragment } = render(<SideMenu />);
  expect(asFragment()).toMatchSnapshot();
});