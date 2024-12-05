import React from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = (props) => {
    return (
        <Box sx={props.sx}>
            { /* Made in Germany :D */}
            <Box sx={{ mx: 'auto', mt: 0 }}>
                <Typography
                align='center'
                display='block'>
                </Typography>
            </Box>
        </Box>
    )
}

Footer.propTypes = {
    sx: PropTypes.object,
}

export default Footer      
