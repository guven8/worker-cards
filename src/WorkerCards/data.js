import uuid from 'uuid';

export default [
  {
    name: 'Barot Bellingham',
    favourite: false,
    stars: 4,
    status: 'missing',
    lastShift: 1490259600,
    nextShift: 1493550000,
    profilePic: 'Barot_Bellingham_tn.jpg',
    ref: uuid.v4()
  },
  {
    name: 'Constance Smith',
    favourite: true,
    stars: 4,
    status: 'checked-in',
    lastShift: 1490270400,
    nextShift: 1493557200,
    profilePic: 'Constance_Smith_tn.jpg',
    ref: uuid.v4()
  },
  {
    name: 'Jennifer Jerome',
    favourite: false,
    stars: 3,
    status: 'working',
    lastShift: 1490277600,
    nextShift: 1493560800,
    profilePic: 'Jennifer_Jerome_tn.jpg',
    ref: uuid.v4()
  }
]