import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';


interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: FoodProps;
  setIsOpen: () => void;
  handleUpdateFood: (data: FoodProps) => void;
}


const ModalEditFood = ({isOpen, setIsOpen, handleUpdateFood, editingFood}: ModalEditFoodProps) => {
  const formRef = createRef<FormHandles>();
  // constructor(props) {
  //   super(props);

  //   this.formRef = createRef()
  // }
  async function handleSubmit(data: FoodProps) {
    handleUpdateFood(data)
    setIsOpen();
   }

  // handleSubmit = async (data) => {
  //   const { setIsOpen, handleUpdateFood } = this.props;

  //   handleUpdateFood(data);
  //   setIsOpen();
  // };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }

export default ModalEditFood;
