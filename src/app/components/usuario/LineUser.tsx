"use client"
import {Usuario} from '../../core/model/Usuario';
import React, { useState } from "react";
import { IconTrash } from '@tabler/icons-react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";


export interface LineUserProps {
    user: Usuario
}

export default function LineUser(props : LineUserProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalData, setModalData] = useState({ id: '', name: '', email: '' });
        
    const handleOpenModal = () => {
        setModalData({
            id: props.user.id,
            name: props.user.name,
            email: props.user.email,
        });
        onOpen();
    };

    return (
    <div className="flex justify-between items-center px-3 py-2 rounded-sm shadow-default-200/30 shadow-md hover:cursor-pointer hover:shadow-lg hover:bg-default-200/50 bg-default-800/50 border-solid border-default-100/30 border-1  mb-1 w-[35%]">
        <span>{props.user.name!}</span>
        <span>{props.user.ativo!}</span>
        <Button onPress={handleOpenModal} className='bg-transparent text-red-600/40'><IconTrash/></Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='bg-default-900/80'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Descrição do Usuário</ModalHeader>
              <ModalBody className='flex flex-col'>
                <p className='  text-large'>
                  User ID: {modalData.id}</p>
                <p>

                  User E-mail: 
                  <span>{modalData.email}</span>
                </p>
              <p>Created at: {new Date().getFullYear()} {new Date().getDate()} {new Date().getDay()}</p>
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Delete
                </Button>
                <Button color="success" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </Modal>
    </div>
    )
}