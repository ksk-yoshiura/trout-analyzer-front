/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordsMenuLinkList from '../../../../components/layout/side_menu/RecordsMenuLinkList';

test('RecordsMenuLinkList', () => {
  const { asFragment } = render(<RecordsMenuLinkList />);
  expect(asFragment()).toMatchSnapshot();
});