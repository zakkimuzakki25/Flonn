import { createContext, useState } from 'react';
import PopUpConfirmation from '../components/popup/PopupConfirmation'

export const ConfirmationContext = createContext();

// eslint-disable-next-line react/prop-types
export const ConfirmationProvider = ({ children }) => {
  const [popup, setPopup] = useState({
    isVisible: false,
    title: 'Please set the title value',
    message: '',
    confirmText: 'OK',
    cancelText: 'Cancel',
    onConfirm: () => {},
    onCancel: () => {},
  });

  const showPopup = ({ title, message, confirmText, cancelText, onConfirm, onCancel }) => {
    setPopup({
      isVisible: true,
      title,
      message,
      confirmText: confirmText || 'OK',
      cancelText: cancelText || 'Batal',
      onConfirm: onConfirm || (() => setPopup({ ...popup, isVisible: false })),
      onCancel: onCancel || (() => setPopup({ ...popup, isVisible: false })),
    });
  };

  const hidePopup = () => {
    setPopup({
        isVisible: false,
        title: '',
        message: '',
        confirmText: 'OK',
        cancelText: 'Cancel',
        onConfirm: () => {},
        onCancel: () => {},
    });
  };

  return (
    <ConfirmationContext.Provider value={{ popup, showPopup, hidePopup }}>
      {children}
      {popup.isVisible && <PopUpConfirmation heading={popup.title} body={popup.message} nameButtonNo={popup.cancelText} nameButtonYes={popup.confirmText} handlerButtonNo={popup.onCancel} handlerButtonYes={popup.onConfirm} handlerClose={hidePopup} />}
    </ConfirmationContext.Provider>
  );
};
