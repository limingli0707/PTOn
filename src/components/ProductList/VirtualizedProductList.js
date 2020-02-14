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
import Checkbox from '@material-ui/core/Checkbox';


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

function Checkboxes() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        value="secondary"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

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
        {columnIndex === 0 ? <Checkboxes /> : columnIndex === 1 ?
        <div>
          <img width="60" height="60" style={{ paddingRight: "10px" }} src={cellData}></img>
          </div> : columnIndex === 2 ? <
            a href="/productDetail" style={{textDecoration:"none", fontWeight: "bold"}}>{cellData}</a> : 
            columnIndex === 9 ? <SimpleMenu /> : cellData }
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
        <span>{columnIndex === 0 ? <Checkboxes/ > :label}</span>
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
  ['https://images-na.ssl-images-amazon.com/images/I/61NJRtHSTML._UY695_.jpg','Allegra Lace Up Sandals','Footwear',159, 6.0, 24, 'Dec 12, 2017', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/81YxzJi0-nL._UY879_.jpg','House of Harlow Mini Dress','Apparel', 237, 9.0, 37, 'Jan 12, 2018', 'Offline'],
  ['https://images-na.ssl-images-amazon.com/images/I/81e%2B9E2-qwL._UX679_.jpg','SuiSional Men\'s Luxury Dress Slim Fit Tuxedo Suit Jacket and Stylish Blazer', 'Apparel', 262, 16.0, 24, 'Feb 12, 2019', 'Offline'],
  ['https://images-na.ssl-images-amazon.com/images/I/81quRG6e7mL._UY695_.jpg','Beaded Sizzling Rajasthani Style Wedding Clutch','Accessories', 305, 3.7, 67, 'Dec 12, 2020', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/518naPb3JDL._UY695_.jpg','Charming Tailor Fashion PU Leather Handbag Stylish Women Convertible Clutch Purse', 'Accessories', 356, 16.0, 49, 'Aug 12, 2020', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/71IHWSg5isL._SX679_.jpg','Nail Dipping Powder Starter Kit', 'Beauty', 356, 16.0, 49, 'Aug 12, 2020', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/61dAkX9kzYL._SX679_.jpg','Mac Extra Dimension Skinfinish', 'Beauty', 356, 16.0, 49, 'Jan 11, 2005', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/91ArfAcp6TL._SX679_.jpg','Dead Sea Mud Mask', 'Beauty', 356, 16.0, 49, 'Oct 24, 1975', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/81cfpBa7dyL._SX679_.jpg','Toast It Coasters', 'Home & Kitchen', 356, 16.0, 49, 'Feb 25, 2019', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/71eAkYf2ZVL._SX679_.jpg','Bride and Groom Champagne Flutes', 'Home & Kitchen', 356, 16.0, 49, 'May 21, 1999', 'Offline'],
  ['https://images-na.ssl-images-amazon.com/images/I/71u6nI9eAcL._AC_SX430_.jpg','Legend of Zelda Link\'s Awakening', 'Video Games', 356, 16.0, 49, 'Jan 04, 1988', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/81m0GY0bTgL._SX679_.jpg','Professional Drawing and Sketching Kit', 'Arts & Crafts', 356, 16.0, 49, 'Aug 12, 2020', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/81y2Goz%2BFWL._SX679_.jpg','Wood Sketchbox Easel', 'Arts & Crafts', 356, 16.0, 49, 'Mar 12, 2008', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/919JoxA615L._SX679_.jpg','Genius Art Owl Ready to Paint Ceramic', 'Arts & Crafts', 356, 16.0, 49, 'Apr 01, 2001', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/7108HSmwBeL._SX679_.jpg','VTech Pull and Sing Puppy', 'Toys', 356, 16.0, 49, 'Apr 01, 2001', 'Online'],
  ['https://images-na.ssl-images-amazon.com/images/I/519p2sesfpL._SX679_.jpg','Moon Star Projector', 'Toys', 356, 16.0, 49, 'Apr 01, 2001', 'Online'],
];

function createData(id, image, product, type, price, variations, available, datecreated, status, dropdown) {
  return { id, image, product, type, price, variations, available, datecreated, status, dropdown };
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
            dataKey: 'productcheckbox',
          },
          {
            width: 100,
            flexGrow: 0.5,
            label: '',
            dataKey: 'image',
          },
          {
            width: 400,
            flexGrow: 0.5,
            label: 'Product',
            dataKey: 'product',
          },
          {
            width: 200,
            flexGrow: 0.5,
            label: 'Type',
            dataKey: 'type',
            numeric: false,
          },
          {
            width: 100,
            flexGrow: 0.5,
            label: 'Price',
            dataKey: 'price',
            numeric: true,
          },
          {
            width: 100,
            flexGrow: 0.5,
            label: 'Variations',
            dataKey: 'variations',
            numeric: true,
          },
          {
            width: 100,
            flexGrow: 0.5,
            label: 'Available',
            dataKey: 'available',
            numeric: true,
          },
          {
            width: 150,
            flexGrow: 0.5,
            label: 'Date Created',
            dataKey: 'datecreated',
            numeric: true,
          },
          {
            width: 100,
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