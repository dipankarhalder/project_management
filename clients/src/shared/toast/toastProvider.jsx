import { useState, useCallback, useRef, useEffect } from "react";
import { ToastContext } from "./toastContext";
import { Toast } from "./index";

export const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    show: false,
    type: "",
    heading: "",
    description: "",
  });

  const timeoutRef = useRef(null);
  const removeToast = useCallback(() => {
    setToastData((prev) => ({ ...prev, show: false }));
  }, []);

  const addToast = useCallback(
    (message, duration = 5000) => {
      if (!message.type) return;

      setToastData({
        show: true,
        type: message.type,
        heading: message.title,
        description: message.description,
      });
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(removeToast, duration);
    },
    [removeToast]
  );

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toastData.show && (
        <Toast
          show={toastData.show}
          removeToast={removeToast}
          toastData={toastData}
        />
      )}
    </ToastContext.Provider>
  );
};
