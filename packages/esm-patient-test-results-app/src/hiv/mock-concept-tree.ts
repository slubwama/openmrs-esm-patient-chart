const mockConceptTree = {
  display: 'Bloodwork',
  subSets: [
    {
      display: 'Hematology',
      subSets: [
        {
          display: 'Complete Blood Count',
          obs: [
            {
              display: 'Hematocrit',
              conceptUuid: '1015AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
              meta: {
                datatype: 'Numeric',
                hiAbsolute: 100,
                hiCritical: null,
                hiNormal: 51.9,
                lowAbsolute: 0,
                lowCritical: 21,
                lowNormal: 32.3,
                range: '32.3 – 51.9',
                units: '%',
              },
              values: [
                {
                  effectiveDateTime: '2020-05-07T00:00:00+00:00',
                  value: 42,
                },
                {
                  effectiveDateTime: '2020-05-07T00:02:00+00:00',
                  value: 43,
                },
                {
                  effectiveDateTime: '2020-05-07T00:03:00+00:00',
                  value: 45,
                  notes: 'Maybe there is some special note written here?',
                },
              ],
            },
            {
              display: 'Platelets',
            },
            {
              display: 'Haemoglobin',
            },
            {
              display: 'White blood cells',
            },
          ],
        },
      ],
    },
    {
      display: 'Chemistry',
      subSets: [
        {
          display: 'Serum chemistry panel',
          obs: [
            {
              display: 'Serum chloride',
            },
            {
              display: 'Serum carbon dioxide',
            },
            {
              display: 'Blood urea nitrogen',
            },
          ],
        },
      ],
    },
  ],
};

export default mockConceptTree;
