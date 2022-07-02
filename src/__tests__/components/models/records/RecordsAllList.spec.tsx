/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordsAllList from '../../../../components/model/records/RecordsAllList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordsAllList', () => {
  const { asFragment } = render(<RecordsAllList />);
  expect(asFragment()).toMatchSnapshot();
});