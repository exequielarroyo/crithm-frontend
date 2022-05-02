import { useContext } from 'react';
import { AuthContext } from '../helpers/Protected';

export default function useAuth() {
  return useContext(AuthContext);
}
