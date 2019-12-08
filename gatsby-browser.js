/* eslint-disable import/prefer-default-export, react/prop-types, consistent-return */
/**
 * Read-only the password from cookies
 */
import React from 'react';
import { getSessionPassword, getQueryPassword } from './src/utils/utils';
import PasswordProtect from './src/components/PasswordProtect';

export const wrapPageElement = ({ props }, themeOptions) => {
  const { location } = props;
  const passwordCandidate = getQueryPassword(location) || getSessionPassword();

  if (passwordCandidate === themeOptions.password) {
    return;
  }

  return <PasswordProtect />;
};
