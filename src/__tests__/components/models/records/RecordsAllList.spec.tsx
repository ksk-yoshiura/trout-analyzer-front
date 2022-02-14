/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordsAllList from '../../../../components/model/records/RecordsAllList';

test('RecordsAllList', () => {
  const { asFragment } = render(<RecordsAllList />);
  expect(asFragment()).toMatchSnapshot();
});