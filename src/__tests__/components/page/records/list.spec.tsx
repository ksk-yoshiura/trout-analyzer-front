/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordsList from '../../../../components/page/records/list';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordsList', () => {

  const { asFragment } = render(<RecordsList />);
  expect(asFragment()).toMatchSnapshot();
});