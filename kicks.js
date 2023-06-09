//kicks.js

const CW_KICKS_X = [
    [   
        [0, -1, -1, 0, -1], // 0 -> 1
        [0,  1,  1, 0,  1], // 1 -> 2
        [0,  1,  1, 0,  1], // 2 -> 3
        [0, -1, -1, 0, -1]  // 3 -> 0
    ], 
    [
        [0,  1, -2, -2,  1], // 0 -> 1
        [0, -1,  2, -1,  2], // 1 -> 2
        [0,  2, -1,  2, -1], // 2 -> 3
        [0,  1, -2,  1, -2]  // 3 -> 0
    ]
]; // [Is I Piece][Initial rotation][Test]

const CW_KICKS_Y = [
    [
        [0,  0,  1, -2, -2], // 0 -> 1
        [0,  0, -1,  2,  2], // 1 -> 2
        [0,  0,  1, -2, -2], // 2 -> 3
        [0,  0, -1,  2,  2]  // 3 -> 0
    ],
    [
        [0,  0,  0, -1,  2], // 0 -> 1
        [0,  0,  0,  2, -1], // 1 -> 2
        [0,  0,  0,  1, -1], // 2 -> 3
        [0,  0,  0, -2,  1]  // 3 -> 0
    ]
]; // [Is I Piece][Initial rotation][Test]

const CCW_KICKS_X = [
    [
        [0,  1,  1,  0,  1], // 0 -> 3
        [0,  1,  1,  0,  1], // 1 -> 0
        [0, -1, -1,  0, -1], // 2 -> 1
        [0, -1, -1,  0, -1]  // 3 -> 2
    ],
    [
        [0, -1,  2,  2, -1], // 0 -> 3
        [0, -1,  2, -1,  2], // 1 -> 0
        [0, -2,  1, -2,  1], // 2 -> 1
        [0,  1, -2,  1, -2]  // 3 -> 2
    ]
]; // [Is I Piece][Initial rotation][Test]

const CCW_KICKS_Y = [
    [
        [0,  0,  1, -2, -2], // 0 -> 3
        [0,  0, -1,  2,  2], // 1 -> 0
        [0,  0,  1, -2, -2], // 2 -> 1
        [0,  0, -1,  2,  2]  // 3 -> 2
    ],
    [
        [0,  0,  0, -1,  2], // 0 -> 3
        [0,  0,  0, -2,  1], // 1 -> 0
        [0,  0,  0,  1, -2], // 2 -> 1
        [0,  0,  0,  2, -1]  // 3 -> 2
    ]
]; // [Is I Piece][Initial rotation][Test]


const KICKS_180_X = [
    [0,  0,  1, -1,  1, -1], // 0 -> 2
    [0,  1,  1,  1,  0,  0], // 1 -> 3
    [0,  0, -1,  1, -1,  1], // 2 -> 0
    [0, -1, -1, -1,  0,  0]  // 3 -> 1
];

const KICKS_180_Y = [
    [0,  1,  1,  1,  0,  0], // 0 -> 2
    [0,  0,  2,  1,  2,  1], // 1 -> 3
    [0, -1, -1, -1,  0,  0], // 2 -> 0
    [0,  0,  2,  1,  2,  1]  // 3 -> 1
];

//const original   = [0, 1, 2, 3] for reference or comparison
const rotation_CW  = [1, 2, 3, 0];
const rotation_CCW = [3, 0, 1, 2];
const rotation_180 = [2, 3, 0, 1];