/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '../../../utils';
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import RecordPatternDetailForm from '../../../../components/model/records/RecordPatternDetailForm';

jest.mock("next-auth/react")

test('RecordPatternDetailForm', () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Delta" },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
  const backLinkToPatternListPage = '/records/1/patterns/list';
  const patternData = {
    result: 1,
    speed: 1,
    depth: 1,
    weather: 1,
    lureId: 1,
    tackleId: 1,
    recordId: 1,
  }

  const { asFragment } = render(<RecordPatternDetailForm
    patternData={patternData}
    backLinkToPatternListPage={backLinkToPatternListPage}
  />);
  expect(asFragment()).toMatchSnapshot();
});