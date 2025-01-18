require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Métodos permitidos
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Encabezados permitidos
  next();
});

app.get("/", (req, res) => {
  res.send(
    {
      "rooms": [
        {
          "id": "101",
          "beds": [
            {
              "size": "twin",
              "count": 1
            }
          ]
        },
        {
          "id": "102",
          "beds": [
            {
              "size": "twin",
              "count": 1
            }
          ]
        },
        {
          "id": "103",
          "beds": [
            {
              "size": "twin",
              "count": 2
            }
          ]
        },
        {
          "id": "104",
          "beds": [
            {
              "size": "twin",
              "count": 2
            }
          ]
        },
        {
          "id": "105",
          "beds": [
            {
              "size": "twin",
              "count": 3
            }
          ]
        },
        {
          "id": "106",
          "beds": [
            {
              "size": "twin",
              "count": 3
            }
          ]
        },
        {
          "id": "201",
          "beds": [
            {
              "size": "full",
              "count": 1
            }
          ]
        },
        {
          "id": "202",
          "beds": [
            {
              "size": "full",
              "count": 1
            }
          ]
        },
        {
          "id": "203",
          "beds": [
            {
              "size": "queen",
              "count": 1
            }
          ]
        },
        {
          "id": "204",
          "beds": [
            {
              "size": "queen",
              "count": 1
            }
          ]
        },
        {
          "id": "205",
          "beds": [
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "206",
          "beds": [
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "301",
          "beds": [
            {
              "size": "twin",
              "count": 1
            },
            {
              "size": "full",
              "count": 1
            }
          ]
        },
        {
          "id": "302",
          "beds": [
            {
              "size": "twin",
              "count": 1
            },
            {
              "size": "full",
              "count": 1
            }
          ]
        },
        {
          "id": "303",
          "beds": [
            {
              "size": "twin",
              "count": 1
            },
            {
              "size": "queen",
              "count": 1
            }
          ]
        },
        {
          "id": "304",
          "beds": [
            {
              "size": "twin",
              "count": 1
            },
            {
              "size": "queen",
              "count": 1
            }
          ]
        },
        {
          "id": "305",
          "beds": [
            {
              "size": "twin",
              "count": 1
            },
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "306",
          "beds": [
            {
              "size": "twin",
              "count": 1
            },
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "401",
          "beds": [
            {
              "size": "full",
              "count": 2
            }
          ]
        },
        {
          "id": "402",
          "beds": [
            {
              "size": "full",
              "count": 2
            }
          ]
        },
        {
          "id": "403",
          "beds": [
            {
              "size": "full",
              "count": 1
            },
            {
              "size": "queen",
              "count": 1
            }
          ]
        },
        {
          "id": "404",
          "beds": [
            {
              "size": "full",
              "count": 1
            },
            {
              "size": "queen",
              "count": 1
            }
          ]
        },
        {
          "id": "405",
          "beds": [
            {
              "size": "full",
              "count": 1
            },
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "406",
          "beds": [
            {
              "size": "full",
              "count": 1
            },
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "501",
          "beds": [
            {
              "size": "queen",
              "count": 2
            }
          ]
        },
        {
          "id": "502",
          "beds": [
            {
              "size": "queen",
              "count": 2
            }
          ]
        },
        {
          "id": "503",
          "beds": [
            {
              "size": "queen",
              "count": 1
            },
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "504",
          "beds": [
            {
              "size": "queen",
              "count": 1
            },
            {
              "size": "king",
              "count": 1
            }
          ]
        },
        {
          "id": "505",
          "beds": [
            {
              "size": "king",
              "count": 2
            }
          ]
        },
        {
          "id": "506",
          "beds": [
            {
              "size": "king",
              "count": 2
            }
          ]
        }
      ],
      "users": [
    
      ]
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`);
});
