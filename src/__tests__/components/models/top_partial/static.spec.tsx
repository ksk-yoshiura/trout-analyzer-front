/**
 * @jest-environment jsdom
 */
import React from 'react';

import TopStatistic from '../../../../components/model/top_partial/statistic';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

test('TopStatistic', () => {
  const { asFragment } = render(<TopStatistic />);
  expect(asFragment()).toMatchSnapshot();
});