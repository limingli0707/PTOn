import React from "react";
import { forwardRef } from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import MaterialTable, { Column } from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const PriceBook = ({ products }) => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Price Book", field: "name" },
      {
        title: "Promotion",
        field: "promotion",
        lookup: {
          1: "$50 Fixed Products Amount Above 100",
          2: "Get 10% off Orders Above $150",
          3: "15% Off iPod Nano",
          4: "Get 10% off Orders Above $150"
        }
      },
      { title: "Site Assignments", field: "siteAssignment" },
      { title: "Price", field: "price" },
      {
        title: "Status",
        field: "status",
        lookup: { 1: "Activated", 2: "Deactivated" }
      }
    ],
    data: [
      {
        name: "Black Friday Pricing",
        promotion: 2,
        siteAssignment: "Site Genesis",
        status: 2,
        price: "$490"
      },
      {
        name: "Cyber Monday Pricing",
        promotion: 3,
        siteAssignment: "Site Genesis",
        status: 1,
        price: "$450"
      },
      {
        name: "Back to School Pricing",
        promotion: 1,
        siteAssignment: "Site Genesis Global",
        status: 1,
        price: "$440"
      },
      {
        name: "List Prices",
        promotion: 1,
        siteAssignment: "Site Genesis",
        status: 1,
        price: "$440"
      },
      {
        name: "US Sale Prices",
        promotion: 1,
        siteAssignment: "Site Genesis Global",
        status: 1,
        price: "$440"
      },
      {
        name: "GBP List Prices",
        promotion: 1,
        siteAssignment: "Site Genesis",
        status: 1,
        price: "$440"
      },
      {
        name: "GBP Sale Prices",
        promotion: 1,
        siteAssignment: "Site Genesis",
        status: 1,
        price: "$440"
      }
    ]
  });

  return (
    <Card style={{ maxHeight: "600px", overflow: "scroll"}}>
      <CardHeader
        title="Price Books"
        titleTypographyProps={{ variant: "h6" }}
        avatar={
          <Avatar style={{ backgroundColor: blue[500] }}>
            <AccountBalanceIcon />
          </Avatar>
        }
      ></CardHeader>
      <CardContent >
        <MaterialTable
        
          icons={tableIcons}
          title=""
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PriceBook;
