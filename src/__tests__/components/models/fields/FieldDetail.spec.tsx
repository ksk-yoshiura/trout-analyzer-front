/**
 * @jest-environment jsdom
 */
import React from 'react';

import FieldDetail from '../../../../components/model/fields/FieldDetail';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('FieldDetail', () => {
  // ID
  const chosenId = 1
  const { asFragment } = render(<FieldDetail chosenId={chosenId} />);
  expect(asFragment()).toMatchSnapshot();
});