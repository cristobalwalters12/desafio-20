import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function DataCard({ nombre, valor, unidad_medida, fecha }) {
  return (
    <Card className="mt-6 mb-4 mx-2 w-96">
      <CardHeader color="white">
        <img src="./undraw_revenue.svg" alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {nombre}
        </Typography>
        <Typography className="text-center">
          Valor: {valor} {unidad_medida}
        </Typography>
        <Typography className="mt-2 text-center">
          Fecha: {new Date(fecha).toLocaleDateString()}
        </Typography>
      </CardBody>
    </Card>
  );
}
export default DataCard;
