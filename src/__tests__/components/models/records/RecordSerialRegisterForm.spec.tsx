/**
 * @jest-environment jsdom
 */
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from 'react';

import RecordSerialRegisterForm from '../../../../components/model/records/RecordSerialRegisterForm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';

jest.mock("next-auth/react")

test('RecordSerialRegisterForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  // レコードID
  const recordId = "1"
  const { asFragment } = render(<RecordSerialRegisterForm recordId={recordId} />);
  expect(asFragment()).toMatchSnapshot();
});