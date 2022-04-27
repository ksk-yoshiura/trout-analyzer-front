/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import RecordEdit from '../../../../components/page/records/edit';

test('RecordEdit', () => {

  const { asFragment } = render(<RecordEdit />);
  expect(asFragment()).toMatchSnapshot();
});