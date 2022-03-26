/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import  { useSession } from "next-auth/react";
import  { Session } from "next-auth";
import FieldForm from '../../../../components/model/fields/FieldForm';

jest.mock("next-auth/react")


test('FieldForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { asFragment } = render(<FieldForm />);
  expect(asFragment()).toMatchSnapshot();
});