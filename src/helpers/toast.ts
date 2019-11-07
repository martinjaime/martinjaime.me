import { toast, ToastId } from 'react-toastify';

export const notify = (message: ToastId) => {
  if (toast.isActive(message)) {
    return message;
  }

  return toast(message, { toastId: message });
};

export const notifyComingSoon = () => {
  notify('Coming soon!');
};
