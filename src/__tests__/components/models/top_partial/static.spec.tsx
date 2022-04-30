/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import TopStatistic from '../../../../components/model/top_partial/statistic';

test('TopStatistic', () => {
  const { asFragment } = render(<TopStatistic />);
  expect(asFragment()).toMatchSnapshot();
});