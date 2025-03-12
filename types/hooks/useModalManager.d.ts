declare module "itc-utility/dist/hooks/useModalManager" {
    export function useModalManager(): {
        openModal: (type: string, props: object) => void,
        renderModal: () => void,
        closeModal: () => void,
        isModalOpen: (type: string) => boolean
    }
}