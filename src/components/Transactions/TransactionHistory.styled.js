import styled from 'styled-components';

export const Table = styled.table`
  width: 960px;

  margin-left: auto;
  margin-right: auto;

  border-radius: 5px;

  background-color: #ffffff;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  overflow: hidden;
`;

export const TableHead = styled.thead`
  width: 320px;

  background-color: #32a1a1;
  font-size: 16px;
`;

export const TableHeadTitle = styled.th`
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
  padding: 16px 0;
`;
export const TableBodyRow = styled.tr`
text-align: center;

    &:nth-of-type(2n){
        background-color: #c1cbcb;
    }
 
}
`;
export const TabNameleBodyRow = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;

  color: #4f5454;

  text-align: center;
  text-transform: capitalize;
`;
