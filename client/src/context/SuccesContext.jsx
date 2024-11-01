import { createContext, useState } from 'react';
import PopUpSucces from '../components/popup/PopupSucces'

export const SuccesContext = createContext();

// eslint-disable-next-line react/prop-types
export const SuccesProvider = ({ children }) => {
  const [popupSucces, setPopupSucces] = useState({
    isVisible: false,
    title: 'Please set the title value',
    message: '',
    buttonText: 'OK',
    handlerButton: () => {},
  });

  const showPopupSucces = ({ title, message, buttonText, handlerButton }) => {
    setPopupSucces({
      isVisible: true,
      title,
      message,
      buttonText: buttonText || 'OK',
      handlerButton: handlerButton || (() => setPopupSucces({ ...popupSucces, isVisible: false })),
    });
  };

  const hidePopupSucces = () => {
    setPopupSucces({
        isVisible: false,
        title: '',
        message: '',
        buttonText: 'OK',
        handlerButton: () => {},
    });
  };

  return (
    <SuccesContext.Provider value={{ popupSucces, showPopupSucces, hidePopupSucces }}>
      {children}
      {popupSucces.isVisible && <PopUpSucces heading={popupSucces.title} body={popupSucces.message} nameButton={popupSucces.buttonText} handlerButton={popupSucces.handlerButton} handlerClose={hidePopupSucces} />}
    </SuccesContext.Provider>
  );
};
