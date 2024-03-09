import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Card from "components/container/Card";
import { Input } from "react-componentry";
import { Control, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TextareaAutosize from "react-textarea-autosize";
import { ThemeOptionTypes } from "theme/index";

interface DetailSectionProps {
  control: Control<any>;
  append: any;
  remove: any;
  fields: any;
  id?: string;
}

export default function DetailSection(props: DetailSectionProps) {
  const theme: ThemeOptionTypes = useTheme();
  const { control, append, remove, fields, id } = props;
  return (
    <Card id={`${id}`} title="Product Details" sx={{ mb: 3 }}>
      <Input
        size="small"
        label="Product Name"
        control={control}
        name="name"
        fullWidth
      />
      <div style={{ paddingBottom: 8 }} />
      <Controller
        name={`description`}
        control={control}
        render={({ field }) => (
          <Box mb={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Description
            </Typography>
            <TextareaAutosize
              defaultValue={field.value}
              minRows={3}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 4,
                border: "1px solid",
                borderColor: theme.palette.divider,
                resize: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
              }}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Description"
            />
          </Box>
        )}
      />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Input
            size="small"
            fullWidth
            name="price"
            label="Price"
            control={control}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            size="small"
            fullWidth
            name="discountedPrice"
            label="Discount"
            control={control}
          />
        </Grid>
      </Grid>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
        Specifications
      </Typography>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Table size="small" aria-label="simple table">
          <TableBody
            sx={{
              border: 0,
            }}
          >
            {fields.map((field: any, index: any) => (
              <TableRow
                key={field.id}
                sx={{
                  "td, th": { borderBottom: 1, borderColor: "divider" },
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Input
                    size="small"
                    fullWidth
                    name={`specifications.${index}.key`}
                    placeholder="Key"
                    control={control}
                  />
                </TableCell>
                <TableCell align="left">
                  <Controller
                    name={`specifications.${index}.details`}
                    control={control}
                    render={({ field }) => (
                      <TextareaAutosize
                        defaultValue={field.value}
                        minRows={2}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: 4,
                          border: "1px solid",
                          borderColor: theme.palette.divider,
                          resize: "none",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                        }}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Description"
                      />
                    )}
                  />
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete" arrow>
                    <IconButton
                      onClick={() => remove(index)}
                      sx={{ border: "1px solid rgba(0,0,0,0.1)" }}
                      aria-label="delete"
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{ color: "text.primary" }}
        onClick={() => append({ key: "", details: "" })}
      >
        Add
      </Button>
    </Card>
  );
}
