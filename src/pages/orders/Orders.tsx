import { Box, Container } from "@mui/material";
import Page from "components/Page";
import MaterialTable from "@material-table/core";
import orders from "utils/json/orders.json";

export default function Orders() {
  return (
    <Page title="Orders">
      <Container sx={{ pt: 5 }}>
        <Box
          sx={{
            "& .MuiOutlinedInput-root": {
              "& input": {
                maxHeight: 5,
              },
            },
          }}
        >
          <MaterialTable
            data={orders}
            title="Orders"
            onRowClick={(event, rowData: any) => {
              console.log(rowData);
            }}
            columns={[
              { title: "ID", field: "id.$oid" },
              { title: "Customer", field: "custom_id.$oid" },
              { title: "Payment Method", field: "payment_method" },
              { title: "Amount", field: "total_amount" },
              { title: "Item", field: "item.$oid" },
            ]}
            options={{
              rowStyle: {
                fontSize: 14,
              },
              searchFieldVariant: "outlined",
              pageSize: 10,
            }}
          />
        </Box>
      </Container>
    </Page>
  );
}
