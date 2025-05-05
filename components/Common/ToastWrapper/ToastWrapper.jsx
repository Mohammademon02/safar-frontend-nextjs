import { Toaster } from "react-hot-toast";


export function ToastWrapper({ children }) {
    return (
        <>
            {children}
            <Toaster position='top-right' />
        </>
    );
}
