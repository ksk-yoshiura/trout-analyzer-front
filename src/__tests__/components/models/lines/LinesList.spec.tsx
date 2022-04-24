/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import LinesList from '../../../../components/model/lines/LinesList';

test('LinesList', () => {
  const isTackle = true
  const { asFragment } = render(<LinesList isTackle={isTackle} />);
  expect(asFragment()).toMatchSnapshot();
});