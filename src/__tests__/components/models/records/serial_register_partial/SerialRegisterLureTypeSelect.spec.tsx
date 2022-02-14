/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import SerialRegisterLureTypeSelect from '../../../../../components/model/records/serial_register_partial/SerialRegisterLureTypeSelect';

test('SerialRegisterLureTypeSelect', () => {
  const { asFragment } = render(<SerialRegisterLureTypeSelect />);
  expect(asFragment()).toMatchSnapshot();
});