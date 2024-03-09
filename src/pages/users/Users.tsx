import { Box, Container } from "@mui/material";
import Page from "components/Page";
import MaterialTable from "@material-table/core";
import users from "utils/json/users.json";

export default function Users() {
  return (
    <Page title="Users">
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
            data={users}
            title="Users"
            onRowClick={(event, rowData: any) => {
              console.log(rowData);
            }}
            columns={[
              { title: "ID", field: "id" },
              { title: "Name", field: "first_name" },
              { title: "Title", field: "last_name" },
              { title: "Gender", field: "gender" },
              { title: "Email", field: "email" },
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
