// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import { Select, MenuItem, Button, Box, FormControl, InputLabel } from "@mui/material";
//
// const GithubFileSelector = () => {
//     const [files, setFiles] = useState([]); // Lưu danh sách file
//     const [loading, setLoading] = useState(false); // Trạng thái loading
//     const [selectedFile, setSelectedFile] = useState(""); // URL của file được chọn
//     const [base64Data, setBase64Data] = useState(""); // Dữ liệu base64 của file đã tải
//
//     // Hàm fetch danh sách file từ GitHub
//     const fetchFiles = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get(
//                 "https://api.github.com/repos/facebook/react/contents/",
//                 {
//                     headers: {
//                         Accept: "application/vnd.github.v3+json",
//                     },
//                 }
//             );
//
//             // Chỉ lấy file (loại file)
//             const filesData = response.data
//                 .filter((item) => item.type === "file") // Lọc chỉ lấy file
//                 .map((file) => ({
//                     name: file.name,
//                     download_url: file.download_url,
//                 }));
//             setFiles(filesData);
//         } catch (error) {
//             console.error("Error fetching files:", error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         fetchFiles();
//         console.log(loading);
//         console.log(base64Data)
//     }, []);
//
//     // Hàm tải file và chuyển sang base64
//     const handleDownload = async () => {
//         if (!selectedFile) {
//             alert("Please select a file first.");
//             return;
//         }
//
//         try {
//             const response = await axios.get(selectedFile, { responseType: "arraybuffer" });
//             const base64String = btoa(
//                 new Uint8Array(response.data)
//                     .reduce((data, byte) => data + String.fromCharCode(byte), "")
//             );
//             setBase64Data(base64String); // Lưu base64 data
//             console.log("Base64 Data:", base64String); // Log ra base64
//         } catch (error) {
//             console.error("Error downloading file:", error);
//         }
//     };
//
//     return (
//         <Box textAlign="center" mt={4}>
//             <FormControl style={{ minWidth: 300, marginBottom: "20px" }}>
//                 <Select
//                     labelId="file-select-label"
//                     value={selectedFile}
//                     onChange={(e) => setSelectedFile(e.target.value)}
//                 >
//                     {files.map((file, index) => (
//                         <MenuItem key={index} value={file.download_url}>
//                             {file.name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//
//             {/* Button download */}
//             <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleDownload}
//                 disabled={!selectedFile}
//             >
//                 OK
//             </Button>
//         </Box>
//     );
// };
//
// export default GithubFileSelector;
