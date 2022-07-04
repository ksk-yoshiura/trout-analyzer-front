/**
 * @jest-environment jsdom
 */
import React from 'react';

import FieldsList from '../../../../components/model/fields/FieldsList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('FieldsList', () => {
  const { asFragment } = render(<FieldsList />);
  expect(asFragment()).toMatchSnapshot();
});