/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import PreparationFieldSelect from '../../../../components/model/preparation/PreparationFieldSelect';

test('PreparationFieldSelect', () => {
  const { asFragment } = render(<PreparationFieldSelect />);
  expect(asFragment()).toMatchSnapshot();
});