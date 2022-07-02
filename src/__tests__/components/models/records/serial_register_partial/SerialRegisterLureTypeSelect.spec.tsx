/**
 * @jest-environment jsdom
 */
import React from 'react';

import SerialRegisterLureTypeSelect from '../../../../../components/model/records/serial_register_partial/SerialRegisterLureTypeSelect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

test('SerialRegisterLureTypeSelect', () => {
  const { asFragment } = render(<SerialRegisterLureTypeSelect />);
  expect(asFragment()).toMatchSnapshot();
});