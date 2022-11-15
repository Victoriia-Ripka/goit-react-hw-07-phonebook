import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  margin: 10px 0;
  padding: 0;
`;

export const SectionStyle = styled.section`
  width: 350px;
  margin: 0;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const InputField = styled(Field)`
  margin: 5px 0;
  width: 100%;
`;

export const InputForm = styled(Form)`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
  font-weight: 400;
  margin: 0 0 0 15px;
`;

export const Input = styled.input`
  width: 135px;
  height: 20px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 0 15px;
  padding: 5px;
`;

export const ContactsList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

export const ContactsItem = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsInfo = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  padding: 5px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  &:hover,
  &:focus {
    -webkit-box-shadow: 0px 8px 32px -1px rgba(190, 190, 190, 1);
    -moz-box-shadow: 0px 8px 32px -1px rgba(190, 190, 190, 1);
    box-shadow: 0px 8px 32px -1px rgba(190, 190, 190, 1);
  }
`;
