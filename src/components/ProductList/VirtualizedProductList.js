import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const styles = theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});


function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 90,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {columnIndex === 0 ? 
        <div>
          <img width="60" height="60" style={{ paddingRight: "10px" }} src={cellData}></img>
          </div> : columnIndex === 1 ? <
            a href="/productdetail" style={{textDecoration:"none", fontWeight: "bold"}}>{cellData}</a> : 
            columnIndex === 8 ? <SimpleMenu /> : cellData }
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (

      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight, fontWeight: "bold", width: "100%", backgroundColor: "#f5f5f5" }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (

      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>

    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const sample = [
  ['https://avatars0.githubusercontent.com/u/810438?v=4','Apex BionicJacket', 159, 6.0, 24, 'Footwear', 'Dec 12, 2017', 'Online'],
  ['https://avatars2.githubusercontent.com/u/6820?v=4','Denali Jacket', 237, 9.0, 37, 'gear', 'Jan 12, 2018', 'Offline'],
  ['https://avatars2.githubusercontent.com/u/63648?v=4','Quantum Jacket', 262, 16.0, 24, 'Apparel', 'Feb 12, 2019', 'Offline'],
  ['https://avatars0.githubusercontent.com/u/810438?v=4','Base Camp Hot', 305, 3.7, 67, 'March', 'Dec 12, 2020', 'Online'],
  ['https://avatars2.githubusercontent.com/u/63648?v=4','Denali Gloves', 356, 16.0, 49, 'gear', 'Aug 12, 2020', 'Online'],
];

function createData(id, image, product, price, variations, available, type, datecreated, status, dropdown) {
  return { id, image, product, price, variations, available, type, datecreated, status, dropdown };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function ReactVirtualizedTable() {
  return (
  <div style={{padding:"20px"}}>
    <Paper style={{ height: 800, width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 100,
            flexGrow: 0.5,
            label: '',
            dataKey: 'image',
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Product',
            dataKey: 'product',
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Price',
            dataKey: 'price',
            numeric: true,
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Variations',
            dataKey: 'variations',
            numeric: true,
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Available',
            dataKey: 'available',
            numeric: true,
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Type',
            dataKey: 'type',
            numeric: true,
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Date Created',
            dataKey: 'datecreated',
            numeric: true,
          },
          {
            width: 250,
            flexGrow: 0.5,
            label: 'Status',
            dataKey: 'status',
            numeric: true,
          },
          {
            width: 100,
            flexGrow: 0.5,
            label: '',
            dataKey: 'dropdown',
          }
        ]}
      />
    </Paper>
  </div>
  );
}