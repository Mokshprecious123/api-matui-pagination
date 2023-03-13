// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TablePagination from "@mui/material/TablePagination";

// const ApiIntegrate = () => {
//   const [arr, setArr] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const emptyRows =
//   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   useEffect(() => {
//   axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((result) => {
//         setArr(result.data);
//         console.log(arr);
//       })
//       .catch((error) => console.log(error));
//   }, [arr]);

//   return (
//     <>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>PostId</TableCell>
//               <TableCell align="right">id</TableCell>
//               <TableCell align="right">Name</TableCell>
//               <TableCell align="right">Email</TableCell>
//               <TableCell align="right">Body</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {arr.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.postId}</TableCell>
//                 <TableCell align="right">{row.id}</TableCell>
//                 <TableCell align="right">{row.name}</TableCell>
//                 <TableCell align="right">{row.email}</TableCell>
//                 <TableCell align="right">{row.body}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           component="div"
//           count={500}
//           page={page}
//           onPageChange={handleChangePage}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//     </>
//   );
// };

// export default ApiIntegrate;
