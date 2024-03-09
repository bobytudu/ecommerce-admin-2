import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Page from "components/Page";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Card from "components/container/Card";
import { useForm, useFieldArray } from "react-hook-form";

//icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import DetailSection from "./sections/DetailSection";
import PriceSection from "./sections/PriceSection";
import { useEffect } from "react";

export default function EditProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const { control } = useForm({
    defaultValues: {
      name: "",
      description: "this is a description",
      price: 0,
      discountedPrice: 0,
      category: "",
      specifications: [
        {
          name: "sdf",
          key: "In The box",
          details: "1 x Apple iPhone 12 Pro Max 256GB Graphite 1",
        },
        {
          name: "sdf",
          key: "Warranty",
          details: "1 Year Manufacturer Warranty",
        },
      ],
    },
  });
  const links = [
    { label: "Details", path: `/products/${params.id}/details` },
    { label: "Images", path: `/products/${params.id}/images` },
    { label: "Pricing", path: `/products/${params.id}/pricing` },
    { label: "Inventory", path: `/products/${params.id}/inventory` },
    { label: "Shipping", path: `/products/${params.id}/shipping` },
    { label: "SEO", path: `/products/${params.id}/seo` },
    { label: "Variations", path: `/products/${params.id}/variations` },
  ];

  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });

  useEffect(() => {
    if (params.tab) {
      document.getElementById(params.tab)?.scrollIntoView();
      const scrollTop = document.getElementById(params.tab)?.offsetTop;
      if (scrollTop)
        window.scrollTo({ top: scrollTop - 94, behavior: "smooth" });
    }
  }, [params.tab]);

  return (
    <Page title="Edit Product" id="edit-product-page">
      <Container maxWidth="xl">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/products")}
          sx={{ bgcolor: "transparent", pl: 0 }}
        >
          Products
        </Button>
        <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
          Edit Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <List
              component={Paper}
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                position: "sticky",
                top: 70 + 24,
              }}
            >
              {links.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          "& .MuiTypography-root": {
                            fontWeight: isActive ? 600 : 400,
                          },
                        }}
                      />
                    </ListItemButton>
                  )}
                </NavLink>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={7}>
            <DetailSection
              id="details"
              control={control}
              fields={fields}
              remove={remove}
              append={append}
            />
            <Card id="images" title="Images" sx={{ mb: 3 }}>
              <Button>Add</Button>
            </Card>
            <PriceSection />
            <Card id="inventory" title="Inventory" sx={{ mb: 3 }}>
              <Button>Add</Button>
            </Card>
            <Card id="shipping" title="Shipping" sx={{ mb: 3 }}>
              <Button>Add</Button>
            </Card>
            <Card id="seo" title="SEO" sx={{ mb: 3 }}>
              <Button>Add</Button>
            </Card>
            <Card id="variations" title="Variations" sx={{ mb: 3 }}>
              <Button>Add</Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card title="Actions" sx={{ position: "sticky", top: 70 + 24 }}>
              <Button variant="contained" startIcon={<SaveIcon />}>
                Save
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
