db["Voice-actors"].updateMany({}, [
  {
    $set: {
      Patrimonio: {
        $multiply: ["$Patrimonio", 1.32],
      },

      Personajes: {
        $concatArrays: [
          "$Personajes",
          [
            {
              Nombre: "Speed Racer",
              Produccion: "Sansa Ball Race",
              TipoProduccion: "Profesional",

              Rol: {
                $cond: [{ $lt: ["$Edad", 40] }, "Principal", "Secundario"],
              },

              Apariciones: {
                $cond: [{ $lt: ["$Edad", 40] }, 3, 1],
              },

              Generos: ["Accion", "Deportes"],
            },
          ],
        ],
      },
    },
  },
]);
