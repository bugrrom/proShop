import React, { FC } from "react";
import styled from "@emotion/styled";
import { order } from "../../orderScreen/orderDetailsReducer";
import { Link } from "react-router-dom";

const WrapperTable = styled.div`
  width: 700px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const H3 = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: #585858;
`;

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

type typeProps = {
  order: order[];
};

export const MyOrder: FC<typeProps> = ({ order }: typeProps) => {
  return (
    <WrapperTable>
      <H3>MY ORDERS</H3>
      <div>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>DATE</Th>
              <Th>TOTAL</Th>
              <Th>PAID</Th>
              <Th>DELIVERED</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {order.map((el) => (
              <Tr key={el._id}>
                <Td>{el._id}</Td>
                <Td>{el.createdAt.substring(0, 10)}</Td>
                <Td>${el.totalPrice}</Td>
                <Td></Td>
                <Td>
                  {el.isDelivered ? (
                    <i style={{ color: "green" }} className="fas fa-check"></i>
                  ) : (
                    <i style={{ color: "red" }} className="fas fa-times"></i>
                  )}
                </Td>
                <Td>
                  <Link to={`/order/${el._id}`}>
                    <button>Details</button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </WrapperTable>
  );
};
