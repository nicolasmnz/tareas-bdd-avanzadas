use("Actors");

// Consulta 1 - Edad > 50
db["Voice-actors"]
  .explain("executionStats")
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

// Consulta 2 - Nacionalidad + idioma
db["Voice-actors"]
  .explain("executionStats")
  .find(
    {
      Nacionalidad: "Japon",
      Idiomas: "Ingles",
    },
    {
      _id: 0,
      Nombre: 1,
      Nacionalidad: 1,
      Idiomas: 1,
    },
  )
  .sort({ Nombre: 1 })
  .limit(10);

// Consulta 3 - Edad + Personajes
db["Voice-actors"]
  .explain("executionStats")
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

// Consulta 4 - Pipeline de agregacion
db["Voice-actors"].explain("executionStats").aggregate([
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
