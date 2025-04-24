import { ReactElement } from "react"

/**
 * Custom hook that manages the state of modals on a page.
 * 
 * @param modalConfig An object mapping modal names to React components.
 * @returns An object with functions for opening, closing, rendering, and checking modal states.
 */
export function useModalManager(
    modalConfig: Record<string, (props: any) => ReactElement>
): {
    /**
     * Opens a modal of a specific type with optional props.
     * @param type The type of modal to open.
     * @param props Props to be passed to the modal component.
     */
    openModal: (type: string, props?: Record<string, any>) => void

    /**
     * Closes the currently open modal.
     */
    closeModal: () => void

    /**
     * Renders the currently open modal.
     * @returns The modal component if open, otherwise null.
     */
    renderModal: () => ReactElement | null

    /**
     * Checks if a modal of a given type is currently open.
     * @param type The type of modal to check.
     * @returns True if the modal is open, false otherwise.
     */
    isModalOpen: (type: string) => boolean
}
