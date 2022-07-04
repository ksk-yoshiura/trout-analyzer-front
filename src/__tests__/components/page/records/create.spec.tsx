/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordCreate from '../../../../components/page/records/create';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordCreate', () => {

  const { asFragment } = render(<RecordCreate />);
  expect(asFragment()).toMatchSnapshot();
});