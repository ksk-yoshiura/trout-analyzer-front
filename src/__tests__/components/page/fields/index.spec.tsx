/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import FieldIndex from '../../../../components/page/fields/index';

test('FieldIndex', () => {
  const { asFragment } = render(<FieldIndex />);
  expect(asFragment()).toMatchSnapshot();
});