import type { ComponentType, ReactElement } from "react";
type ModalConfig = Record<string, ComponentType<any>>;
export declare const useModalManager: (modalConfig: ModalConfig) => {
    openModal: (type: string, props?: Record<string, unknown>) => void;
    closeModal: () => void;
    renderModal: () => ReactElement | null;
    isModalOpen: (type: string) => boolean;
};
export {};
//# sourceMappingURL=useModalManager.d.ts.map