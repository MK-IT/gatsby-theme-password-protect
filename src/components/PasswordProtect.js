/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';

const styles = {
  wrapper: {
    height: '100vh',
    background: '#424242',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: '48px',
    borderRadius: '4px'
  },
  button: {
    width: '100%',
    height: '48px',
    background: 'rebeccapurple',
    color: '#fff',
    border: '1px solid rebeccapurple',
    borderRadius: '4px',
    marginTop: '16px',
    textTransform: 'uppercase',
    fontWeight: '300',
    fontFamily: 'sans-serif'
  },
  buttonHover: {
    background: '#fff',
    color: '#000000'
  },
  link: {
    color: '#fff',
    fontFamily: 'sans-serif'
  },
  linkHover: {
    color: 'dodgerblue'
  }
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const [isThemeHovered, themeHover] = useState(false);
  const [isSiteHovered, siteHover] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={{ color: '#fff' }}>Welcome</h1>
      <h4 style={{ color: '#fff' }}>Enter Password</h4>

      <form onSubmit={onSubmit} style={{ width: '320px' }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null)
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>
      </form>

      <a
        href="https://gitlab.com/mkit/open-source/gatsby-theme-password-protect#readme"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.link,
          ...(isThemeHovered ? styles.linkHover : null)
        }}
        onMouseEnter={() => themeHover(true)}
        onMouseLeave={() => themeHover(false)}
      >
        gatsby-theme-password-protect
      </a>
      <a
        href="https://mkit.io"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.link,
          ...(isSiteHovered ? styles.linkHover : null)
        }}
        onMouseEnter={() => siteHover(true)}
        onMouseLeave={() => siteHover(false)}
      >
        MK IT
      </a>
    </div>
  );
};

export default PasswordProtect;
