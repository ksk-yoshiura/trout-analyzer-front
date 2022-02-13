/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LinesList from '../../../../components/model/lines/LinesList';

test('LinesList', () => {
  const { asFragment } = render(<LinesList />);
  expect(asFragment()).toMatchSnapshot();
});