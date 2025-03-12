import { useState } from "react"

/**
 * Custom hook that manages the state of modals on a page.
 * @param {Object.<string, JSX.Element>} modalConfig 
 * @category Hooks
 * @module useModalManager
 * @example
 * import Modal1 from './Modal1'
 * import Modal2 from './Modal2'
 * 
 * const Page = () => {
 *     const { openModal, renderModal } = useModalManager({
 *         "modal1": Modal1
 *         "modal2": Modal2
 *     })
 * 
 *     const modal1Props = {
 *         data: { id: 1, name: "John Doe"},
 *         otherData: { id: 1, name: "Jane Doe"}
 *     }
 * 
 *     return (
 *         <div>
 *             <button 
 *                 // Pass in the props for the component when you open the modal
 *                 onClick={() => openModal("modal1", {
 *                     data: modal1Props["data"]
 *                     otherData: modal1Props["otherData"]
 *                 })}
 *             >
 *                 Open Modal 1
 *             </button>
 *             <button
 *                 // If no props are necessary for the component, don't pass in anything
 *                 onClick={() => openModal("modal2")}
 *             >
 *                 Open Modal 2
 *             </button>
 *             {renderModal()} // Then use the `renderModal` function to render
 *         </div>
 *     )
 * }
 */
const useModalManager = (modalConfig) => {
    const [modalState, setModalState] = useState({ type: null, props: {} })

    /**
     * Method to open a modal of a specific type with optional props
     * 
     * NOTE: Ensure the modal being opened is present in `modalConfig`
     * 
     * @param {string} type Type of modal to open
     * @param {object} props Props to be passed to the modal component
     */
    const openModal = (type, props = {}) => {
        if (!modalConfig[type]) {
            console.warn(`Modal type "${type}" is not defined in the configuration`)
            return
        }
        setModalState({ type, props })
    }

    const closeModal = () => setModalState({ type: null, props: {} })

    /**
     * Renders the modal dictated by the current state
     * 
     * @returns JSX.Element
     */
    const renderModal = () => {
        const { type, props } = modalState
        if (!type || !modalConfig[type]) return null

        const ModalComponent = modalConfig[type]
        return (
            <ModalComponent
                open={true}
                onClose={closeModal}
                {...props}
            />
        )
    }

    const isModalOpen = (type) => modalState.type === type

    return {
        openModal,
        closeModal,
        renderModal,
        isModalOpen
    }
}

export default useModalManager