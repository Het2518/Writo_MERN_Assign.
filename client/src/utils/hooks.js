// utils/hooks.js
import {toast} from 'react-toastify';

export const useToast = () => {
    const showToast = (message, options = {}) => {
        toast(message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            ...options
        });
    };

    return {showToast};
};