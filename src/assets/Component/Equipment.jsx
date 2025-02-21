import React from 'react';
import concrete from '/image/equipment/concrete-mixer.jpg';
import dumper from '/image/equipment/OIP.jpg';
import cuttingMachine from '/image/equipment/cutting machine.jpg';
import drillingMachine from '/image/equipment/borehole drillig.jpg';
import vibrator from '/image/equipment/vibrator.jpg';
import rammer from '/image/equipment/rammer.jpg';
// import plateCompactors from '/image/equipment/plate Compactors.jpg';
import dieselTipper from '/image/equipment/30 Tonne Tippers.avif';
import trailer from '/image/equipment/32 Tons Trailer.jpg';
import pickupTruck from '/image/equipment/Toyota Pickup Truck.jpg';
import saloonC from '/image/equipment/Saloon C.jpg';
import saloonCars from '/image/equipment/Saloon Cars.jpg';
import soilCompactors from '/image/equipment/Soil Heavy Compactors.jpg';
import asphaltPavers from '/image/equipment/Asphalt Pavers.jpg';
import asphaltRollers from '/image/equipment/Asphalt Rollers.jpg';
import cat920 from '/image/equipment/CAT 920 Pay Loaders.jpg';
import graders from '/image/equipment/Graders.jpg';
import bitumenSprayer from '/image/equipment/Bitumen Sprayer.jpg';
import waterBowers from '/image/equipment/Water Bowers.jpg';
import cat815 from '/image/equipment/CAT 815 Compactors.jpg';

import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const EquipmentCatalog = () => {
  const equipmentList = [
    { name: 'Concrete Mixers', quantity: 4, image: concrete },
    { name: 'Dumpers', quantity: 5, image: dumper },
    { name: 'Cutting Bending Machines', quantity: 3, image: cuttingMachine },
    { name: 'Heavy Duty Drilling Machines', quantity: 1, image: drillingMachine },
    { name: 'Pendulum Internal Vibrators', quantity: 1, image: vibrator },
    { name: 'Vibrations Rammer', quantity: 1, image: rammer },
    { name: 'Plate Compactors', quantity: 2, image: plateCompactors },
    { name: '5 Tons Morries 830 WF Diesel Tipper', quantity: 1, image: dieselTipper },
    { name: '32 Tons Trailer', quantity: 5, image: trailer },
    { name: 'Toyota Pickup Truck', quantity: 1, image: pickupTruck },
    { name: 'Saloon C', quantity: 1, image: saloonC },
    { name: 'Saloon Cars', quantity: 3, image: saloonCars },
    { name: 'Soil Heavy Compactors', quantity: 2, image: soilCompactors },
    { name: 'Asphalt Pavers', quantity: 2, image: asphaltPavers },
    { name: 'Asphalt Rollers', quantity: 1, image: asphaltRollers },
    { name: 'CAT 920 Pay Loaders', quantity: 1, image: cat920 },
    { name: 'Graders', quantity: 1, image: graders },
    { name: 'Bitumen Sprayer', quantity: 1, image: bitumenSprayer },
    { name: 'Water Bowers', quantity: 3, image: waterBowers },
    { name: 'CAT 815 Compactors', quantity: 1, image: cat815 }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 16 }}>
      <Card sx={{ mb: 4, p: 2, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">
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
