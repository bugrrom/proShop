import React, { FC } from "react";
import { Message } from "../../../../element/Message/Message/Message";
import styled from "@emotion/styled";

const Table = styled.table`
  border-radius: 5px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;

const Tbody = styled.tbody`
  @media (max-width: 767px) {
    display: block;
    position: relative;
    overflow-x: auto;
    tr {
      display: table-cell;
      &:nth-of-type(odd) {
        background: none;
      }
    }
  }
`;

const Thead = styled.thead`
  @media (max-width: 767px) {
    display: block;
    float: left;
    th {
      text-align: center;
    }
  }
`;

const Tr = styled.tr`
  &:nth-of-type(even) {
    background: #f8f8f8;
  }
  @media (max-width: 767px) {
    &:nth-of-type(even) {
      background: transparent;
    }
    td {
      &:nth-of-type(odd) {
        background: #f8f8f8;
        border-right: 1px solid #e6e4e4;
      }
      &:nth-of-type(even) {
        border-right: 1px solid #e6e4e4;
      }
    }
  }
`;

const Th = styled.th`
  text-align: center;
  padding: 8px;
  font-size: 15px;
  border: none;
  font-family: Verdana, sans-serif;
  color: #ffffff;
  background: #928f8f;
  &:nth-of-type(odd) {
    background: #2a2b2b;
  }
  @media (max-width: 767px) {
    display: block;
    padding: 10px 2px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
  }
`;

const Td = styled.td`
  text-align: center;
  padding: 8px;
  border: none;
  font-family: Verdana, sans-serif;
  font-size: 13px;
  border-right: 1px solid #e6e4e4;
  @media (max-width: 767px) {
    padding: 10px 2px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 13px;
    text-overflow: ellipsis;
    display: block;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

type typeProps = {
  loading: boolean;
  error: string;
  users: any[];
  editMode: (id: string) => void;
  removeUser: (id: string) => void;
};

export const UserDashboard: FC<typeProps> = ({
  loading,
  error,
  users,
  editMode,
  removeUser,
}: typeProps) => {
  return (
    <>
      <h3>Users</h3>
      {loading ? (
        <p>...Loading</p>
      ) : error ? (
        <Message message={error} color="#ff6a6a" />
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NAME</Th>
              <Th>EMAIL</Th>
              <Th>ADMIN</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((el) => (
              <Tr key={el._id}>
                <Td>{el._id}</Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td>
                  {el.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </Td>
                <Td>
                  <Button onClick={() => editMode(el._id)}>
                    <i style={{ color: "green" }} className="fa fa-edit"></i>
                  </Button>
                  <Button onClick={() => removeUser(el._id)}>
                    <i style={{ color: "red" }} className="fas fa-trash"></i>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};
