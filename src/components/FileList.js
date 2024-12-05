import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import styles from './FileList.module.css'

// import {saveFiles } from '../lib/esp'
import {MenuItem, Select} from "@mui/material";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const FileList = (props) => {
    const [files, setFiles] = useState([]); // Lưu danh sách file
    // Hàm fetch danh sách file từ GitHub
    const fetchFiles = async () => {
        try {
            const response = await axios.get(
                "https://api.github.com/repos/facebook/react/contents/",
                {
                    headers: {
                        Accept: "application/vnd.github.v3+json",
                    },
                }
            );

            // Chỉ lấy file (loại file)
            const filesData = response.data
                .filter((item) => item.type === "file") // Lọc chỉ lấy file
                .map((file) => ({
                    name: file.name,
                    download_url: file.download_url,
                }));
            setFiles(filesData);
        } catch (error) {
            console.error("Error fetching files:", error);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const uploadFile = (e) => {
        props.setUploads(e)
    }

    // const setOffset = (index, newOffset) => {
    //     const newUploads = [...props.uploads]
    //     newUploads[index] = {
    //         ...props.uploads[index],
    //         offset: newOffset
    //     }
    //
    //     saveFiles(newUploads)
    //     props.setUploads(newUploads)
    // }
    const onlyHex = (e) => {
        const re = /[0-9a-fA-F]+/g
        if (!re.test(e.key)) e.preventDefault()
    }

    return (
        <Box textAlign='center' className={styles.box}>
            <Grid container spacing={0} className={styles.fileItem} display={'flex'} justifyContent={'space-between'}
                  alignItems={'center'}>
                {/* Offset */}
                <Grid item xs={2} className={styles.fileOffset}>
                    <TextField
                        label='0x'
                        variant='outlined'
                        size='small'
                        onKeyDown={onlyHex}
                    />
                </Grid>

                {/* File Name */}
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id="file-select-label">File</InputLabel>
                        <Select
                            size="small"
                            labelId="file-select-label"
                            label="File"
                            value={props.uploads}
                            onChange={(e) => uploadFile(e.target.value)}
                        >
                            {files.map((file, index) => (
                                <MenuItem key={index} value={file.download_url}>
                                    {file.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

            </Grid>
        </Box>
    )
}

FileList.propTypes = {
    uploads: PropTypes.array,
    setUploads: PropTypes.func,
    chipName: PropTypes.string,
}

export default FileList
