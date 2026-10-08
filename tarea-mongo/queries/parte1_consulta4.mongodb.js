use("Actors");

db["Voice-actors"].aggregate([
  {
    $sort: { Patrimonio: -1 },
  },
  {
    $skip: 4,
  },
  {
    $limit: 10,
  },
  {
    $project: {
      _id: 0,
      Nombre: 1,
      Patrimonio: 1,
      Nacionalidad: 1,
    },
  },
]);
