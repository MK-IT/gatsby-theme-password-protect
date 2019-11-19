/* eslint-disable import/prefer-default-export, react/prop-types, consistent-return */
/**
 * Read-only the password from cookies
 */
import React from 'react';
import queryString from 'query-string';
import { getSessionPassword } from './src/utils/utils';
import PasswordProtect from './src/components/PasswordProtect';

export const wrapPageElement = ({ props }, themeOptions) => {
  const { location } = props;
  const { secret } = queryString.parse(location.search);

  const passwordCandidate = secret || getSessionPassword();

  if (passwordCandidate === themeOptions.password) {
    return;
  }

  return <PasswordProtect />;
};
