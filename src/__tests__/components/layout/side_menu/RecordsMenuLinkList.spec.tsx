/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordsMenuLinkList from '../../../../components/layout/side_menu/RecordsMenuLinkList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordsMenuLinkList', () => {
  const { asFragment } = render(<RecordsMenuLinkList />);
  expect(asFragment()).toMatchSnapshot();
});