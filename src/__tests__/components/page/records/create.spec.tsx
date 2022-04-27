/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordCreate from '../../../../components/page/records/create';

test('RecordCreate', () => {

  const { asFragment } = render(<RecordCreate />);
  expect(asFragment()).toMatchSnapshot();
});