import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const EquipmentCatalog = () => {
  const equipmentList = [
    { name: 'Concrete Mixers', quantity: 4, image: '/image/equipment/concrete-mixer.jpg' },
    { name: 'Dumpers', quantity: 5, image: '/image/equipment/OIP.jpg' },
    { name: 'Cutting Bending Machines', quantity: 3, image: '/image/equipment/cutting machine.jpg' },
    { name: 'Heavy Duty Drilling Machines', quantity: 1, image: '/image/equipment/borehole drillig.jpg' },
    { name: 'Pendulum Internal Vibrators', quantity: 1, image: '/image/equipment/vibrator.jpg' },
    { name: 'Vibrations Rammer', quantity: 1, image: '/image/equipment/rammer.jpg' },
    { name: 'Plate Compactors', quantity: 2, image: '/image/equipment/plate Compactors.jpg' },
    { name: '5 Tons Morries 830 WF Diesel Tipper', quantity: 1, image: '/image/equipment/30 Tonne Tippers.avif' },
    { name: '32 Tons Trailer', quantity: 5, image: '/image/equipment/32 Tons Trailer.jpg' },
    { name: 'Toyota Pickup Truck', quantity: 1, image: '/image/equipment/Toyota Pickup Truck.jpg' },
    { name: 'Saloon C', quantity: 1, image: '/image/equipment/Saloon C.jpg' },
    { name: 'Saloon Cars', quantity: 3, image: '/image/equipment/Saloon Cars.jpg' },
    { name: 'Soil Heavy Compactors', quantity: 2, image: '/image/equipment/Soil Heavy Compactors.jpg' },
    { name: 'Asphalt Pavers', quantity: 2, image: '/image/equipment/Asphalt Pavers.jpg' },
    { name: 'Asphalt Rollers', quantity: 1, image: '/image/equipment/Asphalt Rollers.jpg' },
    { name: 'CAT 920 Pay Loaders', quantity: 1, image: '/image/equipment/CAT 920 Pay Loaders.jpg' },
    { name: 'Graders', quantity: 1, image: '/image/equipment/Graders.jpg' },
    { name: 'Bitumen Sprayer', quantity: 1, image: '/image/equipment/Bitumen Sprayer.jpg' },
    { name: 'Water Bowers', quantity: 3, image: '/image/equipment/Water Bowers.jpg' },
    { name: 'CAT 815 Compactors', quantity: 1, image: '/image/equipment/CAT 815 Compactors.jpg' },
    { name: '30 Tonne Tippers', quantity: 1, image: '/image/equipment/30 Tonne tippers.avif' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 16 }}>
      <Card sx={{ mb: 4, p: 2, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" >
          I.V JATAU GLOBAL RESOURCES LTD - Equipment Catalog
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          A fully computerized outfit equipped with the latest in information technology
        </Typography>
      </Card>
      <Grid container spacing={3}>
        {equipmentList.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
              <CardMedia component="img" height="200" image={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {item.quantity} Units
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EquipmentCatalog;
