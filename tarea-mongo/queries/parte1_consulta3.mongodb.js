use("Actors");

db["Voice-actors"]
  .find(
    {
      Edad: { $lt: 30 },

      Personajes: {
        $elemMatch: {
          Rol: "Principal",
          Generos: "Accion",
        },
      },
    },
    {
      _id: 0,
      Nombre: 1,
      Edad: 1,
      Personajes: 1,
    },
  )
  .sort({ Edad: 1 })
  .limit(10);
