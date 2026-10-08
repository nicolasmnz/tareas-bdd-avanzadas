use("Actors");

db["Voice-actors"]
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
