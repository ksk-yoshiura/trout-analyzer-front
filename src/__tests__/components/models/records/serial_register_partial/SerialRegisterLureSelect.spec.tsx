/**
 * @jest-environment jsdom
 */
import React from 'react';

import SerialRegisterLureSelect from '../../../../../components/model/records/serial_register_partial/SerialRegisterLureSelect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../../utils';

test('SerialRegisterLureSelect', () => {
  // ルアータイプID
  const lureTypeId = '1'
  // const { asFragment } = render(<SerialRegisterLureSelect lureTypeId={lureTypeId} />);
  // expect(asFragment()).toMatchSnapshot();
});