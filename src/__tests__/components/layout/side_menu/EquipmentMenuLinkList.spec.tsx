/**
 * @jest-environment jsdom
 */
import React from 'react';

import EquipmentMenuLinkList from '../../../../components/layout/side_menu/EquipmentMenuLinkList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('EquipmentMenuLinkList', () => {
  const { asFragment } = render(<EquipmentMenuLinkList />);
  expect(asFragment()).toMatchSnapshot();
});