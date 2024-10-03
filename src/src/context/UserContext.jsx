import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext()

export const MyProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  
  const logout = () => { setToken(false) }

  const value = { token, setToken, logout };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  )
}

export const useUser = () => useContext(MyContext)

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};