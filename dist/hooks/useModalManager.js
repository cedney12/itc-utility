import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export const useModalManager = (modalConfig) => {
    const [modalState, setModalState] = useState({
        type: null,
        props: {},
    });
    const openModal = (type, props = {}) => {
        if (!modalConfig[type]) {
            console.warn(`Modal type "${type}" is not defined in the configuration`);
            return;
        }
        setModalState({ type, props });
    };
    const closeModal = () => {
        setModalState({ type: null, props: {} });
    };
    const renderModal = () => {
        const { type, props } = modalState;
        if (!type || !modalConfig[type])
            return null;
        const ModalComponent = modalConfig[type];
        return (_jsx(ModalComponent, { open: true, onClose: closeModal, ...props }));
    };
    const isModalOpen = (type) => {
        return modalState.type === type;
    };
    return {
        openModal,
        closeModal,
        renderModal,
        isModalOpen,
    };
};
//# sourceMappingURL=useModalManager.js.map