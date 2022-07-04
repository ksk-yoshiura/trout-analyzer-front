/**
 * @jest-environment jsdom
 */
import React from 'react';

import FieldIndex from '../../../../components/page/fields/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('FieldIndex', () => {
  const { asFragment } = render(<FieldIndex />);
  expect(asFragment()).toMatchSnapshot();
});