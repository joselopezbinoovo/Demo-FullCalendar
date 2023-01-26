export const data = [
  { id: 'a', title: 'Envasado Platos', eventColor: '#357cd2',children: [
    { id: 'a1', title: 'LINEA ENVASADO 1' , eventColor:'#865fcf' },
    { id: 'a2', title: 'LINEA ENVASADO 2', eventColor:'#ea7a57'},
  ], },
  { id: 'b', title: 'Etiquetado', eventColor:'#1aaa55',children: [
    { id: 'b1', title: 'LINEA ETIQUETADO 1' ,eventColor:'#5978ee' },
    { id: 'b2', title: 'LINEA ETIQUETADO 2', eventColor:'#00bdae' },
  ], },
  { id: 'c', title: 'Cocina', eventColor:'#357cd2', children: [
    { id: 'c1', title: 'COCEDOR' ,eventColor:'#1aaa55' },
    { id: 'c2', title: 'MARMITA 1', eventColor:'#7fa900' },
    { id: 'c3', title: 'MARMITA S', eventColor:'#ea7a57' },
    { id: 'c4', title: 'ENFRIADOR DE SALSAS', eventColor:'#00bdae'},
    { id: 'c5', title: 'PICADORA' ,eventColor:'#f57f17' },
    { id: 'c5', title: 'MARMITA S',eventColor: '#df5286'  },

  ],},
];

export let events = [
  { resourceId: 'b1',
    id:'1',
    title: '3001392',
    start: '2023-01-18T12:00:00+00:00',
    end: '2023-01-18T06:00:00+00:00',
     relatedEvents: '2' },
  {
    id:'2',
    resourceId: 'c1',
    title: '3001063',
    start: '2023-01-18T12:00:00+00:00',
    end: '2023-01-18T06:00:00+00:00',
    description:'ESPAGUETI CARBONARA',
    relatedEvents: '1',

  },
  {
    id:'3',
    resourceId: 'a1',
    title: '3000806',
    start: '2023-01-18T07:30:00+00:00',
    end: '2023-01-18T09:30:00+00:00',
    description:'ESPAGUETI CARBONARA',
    relatedEvents: '1',
  },
  {
    id:'4',
    resourceId: 'b2',
    title: '3001436',
    start: '2023-01-18T10:00:00+00:00',
    end: '2023-01-18-T15:00:00+00:00',
    description:'MACCHERONI ALLA BOLOGNESE',
    relatedEvents: '1',
  },
  {
    id:'5',
    resourceId: 'c3',
    title: '3001391',
    start: '2023-01-18T09:00:00+00:00',
    end: '2023-01-18-T14:00:00+00:00',
    description:'MACCHERONI ALLA BOLOGNESE',
    relatedEvents: '1',
  },
];
