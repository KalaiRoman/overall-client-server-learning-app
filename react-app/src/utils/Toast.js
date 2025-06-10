import toast from "react-hot-toast";

// new toasts 

// npm i sonner

// Sonner Toast Message toast Messages end 

const toastSuccess = (params) => {
  return toast.success(params);
};
const toastError = (params) => {
  return toast.error(params);
};

export { toastSuccess, toastError };
