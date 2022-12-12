export let data = [
  { id: 'a', title: 'COCEDOR' },
  { id: 'b', title: 'MARMITA G', eventColor: 'green' },
  { id: 'c', title: 'PICADORA', eventColor: 'orange' },
  { id: 'd', title: 'ENFRIADOR SALSAS',
    children: [
      { id: 'd1', title: 'Room D1' },
      { id: 'd2', title: 'Room D2' },
    ],
  },
  { id: 'e', title: 'LÍNEA ENVASADO 1' },
  { id: 'f', title: 'LÍNEA ETIQUETADO 1', eventColor: 'red' },
  { id: 'g', title: 'MARMITA 1' },
  { id: 'H', title: 'ENFRIADOR SALSAS'},
];

export let events = [
  { resourceId: 'd', id:'1',title: '3001392', start: '2022-11-30', end: '2022-12-02',relatedEvents: '2' },
  {
    id:'2',
    resourceId: 'c',
    title: '3001063',
    start: '2022-12-01T12:00:00+00:00',
    end: '2022-12-02T06:00:00+00:00',
    description:'ESPAGUETI CARBONARA',
    relatedEvents: '1',

  },
  {
    id:'3',
    resourceId: 'f',
    title: '3000806',
    start: '2022-12-01T07:30:00+00:00',
    end: '2022-12-01T09:30:00+00:00',
    description:'ESPAGUETI CARBONARA',
    relatedEvents: '1',
  },
  {
    id:'4',
    resourceId: 'b',
    title: '3001436',
    start: '2022-12-01T10:00:00+00:00',
    end: '2022-12-01T15:00:00+00:00',
    description:'MACCHERONI ALLA BOLOGNESE',
    relatedEvents: '1',
  },
  {
    id:'5',
    resourceId: 'e',
    title: '3001391',
    start: '2022-12-01T09:00:00+00:00',
    end: '2022-12-01T14:00:00+00:00',
    description:'MACCHERONI ALLA BOLOGNESE',
    relatedEvents: '1',
  },
];
