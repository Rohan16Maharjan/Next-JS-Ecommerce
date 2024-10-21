import toast, { Toaster } from 'react-hot-toast';

const toastSuccess = (message: string) => {
  toast.success(message, {
    id: message,
    style: {
      border: '1px solid green',
      padding: '12px',
      marginTop: '-0.5rem',
      boxShadow: 'none',
    },
  });
};

const toastFail = (message: string) => {
  toast.error(message, {
    id: message,
    style: {
      border: '1px solid red',
      padding: '12px',
    },
  });
};

const toastPromise = (
  promiseAction: Promise<string | boolean>,
  id?: string,
  loadingMessage?: string,
  successMessage?: string,
  errorMessage?: string
) => {
  toast.promise(
    promiseAction,
    {
      loading: loadingMessage ?? 'Saving...',
      success: successMessage ?? 'Success!',
      error: errorMessage ?? 'Error!',
    },
    {
      position: 'bottom-center',
      id,
    }
  );
};

export { Toaster, toastFail, toastPromise, toastSuccess };
