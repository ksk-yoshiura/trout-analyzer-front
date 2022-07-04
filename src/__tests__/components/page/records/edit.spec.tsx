/**
 * @jest-environment jsdom
 */
import React from 'react';

import RecordEdit from '../../../../components/page/records/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('RecordEdit', () => {

  const { asFragment } = render(<RecordEdit />);
  expect(asFragment()).toMatchSnapshot();
});