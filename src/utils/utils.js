import Cookies from 'js-cookie';

const COOKIE_NAME = 'gatsby-theme-password-protect';

export const setSessionPassword = passwordCandidate =>
  Cookies.set(COOKIE_NAME, passwordCandidate);

export const isAllowed = correctPassword =>
  Cookies.get(COOKIE_NAME) === correctPassword;
