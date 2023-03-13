// import * as React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableHead from "@mui/material/TableHead";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import { red } from "@mui/material/colors";
// // import { Borders } from '@mui/system/borders';

// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(name, calories, fat) {
//   return { name, calories, fat };
// }

// export default function CustomPaginationActionsTable() {
//   const [arr, setArr] = useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((result) => {
//         setArr(result.data);
//         console.log(arr);
//       })
//       .catch((error) => console.log(error));
//   }, [arr]);

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arr.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table
//         style={{ border: "3px solid black" }}
//         aria-label="custom pagination table"
//       >
//         <TableHead style={{ border: "2px solid black", background: "gray" }}>
//           <TableRow>
//             <TableCell
//               style={{ border: "3px solid black", background: "orange" }}
//             >
//               PostId
//             </TableCell>
//             <TableCell
//               align="right"
//               style={{ border: "3px solid black", background: "orange" }}
//             >
//               id
//             </TableCell>
//             <TableCell
//               align="right"
//               style={{ border: "3px solid black", background: "orange" }}
//             >
//               Name
//             </TableCell>
//             <TableCell
//               align="right"
//               style={{ border: "3px solid black", background: "orange" }}
//             >
//               Email
//             </TableCell>
//             <TableCell
//               align="right"
//               style={{ border: "3px solid black", background: "orange" }}
//             >
//               Body
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? arr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : arr
//           ).map((row) => (
//             <TableRow key={row.id} style={{ border: "1px solid black" }}>
//               <TableCell
//                 style={{
//                   width: 10,
//                   color: "red",
//                   border: "1px solid black",
//                   borderRadius: 5,
//                   background: "bisque",
//                 }}
//                 align="right"
//               >
//                 {row.postId}
//               </TableCell>
//               <TableCell
//                 style={{
//                   width: 10,
//                   border: "1px solid black",
//                   background: "bisque",
//                 }}
//                 align="right"
//               >
//                 {row.id}
//               </TableCell>
//               <TableCell
//                 style={{
//                   width: 150,
//                   border: "1px solid black",
//                   background: "bisque",
//                 }}
//                 align="right"
//               >
//                 {row.name}
//               </TableCell>
//               <TableCell
//                 style={{
//                   width: 150,
//                   border: "1px solid black",
//                   background: "bisque",
//                 }}
//                 align="right"
//               >
//                 {row.email}
//               </TableCell>
//               <TableCell
//                 style={{
//                   width: 150,
//                   border: "1px solid black",
//                   background: "bisque",
//                 }}
//                 align="right"
//               >
//                 {row.body}
//               </TableCell>
//             </TableRow>
//           ))}

//           {emptyRows > 0 && (
//             <TableRow style={{ height: 60 * emptyRows }}>
//               <TableCell colSpan={5} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//               colSpan={5}
//               count={arr.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: {
//                   "aria-label": "rows per page",
//                 },
//                 native: true,
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }
