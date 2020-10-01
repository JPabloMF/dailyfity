export const MOCKDATA = [
  {
    title: 'Flex week',
    routines: [
      {
        day: 'Monday',
        muscles: [
          {
            name: 'Upper chest',
            exercises: [
              {
                name: 'Flights with dumbells',
                quantity: ['4 series', '12 > 10 > 12 > 6 reps'],
                Considerations: [
                  'For each serie take a rest of 30 seconds',
                  'When the reps',
                ],
                img: '',
              },
            ],
          },
          {
            name: 'Triceps',
            exercises: [
              {
                name: 'Trapezius with bar',
                quantity: ['4 series', '12 > 10 > 12 > 6 reps'],
                Considerations: [
                  'For each serie take a rest of 30 seconds',
                  'When the reps',
                ],
                img: '',
              },
            ],
          },
        ],
        checked: true,
      },
      {
        day: 'Wednesday',
        muscles: [
          { name: 'Upper back', exercises: [] },
          { name: 'Biceps', exercises: [] },
          { name: 'Shoulders', exercises: [] }
        ],
        checked: false,
      },
      {
        day: 'Friday',
        muscles: [
          { name: 'Cuadriceps', exercises: [] },
          { name: 'Calves', exercises: [] }
        ],
        checked: false,
      },
      {
        day: 'Sunday',
        muscles: [
          { name: 'ABS', exercises: [] }
        ],
        checked: false,
      },
    ],
  },
  { title: 'Week 1', routines: [{}, {}] },
  { title: 'Week 2', routines: [{}, {}] },
];
