/**
 * @jest-environment jsdom
 */
import React from 'react';

import FieldEdit from '../../../../components/page/fields/edit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('FieldEdit', () => {
  const { asFragment } = render(<FieldEdit />);
  expect(asFragment()).toMatchSnapshot();
});