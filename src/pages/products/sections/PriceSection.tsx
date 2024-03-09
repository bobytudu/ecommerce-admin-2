import { OutlinedInput } from "@mui/material";
import Card from "components/container/Card";

export default function PriceSection() {
  return (
    <Card title="Price" id="pricing" sx={{ mb: 3 }}>
      <OutlinedInput placeholder="Product price" />
    </Card>
  );
}
