/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';
import SerialRegisterLureSelect from '../../../../../components/model/records/serial_register_partial/SerialRegisterLureSelect';

test('SerialRegisterLureSelect', () => {
  // ルアータイプID
  const lureTypeId = '1'
  // const { asFragment } = render(<SerialRegisterLureSelect lureTypeId={lureTypeId} />);
  // expect(asFragment()).toMatchSnapshot();
});