// Banco de preguntas diagnósticas: tres niveles por cada subtema.
window.thermoLearnQuestionBank = {
  "temperatura": [
    {
      "id": "temperatura-1",
      "topic": "termometria",
      "subtopic": "temperatura",
      "level": 1,
      "prompt": "Mariana toca una taza de chocolate recién servido y otra de chocolate que lleva una hora sobre la mesa. La primera quema mucho más. ¿Qué diferencia hay entre los dos chocolates?",
      "options": [
        {
          "id": "A",
          "text": "El recién servido tiene más cantidad de chocolate."
        },
        {
          "id": "B",
          "text": "Los dos tienen la misma temperatura, pero el recién servido guarda más calor."
        },
        {
          "id": "C",
          "text": "El recién servido tiene mayor temperatura."
        },
        {
          "id": "D",
          "text": "El recién servido quema porque tiene más sabor."
        }
      ],
      "correctOption": "C",
      "explanation": "La temperatura indica qué tan caliente está un objeto. El chocolate recién servido está más caliente, es decir, tiene mayor temperatura; no depende de la cantidad ni del sabor."
    },
    {
      "id": "temperatura-2",
      "topic": "termometria",
      "subtopic": "temperatura",
      "level": 2,
      "prompt": "Un vaso contiene agua a 20 °C y otro agua a 60 °C. ¿Qué significa, a nivel de las partículas del agua, que el segundo vaso tenga mayor temperatura?",
      "options": [
        {
          "id": "A",
          "text": "Que las partículas del agua a 60 °C son más grandes."
        },
        {
          "id": "B",
          "text": "Que hay más partículas en el vaso de 60 °C."
        },
        {
          "id": "C",
          "text": "Que las partículas del agua a 60 °C son de otro material."
        },
        {
          "id": "D",
          "text": "Que, en promedio, las partículas del agua a 60 °C se mueven con más energía."
        }
      ],
      "correctOption": "D",
      "explanation": "La temperatura está relacionada con la energía promedio de movimiento de las partículas. No depende de su tamaño ni de cuántas haya."
    },
    {
      "id": "temperatura-3",
      "topic": "termometria",
      "subtopic": "temperatura",
      "level": 3,
      "prompt": "La energía cinética promedio de las partículas de un gas es proporcional a su temperatura en kelvin. Si un gas pasa de 300 K a 600 K, ¿qué ocurre con la energía cinética promedio de sus partículas?",
      "options": [
        {
          "id": "A",
          "text": "Se reduce a la mitad."
        },
        {
          "id": "B",
          "text": "Se duplica."
        },
        {
          "id": "C",
          "text": "Se cuadruplica."
        },
        {
          "id": "D",
          "text": "Se vuelve cero."
        }
      ],
      "correctOption": "B",
      "explanation": "Como la energía cinética promedio es proporcional a la temperatura en kelvin, al duplicar la temperatura (de 300 K a 600 K) también se duplica la energía cinética promedio."
    }
  ],
  "escalas-temperatura": [
    {
      "id": "escalas-temperatura-1",
      "topic": "termometria",
      "subtopic": "escalas-temperatura",
      "level": 1,
      "prompt": "Una receta indica que el agua debe estar a 100 °C. ¿A qué escala de temperatura corresponde ese valor?",
      "options": [
        {
          "id": "A",
          "text": "Kelvin"
        },
        {
          "id": "B",
          "text": "Fahrenheit"
        },
        {
          "id": "C",
          "text": "Escala de Richter"
        },
        {
          "id": "D",
          "text": "Celsius"
        }
      ],
      "correctOption": "D",
      "explanation": "El símbolo °C significa grados Celsius, la escala más usada en Colombia en la vida diaria."
    },
    {
      "id": "escalas-temperatura-2",
      "topic": "termometria",
      "subtopic": "escalas-temperatura",
      "level": 2,
      "prompt": "Una estudiante afirma que 0 K es lo mismo que 0 °C. ¿Es correcta su afirmación?",
      "options": [
        {
          "id": "A",
          "text": "No: 0 K es el cero absoluto, aproximadamente -273 °C, y 0 °C equivale a 273 K."
        },
        {
          "id": "B",
          "text": "Sí: ambas escalas empiezan en el mismo punto."
        },
        {
          "id": "C",
          "text": "No: 0 K equivale a 32 °C, el punto de congelación del agua."
        },
        {
          "id": "D",
          "text": "Sí, porque el kelvin es una unidad de longitud."
        }
      ],
      "correctOption": "A",
      "explanation": "La escala Kelvin parte del cero absoluto, que es aproximadamente -273 °C. Por eso 0 °C equivale a 273 K y las dos escalas no empiezan en el mismo punto."
    },
    {
      "id": "escalas-temperatura-3",
      "topic": "termometria",
      "subtopic": "escalas-temperatura",
      "level": 3,
      "prompt": "Un termómetro marca 20 °C por la mañana y 35 °C por la tarde. Usando K = °C + 273, ¿cuál fue el aumento de temperatura en °C y cuál es ese mismo aumento expresado en kelvin?",
      "options": [
        {
          "id": "A",
          "text": "15 °C, que equivalen a un aumento de 15 K."
        },
        {
          "id": "B",
          "text": "15 °C, que equivalen a un aumento de 288 K."
        },
        {
          "id": "C",
          "text": "55 °C, que equivalen a un aumento de 55 K."
        },
        {
          "id": "D",
          "text": "15 °C, que equivalen a un aumento de 4.500 K."
        }
      ],
      "correctOption": "A",
      "explanation": "35 °C - 20 °C = 15 °C. En kelvin las temperaturas son 308 K y 293 K, y su diferencia también es 15 K: un cambio de 1 °C equivale a un cambio de 1 K."
    }
  ],
  "termometros": [
    {
      "id": "termometros-1",
      "topic": "termometria",
      "subtopic": "termometros",
      "level": 1,
      "prompt": "Una persona quiere saber qué tan caliente está el agua que preparó para el café. ¿Qué magnitud debe medir y con qué instrumento?",
      "options": [
        {
          "id": "A",
          "text": "El calor, con un termómetro."
        },
        {
          "id": "B",
          "text": "La temperatura, con un termómetro."
        },
        {
          "id": "C",
          "text": "La temperatura, con una balanza."
        },
        {
          "id": "D",
          "text": "El sabor, con una regla."
        }
      ],
      "correctOption": "B",
      "explanation": "La temperatura indica qué tan caliente o fría está una sustancia y se mide con un termómetro. El calor es energía que se transfiere, no lo mide el termómetro."
    },
    {
      "id": "termometros-2",
      "topic": "termometria",
      "subtopic": "termometros",
      "level": 2,
      "prompt": "Para medir la fiebre de un niño con un termómetro hay que dejarlo unos minutos bajo el brazo antes de leerlo. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Para que el termómetro almacene calor del cuerpo y lo mida en calorías."
        },
        {
          "id": "B",
          "text": "Para que el termómetro alcance el equilibrio térmico con el cuerpo y su lectura sea la temperatura real."
        },
        {
          "id": "C",
          "text": "Para que el termómetro enfríe al niño y le baje la fiebre."
        },
        {
          "id": "D",
          "text": "Para que el termómetro cambie de color."
        }
      ],
      "correctOption": "B",
      "explanation": "El termómetro marca su propia temperatura. Debe esperar hasta alcanzar el equilibrio térmico con el cuerpo para que esa lectura coincida con la temperatura del niño."
    },
    {
      "id": "termometros-3",
      "topic": "termometria",
      "subtopic": "termometros",
      "level": 3,
      "prompt": "Un termómetro sin escala tiene una columna de 2 cm cuando está en agua con hielo (0 °C) y de 22 cm cuando está en agua hirviendo (100 °C). Si la escala es lineal y la columna mide 12 cm, ¿qué temperatura indica?",
      "options": [
        {
          "id": "A",
          "text": "12 °C"
        },
        {
          "id": "B",
          "text": "60 °C"
        },
        {
          "id": "C",
          "text": "500 °C"
        },
        {
          "id": "D",
          "text": "50 °C"
        }
      ],
      "correctOption": "D",
      "explanation": "Entre 0 °C y 100 °C la columna crece 20 cm, es decir, 5 °C por cada cm. Con 12 cm, la columna creció 10 cm desde los 2 cm iniciales: 10 cm × 5 °C/cm = 50 °C."
    }
  ],
  "equilibrio-termico": [
    {
      "id": "equilibrio-termico-1",
      "topic": "termometria",
      "subtopic": "equilibrio-termico",
      "level": 1,
      "prompt": "Una bebida a 5 °C se deja sobre la mesa de una habitación que está a 25 °C durante varias horas. ¿Qué ocurrirá finalmente con la temperatura de la bebida?",
      "options": [
        {
          "id": "A",
          "text": "Se mantendrá en 5 °C, porque el vaso detiene por completo el paso de energía."
        },
        {
          "id": "B",
          "text": "Bajará de 5 °C, porque el frío pasa de la bebida al ambiente."
        },
        {
          "id": "C",
          "text": "Llegará aproximadamente a 25 °C, la temperatura de la habitación."
        },
        {
          "id": "D",
          "text": "Subirá hasta 100 °C."
        }
      ],
      "correctOption": "C",
      "explanation": "La bebida recibe energía del ambiente más caliente hasta que ambos alcanzan la misma temperatura, que es el equilibrio térmico."
    },
    {
      "id": "equilibrio-termico-2",
      "topic": "termometria",
      "subtopic": "equilibrio-termico",
      "level": 2,
      "prompt": "Una cuchara metálica caliente se sumerge en agua fría dentro de un recipiente aislado. Después de un rato, un termómetro marca la misma temperatura en la cuchara y en el agua. ¿Qué indica esto?",
      "options": [
        {
          "id": "A",
          "text": "Que alcanzaron el equilibrio térmico y ya no hay transferencia neta de energía entre ellos."
        },
        {
          "id": "B",
          "text": "Que la cuchara y el agua contienen exactamente la misma cantidad de calor."
        },
        {
          "id": "C",
          "text": "Que la cuchara perdió toda su energía térmica."
        },
        {
          "id": "D",
          "text": "Que el agua se evaporó por completo."
        }
      ],
      "correctOption": "A",
      "explanation": "Cuando dos cuerpos en contacto tienen la misma temperatura están en equilibrio térmico y no hay transferencia neta de energía. Tener igual temperatura no significa tener igual energía."
    },
    {
      "id": "equilibrio-termico-3",
      "topic": "termometria",
      "subtopic": "equilibrio-termico",
      "level": 3,
      "prompt": "Se mezclan 100 g de agua a 80 °C con 100 g de agua a 20 °C en un recipiente aislado, sin pérdidas de energía. ¿Cuál será la temperatura final de la mezcla?",
      "options": [
        {
          "id": "A",
          "text": "100 °C"
        },
        {
          "id": "B",
          "text": "60 °C"
        },
        {
          "id": "C",
          "text": "-60 °C"
        },
        {
          "id": "D",
          "text": "50 °C"
        }
      ],
      "correctOption": "D",
      "explanation": "Como las masas son iguales y es la misma sustancia, la temperatura final es el promedio: (80 + 20) / 2 = 50 °C."
    }
  ],
  "calor-energia-termica": [
    {
      "id": "calor-energia-termica-1",
      "topic": "calorimetria",
      "subtopic": "calor-energia-termica",
      "level": 1,
      "prompt": "Al tomar un cubo de hielo con la mano sientes frío. ¿Cuál es la mejor explicación?",
      "options": [
        {
          "id": "A",
          "text": "El hielo le transmite frío a tu mano."
        },
        {
          "id": "B",
          "text": "El hielo no tiene energía térmica y por eso absorbe la de tu mano."
        },
        {
          "id": "C",
          "text": "El hielo produce un sonido que enfría la piel."
        },
        {
          "id": "D",
          "text": "Tu mano le transfiere energía térmica al hielo, que está a menor temperatura."
        }
      ],
      "correctOption": "D",
      "explanation": "El calor es energía que pasa del cuerpo de mayor temperatura (la mano) al de menor temperatura (el hielo). Lo que sientes es la pérdida de energía de tu mano."
    },
    {
      "id": "calor-energia-termica-2",
      "topic": "calorimetria",
      "subtopic": "calor-energia-termica",
      "level": 2,
      "prompt": "Un vaso con 100 g de agua y una olla con 1.000 g de agua están ambos a 60 °C. ¿Qué se puede afirmar sobre su energía térmica?",
      "options": [
        {
          "id": "A",
          "text": "Tienen la misma energía térmica, porque están a la misma temperatura."
        },
        {
          "id": "B",
          "text": "La olla tiene más energía térmica, porque tiene más partículas a la misma temperatura."
        },
        {
          "id": "C",
          "text": "El vaso tiene más energía térmica, porque se enfría más rápido."
        },
        {
          "id": "D",
          "text": "Ninguno tiene energía térmica, porque el agua líquida no la almacena."
        }
      ],
      "correctOption": "B",
      "explanation": "La energía térmica depende de la temperatura y de la cantidad de materia. A igual temperatura, la olla tiene más partículas y, por lo tanto, más energía térmica."
    },
    {
      "id": "calor-energia-termica-3",
      "topic": "calorimetria",
      "subtopic": "calor-energia-termica",
      "level": 3,
      "prompt": "Se sabe que 1 cal equivale a 4,18 J. Una estufa entrega 2.090 J de energía a una olla. ¿Cuántas calorías son?",
      "options": [
        {
          "id": "A",
          "text": "500 cal"
        },
        {
          "id": "B",
          "text": "8.736 cal"
        },
        {
          "id": "C",
          "text": "2.090 cal"
        },
        {
          "id": "D",
          "text": "Ninguna, porque los julios no se pueden convertir en calorías."
        }
      ],
      "correctOption": "A",
      "explanation": "Para pasar de julios a calorías se divide entre 4,18: 2.090 J / 4,18 J/cal = 500 cal."
    }
  ],
  "calor-especifico": [
    {
      "id": "calor-especifico-1",
      "topic": "calorimetria",
      "subtopic": "calor-especifico",
      "level": 1,
      "prompt": "En un día soleado, la arena de la playa quema los pies, pero el agua del mar se siente fresca. ¿Qué propiedad explica esta diferencia?",
      "options": [
        {
          "id": "A",
          "text": "El agua tiene menor calor específico que la arena."
        },
        {
          "id": "B",
          "text": "La arena tiene más masa que el agua."
        },
        {
          "id": "C",
          "text": "El agua tiene mayor calor específico, así que necesita absorber mucha más energía para subir su temperatura."
        },
        {
          "id": "D",
          "text": "El agua refleja el sonido del Sol."
        }
      ],
      "correctOption": "C",
      "explanation": "El agua tiene un calor específico alto: necesita mucha energía para aumentar su temperatura un grado. La arena, con menor calor específico, se calienta mucho más rápido."
    },
    {
      "id": "calor-especifico-2",
      "topic": "calorimetria",
      "subtopic": "calor-especifico",
      "level": 2,
      "prompt": "Dos bloques de la misma masa, uno de aluminio (c = 0,22 cal/g·°C) y uno de hierro (c = 0,11 cal/g·°C), reciben la misma cantidad de calor. ¿Cuál afirmación es correcta?",
      "options": [
        {
          "id": "A",
          "text": "Los dos suben igual de temperatura."
        },
        {
          "id": "B",
          "text": "El aluminio sube más de temperatura, porque tiene mayor calor específico."
        },
        {
          "id": "C",
          "text": "Ninguno cambia de temperatura, porque el calor se pierde."
        },
        {
          "id": "D",
          "text": "El hierro sube más de temperatura, porque necesita menos energía por cada grado."
        }
      ],
      "correctOption": "D",
      "explanation": "Con igual masa y el mismo calor recibido, el material de menor calor específico sube más su temperatura. El hierro (0,11) sube el doble que el aluminio (0,22)."
    },
    {
      "id": "calor-especifico-3",
      "topic": "calorimetria",
      "subtopic": "calor-especifico",
      "level": 3,
      "prompt": "¿Cuánto calor se necesita para calentar 200 g de agua de 20 °C a 70 °C? Usa Q = m · c · ΔT, con c = 1 cal/(g·°C) para el agua.",
      "options": [
        {
          "id": "A",
          "text": "4.000 cal"
        },
        {
          "id": "B",
          "text": "14.000 cal"
        },
        {
          "id": "C",
          "text": "10.000 cal"
        },
        {
          "id": "D",
          "text": "0 cal, porque el agua ya está por encima de 0 °C."
        }
      ],
      "correctOption": "C",
      "explanation": "ΔT = 70 - 20 = 50 °C, así que Q = 200 g × 1 cal/(g·°C) × 50 °C = 10.000 cal."
    }
  ],
  "capacidad-calorifica": [
    {
      "id": "capacidad-calorifica-1",
      "topic": "calorimetria",
      "subtopic": "capacidad-calorifica",
      "level": 1,
      "prompt": "Una taza pequeña y una olla grande, ambas con agua a la misma temperatura, se ponen sobre estufas iguales durante el mismo tiempo. ¿En cuál sube más rápido la temperatura?",
      "options": [
        {
          "id": "A",
          "text": "En ambas por igual, porque tienen la misma estufa."
        },
        {
          "id": "B",
          "text": "En la taza, porque tiene menos agua y su capacidad calorífica es menor."
        },
        {
          "id": "C",
          "text": "En la olla, porque una cantidad mayor de agua se calienta más rápido."
        },
        {
          "id": "D",
          "text": "En ninguna, porque el agua nunca cambia de temperatura."
        }
      ],
      "correctOption": "B",
      "explanation": "La capacidad calorífica depende de la masa. La taza tiene menos agua y necesita menos energía para subir cada grado, por eso se calienta más rápido."
    },
    {
      "id": "capacidad-calorifica-2",
      "topic": "calorimetria",
      "subtopic": "capacidad-calorifica",
      "level": 2,
      "prompt": "Dos bloques de aluminio, uno de 100 g y otro de 400 g, reciben la misma cantidad de calor. ¿Cuál afirmación sobre su capacidad calorífica y su cambio de temperatura es correcta?",
      "options": [
        {
          "id": "A",
          "text": "El de 400 g tiene mayor capacidad calorífica, así que su temperatura sube menos."
        },
        {
          "id": "B",
          "text": "El de 100 g tiene mayor capacidad calorífica, así que su temperatura sube menos."
        },
        {
          "id": "C",
          "text": "Tienen la misma capacidad calorífica, porque son del mismo material."
        },
        {
          "id": "D",
          "text": "El de 400 g no cambia de temperatura."
        }
      ],
      "correctOption": "A",
      "explanation": "La capacidad calorífica es C = m · c, así que crece con la masa. Con el mismo calor recibido, el bloque de 400 g, que tiene mayor capacidad calorífica, aumenta menos su temperatura."
    },
    {
      "id": "capacidad-calorifica-3",
      "topic": "calorimetria",
      "subtopic": "capacidad-calorifica",
      "level": 3,
      "prompt": "Un bloque necesita 500 cal para aumentar su temperatura en 25 °C. ¿Cuál es su capacidad calorífica? Usa C = Q / ΔT.",
      "options": [
        {
          "id": "A",
          "text": "12.500 cal/°C"
        },
        {
          "id": "B",
          "text": "0,05 cal/°C"
        },
        {
          "id": "C",
          "text": "20 cal/°C"
        },
        {
          "id": "D",
          "text": "0 cal/°C, porque el bloque es sólido."
        }
      ],
      "correctOption": "C",
      "explanation": "C = Q / ΔT = 500 cal / 25 °C = 20 cal/°C. Es la energía necesaria para subir 1 °C la temperatura del bloque."
    }
  ],
  "mezclas-calorimetricas": [
    {
      "id": "calorimetria-mezclas-1",
      "topic": "calorimetria",
      "subtopic": "mezclas-calorimetricas",
      "level": 1,
      "prompt": "Al mezclar agua caliente con agua fría en una taza, ¿qué ocurre con la temperatura final?",
      "options": [
        {
          "id": "A",
          "text": "Queda igual a la del agua caliente."
        },
        {
          "id": "B",
          "text": "Queda entre la del agua fría y la del agua caliente."
        },
        {
          "id": "C",
          "text": "Queda más baja que la del agua fría."
        },
        {
          "id": "D",
          "text": "Queda siempre en 100 °C."
        }
      ],
      "correctOption": "B",
      "explanation": "El agua caliente cede energía y la fría la gana hasta igualar sus temperaturas, por lo que la temperatura final queda entre las dos iniciales."
    },
    {
      "id": "calorimetria-mezclas-2",
      "topic": "calorimetria",
      "subtopic": "mezclas-calorimetricas",
      "level": 2,
      "prompt": "En un calorímetro se mezcla una pequeña cantidad de agua muy caliente con una gran cantidad de agua fría. ¿Cómo será la temperatura final?",
      "options": [
        {
          "id": "A",
          "text": "Exactamente el promedio de las dos temperaturas."
        },
        {
          "id": "B",
          "text": "Más cercana a la temperatura del agua caliente."
        },
        {
          "id": "C",
          "text": "Más alta que la de las dos aguas."
        },
        {
          "id": "D",
          "text": "Más cercana a la temperatura del agua fría."
        }
      ],
      "correctOption": "D",
      "explanation": "La mayor masa, que es la del agua fría, necesita mucha más energía para cambiar su temperatura, así que la mezcla queda más cerca de la temperatura del agua fría."
    },
    {
      "id": "calorimetria-mezclas-3",
      "topic": "calorimetria",
      "subtopic": "mezclas-calorimetricas",
      "level": 3,
      "prompt": "En un calorímetro se mezclan 200 g de agua a 80 °C con 300 g de agua a 20 °C. Si no hay pérdidas de calor, ¿cuál es la temperatura final?",
      "options": [
        {
          "id": "A",
          "text": "44 °C"
        },
        {
          "id": "B",
          "text": "50 °C"
        },
        {
          "id": "C",
          "text": "56 °C"
        },
        {
          "id": "D",
          "text": "-44 °C"
        }
      ],
      "correctOption": "A",
      "explanation": "El calor que cede el agua caliente es igual al que gana el agua fría: 200 · (80 - T) = 300 · (T - 20). Resolviendo, T = 44 °C."
    }
  ],
  "transferencia-calor": [
    {
      "id": "transferencia-calor-1",
      "topic": "propagacion-calor",
      "subtopic": "transferencia-calor",
      "level": 1,
      "prompt": "Una sopa caliente sobre la mesa se enfría poco a poco. ¿En qué dirección se transfiere la energía térmica?",
      "options": [
        {
          "id": "A",
          "text": "De la sopa hacia el aire más frío que la rodea."
        },
        {
          "id": "B",
          "text": "Del aire hacia la sopa, porque el ambiente es más grande."
        },
        {
          "id": "C",
          "text": "No hay transferencia: la sopa se enfría sola sin intercambiar energía con nada."
        },
        {
          "id": "D",
          "text": "Las partículas de la sopa desaparecen al enfriarse."
        }
      ],
      "correctOption": "A",
      "explanation": "La energía térmica fluye espontáneamente del cuerpo de mayor temperatura al de menor temperatura. Por eso la sopa pierde energía hacia el aire."
    },
    {
      "id": "transferencia-calor-2",
      "topic": "propagacion-calor",
      "subtopic": "transferencia-calor",
      "level": 2,
      "prompt": "Un estudiante afirma que el calor solo se transmite cuando los objetos se tocan. ¿Cuál de estas situaciones demuestra que su afirmación es falsa?",
      "options": [
        {
          "id": "A",
          "text": "Una cuchara que se calienta al dejarla dentro de una taza de té caliente."
        },
        {
          "id": "B",
          "text": "Un hielo que se derrite sobre la palma de una mano."
        },
        {
          "id": "C",
          "text": "La Tierra recibe energía del Sol a través del espacio casi vacío."
        },
        {
          "id": "D",
          "text": "Un objeto que se calienta porque una persona lo mira fijamente."
        }
      ],
      "correctOption": "C",
      "explanation": "Entre el Sol y la Tierra casi no hay materia, y aun así llega energía por radiación. Esto muestra que la transferencia de calor no siempre requiere contacto."
    },
    {
      "id": "transferencia-calor-3",
      "topic": "propagacion-calor",
      "subtopic": "transferencia-calor",
      "level": 3,
      "prompt": "Un bloque metálico caliente se coloca en agua dentro de un recipiente perfectamente aislado, que no intercambia energía con el exterior. El bloque cede 600 cal. ¿Cuántas calorías gana el agua?",
      "options": [
        {
          "id": "A",
          "text": "300 cal"
        },
        {
          "id": "B",
          "text": "600 cal"
        },
        {
          "id": "C",
          "text": "1.200 cal"
        },
        {
          "id": "D",
          "text": "0 cal, porque el calor que sale del bloque desaparece."
        }
      ],
      "correctOption": "B",
      "explanation": "En un sistema aislado la energía se conserva: todo el calor que cede el bloque lo gana el agua, es decir, 600 cal."
    }
  ],
  "conduccion": [
    {
      "id": "conduccion-1",
      "topic": "propagacion-calor",
      "subtopic": "conduccion",
      "level": 1,
      "prompt": "El mango metálico de una sartén se calienta aunque no esté sobre la llama. ¿Cuál es el mecanismo principal por el que se calienta?",
      "options": [
        {
          "id": "A",
          "text": "Convección: el aire caliente sube y calienta el mango."
        },
        {
          "id": "B",
          "text": "Radiación: la llama ilumina el mango y lo calienta."
        },
        {
          "id": "C",
          "text": "Conducción: la energía pasa de partícula a partícula a lo largo del metal."
        },
        {
          "id": "D",
          "text": "El mango absorbe el sonido de la llama."
        }
      ],
      "correctOption": "C",
      "explanation": "En los sólidos metálicos la energía se transmite por conducción, de partícula a partícula, desde la zona caliente hacia la zona fría."
    },
    {
      "id": "conduccion-2",
      "topic": "propagacion-calor",
      "subtopic": "conduccion",
      "level": 2,
      "prompt": "Dos barras del mismo tamaño, una de cobre y otra de madera, se introducen por un extremo en agua hirviendo. Después de un minuto, ¿qué se observa en el extremo que quedó fuera del agua?",
      "options": [
        {
          "id": "A",
          "text": "Los dos extremos están igual de calientes."
        },
        {
          "id": "B",
          "text": "El de madera está más caliente, porque la madera retiene mejor el calor."
        },
        {
          "id": "C",
          "text": "Los dos extremos se congelan."
        },
        {
          "id": "D",
          "text": "El de cobre está más caliente, porque el cobre conduce mejor el calor que la madera."
        }
      ],
      "correctOption": "D",
      "explanation": "El cobre es un buen conductor térmico y transmite la energía rápidamente. La madera es un mal conductor, por eso su extremo se calienta mucho menos."
    },
    {
      "id": "conduccion-3",
      "topic": "propagacion-calor",
      "subtopic": "conduccion",
      "level": 3,
      "prompt": "La rapidez con que se conduce el calor a través de una pared es inversamente proporcional a su espesor, si el área y la diferencia de temperatura no cambian. Una pared de 0,2 m de espesor conduce 500 W. Si se duplica el espesor, ¿cuánto calor por segundo conducirá?",
      "options": [
        {
          "id": "A",
          "text": "250 W"
        },
        {
          "id": "B",
          "text": "1.000 W"
        },
        {
          "id": "C",
          "text": "500 W"
        },
        {
          "id": "D",
          "text": "-500 W, porque el calor cambiaría de sentido."
        }
      ],
      "correctOption": "A",
      "explanation": "Al duplicar el espesor, la rapidez de conducción se reduce a la mitad: 500 W / 2 = 250 W."
    }
  ],
  "conveccion": [
    {
      "id": "conveccion-1",
      "topic": "propagacion-calor",
      "subtopic": "conveccion",
      "level": 1,
      "prompt": "¿Por qué el aire caliente de una habitación tiende a acumularse cerca del techo?",
      "options": [
        {
          "id": "A",
          "text": "Porque el aire caliente es más denso y empuja hacia arriba."
        },
        {
          "id": "B",
          "text": "Porque el aire caliente es menos denso que el aire frío y sube."
        },
        {
          "id": "C",
          "text": "Porque el techo atrae el calor."
        },
        {
          "id": "D",
          "text": "Porque el aire caliente se convierte en luz."
        }
      ],
      "correctOption": "B",
      "explanation": "Al calentarse, el aire se expande y se vuelve menos denso, por lo que asciende, mientras el aire frío y más denso desciende."
    },
    {
      "id": "conveccion-2",
      "topic": "propagacion-calor",
      "subtopic": "conveccion",
      "level": 2,
      "prompt": "En un recipiente con agua que se calienta desde abajo se observan corrientes: el agua del fondo sube y el agua de la superficie baja por los lados. ¿Qué explica estas corrientes?",
      "options": [
        {
          "id": "A",
          "text": "El agua caliente del fondo se dilata, se vuelve menos densa y sube, mientras el agua más fría y densa baja."
        },
        {
          "id": "B",
          "text": "Las burbujas empujan el agua y las corrientes no dependen de la temperatura."
        },
        {
          "id": "C",
          "text": "La energía atraviesa el agua de partícula a partícula sin que el agua se mueva."
        },
        {
          "id": "D",
          "text": "El recipiente gira sobre sí mismo."
        }
      ],
      "correctOption": "A",
      "explanation": "Estas corrientes son de convección: las diferencias de densidad causadas por la temperatura hacen que el fluido caliente suba y el frío baje."
    },
    {
      "id": "conveccion-3",
      "topic": "propagacion-calor",
      "subtopic": "conveccion",
      "level": 3,
      "prompt": "Durante la tarde, el aire sobre una playa está a 32 °C y el aire sobre el mar a 26 °C. Considerando la convección, ¿hacia dónde sopla la brisa cerca de la superficie y por qué?",
      "options": [
        {
          "id": "A",
          "text": "De la tierra hacia el mar, porque el aire más caliente se desplaza hacia el agua."
        },
        {
          "id": "B",
          "text": "No hay viento, porque 6 °C de diferencia es muy poco."
        },
        {
          "id": "C",
          "text": "Hacia el espacio exterior, porque el aire caliente abandona la atmósfera."
        },
        {
          "id": "D",
          "text": "Del mar hacia la tierra: el aire caliente sobre la tierra sube y el aire más fresco del mar ocupa su lugar."
        }
      ],
      "correctOption": "D",
      "explanation": "El aire sobre la tierra, más caliente y menos denso, asciende. El aire más frío y denso del mar se desplaza hacia la tierra para reemplazarlo, formando la brisa marina."
    }
  ],
  "radiacion": [
    {
      "id": "radiacion-1",
      "topic": "propagacion-calor",
      "subtopic": "radiacion",
      "level": 1,
      "prompt": "Colocas la mano debajo de una bombilla incandescente encendida, sin tocarla, y sientes calor. ¿Cómo llega principalmente la energía a tu mano?",
      "options": [
        {
          "id": "A",
          "text": "Por conducción a través del aire que está quieto."
        },
        {
          "id": "B",
          "text": "Por convección: el aire caliente baja hasta tu mano."
        },
        {
          "id": "C",
          "text": "Por el sonido que produce la bombilla."
        },
        {
          "id": "D",
          "text": "Por radiación: la bombilla emite ondas electromagnéticas que tu mano absorbe."
        }
      ],
      "correctOption": "D",
      "explanation": "El aire caliente sube y el aire es mal conductor, así que la energía llega principalmente por radiación, que no necesita un medio material."
    },
    {
      "id": "radiacion-2",
      "topic": "propagacion-calor",
      "subtopic": "radiacion",
      "level": 2,
      "prompt": "Una camiseta blanca y una negra se dejan al sol durante una hora. La negra se siente más caliente. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque la camiseta negra refleja más radiación."
        },
        {
          "id": "B",
          "text": "Porque la camiseta negra conduce mejor el calor del aire."
        },
        {
          "id": "C",
          "text": "Porque la camiseta negra absorbe más radiación y la blanca refleja una mayor parte."
        },
        {
          "id": "D",
          "text": "Porque la camiseta blanca produce frío al estar al sol."
        }
      ],
      "correctOption": "C",
      "explanation": "Las superficies oscuras absorben más radiación y se calientan más. Las claras reflejan una mayor parte de la radiación incidente."
    },
    {
      "id": "radiacion-3",
      "topic": "propagacion-calor",
      "subtopic": "radiacion",
      "level": 3,
      "prompt": "Un panel de 2 m² recibe radiación solar de 1.000 W por cada metro cuadrado. Si absorbe el 60 % de la radiación que le llega, ¿cuánta potencia absorbe?",
      "options": [
        {
          "id": "A",
          "text": "600 W"
        },
        {
          "id": "B",
          "text": "1.200 W"
        },
        {
          "id": "C",
          "text": "2.000 W"
        },
        {
          "id": "D",
          "text": "-1.200 W"
        }
      ],
      "correctOption": "B",
      "explanation": "La potencia incidente es 2 m² × 1.000 W/m² = 2.000 W. El panel absorbe el 60 %: 2.000 W × 0,60 = 1.200 W."
    }
  ],
  "estados-materia": [
    {
      "id": "estados-materia-1",
      "topic": "estados-fases",
      "subtopic": "estados-materia",
      "level": 1,
      "prompt": "El agua de una botella es líquida. ¿Cuál característica es propia de un líquido?",
      "options": [
        {
          "id": "A",
          "text": "Tiene forma y volumen definidos."
        },
        {
          "id": "B",
          "text": "No tiene forma ni volumen definidos."
        },
        {
          "id": "C",
          "text": "Tiene volumen definido, pero toma la forma del recipiente que lo contiene."
        },
        {
          "id": "D",
          "text": "Flota siempre en el aire."
        }
      ],
      "correctOption": "C",
      "explanation": "Un líquido tiene volumen propio, pero sus partículas se deslizan unas sobre otras y por eso adopta la forma del recipiente."
    },
    {
      "id": "estados-materia-2",
      "topic": "estados-fases",
      "subtopic": "estados-materia",
      "level": 2,
      "prompt": "Alguien destapa un frasco de perfume en una esquina del salón y, al poco tiempo, todos sienten el aroma. ¿Qué propiedad de los gases lo explica?",
      "options": [
        {
          "id": "A",
          "text": "Las partículas de un gas se mueven libremente y se esparcen por todo el espacio disponible."
        },
        {
          "id": "B",
          "text": "Las partículas de un gas están muy juntas y fijas en su lugar."
        },
        {
          "id": "C",
          "text": "Los gases tienen volumen definido y se desplazan en bloque."
        },
        {
          "id": "D",
          "text": "El perfume se vuelve sólido y viaja por el piso."
        }
      ],
      "correctOption": "A",
      "explanation": "En un gas las partículas están muy separadas y se mueven en todas direcciones, por eso se expanden hasta ocupar todo el espacio disponible."
    },
    {
      "id": "estados-materia-3",
      "topic": "estados-fases",
      "subtopic": "estados-materia",
      "level": 3,
      "prompt": "500 mL de agua líquida se vierten en un frasco cerrado de 1.000 mL. Luego toda el agua se evapora dentro del frasco. ¿Qué volumen ocupaba el líquido y qué volumen ocupa el vapor?",
      "options": [
        {
          "id": "A",
          "text": "500 mL el líquido y 500 mL el vapor."
        },
        {
          "id": "B",
          "text": "1.000 mL el líquido y 1.000 mL el vapor."
        },
        {
          "id": "C",
          "text": "500 mL el líquido y 0 mL el vapor."
        },
        {
          "id": "D",
          "text": "500 mL el líquido y 1.000 mL el vapor."
        }
      ],
      "correctOption": "D",
      "explanation": "El líquido tiene volumen propio (500 mL). El gas no tiene volumen definido, así que el vapor se expande y ocupa todo el frasco, los 1.000 mL."
    }
  ],
  "cambios-estado": [
    {
      "id": "cambios-estado-1",
      "topic": "estados-fases",
      "subtopic": "cambios-estado",
      "level": 1,
      "prompt": "Un cubo de hielo dejado sobre la mesa en un día cálido se convierte en agua. ¿Cómo se llama este cambio de estado?",
      "options": [
        {
          "id": "A",
          "text": "Fusión"
        },
        {
          "id": "B",
          "text": "Solidificación"
        },
        {
          "id": "C",
          "text": "Condensación"
        },
        {
          "id": "D",
          "text": "Fotosíntesis"
        }
      ],
      "correctOption": "A",
      "explanation": "El paso de sólido a líquido se llama fusión. Ocurre cuando el hielo absorbe energía del ambiente."
    },
    {
      "id": "cambios-estado-2",
      "topic": "estados-fases",
      "subtopic": "cambios-estado",
      "level": 2,
      "prompt": "Mientras el agua hierve en una olla a nivel del mar, su temperatura se mantiene en 100 °C aunque la estufa siga encendida. ¿Cómo se explica?",
      "options": [
        {
          "id": "A",
          "text": "La estufa deja de transferir energía cuando el agua llega a 100 °C."
        },
        {
          "id": "B",
          "text": "La energía que recibe se usa para pasar de líquido a vapor, no para aumentar la temperatura."
        },
        {
          "id": "C",
          "text": "El agua no puede tener más energía que a 100 °C, aunque se le siga suministrando."
        },
        {
          "id": "D",
          "text": "El termómetro se descompone al llegar a 100 °C."
        }
      ],
      "correctOption": "B",
      "explanation": "Durante un cambio de estado la energía absorbida se emplea en separar las partículas (calor latente) y no en elevar la temperatura, que permanece constante."
    },
    {
      "id": "cambios-estado-3",
      "topic": "estados-fases",
      "subtopic": "cambios-estado",
      "level": 3,
      "prompt": "Una sustancia sigue este recorrido al calentarse: sólido → líquido → gas. ¿Cómo se llaman los dos cambios, en orden, y qué ocurre con su energía en cada uno?",
      "options": [
        {
          "id": "A",
          "text": "Solidificación y condensación; la sustancia cede energía en ambos."
        },
        {
          "id": "B",
          "text": "Fusión y vaporización; la sustancia absorbe energía en ambos."
        },
        {
          "id": "C",
          "text": "Fusión y condensación; la sustancia absorbe energía en ambos."
        },
        {
          "id": "D",
          "text": "Fotosíntesis y combustión; la sustancia no intercambia energía."
        }
      ],
      "correctOption": "B",
      "explanation": "Pasar de sólido a líquido es fusión y de líquido a gas es vaporización. Ambos cambios necesitan energía, así que la sustancia la absorbe."
    }
  ],
  "calor-latente": [
    {
      "id": "calor-latente-1",
      "topic": "estados-fases",
      "subtopic": "calor-latente",
      "level": 1,
      "prompt": "¿Por qué sudar ayuda a refrescar el cuerpo en un día caluroso?",
      "options": [
        {
          "id": "A",
          "text": "Porque el sudor es agua fría que entra al cuerpo."
        },
        {
          "id": "B",
          "text": "Porque el sudor produce frío por sí mismo."
        },
        {
          "id": "C",
          "text": "Porque el sudor se congela sobre la piel."
        },
        {
          "id": "D",
          "text": "Porque al evaporarse, el sudor absorbe energía del cuerpo y lo enfría."
        }
      ],
      "correctOption": "D",
      "explanation": "Para evaporarse, el sudor necesita energía (calor latente de vaporización) y la toma de la piel, por lo que el cuerpo se enfría."
    },
    {
      "id": "calor-latente-2",
      "topic": "estados-fases",
      "subtopic": "calor-latente",
      "level": 2,
      "prompt": "Una quemadura con vapor de agua a 100 °C suele ser más grave que una con la misma masa de agua líquida a 100 °C. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque el vapor está a mayor temperatura que el agua líquida."
        },
        {
          "id": "B",
          "text": "Porque el vapor pesa más que el agua líquida."
        },
        {
          "id": "C",
          "text": "Porque al condensarse sobre la piel, el vapor libera su calor latente, además del calor que cede al enfriarse."
        },
        {
          "id": "D",
          "text": "Porque el vapor es de otro material."
        }
      ],
      "correctOption": "C",
      "explanation": "A igual temperatura (100 °C), el vapor guarda además el calor latente de vaporización. Al condensarse sobre la piel lo libera, y por eso entrega mucha más energía."
    },
    {
      "id": "calor-latente-3",
      "topic": "estados-fases",
      "subtopic": "calor-latente",
      "level": 3,
      "prompt": "El calor latente de fusión del hielo es 80 cal/g. ¿Cuánto calor se necesita para fundir 50 g de hielo que ya está a 0 °C? Usa Q = m · L.",
      "options": [
        {
          "id": "A",
          "text": "130 cal"
        },
        {
          "id": "B",
          "text": "1,6 cal"
        },
        {
          "id": "C",
          "text": "4.000 cal"
        },
        {
          "id": "D",
          "text": "-4.000 cal"
        }
      ],
      "correctOption": "C",
      "explanation": "Q = 50 g × 80 cal/g = 4.000 cal. Esa energía se usa solo para fundir el hielo, sin cambiar su temperatura."
    }
  ],
  "curvas-calentamiento": [
    {
      "id": "curvas-calentamiento-1",
      "topic": "estados-fases",
      "subtopic": "curvas-calentamiento",
      "level": 1,
      "prompt": "Se calienta un trozo de hielo y se registra su temperatura: en la gráfica la línea sube, luego se mantiene horizontal durante un tiempo y después vuelve a subir. ¿Qué indica el tramo horizontal?",
      "options": [
        {
          "id": "A",
          "text": "Que está ocurriendo un cambio de estado."
        },
        {
          "id": "B",
          "text": "Que se apagó la fuente de calor."
        },
        {
          "id": "C",
          "text": "Que la sustancia llegó al cero absoluto."
        },
        {
          "id": "D",
          "text": "Que la sustancia ya no puede recibir más energía."
        }
      ],
      "correctOption": "A",
      "explanation": "En el tramo horizontal la energía que se absorbe se usa para cambiar de estado (por ejemplo, fundir el hielo) y no para subir la temperatura."
    },
    {
      "id": "curvas-calentamiento-2",
      "topic": "estados-fases",
      "subtopic": "curvas-calentamiento",
      "level": 2,
      "prompt": "Se calienta agua desde -10 °C hasta 120 °C a nivel del mar. ¿Cuántos tramos horizontales aparecen en la curva de calentamiento y a qué temperaturas?",
      "options": [
        {
          "id": "A",
          "text": "Uno, a 100 °C."
        },
        {
          "id": "B",
          "text": "Dos: uno a 0 °C (fusión) y otro a 100 °C (ebullición)."
        },
        {
          "id": "C",
          "text": "Tres: a 0 °C, 50 °C y 100 °C."
        },
        {
          "id": "D",
          "text": "Dos: uno a 50 °C y otro a 150 °C."
        }
      ],
      "correctOption": "B",
      "explanation": "Hay una meseta en la fusión del hielo (0 °C) y otra en la ebullición del agua (100 °C). Entre ellas y al final, la temperatura sube."
    },
    {
      "id": "curvas-calentamiento-3",
      "topic": "estados-fases",
      "subtopic": "curvas-calentamiento",
      "level": 3,
      "prompt": "Una fuente entrega 100 cal por minuto a un bloque de hielo a 0 °C. La temperatura permanece en 0 °C durante 20 minutos, hasta que todo el hielo se convierte en agua. ¿Cuánto calor absorbió el hielo durante la fusión?",
      "options": [
        {
          "id": "A",
          "text": "120 cal"
        },
        {
          "id": "B",
          "text": "0 cal, porque la temperatura no cambió."
        },
        {
          "id": "C",
          "text": "2.000 cal"
        },
        {
          "id": "D",
          "text": "2.000.000 cal"
        }
      ],
      "correctOption": "C",
      "explanation": "La fuente entrega 100 cal/min durante 20 min: 100 × 20 = 2.000 cal. Aunque la temperatura no cambia, esa energía se absorbe para fundir el hielo."
    }
  ],
  "dilatacion-lineal": [
    {
      "id": "dilatacion-lineal-1",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-lineal",
      "level": 1,
      "prompt": "¿Por qué los rieles de un tren se instalan dejando pequeños espacios entre ellos?",
      "options": [
        {
          "id": "A",
          "text": "Para ahorrar acero al construir la vía."
        },
        {
          "id": "B",
          "text": "Para que el tren pueda flotar."
        },
        {
          "id": "C",
          "text": "Para que el agua de lluvia pase entre ellos."
        },
        {
          "id": "D",
          "text": "Para que, al calentarse con el Sol, los rieles puedan alargarse sin deformarse."
        }
      ],
      "correctOption": "D",
      "explanation": "Los metales se dilatan al calentarse. Los espacios permiten que los rieles se alarguen sin torcerse ni dañar la vía."
    },
    {
      "id": "dilatacion-lineal-2",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-lineal",
      "level": 2,
      "prompt": "Una tubería metálica larga se instala entre dos paredes fijas sin dejar ningún espacio. En un día muy caluroso se curva. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque el calor encoge el metal y lo tira hacia un lado."
        },
        {
          "id": "B",
          "text": "Porque el metal se dilata y, como no puede alargarse libremente, se deforma."
        },
        {
          "id": "C",
          "text": "Porque el calor hace más pesada la tubería."
        },
        {
          "id": "D",
          "text": "Porque el sonido hace que las paredes se alejen."
        }
      ],
      "correctOption": "B",
      "explanation": "Al calentarse, la tubería intenta alargarse. Como las paredes no se lo permiten, la dilatación se convierte en una deformación y la tubería se curva."
    },
    {
      "id": "dilatacion-lineal-3",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-lineal",
      "level": 3,
      "prompt": "Una barra de aluminio mide 2,0 m a 20 °C. Su coeficiente de dilatación lineal es 24 × 10⁻⁶ °C⁻¹. ¿Cuánto se alarga cuando su temperatura sube a 70 °C? Usa ΔL = α · L₀ · ΔT.",
      "options": [
        {
          "id": "A",
          "text": "2,4 mm"
        },
        {
          "id": "B",
          "text": "24 mm"
        },
        {
          "id": "C",
          "text": "0,24 mm"
        },
        {
          "id": "D",
          "text": "2,4 m"
        }
      ],
      "correctOption": "A",
      "explanation": "ΔT = 70 - 20 = 50 °C. ΔL = 24 × 10⁻⁶ °C⁻¹ × 2,0 m × 50 °C = 0,0024 m = 2,4 mm."
    }
  ],
  "dilatacion-superficial": [
    {
      "id": "dilatacion-superficial-1",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-superficial",
      "level": 1,
      "prompt": "Una tapa metálica de olla se deja sobre una estufa encendida. ¿Qué ocurre con el área de la tapa?",
      "options": [
        {
          "id": "A",
          "text": "Disminuye, porque el calor la comprime."
        },
        {
          "id": "B",
          "text": "No cambia, porque el metal es un sólido."
        },
        {
          "id": "C",
          "text": "Aumenta ligeramente, porque el metal se dilata."
        },
        {
          "id": "D",
          "text": "Se duplica de inmediato."
        }
      ],
      "correctOption": "C",
      "explanation": "Los sólidos se dilatan al calentarse, también en superficie. El área de la tapa aumenta, aunque muy poco."
    },
    {
      "id": "dilatacion-superficial-2",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-superficial",
      "level": 2,
      "prompt": "Una lámina de metal tiene un agujero circular. Al calentar la lámina, ¿qué ocurre con el diámetro del agujero?",
      "options": [
        {
          "id": "A",
          "text": "Aumenta, como si el agujero estuviera hecho del mismo metal."
        },
        {
          "id": "B",
          "text": "Disminuye, porque el metal crece hacia adentro."
        },
        {
          "id": "C",
          "text": "No cambia, porque el vacío no se dilata."
        },
        {
          "id": "D",
          "text": "Se convierte en un cuadrado."
        }
      ],
      "correctOption": "A",
      "explanation": "Todo el material se dilata por igual, incluido el contorno del agujero, así que el agujero también se agranda."
    },
    {
      "id": "dilatacion-superficial-3",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-superficial",
      "level": 3,
      "prompt": "Una lámina cuadrada de acero tiene 1,00 m² de área a 20 °C. El coeficiente de dilatación lineal del acero es 12 × 10⁻⁶ °C⁻¹. ¿Cuánto aumenta su área al calentarla a 120 °C? Usa ΔA = 2 · α · A₀ · ΔT.",
      "options": [
        {
          "id": "A",
          "text": "12 cm²"
        },
        {
          "id": "B",
          "text": "48 cm²"
        },
        {
          "id": "C",
          "text": "2,4 m²"
        },
        {
          "id": "D",
          "text": "24 cm²"
        }
      ],
      "correctOption": "D",
      "explanation": "ΔT = 100 °C. ΔA = 2 × 12 × 10⁻⁶ °C⁻¹ × 1,00 m² × 100 °C = 0,0024 m² = 24 cm²."
    }
  ],
  "dilatacion-volumetrica": [
    {
      "id": "dilatacion-volumetrica-1",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-volumetrica",
      "level": 1,
      "prompt": "Si se llena un tanque de gasolina hasta el borde en la mañana y el carro se deja al Sol, a veces la gasolina se derrama un poco. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque el calor aumenta la masa de la gasolina."
        },
        {
          "id": "B",
          "text": "Porque la gasolina se dilata con el calor y ocupa más volumen."
        },
        {
          "id": "C",
          "text": "Porque el tanque se encoge con el calor."
        },
        {
          "id": "D",
          "text": "Porque el Sol convierte la gasolina en agua."
        }
      ],
      "correctOption": "B",
      "explanation": "Los líquidos se dilatan al calentarse. La gasolina ocupa más volumen y, si el tanque estaba lleno, parte se derrama."
    },
    {
      "id": "dilatacion-volumetrica-2",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-volumetrica",
      "level": 2,
      "prompt": "Dos frascos iguales, uno con agua y otro con aceite, están llenos hasta el borde a la misma temperatura. Al calentarlos 20 °C, el aceite se derrama más que el agua. Si los frascos se dilatan igual, ¿qué indica esto?",
      "options": [
        {
          "id": "A",
          "text": "Que el aceite pesa más que el agua."
        },
        {
          "id": "B",
          "text": "Que el agua no se dilata."
        },
        {
          "id": "C",
          "text": "Que el aceite tiene un coeficiente de dilatación volumétrica mayor que el agua."
        },
        {
          "id": "D",
          "text": "Que el aceite se evapora por completo."
        }
      ],
      "correctOption": "C",
      "explanation": "Con el mismo cambio de temperatura, el aceite aumenta más de volumen que el agua. Eso significa que su coeficiente de dilatación volumétrica es mayor."
    },
    {
      "id": "dilatacion-volumetrica-3",
      "topic": "dilatacion-termica",
      "subtopic": "dilatacion-volumetrica",
      "level": 3,
      "prompt": "Un tanque contiene 1.000 L de glicerina. Su coeficiente de dilatación volumétrica es 5,0 × 10⁻⁴ °C⁻¹. Si la temperatura sube 30 °C, ¿cuánto aumenta su volumen? Usa ΔV = β · V₀ · ΔT.",
      "options": [
        {
          "id": "A",
          "text": "15 L"
        },
        {
          "id": "B",
          "text": "1.015 L"
        },
        {
          "id": "C",
          "text": "1,5 L"
        },
        {
          "id": "D",
          "text": "Disminuye 15 L"
        }
      ],
      "correctOption": "A",
      "explanation": "ΔV = 5,0 × 10⁻⁴ °C⁻¹ × 1.000 L × 30 °C = 15 L. El volumen final sería 1.015 L, pero el aumento es de 15 L."
    }
  ],
  "agua-anomala": [
    {
      "id": "agua-anomala-1",
      "topic": "dilatacion-termica",
      "subtopic": "agua-anomala",
      "level": 1,
      "prompt": "Si se deja una botella de vidrio completamente llena de agua en el congelador, puede romperse. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque el agua al congelarse se contrae y deja un vacío que rompe el vidrio."
        },
        {
          "id": "B",
          "text": "Porque el frío vuelve más pesado al vidrio."
        },
        {
          "id": "C",
          "text": "Porque el agua al congelarse aumenta su volumen y empuja las paredes de la botella."
        },
        {
          "id": "D",
          "text": "Porque el hielo produce un sonido que rompe el vidrio."
        }
      ],
      "correctOption": "C",
      "explanation": "A diferencia de la mayoría de las sustancias, el agua se expande al congelarse. Ese aumento de volumen empuja las paredes y puede romper la botella."
    },
    {
      "id": "agua-anomala-2",
      "topic": "dilatacion-termica",
      "subtopic": "agua-anomala",
      "level": 2,
      "prompt": "En un lago de clima frío, la superficie se congela en invierno, pero el agua del fondo sigue líquida y los peces sobreviven. ¿Qué lo explica?",
      "options": [
        {
          "id": "A",
          "text": "El agua más fría siempre se hunde y llega a 0 °C en el fondo."
        },
        {
          "id": "B",
          "text": "El hielo es más denso que el agua líquida y por eso se hunde."
        },
        {
          "id": "C",
          "text": "Los peces producen su propio hielo para protegerse."
        },
        {
          "id": "D",
          "text": "El hielo es menos denso que el agua líquida, flota y aísla; el agua más densa, a unos 4 °C, queda en el fondo."
        }
      ],
      "correctOption": "D",
      "explanation": "El agua alcanza su máxima densidad cerca de 4 °C y el hielo es menos denso que el agua. Por eso el hielo flota y el agua del fondo permanece líquida."
    },
    {
      "id": "agua-anomala-3",
      "topic": "dilatacion-termica",
      "subtopic": "agua-anomala",
      "level": 3,
      "prompt": "Un recipiente contiene 1.000 g de agua líquida a 4 °C, que ocupan 1.000 cm³. El hielo tiene una densidad de 0,917 g/cm³. Si esa agua se congela por completo, ¿cuál es, aproximadamente, el volumen del hielo? Usa V = m / ρ.",
      "options": [
        {
          "id": "A",
          "text": "917 cm³"
        },
        {
          "id": "B",
          "text": "1.090 cm³"
        },
        {
          "id": "C",
          "text": "1.000 cm³"
        },
        {
          "id": "D",
          "text": "0 cm³"
        }
      ],
      "correctOption": "B",
      "explanation": "V = 1.000 g / 0,917 g/cm³ ≈ 1.090 cm³. El agua aumenta cerca de un 9 % su volumen al congelarse."
    }
  ],
  "modelo-gas-ideal": [
    {
      "id": "modelo-molecular-gas-ideal-1",
      "topic": "teoria-cinetica-gases",
      "subtopic": "modelo-gas-ideal",
      "level": 1,
      "prompt": "Un globo inflado mantiene su forma. Según el modelo cinético de los gases, ¿qué causa que el globo se mantenga inflado?",
      "options": [
        {
          "id": "A",
          "text": "Los choques continuos de las partículas del aire contra las paredes ejercen presión hacia afuera."
        },
        {
          "id": "B",
          "text": "Las partículas del aire se pegan a las paredes y las estiran."
        },
        {
          "id": "C",
          "text": "El aire dentro del globo está quieto y empuja por su peso."
        },
        {
          "id": "D",
          "text": "El globo está lleno de un líquido invisible que lo empuja."
        }
      ],
      "correctOption": "A",
      "explanation": "Las partículas del gas se mueven al azar y chocan sin parar contra las paredes. La suma de esos choques produce la presión que mantiene inflado el globo."
    },
    {
      "id": "modelo-molecular-gas-ideal-2",
      "topic": "teoria-cinetica-gases",
      "subtopic": "modelo-gas-ideal",
      "level": 2,
      "prompt": "Según el modelo cinético molecular del gas ideal, ¿cuál afirmación es correcta?",
      "options": [
        {
          "id": "A",
          "text": "Las partículas se atraen fuertemente entre sí y se mantienen unidas."
        },
        {
          "id": "B",
          "text": "Las partículas están en reposo y solo se mueven cuando se calientan."
        },
        {
          "id": "C",
          "text": "Las partículas cambian de elemento químico al chocar."
        },
        {
          "id": "D",
          "text": "Las partículas se mueven al azar y casi no interactúan entre sí, salvo en los choques."
        }
      ],
      "correctOption": "D",
      "explanation": "En el modelo del gas ideal las partículas están en movimiento constante y desordenado, y sus interacciones, aparte de los choques, se consideran despreciables."
    },
    {
      "id": "modelo-molecular-gas-ideal-3",
      "topic": "teoria-cinetica-gases",
      "subtopic": "modelo-gas-ideal",
      "level": 3,
      "prompt": "Un recipiente rígido contiene 2,0 × 10²² partículas de gas a 300 K y la presión es de 100 kPa. Sin cambiar la temperatura, se añaden 2,0 × 10²² partículas más. ¿Cuál será la nueva presión?",
      "options": [
        {
          "id": "A",
          "text": "100 kPa"
        },
        {
          "id": "B",
          "text": "200 kPa"
        },
        {
          "id": "C",
          "text": "50 kPa"
        },
        {
          "id": "D",
          "text": "-200 kPa"
        }
      ],
      "correctOption": "B",
      "explanation": "A volumen y temperatura constantes, la presión es proporcional al número de partículas, porque hay más choques contra las paredes. Al duplicar las partículas, la presión se duplica: 200 kPa."
    }
  ],
  "leyes-gases": [
    {
      "id": "leyes-gases-1",
      "topic": "teoria-cinetica-gases",
      "subtopic": "leyes-gases",
      "level": 1,
      "prompt": "Una jeringa sin aguja, con la salida tapada, contiene aire. Al empujar el émbolo para reducir el volumen, ¿qué ocurre con la presión del aire si la temperatura no cambia?",
      "options": [
        {
          "id": "A",
          "text": "Disminuye."
        },
        {
          "id": "B",
          "text": "No cambia."
        },
        {
          "id": "C",
          "text": "Aumenta."
        },
        {
          "id": "D",
          "text": "Se vuelve cero."
        }
      ],
      "correctOption": "C",
      "explanation": "Según la ley de Boyle, a temperatura constante la presión de un gas aumenta cuando su volumen disminuye."
    },
    {
      "id": "leyes-gases-2",
      "topic": "teoria-cinetica-gases",
      "subtopic": "leyes-gases",
      "level": 2,
      "prompt": "Una bombona de gas cerrada y de volumen fijo se deja al sol y la presión dentro de ella aumenta. ¿Qué ley explica esto?",
      "options": [
        {
          "id": "A",
          "text": "La ley de Gay-Lussac: a volumen constante, al subir la temperatura sube la presión."
        },
        {
          "id": "B",
          "text": "La ley de Boyle: a temperatura constante, la presión disminuye cuando aumenta el volumen."
        },
        {
          "id": "C",
          "text": "La ley de Charles: a presión constante, el volumen disminuye cuando sube la temperatura."
        },
        {
          "id": "D",
          "text": "La ley de Ohm: el calor aumenta la corriente del gas."
        }
      ],
      "correctOption": "A",
      "explanation": "Con el volumen fijo, el gas calentado se mueve más rápido y choca con más fuerza contra las paredes. Esa relación entre presión y temperatura es la ley de Gay-Lussac."
    },
    {
      "id": "leyes-gases-3",
      "topic": "teoria-cinetica-gases",
      "subtopic": "leyes-gases",
      "level": 3,
      "prompt": "Un gas a 2,0 atm ocupa 6,0 L a temperatura constante. Si se comprime hasta 3,0 L, ¿cuál es la nueva presión? Usa P₁V₁ = P₂V₂.",
      "options": [
        {
          "id": "A",
          "text": "1,0 atm"
        },
        {
          "id": "B",
          "text": "2,0 atm"
        },
        {
          "id": "C",
          "text": "-4,0 atm"
        },
        {
          "id": "D",
          "text": "4,0 atm"
        }
      ],
      "correctOption": "D",
      "explanation": "P₂ = P₁V₁ / V₂ = (2,0 atm × 6,0 L) / 3,0 L = 4,0 atm. Al reducir el volumen a la mitad, la presión se duplica."
    }
  ],
  "ecuacion-gas-ideal": [
    {
      "id": "ecuacion-gas-ideal-1",
      "topic": "teoria-cinetica-gases",
      "subtopic": "ecuacion-gas-ideal",
      "level": 1,
      "prompt": "En la ecuación del gas ideal, PV = nRT, ¿qué representa la letra n?",
      "options": [
        {
          "id": "A",
          "text": "La temperatura en kelvin."
        },
        {
          "id": "B",
          "text": "La cantidad de gas, medida en moles."
        },
        {
          "id": "C",
          "text": "La presión del gas."
        },
        {
          "id": "D",
          "text": "La velocidad del sonido en el gas."
        }
      ],
      "correctOption": "B",
      "explanation": "En PV = nRT, n es la cantidad de sustancia del gas, medida en moles. P es la presión, V el volumen, R una constante y T la temperatura en kelvin."
    },
    {
      "id": "ecuacion-gas-ideal-2",
      "topic": "teoria-cinetica-gases",
      "subtopic": "ecuacion-gas-ideal",
      "level": 2,
      "prompt": "Dos recipientes iguales, del mismo volumen y a la misma temperatura, contienen gas ideal: el recipiente A tiene 1 mol y el B tiene 3 mol. ¿Qué se puede afirmar sobre sus presiones?",
      "options": [
        {
          "id": "A",
          "text": "Son iguales, porque el volumen y la temperatura son iguales."
        },
        {
          "id": "B",
          "text": "La del recipiente A es el triple de la del B."
        },
        {
          "id": "C",
          "text": "La del recipiente B es el triple de la del A."
        },
        {
          "id": "D",
          "text": "La presión de un gas no se puede comparar."
        }
      ],
      "correctOption": "C",
      "explanation": "En PV = nRT, con V y T iguales, la presión es proporcional a n. El recipiente B tiene el triple de moles, así que su presión es el triple."
    },
    {
      "id": "ecuacion-gas-ideal-3",
      "topic": "teoria-cinetica-gases",
      "subtopic": "ecuacion-gas-ideal",
      "level": 3,
      "prompt": "¿Qué volumen ocupan 2,0 mol de gas ideal a 300 K y 1,0 × 10⁵ Pa? Usa V = nRT / P, con R = 8,3 J/(mol·K).",
      "options": [
        {
          "id": "A",
          "text": "0,050 m³"
        },
        {
          "id": "B",
          "text": "0,50 m³"
        },
        {
          "id": "C",
          "text": "0,0050 m³"
        },
        {
          "id": "D",
          "text": "50 m³"
        }
      ],
      "correctOption": "A",
      "explanation": "V = (2,0 mol × 8,3 J/(mol·K) × 300 K) / (1,0 × 10⁵ Pa) = 4.980 / 100.000 ≈ 0,050 m³, es decir, unos 50 L."
    }
  ],
  "presion-temperatura-rms": [
    {
      "id": "presion-temperatura-rms-1",
      "topic": "teoria-cinetica-gases",
      "subtopic": "presion-temperatura-rms",
      "level": 1,
      "prompt": "Después de un viaje largo, los neumáticos de un carro se calientan y la presión del aire dentro de ellos sube. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque entra más aire al neumático."
        },
        {
          "id": "B",
          "text": "Porque el neumático se encoge."
        },
        {
          "id": "C",
          "text": "Porque el aire se convierte en líquido."
        },
        {
          "id": "D",
          "text": "Porque las partículas del aire se mueven más rápido y chocan con más fuerza y más veces contra las paredes."
        }
      ],
      "correctOption": "D",
      "explanation": "Al subir la temperatura, aumenta la energía de movimiento de las partículas. Chocan con más fuerza y más seguido contra las paredes, y la presión aumenta."
    },
    {
      "id": "presion-temperatura-rms-2",
      "topic": "teoria-cinetica-gases",
      "subtopic": "presion-temperatura-rms",
      "level": 2,
      "prompt": "El hidrógeno y el oxígeno están a la misma temperatura. Las partículas de hidrógeno son mucho más livianas que las de oxígeno. ¿Cuál afirmación sobre sus velocidades es correcta?",
      "options": [
        {
          "id": "A",
          "text": "Se mueven a la misma velocidad promedio."
        },
        {
          "id": "B",
          "text": "Las de hidrógeno se mueven más rápido en promedio."
        },
        {
          "id": "C",
          "text": "Las de oxígeno se mueven más rápido por ser más pesadas."
        },
        {
          "id": "D",
          "text": "Ninguna se mueve."
        }
      ],
      "correctOption": "B",
      "explanation": "A igual temperatura, las partículas tienen la misma energía cinética promedio. Como las de hidrógeno tienen menos masa, deben moverse más rápido."
    },
    {
      "id": "presion-temperatura-rms-3",
      "topic": "teoria-cinetica-gases",
      "subtopic": "presion-temperatura-rms",
      "level": 3,
      "prompt": "La velocidad cuadrática media (rms) de las partículas de un gas a 300 K es 500 m/s. Si la temperatura sube a 1.200 K, ¿cuál será su nueva velocidad rms? La velocidad rms es proporcional a √T.",
      "options": [
        {
          "id": "A",
          "text": "2.000 m/s"
        },
        {
          "id": "B",
          "text": "500 m/s"
        },
        {
          "id": "C",
          "text": "1.000 m/s"
        },
        {
          "id": "D",
          "text": "100.000 m/s"
        }
      ],
      "correctOption": "C",
      "explanation": "La temperatura se multiplica por 4 (1.200 K / 300 K), y √4 = 2. Por eso la velocidad rms se duplica: 500 m/s × 2 = 1.000 m/s."
    }
  ],
  "sistemas-termodinamicos": [
    {
      "id": "sistemas-termodinamicos-1",
      "topic": "primera-ley-termodinamica",
      "subtopic": "sistemas-termodinamicos",
      "level": 1,
      "prompt": "Una olla destapada con agua hirviendo recibe calor de la estufa y deja escapar vapor al aire. ¿Qué tipo de sistema termodinámico es el agua de la olla?",
      "options": [
        {
          "id": "A",
          "text": "Aislado, porque está dentro de una olla."
        },
        {
          "id": "B",
          "text": "Abierto, porque intercambia energía y materia con el entorno."
        },
        {
          "id": "C",
          "text": "Cerrado, porque intercambia materia pero no energía."
        },
        {
          "id": "D",
          "text": "Un sistema eléctrico."
        }
      ],
      "correctOption": "B",
      "explanation": "Un sistema abierto intercambia energía y materia con su entorno. El agua recibe calor y pierde vapor, así que es un sistema abierto."
    },
    {
      "id": "sistemas-termodinamicos-2",
      "topic": "primera-ley-termodinamica",
      "subtopic": "sistemas-termodinamicos",
      "level": 2,
      "prompt": "Una lata de gaseosa sellada se deja al sol: se calienta, pero no se escapa gas. ¿Cómo se clasifica el gas dentro de la lata?",
      "options": [
        {
          "id": "A",
          "text": "Sistema abierto, porque recibe calor del Sol."
        },
        {
          "id": "B",
          "text": "Sistema aislado, porque la lata no deja entrar nada."
        },
        {
          "id": "C",
          "text": "No es un sistema termodinámico, porque está dentro de una lata."
        },
        {
          "id": "D",
          "text": "Sistema cerrado: intercambia energía con el entorno, pero no materia."
        }
      ],
      "correctOption": "D",
      "explanation": "El gas no sale ni entra, así que no intercambia materia. Pero la lata se calienta, o sea que sí intercambia energía: es un sistema cerrado."
    },
    {
      "id": "sistemas-termodinamicos-3",
      "topic": "primera-ley-termodinamica",
      "subtopic": "sistemas-termodinamicos",
      "level": 3,
      "prompt": "Un termo ideal, perfectamente aislado, contiene 500 g de agua a 60 °C y se cierra. Considera el agua como el sistema. Después de 2 horas, ¿cuánto calor intercambió con el entorno y qué pasó con su temperatura?",
      "options": [
        {
          "id": "A",
          "text": "0 J; la temperatura se mantiene en 60 °C."
        },
        {
          "id": "B",
          "text": "Ganó calor hasta llegar a la temperatura ambiente."
        },
        {
          "id": "C",
          "text": "Perdió 500 J por hora y su temperatura bajó."
        },
        {
          "id": "D",
          "text": "Ganó 500 J y su temperatura se triplicó."
        }
      ],
      "correctOption": "A",
      "explanation": "Un sistema perfectamente aislado no intercambia calor con el entorno (Q = 0), así que su energía interna y su temperatura se mantienen constantes."
    }
  ],
  "trabajo-calor-energia-interna": [
    {
      "id": "trabajo-calor-energia-interna-1",
      "topic": "primera-ley-termodinamica",
      "subtopic": "trabajo-calor-energia-interna",
      "level": 1,
      "prompt": "Al frotar las manos con fuerza se calientan. ¿Qué transformación de energía ocurre?",
      "options": [
        {
          "id": "A",
          "text": "El ambiente le transfiere calor a las manos."
        },
        {
          "id": "B",
          "text": "Se crea energía térmica de la nada."
        },
        {
          "id": "C",
          "text": "El trabajo hecho al frotar se convierte en energía térmica."
        },
        {
          "id": "D",
          "text": "El frío del ambiente se transforma en calor."
        }
      ],
      "correctOption": "C",
      "explanation": "Al frotar, tu esfuerzo realiza trabajo contra el rozamiento, y esa energía se convierte en energía térmica, que aumenta la temperatura de las manos."
    },
    {
      "id": "trabajo-calor-energia-interna-2",
      "topic": "primera-ley-termodinamica",
      "subtopic": "trabajo-calor-energia-interna",
      "level": 2,
      "prompt": "Un gas encerrado en un cilindro con émbolo móvil se calienta y empuja el émbolo hacia arriba, levantando una pesa. ¿Cómo se usó el calor que recibió el gas?",
      "options": [
        {
          "id": "A",
          "text": "Una parte aumentó la energía interna del gas y otra se convirtió en trabajo al levantar la pesa."
        },
        {
          "id": "B",
          "text": "Todo el calor aumentó la energía interna del gas."
        },
        {
          "id": "C",
          "text": "Todo el calor se convirtió en trabajo y el gas no se calentó."
        },
        {
          "id": "D",
          "text": "El calor se convirtió en masa de la pesa."
        }
      ],
      "correctOption": "A",
      "explanation": "El calor recibido puede aumentar la energía interna y también permitir que el gas realice trabajo. En este caso hubo ambas cosas."
    },
    {
      "id": "trabajo-calor-energia-interna-3",
      "topic": "primera-ley-termodinamica",
      "subtopic": "trabajo-calor-energia-interna",
      "level": 3,
      "prompt": "Un gas a presión constante de 2,0 × 10⁵ Pa se expande de 1,0 × 10⁻³ m³ a 4,0 × 10⁻³ m³. ¿Cuánto trabajo realiza el gas? Usa W = P · ΔV.",
      "options": [
        {
          "id": "A",
          "text": "200 J"
        },
        {
          "id": "B",
          "text": "800 J"
        },
        {
          "id": "C",
          "text": "60.000 J"
        },
        {
          "id": "D",
          "text": "600 J"
        }
      ],
      "correctOption": "D",
      "explanation": "ΔV = 4,0 × 10⁻³ - 1,0 × 10⁻³ = 3,0 × 10⁻³ m³. W = 2,0 × 10⁵ Pa × 3,0 × 10⁻³ m³ = 600 J."
    }
  ],
  "enunciado-primera-ley": [
    {
      "id": "enunciado-primera-ley-1",
      "topic": "primera-ley-termodinamica",
      "subtopic": "enunciado-primera-ley",
      "level": 1,
      "prompt": "¿Qué establece, en palabras sencillas, la primera ley de la termodinámica?",
      "options": [
        {
          "id": "A",
          "text": "La energía se crea cuando algo se calienta."
        },
        {
          "id": "B",
          "text": "La energía se destruye cuando algo se enfría."
        },
        {
          "id": "C",
          "text": "La temperatura de un objeto nunca cambia."
        },
        {
          "id": "D",
          "text": "La energía no se crea ni se destruye: solo se transforma o se transfiere."
        }
      ],
      "correctOption": "D",
      "explanation": "La primera ley es el principio de conservación de la energía: la energía total se conserva, aunque pueda cambiar de forma o pasar de un cuerpo a otro."
    },
    {
      "id": "enunciado-primera-ley-2",
      "topic": "primera-ley-termodinamica",
      "subtopic": "enunciado-primera-ley",
      "level": 2,
      "prompt": "Una máquina recibe 1.000 J de calor y entrega 300 J de trabajo útil. Un estudiante dice que los 700 J restantes desaparecieron. ¿Qué responde la primera ley?",
      "options": [
        {
          "id": "A",
          "text": "Tiene razón: parte de la energía se destruye en el proceso."
        },
        {
          "id": "B",
          "text": "No desaparecieron: se cedieron como calor al ambiente o quedaron como energía interna."
        },
        {
          "id": "C",
          "text": "No desaparecieron: se convirtieron en 700 J de trabajo extra."
        },
        {
          "id": "D",
          "text": "Tiene razón, porque la máquina se apagó."
        }
      ],
      "correctOption": "B",
      "explanation": "La energía no se destruye. Los 700 J restantes salieron como calor hacia el ambiente o se quedaron en la máquina como energía interna."
    },
    {
      "id": "enunciado-primera-ley-3",
      "topic": "primera-ley-termodinamica",
      "subtopic": "enunciado-primera-ley",
      "level": 3,
      "prompt": "Un gas recibe 800 J de calor y realiza 300 J de trabajo. ¿Cuál es el cambio de su energía interna? Usa ΔU = Q - W.",
      "options": [
        {
          "id": "A",
          "text": "1.100 J"
        },
        {
          "id": "B",
          "text": "300 J"
        },
        {
          "id": "C",
          "text": "500 J"
        },
        {
          "id": "D",
          "text": "240.000 J"
        }
      ],
      "correctOption": "C",
      "explanation": "ΔU = Q - W = 800 J - 300 J = 500 J. De la energía recibida, 300 J salieron como trabajo y 500 J quedaron en el gas."
    }
  ],
  "procesos-termodinamicos": [
    {
      "id": "procesos-termodinamicos-1",
      "topic": "primera-ley-termodinamica",
      "subtopic": "procesos-termodinamicos",
      "level": 1,
      "prompt": "Se calienta aire dentro de un recipiente rígido y cerrado, de volumen fijo. ¿Qué tipo de proceso termodinámico es?",
      "options": [
        {
          "id": "A",
          "text": "Isocórico, porque el volumen es constante."
        },
        {
          "id": "B",
          "text": "Isobárico, porque la presión es constante."
        },
        {
          "id": "C",
          "text": "Isotérmico, porque la temperatura es constante."
        },
        {
          "id": "D",
          "text": "Un proceso nuclear."
        }
      ],
      "correctOption": "A",
      "explanation": "Si el recipiente es rígido, el volumen no cambia. Un proceso a volumen constante se llama isocórico."
    },
    {
      "id": "procesos-termodinamicos-2",
      "topic": "primera-ley-termodinamica",
      "subtopic": "procesos-termodinamicos",
      "level": 2,
      "prompt": "Un gas ideal se expande lentamente dentro de un cilindro con émbolo móvil, mientras está sumergido en un baño de agua que mantiene su temperatura constante. ¿Qué ocurre con la energía interna del gas?",
      "options": [
        {
          "id": "A",
          "text": "Aumenta, porque el gas se expande."
        },
        {
          "id": "B",
          "text": "Disminuye, porque el gas se enfría."
        },
        {
          "id": "C",
          "text": "No cambia, porque la energía interna de un gas ideal depende solo de la temperatura."
        },
        {
          "id": "D",
          "text": "Se vuelve infinita."
        }
      ],
      "correctOption": "C",
      "explanation": "En un gas ideal la energía interna depende solo de la temperatura. Si la temperatura es constante (proceso isotérmico), la energía interna no cambia."
    },
    {
      "id": "procesos-termodinamicos-3",
      "topic": "primera-ley-termodinamica",
      "subtopic": "procesos-termodinamicos",
      "level": 3,
      "prompt": "Un gas ideal se calienta a volumen constante y recibe 600 J de calor. ¿Cuánto trabajo realiza y cuánto cambia su energía interna?",
      "options": [
        {
          "id": "A",
          "text": "Realiza 600 J de trabajo; su energía interna no cambia."
        },
        {
          "id": "B",
          "text": "Realiza 0 J de trabajo; su energía interna aumenta 600 J."
        },
        {
          "id": "C",
          "text": "Realiza 300 J de trabajo; su energía interna aumenta 300 J."
        },
        {
          "id": "D",
          "text": "Realiza 1.200 J de trabajo; su energía interna disminuye 600 J."
        }
      ],
      "correctOption": "B",
      "explanation": "Si el volumen no cambia, el gas no realiza trabajo (W = 0). Por la primera ley, ΔU = Q - W = 600 J: todo el calor aumenta la energía interna."
    }
  ],
  "maquinas-termicas": [
    {
      "id": "maquinas-termicas-1",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "maquinas-termicas",
      "level": 1,
      "prompt": "El motor de un carro quema combustible para moverse. ¿Qué hace, en general, una máquina térmica?",
      "options": [
        {
          "id": "A",
          "text": "Convierte todo el calor que recibe en trabajo."
        },
        {
          "id": "B",
          "text": "Convierte trabajo en calor sin ninguna pérdida."
        },
        {
          "id": "C",
          "text": "Toma calor de una fuente caliente, convierte parte en trabajo y cede el resto a un lugar más frío."
        },
        {
          "id": "D",
          "text": "Produce energía de la nada."
        }
      ],
      "correctOption": "C",
      "explanation": "Una máquina térmica funciona entre una fuente caliente y una fría: absorbe calor, aprovecha una parte como trabajo y descarta el resto como calor."
    },
    {
      "id": "maquinas-termicas-2",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "maquinas-termicas",
      "level": 2,
      "prompt": "Una máquina térmica recibe 1.000 J de calor y realiza 250 J de trabajo. ¿Por qué no puede convertir los 1.000 J en trabajo?",
      "options": [
        {
          "id": "A",
          "text": "Porque, según la segunda ley, siempre debe ceder parte del calor a una fuente más fría."
        },
        {
          "id": "B",
          "text": "Porque la primera ley prohíbe convertir calor en trabajo."
        },
        {
          "id": "C",
          "text": "Porque el trabajo no es una forma de energía."
        },
        {
          "id": "D",
          "text": "Porque el motor es demasiado viejo."
        }
      ],
      "correctOption": "A",
      "explanation": "La segunda ley establece que ninguna máquina térmica puede convertir todo el calor en trabajo: siempre debe ceder una parte a la fuente fría."
    },
    {
      "id": "maquinas-termicas-3",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "maquinas-termicas",
      "level": 3,
      "prompt": "Una máquina térmica recibe 2.000 J de la fuente caliente y cede 1.500 J a la fuente fría. ¿Cuál es su eficiencia? Usa η = W / Q caliente.",
      "options": [
        {
          "id": "A",
          "text": "75 %"
        },
        {
          "id": "B",
          "text": "25 %"
        },
        {
          "id": "C",
          "text": "133 %"
        },
        {
          "id": "D",
          "text": "250 %"
        }
      ],
      "correctOption": "B",
      "explanation": "El trabajo es W = 2.000 J - 1.500 J = 500 J. La eficiencia es η = 500 J / 2.000 J = 0,25, es decir, 25 %."
    }
  ],
  "refrigeradores-bombas-calor": [
    {
      "id": "refrigeradores-bombas-calor-1",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "refrigeradores-bombas-calor",
      "level": 1,
      "prompt": "Una nevera mantiene fríos los alimentos, pero la parte de atrás se siente caliente. ¿Por qué?",
      "options": [
        {
          "id": "A",
          "text": "Porque la nevera produce frío nuevo que se escapa por atrás."
        },
        {
          "id": "B",
          "text": "Porque el calor del interior pasa solo al ambiente sin necesitar energía."
        },
        {
          "id": "C",
          "text": "Porque la parte trasera es de otro color."
        },
        {
          "id": "D",
          "text": "Porque saca calor del interior y, con ayuda del motor, lo cede al ambiente por atrás."
        }
      ],
      "correctOption": "D",
      "explanation": "La nevera no crea frío: extrae calor del interior y lo expulsa al ambiente. Por eso la parte trasera se calienta."
    },
    {
      "id": "refrigeradores-bombas-calor-2",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "refrigeradores-bombas-calor",
      "level": 2,
      "prompt": "¿Por qué una nevera necesita energía eléctrica para funcionar?",
      "options": [
        {
          "id": "A",
          "text": "Porque el frío es una sustancia que debe bombearse desde afuera."
        },
        {
          "id": "B",
          "text": "Porque la electricidad enfría directamente los alimentos sin mover calor."
        },
        {
          "id": "C",
          "text": "Porque el calor no pasa solo de lo frío a lo caliente; hay que realizar trabajo para lograrlo."
        },
        {
          "id": "D",
          "text": "Porque la electricidad limpia el aire de la nevera."
        }
      ],
      "correctOption": "C",
      "explanation": "Según la segunda ley, el calor fluye espontáneamente de lo caliente a lo frío. Para sacarlo del interior frío hacia la cocina más caliente hay que hacer trabajo, y ese trabajo lo hace el motor."
    },
    {
      "id": "refrigeradores-bombas-calor-3",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "refrigeradores-bombas-calor",
      "level": 3,
      "prompt": "Un refrigerador extrae 600 J de calor del interior frío usando 200 J de trabajo eléctrico. ¿Cuánto calor cede al ambiente y cuál es su coeficiente de desempeño (COP = Q frío / W)?",
      "options": [
        {
          "id": "A",
          "text": "800 J y COP = 3"
        },
        {
          "id": "B",
          "text": "400 J y COP = 3"
        },
        {
          "id": "C",
          "text": "800 J y COP = 0,33"
        },
        {
          "id": "D",
          "text": "0 J, porque no cede calor al ambiente."
        }
      ],
      "correctOption": "A",
      "explanation": "El calor cedido al ambiente es la suma del calor extraído y el trabajo: 600 J + 200 J = 800 J. El COP es 600 J / 200 J = 3."
    }
  ],
  "ciclo-carnot": [
    {
      "id": "ciclo-carnot-1",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "ciclo-carnot",
      "level": 1,
      "prompt": "El ciclo de Carnot es un modelo ideal. ¿Para qué sirve?",
      "options": [
        {
          "id": "A",
          "text": "Para construir motores con 100 % de eficiencia."
        },
        {
          "id": "B",
          "text": "Para establecer la máxima eficiencia posible de una máquina que trabaja entre dos temperaturas."
        },
        {
          "id": "C",
          "text": "Para describir cómo funciona realmente cualquier motor de carro, sin pérdidas."
        },
        {
          "id": "D",
          "text": "Para fabricar combustibles."
        }
      ],
      "correctOption": "B",
      "explanation": "El ciclo de Carnot marca el límite teórico: ninguna máquina que opere entre las mismas dos temperaturas puede ser más eficiente que una de Carnot."
    },
    {
      "id": "ciclo-carnot-2",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "ciclo-carnot",
      "level": 2,
      "prompt": "Dos máquinas de Carnot tienen la fuente caliente a 600 K. La primera tiene su fuente fría a 300 K y la segunda a 450 K. ¿Cuál es más eficiente?",
      "options": [
        {
          "id": "A",
          "text": "Las dos tienen la misma eficiencia."
        },
        {
          "id": "B",
          "text": "La segunda, porque su fuente fría está más caliente."
        },
        {
          "id": "C",
          "text": "Ninguna tiene eficiencia, porque son ideales."
        },
        {
          "id": "D",
          "text": "La primera, porque la diferencia entre sus temperaturas es mayor."
        }
      ],
      "correctOption": "D",
      "explanation": "La eficiencia de Carnot es η = 1 - T fría / T caliente. Para la primera es 50 % y para la segunda 25 %: gana la que tiene mayor diferencia de temperaturas."
    },
    {
      "id": "ciclo-carnot-3",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "ciclo-carnot",
      "level": 3,
      "prompt": "Una máquina de Carnot opera entre una fuente caliente a 500 K y una fría a 300 K. ¿Cuál es su eficiencia máxima? Usa η = 1 - T fría / T caliente.",
      "options": [
        {
          "id": "A",
          "text": "60 %"
        },
        {
          "id": "B",
          "text": "67 %"
        },
        {
          "id": "C",
          "text": "40 %"
        },
        {
          "id": "D",
          "text": "200 %"
        }
      ],
      "correctOption": "C",
      "explanation": "η = 1 - 300 K / 500 K = 1 - 0,6 = 0,4, es decir, 40 %."
    }
  ],
  "entropia": [
    {
      "id": "entropia-1",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "entropia",
      "level": 1,
      "prompt": "Un cubo de hielo se derrite en agua tibia hasta que todo queda a la misma temperatura. ¿Por qué nunca vemos que esa agua tibia se enfríe sola y vuelva a formar el cubo de hielo?",
      "options": [
        {
          "id": "A",
          "text": "Porque los procesos espontáneos aumentan el desorden, o entropía, y ese regreso sería casi imposible."
        },
        {
          "id": "B",
          "text": "Porque la energía desapareció al derretirse el hielo."
        },
        {
          "id": "C",
          "text": "Porque el agua tibia ya no tiene energía térmica."
        },
        {
          "id": "D",
          "text": "Porque el hielo solo se forma con luna llena."
        }
      ],
      "correctOption": "A",
      "explanation": "La segunda ley dice que en los procesos espontáneos la entropía total aumenta. Que el hielo se forme solo, de nuevo, disminuiría la entropía, y eso no ocurre espontáneamente."
    },
    {
      "id": "entropia-2",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "entropia",
      "level": 2,
      "prompt": "¿En cuál de estos cambios aumenta la entropía del agua?",
      "options": [
        {
          "id": "A",
          "text": "Cuando el vapor se condensa en gotas."
        },
        {
          "id": "B",
          "text": "Cuando el agua líquida se congela."
        },
        {
          "id": "C",
          "text": "Cuando el agua se convierte en un metal."
        },
        {
          "id": "D",
          "text": "Cuando el hielo se derrite."
        }
      ],
      "correctOption": "D",
      "explanation": "La entropía mide el desorden. Al derretirse, las partículas del hielo pasan de un orden fijo a moverse con más libertad: la entropía aumenta."
    },
    {
      "id": "entropia-3",
      "topic": "segunda-ley-termodinamica",
      "subtopic": "entropia",
      "level": 3,
      "prompt": "Un bloque de hielo a 0 °C (273 K) absorbe 3.280 J de calor mientras se funde, sin cambiar su temperatura. ¿Cuál es el cambio de entropía del hielo? Usa ΔS = Q / T.",
      "options": [
        {
          "id": "A",
          "text": "0 J/K"
        },
        {
          "id": "B",
          "text": "12 J/K"
        },
        {
          "id": "C",
          "text": "0,083 J/K"
        },
        {
          "id": "D",
          "text": "895.440 J/K"
        }
      ],
      "correctOption": "B",
      "explanation": "ΔS = Q / T = 3.280 J / 273 K ≈ 12 J/K. Es positivo porque el hielo absorbe calor y aumenta su desorden."
    }
  ]
};
