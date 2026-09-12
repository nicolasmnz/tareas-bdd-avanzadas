use("Actors");

db["Voice-actors"]
  .find(
    {
      Edad: { $gt: 50 },
    },
    {
      _id: 0,
      Nombre: 1,
      Edad: 1,
      Nacionalidad: 1,
      Patrimonio: 1,
    },
  )
  .sort({ Edad: -1 })
  .limit(10);
