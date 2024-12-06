import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import UploadIcon from '@mui/icons-material/Upload'

const Header = (props) => {
    return (
        <AppBar
            position='static'
            sx={{
                ...props.sx,
                background: '#0276aa',
            }}
        >
            <Toolbar>
                <UploadIcon />

                <Typography
                    variant='h6'
                    component='h1'
                    noWrap
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Bungee',
                    }}
                >
                    &nbsp;&nbsp;ESPWebTool
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    sx: PropTypes.object,
}

export default Header
