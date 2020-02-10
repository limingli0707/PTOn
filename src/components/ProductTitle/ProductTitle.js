import React from 'react';
import {TableBody, Typography, TableContainer, Table, TableRow, TableCell} from '@material-ui/core';

const ProductTitle = props => {

    const styles = {
        row: {
            display: 'flex',
            justifyContent: 'center',
        },
        avatar: {
            margin: 10,
        },
        bigAvatar: {
            width: 150,
            height: 150,
        },
    };
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h3" >{props.productDescription}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h4" >{props.productId}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default ProductTitle;