import { useState } from "react"
import type { ComponentType, ReactElement } from "react"

type ModalBaseProps = {
    open: boolean
    onClose: () => void
}

type ModalConfig = Record<string, ComponentType<any>>

type ModalState = {
    type: string | null
    props: Record<string, unknown>
}

export const useModalManager = (modalConfig: ModalConfig) => {
    const [modalState, setModalState] = useState<ModalState>({
        type: null,
        props: {},
    })

    const openModal = (type: string, props: Record<string, unknown> = {}) => {
        if (!modalConfig[type]) {
            console.warn(`Modal type "${type}" is not defined in the configuration`)
            return
        }

        setModalState({ type, props })
    }

    const closeModal = () => {
        setModalState({ type: null, props: {} })
    }

    const renderModal = (): ReactElement | null => {
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

    const isModalOpen = (type: string): boolean => {
        return modalState.type === type
    }

    return {
        openModal,
        closeModal,
        renderModal,
        isModalOpen,
    }
}