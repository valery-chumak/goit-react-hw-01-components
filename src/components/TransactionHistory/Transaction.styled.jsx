import styled from "@emotion/styled"
export const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
  `
  export const TableHead = styled.thead`
    border: 1px solid #ddd;
    padding: 8px;
  `
export const TableHeadItem = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  `
export const TableRow = styled.tr`
    &:nth-child(even){
        background-color: #f2f2f2;
    }
    &:hover {
        background-color: #ddd;
    }
`
export const TableBody = styled.tbody`
`
export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  `