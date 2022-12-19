export let data = [
  { id: 'a', title: 'Envasado Platos', eventColor: 'grey',children: [
    { id: 'a1', title: 'LINEA ENVASADO 1' , eventColor:'aquamarine' },
    { id: 'a2', title: 'LINEA ENVASADO 2', eventColor:'aquamarine'},
  ], },
  { id: 'b', title: 'Etiquetado', eventColor:'green',children: [
    { id: 'b1', title: 'LINEA ETIQUETADO 1' ,eventColor:'blue' },
    { id: 'b2', title: 'LINEA ETIQUETADO 2', eventColor:'blue' },
  ], },
  { id: 'c', title: 'Cocina', eventColor:'orange', children: [
    { id: 'c1', title: 'COCEDOR' ,eventColor:'purple' },
    { id: 'c2', title: 'MARMITA 1', eventColor:'purple' },
    { id: 'c3', title: 'MARMITA S', eventColor:'purple' },
    { id: 'c4', title: 'ENFRIADOR DE SALSAS', eventColor:'purple' },
    { id: 'c5', title: 'PICADORA' ,eventColor:'purple' },
    { id: 'c5', title: 'MARMITA S',eventColor:'purple'  },

  ],},
];

export let events = [
  { resourceId: 'b1', id:'1',title: '3001392', start: '2022-11-30', end: '2022-12-02',relatedEvents: '2' },
  {
    id:'2',
    resourceId: 'c1',
    title: '3001063',
    start: '2022-12-01T12:00:00+00:00',
    end: '2022-12-02T06:00:00+00:00',
    description:'ESPAGUETI CARBONARA',
    relatedEvents: '1',

  },
  {
    id:'3',
    resourceId: 'a1',
    title: '3000806',
    start: '2022-12-01T07:30:00+00:00',
    end: '2022-12-01T09:30:00+00:00',
    description:'ESPAGUETI CARBONARA',
    relatedEvents: '1',
  },
  {
    id:'4',
    resourceId: 'b2',
    title: '3001436',
    start: '2022-12-01T10:00:00+00:00',
    end: '2022-12-01T15:00:00+00:00',
    description:'MACCHERONI ALLA BOLOGNESE',
    relatedEvents: '1',
  },
  {
    id:'5',
    resourceId: 'c3',
    title: '3001391',
    start: '2022-12-01T09:00:00+00:00',
    end: '2022-12-01T14:00:00+00:00',
    description:'MACCHERONI ALLA BOLOGNESE',
    relatedEvents: '1',
  },
];
