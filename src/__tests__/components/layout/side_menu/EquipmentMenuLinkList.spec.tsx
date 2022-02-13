/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import EquipmentMenuLinkList from '../../../../components/layout/side_menu/EquipmentMenuLinkList';

test('EquipmentMenuLinkList', () => {
  const { asFragment } = render(<EquipmentMenuLinkList />);
  expect(asFragment()).toMatchSnapshot();
});