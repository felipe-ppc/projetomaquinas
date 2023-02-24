import React, { createContext, ReactNode, useState } from "react";
import ModalGlobal from "./Modal";

type ModalContextProps= {
   children: ReactNode;
}

type ModalContextType = {
    isOpenModal: boolean
    setIsOpenModal: (newState: boolean) => void;
}

const initialValue = {
    isOpenModal: false,
    setIsOpenModal: () => {},
}

export const ModalContext = createContext<ModalContextType>(initialValue);


const ModalProvider: React.FC<ModalContextProps> = ({ children}: ModalContextProps) =>{

    const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal);

    return(
        <>
        <ModalContext.Provider value={{isOpenModal, setIsOpenModal}}>
            {children}
            {isOpenModal && <ModalGlobal/>}
        </ModalContext.Provider>
        </>
    )
}
export default ModalProvider;