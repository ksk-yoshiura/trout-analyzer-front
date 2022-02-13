/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import TacklesList from '../../../../components/model/tackles/TacklesList';

test('TacklesList', () => {
  const { asFragment } = render(<TacklesList />);
  expect(asFragment()).toMatchSnapshot();
});