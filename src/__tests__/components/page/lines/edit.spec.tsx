/**
 * @jest-environment jsdom
 */
import React from 'react';

import LineEdit from '../../../../components/page/lines/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('LineEdit', () => {
  const { asFragment } = render(<LineEdit />);
  expect(asFragment()).toMatchSnapshot();
});