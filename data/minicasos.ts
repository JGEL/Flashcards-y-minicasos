// Mini casos clínicos data
const miniCasesData = [
  {
    "id": "mc001",
    "term": "Dolor torácico agudo",
    "definition": "Paciente de 45 años, fumador, presenta dolor torácico opresivo de inicio súbito, irradiado a brazo izquierdo, acompañado de sudoración y náuseas. ECG muestra elevación del ST en derivaciones II, III y aVF.",
    "quizOptions": [
      { "id": "A", "text": "Infarto agudo de miocardio inferior" },
      { "id": "B", "text": "Embolia pulmonar" },
      { "id": "C", "text": "Disección aórtica" },
      { "id": "D", "text": "Pericarditis aguda" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La elevación del ST en II, III y aVF indica infarto inferior. Siempre busca cambios recíprocos en I y aVL, y considera hacer V7-V9 para descartar extensión posterior.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "mc002",
    "term": "Disnea progresiva",
    "definition": "Mujer de 28 años, inmigrante, presenta disnea de esfuerzo progresiva de 6 meses de evolución. En la auscultación se detecta soplo diastólico en ápex y chasquido de apertura. Ecocardiograma muestra área valvular mitral de 1.2 cm².",
    "quizOptions": [
      { "id": "A", "text": "Insuficiencia mitral reumática" },
      { "id": "B", "text": "Estenosis mitral reumática" },
      { "id": "C", "text": "Prolapso de válvula mitral" },
      { "id": "D", "text": "Estenosis aórtica" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Paciente joven inmigrante + disnea progresiva + soplo diastólico + chasquido de apertura = estenosis mitral reumática. El área valvular <1.5 cm² indica estenosis moderada-severa.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "mc003",
    "term": "Dolor abdominal agudo",
    "definition": "Hombre de 35 años presenta dolor abdominal que inició en epigastrio hace 8 horas, ahora localizado en fosa ilíaca derecha. Fiebre de 38.2°C, náuseas y vómito. Blumberg positivo en punto de McBurney.",
    "quizOptions": [
      { "id": "A", "text": "Gastroenteritis aguda" },
      { "id": "B", "text": "Apendicitis aguda" },
      { "id": "C", "text": "Cólico renal" },
      { "id": "D", "text": "Diverticulitis" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La migración del dolor de epigastrio a fosa ilíaca derecha es patognomónica de apendicitis. El signo de Blumberg (dolor de rebote) confirma irritación peritoneal.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "mc004",
    "term": "Cefalea intensa",
    "definition": "Mujer de 32 años presenta cefalea súbita e intensa 'como nunca había sentido', acompañada de rigidez de nuca y fotofobia. Sin antecedentes de migraña. TAC craneal sin contraste normal.",
    "quizOptions": [
      { "id": "A", "text": "Migraña severa" },
      { "id": "B", "text": "Cefalea tensional" },
      { "id": "C", "text": "Hemorragia subaracnoidea" },
      { "id": "D", "text": "Meningitis bacteriana" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "Cefalea súbita 'en trueno' + rigidez de nuca = hemorragia subaracnoidea hasta demostrar lo contrario. TAC normal no la descarta; considera punción lumbar si alta sospecha.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "mc005",
    "term": "Disnea y tos",
    "definition": "Paciente de 65 años, fumador de 40 paquetes/año, presenta disnea progresiva y tos matutina con expectoración blanquecina desde hace 2 años. Espirometría muestra FEV1/FVC de 0.65 post-broncodilatador.",
    "quizOptions": [
      { "id": "A", "text": "Asma bronquial" },
      { "id": "B", "text": "EPOC" },
      { "id": "C", "text": "Fibrosis pulmonar" },
      { "id": "D", "text": "Insuficiencia cardíaca" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Fumador + tos matutina crónica + FEV1/FVC <0.70 post-broncodilatador = EPOC. La tos matutina con expectoración es el síntoma más temprano, antes que la disnea.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "mc006",
    "term": "Pérdida de peso y poliuria",
    "definition": "Adolescente de 16 años presenta pérdida de peso de 8 kg en 3 semanas, poliuria, polidipsia y fatiga. Glucemia al azar: 380 mg/dL. Cetonas en orina positivas.",
    "quizOptions": [
      { "id": "A", "text": "Diabetes tipo 2" },
      { "id": "B", "text": "Diabetes tipo 1" },
      { "id": "C", "text": "Diabetes MODY" },
      { "id": "D", "text": "Hipertiroidismo" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Adolescente + pérdida de peso rápida + hiperglucemia + cetonas = diabetes tipo 1. La presencia de cetonas distingue el debut de DM1 de DM2.",
    "rotation": "Endocrinología",
    "difficulty": "baja"
  },
  {
    "id": "mc007",
    "term": "Edema en miembros inferiores",
    "definition": "Hombre de 58 años presenta edema progresivo en miembros inferiores, disnea de esfuerzo y ortopnea. Ecocardiograma muestra fracción de eyección del 35%. BNP elevado.",
    "quizOptions": [
      { "id": "A", "text": "Insuficiencia venosa crónica" },
      { "id": "B", "text": "Síndrome nefrótico" },
      { "id": "C", "text": "Insuficiencia cardíaca" },
      { "id": "D", "text": "Cirrosis hepática" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "Edema + disnea + ortopnea + FEVI reducida + BNP elevado = insuficiencia cardíaca sistólica. El BNP es útil para distinguir disnea cardíaca de pulmonar.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "mc008",
    "term": "Fiebre y disuria",
    "definition": "Mujer de 25 años presenta fiebre de 39°C, escalofríos, dolor lumbar derecho y disuria. Sedimento urinario: leucocitos >100/campo, nitritos positivos, bacterias abundantes.",
    "quizOptions": [
      { "id": "A", "text": "Cistitis aguda" },
      { "id": "B", "text": "Pielonefritis aguda" },
      { "id": "C", "text": "Uretritis" },
      { "id": "D", "text": "Vaginitis" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Fiebre alta + dolor lumbar + piuria = pielonefritis. La presencia de fiebre y dolor lumbar distingue la pielonefritis de la cistitis simple.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "mc009",
    "term": "Dolor articular agudo",
    "definition": "Hombre de 45 años presenta dolor intenso, súbito en primer dedo del pie derecho, con eritema y calor local. Antecedente de consumo habitual de cerveza. Ácido úrico sérico: 9.2 mg/dL.",
    "quizOptions": [
      { "id": "A", "text": "Artritis séptica" },
      { "id": "B", "text": "Gota" },
      { "id": "C", "text": "Artritis reumatoide" },
      { "id": "D", "text": "Osteoartritis" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Ataque agudo en primer dedo del pie (podagra) + hiperuricemia + consumo de alcohol = gota. El 50% de los primeros ataques afectan la primera metatarsofalángica.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "mc010",
    "term": "Confusión y alteración del estado mental",
    "definition": "Anciano de 78 años, previamente independiente, presenta confusión aguda, desorientación y agitación desde hace 2 días. Familiares refieren que comenzó tras iniciar nuevo medicamento para el insomnio.",
    "quizOptions": [
      { "id": "A", "text": "Demencia de Alzheimer" },
      { "id": "B", "text": "Delirium" },
      { "id": "C", "text": "Depresión" },
      { "id": "D", "text": "Esquizofrenia" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Confusión aguda en anciano + factor precipitante (medicamento) = delirium. La clave es el inicio agudo y la fluctuación, a diferencia de la demencia.",
    "rotation": "Geriatría",
    "difficulty": "media"
  }
];

export default miniCasesData;