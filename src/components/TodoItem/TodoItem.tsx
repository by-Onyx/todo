import React, {PropsWithChildren, useState} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";

import {ITodoItem} from "interfaces";

import {Close, Edit, Delete, Input, Modal, Ok} from "components";
import {deleteTodoItem, editTodoItem, toggleTodoItem} from "helpers";

import * as Styles from './styles';


export const TodoItem = ({
  children,
  isChecked,
  id,
  text
}: PropsWithChildren<ITodoItem>) => {
  const queryClient = useQueryClient();

  const [editedText, setEditedText] = useState(text);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleTodoClick = () => {
    setEditModalOpen(true);
  }

  const handleSubmitEdit = () => {
    mutationEdit.mutate({
      id,
      editedText
    });

    setEditModalOpen(false);
  }

  const handleSubmitDelete = () => {
    mutationDelete.mutate(id);

    setDeleteModalOpen(false);
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDeleteModalOpen(true)
  }

  const handleToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();

    mutationToggle.mutate(id);
  }

  const mutationToggle = useMutation({
    mutationFn: toggleTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const mutationDelete = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const mutationEdit = useMutation({
    mutationFn: editTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <>
      <Styles.Wrapper>
        <Styles.Text>
          {children}
        </Styles.Text>
        <Styles.ButtonsWrapper>
          <Styles.CheckBox
              height="24px"
              width="24px"
              name={`checkbox_${id}`}
              type={"checkbox"}
              defaultChecked={isChecked}
              onClick={handleToggle}
          />
          <Styles.Edit
              onClick={handleTodoClick}
          >
            <Edit width={'24px'} height={'24px'}/>
          </Styles.Edit>
          <Styles.Delete
            onClick={(e) => handleDelete(e)}
          >
            <Delete width={'24px'} height={'24px'}/>
          </Styles.Delete>
        </Styles.ButtonsWrapper>
      </Styles.Wrapper>

      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        <Styles.ContentWrapper>
          <Input
              value={editedText}
              onChange={(e) => setEditedText(e.currentTarget.value)}
          />
          <Styles.ConfirmButton
              onClick={() => handleSubmitEdit()}
          >
            Save
          </Styles.ConfirmButton>
        </Styles.ContentWrapper>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Styles.ContentWrapper>
          <Styles.DeleteModalText>Are you sure you want to delete it?</Styles.DeleteModalText>
          <Styles.ConfirmButton
              onClick={handleSubmitDelete}
          >
            I'm sure
          </Styles.ConfirmButton>
        </Styles.ContentWrapper>
      </Modal>
    </>
  );
};
