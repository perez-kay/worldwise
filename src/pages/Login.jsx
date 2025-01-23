import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import PageNav from '../Components/PageNav';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('DgrT7&LZE@2M*Qh%P');
  const { login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) navigate('/app'), { replace: true };
    },
    [isAuthenticated, navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Log In</Button>
        </div>
      </form>
    </main>
  );
}
