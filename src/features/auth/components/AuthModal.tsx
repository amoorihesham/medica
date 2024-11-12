import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuthStatus } from '@/context/AuthContext';
import { UserCheck, UserPlusIcon } from 'lucide-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const AuthModal = () => {
  const { authStatus, setAuthStatusHandler, modalOpen, setModalOpen } = useAuthStatus();

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={() => setModalOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='mb-4'>Join us now</DialogTitle>
          <div className='w-full flex justify-center gap-4'>
            <Button
              className={`${
                authStatus === 'login' ? 'bg-mainPrimaryColor text-white hover:bg-primaryLighter hover:text-white' : ' text-mainPrimaryColor border-mainPrimaryColor'
              } w-full`}
              variant='outline'
              onClick={() => setAuthStatusHandler('login')}>
              Login
            </Button>
            <Button
              className={`${
                authStatus === 'register' ? 'bg-mainPrimaryColor text-white hover:bg-primaryLighter hover:text-white' : ' text-mainPrimaryColor border-mainPrimaryColor'
              } w-full`}
              variant='outline'
              onClick={() => setAuthStatusHandler('register')}>
              Register
            </Button>
          </div>
        </DialogHeader>

        {authStatus === 'register' ? <RegisterForm /> : <LoginForm />}
      </DialogContent>
      <DialogClose />
    </Dialog>
  );
};

export default AuthModal;
