const express = require('express');
const bodyParser = require('body-parser');
const plantModule = require('./controller/plants');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/plants', (req, res) => {
  const plants = plantModule.getPlants();
  res.send(plants)
});

app.get('/plants/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantModule.getPlantById(id);
  res.send(plant);    
});

app.delete('/plants/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantModule.removePlantById(id);
  res.send(plant);     
});

app.post('/plants/:id', (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantModule.editPlant(id, newPlant);
  res.send(plant); 
});

app.post('/plants', (req, res) => {
  const plant = req.body.plant;
  const nplant = plantModule.createNewPlant(plant);
  res.send(nplant); 
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantModule.getPlantsThatNeedsSunWithId(id);
  res.send(plant); 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);  
});
