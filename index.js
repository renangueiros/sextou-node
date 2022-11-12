function obterDataProximaSexta() {
  const proximaSexta = new Date();
  proximaSexta.setDate(proximaSexta.getDate() + ((5 + 7 - proximaSexta.getDay()) % 7));
  proximaSexta.setHours(17, 0, 0, 0);

  return proximaSexta;
}

function calcularQuantoTempoFaltaPara(data) {
  const diferencaTotal = Date.parse(data) - Date.parse(new Date());

  const segundos = Math.floor((diferencaTotal / 1000) % 60);
  const minutos = Math.floor((diferencaTotal / 1000 / 60) % 60);
  const horas = Math.floor((diferencaTotal / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferencaTotal / (1000 * 60 * 60 * 24));

  return {
    dias,
    horas,
    minutos,
    segundos,
  };
}

function tratarPlural(termo, quantidade) {
  return `${quantidade} ${termo}${quantidade !== 1 ? 's' : ''}`;
}

const dataProximaSexta = obterDataProximaSexta();
const {
  dias,
  horas,
  minutos,
  segundos,
} = calcularQuantoTempoFaltaPara(dataProximaSexta);

// eslint-disable-next-line no-console
console.log(`Faltam ${tratarPlural('dia', dias)}, ${tratarPlural('hora', horas)}, ${tratarPlural('minuto', minutos)} e ${tratarPlural('segundo', segundos)} para sextar!`);
