import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/lab/Pagination";

const ApiIntegrate = () => {
  const [arr, setArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => {
        setArr(result.data);
        console.log(arr);
      })
      .catch((error) => console.log(error));
  }, [arr]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(arr.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PostId</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.postId}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </>
  );
};

export default ApiIntegrate;
