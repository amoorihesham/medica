import { createContext, ReactNode, useContext, useState } from 'react';

type ContextType = {
  authStatus: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<boolean>;
  setAuthStatusHandler: React.Dispatch<string>;
};

const AuthContext = createContext<ContextType | null>(null);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<string>('register');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const setAuthStatusHandler = (authStatus: string) => {
    setAuthStatus(authStatus);
  };
  return <AuthContext.Provider value={{ authStatus, setAuthStatusHandler, modalOpen, setModalOpen }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthStatus = () => {
  return useContext(AuthContext);
};
