/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordsList from '../../../../components/page/records/list';

test('RecordsList', () => {

  const { asFragment } = render(<RecordsList />);
  expect(asFragment()).toMatchSnapshot();
});