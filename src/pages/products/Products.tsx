import Box from "@mui/material/Box";
import MaterialTable from "@material-table/core";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Page from "components/Page";
import products from "utils/json/products.json";

export default function Products() {
  const navigate = useNavigate();
  return (
    <Page title="Products">
      <Container sx={{ pt: 5, }}>
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
            data={products}
            title="Products"
            onRowClick={(_event, rowData: any) => {
              console.log(rowData);
              navigate(`/products/${rowData.id["$oid"]}/details`);
            }}
            columns={[
              // { title: "ID", field: "id.$oid" },
              {
                title: "img",
                field: "image",
                render: () => (
                  <img
                    src={products[0].image}
                    style={{ width: 50, borderRadius: "50%" }}
                  />
                ),
              },
              { title: "Name", field: "name" },
              { title: "Price", field: "price" },
              { title: "Description", field: "description" },
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
