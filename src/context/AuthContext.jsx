import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = { user: null, isAuthenticated: false };

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'DgrT7&LZE@2M*Qh%P',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };

    case 'logout':
      return {
        ...state,
        user: initialState.user,
        isAuthenticated: initialState.isAuthenticated,
      };
    default:
      throw new Error('Unknown action');
  }
}

function AuthContextProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const value = useContext(AuthContext);
  if (value === undefined)
    throw new Error('Used AuthContext outside of Provider.');
  return value;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuthContext, AuthContextProvider };
