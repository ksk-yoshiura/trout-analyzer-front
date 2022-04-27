/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import RecordStartingForm from '../../../../components/model/records/RecordStartingForm';

jest.mock("next-auth/react")

test('RecordStartingForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { asFragment } = render(<RecordStartingForm />);
  expect(asFragment()).toMatchSnapshot();
});