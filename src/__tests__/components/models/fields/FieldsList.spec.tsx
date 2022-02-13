/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import FieldsList from '../../../../components/model/fields/FieldsList';

test('FieldsList', () => {
  const { asFragment } = render(<FieldsList />);
  expect(asFragment()).toMatchSnapshot();
});