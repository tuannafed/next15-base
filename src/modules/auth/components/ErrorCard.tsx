'use client';

import { useSearchParams } from 'next/navigation';

import { AuthCard } from '@/components';
import constants from '@/constants';

enum Error {
  Configuration = 'Configuration',
  AccessDenied = 'AccessDenied',
  Verification = 'Verification',
  Default = 'Default',
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      There is a problem with the server configuration. Check if your options are correct. Please
      contact us if this error persists. Unique error code:{' '}
      <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
    </p>
  ),
  [Error.AccessDenied]: (
    <p>
      Usually occurs, when you restricted access through the signIn callback, or redirect callback.
      Please contact us if this error persists. Unique error code:{' '}
      <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
    </p>
  ),
  [Error.Verification]: (
    <p>
      Related to the Email provider. The token has expired or has already been used. Please contact
      us if this error persists. Unique error code:{' '}
      <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
    </p>
  ),
  [Error.Default]: (
    <p>
      Catch all, will apply, if none of the above matched. Please contact us if this error persists.
      Unique error code: <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
    </p>
  ),
};

export function ErrorCard() {
  const search = useSearchParams();
  const error = search.get('error') as Error;

  return (
    <AuthCard
      headerLabel="Oops! Something went wrong!"
      backButtonHref={constants.routePages.LOGIN_PAGE}
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        {errorMap[error] || 'Please contact us if this error persists.'}
      </div>
    </AuthCard>
  );
}
