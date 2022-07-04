/**
 * @jest-environment jsdom
 */
import React from 'react';

import TacklesList from '../../../../components/model/tackles/TacklesList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('TacklesList', () => {
  const { asFragment } = render(<TacklesList />);
  expect(asFragment()).toMatchSnapshot();
});