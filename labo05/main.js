"use strict";

const collection = [
    {
        apes: 88,
        hasPandas: false,
        id: 0,
        lions: 92,
        snakes: 5,
    },
    {
        apes: 36,
        hasPandas: false,
        id: 1,
        lions: 72,
        snakes: 6,
    },
    {
        apes: 50,
        hasPandas: false,
        id: 2,
        lions: 87,
        snakes: 4,
    },
    {
        apes: 74,
        hasPandas: false,
        id: 3,
        lions: 28,
        snakes: 4,
    },
    {
        apes: 52,
        hasPandas: false,
        id: 4,
        lions: 25,
        snakes: 2,
    },
    {
        apes: 53,
        hasPandas: false,
        id: 5,
        lions: 62,
        snakes: 4,
    },
    {
        apes: 49,
        hasPandas: false,
        id: 6,
        lions: 5,
        snakes: 3,
    },
    {
        apes: 67,
        hasPandas: false,
        id: 7,
        lions: 19,
        snakes: 2,
    },
    {
        apes: 85,
        hasPandas: false,
        id: 8,
        lions: 93,
        snakes: 10,
    },
    {
        apes: 95,
        hasPandas: false,
        id: 9,
        lions: 38,
        snakes: 4,
    },
    {
        apes: 56,
        hasPandas: false,
        id: 10,
        lions: 73,
        snakes: 2,
    },
    {
        apes: 3,
        hasPandas: false,
        id: 11,
        lions: 89,
        snakes: 5,
    },
    {
        apes: 53,
        hasPandas: false,
        id: 12,
        lions: 80,
        snakes: 5,
    },
    {
        apes: 14,
        hasPandas: false,
        id: 13,
        lions: 52,
        snakes: 7,
    },
    {
        apes: 62,
        hasPandas: false,
        id: 14,
        lions: 55,
        snakes: 1,
    },
    {
        apes: 13,
        hasPandas: false,
        id: 15,
        lions: 55,
        snakes: 9,
    },
    {
        apes: 30,
        hasPandas: false,
        id: 16,
        lions: 91,
        snakes: 4,
    },
    {
        apes: 61,
        hasPandas: false,
        id: 17,
        lions: 79,
        snakes: 4,
    },
    {
        apes: 34,
        hasPandas: false,
        id: 18,
        lions: 63,
        snakes: 5,
    },
    {
        apes: 59,
        hasPandas: false,
        id: 19,
        lions: 8,
        snakes: 6,
    },
    {
        apes: 42,
        hasPandas: false,
        id: 20,
        lions: 40,
        snakes: 3,
    },
    {
        apes: 24,
        hasPandas: false,
        id: 21,
        lions: 50,
        snakes: 5,
    },
    {
        apes: 22,
        hasPandas: false,
        id: 22,
        lions: 61,
        snakes: 8,
    },
    {
        apes: 7,
        hasPandas: false,
        id: 23,
        lions: 12,
        snakes: 4,
    },
    {
        apes: 81,
        hasPandas: false,
        id: 24,
        lions: 76,
        snakes: 10,
    },
    {
        apes: 17,
        hasPandas: false,
        id: 25,
        lions: 87,
        snakes: 1,
    },
    {
        apes: 92,
        hasPandas: false,
        id: 26,
        lions: 35,
        snakes: 8,
    },
    {
        apes: 61,
        hasPandas: false,
        id: 27,
        lions: 33,
        snakes: 7,
    },
    {
        apes: 31,
        hasPandas: false,
        id: 28,
        lions: 58,
        snakes: 4,
    },
    {
        apes: 79,
        hasPandas: true,
        id: 29,
        lions: 96,
        snakes: 2,
    },
    {
        apes: 39,
        hasPandas: false,
        id: 30,
        lions: 50,
        snakes: 9,
    },
    {
        apes: 88,
        hasPandas: false,
        id: 31,
        lions: 80,
        snakes: 5,
    },
    {
        apes: 95,
        hasPandas: true,
        id: 32,
        lions: 28,
        snakes: 2,
    },
    {
        apes: 99,
        hasPandas: false,
        id: 33,
        lions: 17,
        snakes: 5,
    },
    {
        apes: 83,
        hasPandas: false,
        id: 34,
        lions: 32,
        snakes: 1,
    },
    {
        apes: 92,
        hasPandas: false,
        id: 35,
        lions: 4,
        snakes: 3,
    },
    {
        apes: 24,
        hasPandas: false,
        id: 36,
        lions: 93,
        snakes: 7,
    },
    {
        apes: 19,
        hasPandas: false,
        id: 37,
        lions: 97,
        snakes: 1,
    },
    {
        apes: 47,
        hasPandas: false,
        id: 38,
        lions: 50,
        snakes: 9,
    },
    {
        apes: 14,
        hasPandas: false,
        id: 39,
        lions: 22,
        snakes: 4,
    },
    {
        apes: 17,
        hasPandas: false,
        id: 40,
        lions: 98,
        snakes: 2,
    },
    {
        apes: 50,
        hasPandas: false,
        id: 41,
        lions: 29,
        snakes: 6,
    },
    {
        apes: 56,
        hasPandas: false,
        id: 42,
        lions: 22,
        snakes: 8,
    },
    {
        apes: 20,
        hasPandas: false,
        id: 43,
        lions: 65,
        snakes: 5,
    },
    {
        apes: 43,
        hasPandas: true,
        id: 44,
        lions: 44,
        snakes: 5,
    },
    {
        apes: 7,
        hasPandas: false,
        id: 45,
        lions: 46,
        snakes: 3,
    },
    {
        apes: 68,
        hasPandas: false,
        id: 46,
        lions: 54,
        snakes: 9,
    },
    {
        apes: 46,
        hasPandas: false,
        id: 47,
        lions: 83,
        snakes: 2,
    },
    {
        apes: 50,
        hasPandas: false,
        id: 48,
        lions: 90,
        snakes: 5,
    },
    {
        apes: 16,
        hasPandas: false,
        id: 49,
        lions: 68,
        snakes: 9,
    },
    {
        apes: 5,
        hasPandas: false,
        id: 50,
        lions: 51,
        snakes: 6,
    },
    {
        apes: 44,
        hasPandas: false,
        id: 51,
        lions: 33,
        snakes: 6,
    },
    {
        apes: 20,
        hasPandas: false,
        id: 52,
        lions: 53,
        snakes: 10,
    },
    {
        apes: 4,
        hasPandas: false,
        id: 53,
        lions: 56,
        snakes: 3,
    },
    {
        apes: 41,
        hasPandas: false,
        id: 54,
        lions: 89,
        snakes: 2,
    },
    {
        apes: 80,
        hasPandas: false,
        id: 55,
        lions: 55,
        snakes: 2,
    },
    {
        apes: 29,
        hasPandas: true,
        id: 56,
        lions: 6,
        snakes: 7,
    },
    {
        apes: 18,
        hasPandas: false,
        id: 57,
        lions: 23,
        snakes: 9,
    },
    {
        apes: 16,
        hasPandas: false,
        id: 58,
        lions: 56,
        snakes: 9,
    },
    {
        apes: 15,
        hasPandas: false,
        id: 59,
        lions: 39,
        snakes: 2,
    },
    {
        apes: 38,
        hasPandas: false,
        id: 60,
        lions: 84,
        snakes: 7,
    },
    {
        apes: 93,
        hasPandas: false,
        id: 61,
        lions: 57,
        snakes: 9,
    },
    {
        apes: 67,
        hasPandas: false,
        id: 62,
        lions: 23,
        snakes: 1,
    },
    {
        apes: 1,
        hasPandas: false,
        id: 63,
        lions: 92,
        snakes: 3,
    },
    {
        apes: 64,
        hasPandas: false,
        id: 64,
        lions: 70,
        snakes: 9,
    },
    {
        apes: 66,
        hasPandas: false,
        id: 65,
        lions: 87,
        snakes: 8,
    },
    {
        apes: 99,
        hasPandas: false,
        id: 66,
        lions: 73,
        snakes: 4,
    },
    {
        apes: 3,
        hasPandas: false,
        id: 67,
        lions: 4,
        snakes: 3,
    },
    {
        apes: 65,
        hasPandas: false,
        id: 68,
        lions: 11,
        snakes: 10,
    },
    {
        apes: 32,
        hasPandas: true,
        id: 69,
        lions: 13,
        snakes: 9,
    },
    {
        apes: 63,
        hasPandas: false,
        id: 70,
        lions: 13,
        snakes: 7,
    },
    {
        apes: 68,
        hasPandas: false,
        id: 71,
        lions: 52,
        snakes: 7,
    },
    {
        apes: 53,
        hasPandas: false,
        id: 72,
        lions: 60,
        snakes: 10,
    },
    {
        apes: 40,
        hasPandas: false,
        id: 73,
        lions: 35,
        snakes: 1,
    },
    {
        apes: 23,
        hasPandas: true,
        id: 74,
        lions: 82,
        snakes: 1,
    },
    {
        apes: 84,
        hasPandas: false,
        id: 75,
        lions: 28,
        snakes: 1,
    },
    {
        apes: 77,
        hasPandas: false,
        id: 76,
        lions: 57,
        snakes: 3,
    },
    {
        apes: 9,
        hasPandas: false,
        id: 77,
        lions: 3,
        snakes: 5,
    },
    {
        apes: 92,
        hasPandas: false,
        id: 78,
        lions: 39,
        snakes: 9,
    },
    {
        apes: 8,
        hasPandas: false,
        id: 79,
        lions: 80,
        snakes: 2,
    },
    {
        apes: 89,
        hasPandas: false,
        id: 80,
        lions: 96,
        snakes: 10,
    },
    {
        apes: 35,
        hasPandas: false,
        id: 81,
        lions: 95,
        snakes: 6,
    },
    {
        apes: 71,
        hasPandas: false,
        id: 82,
        lions: 62,
        snakes: 4,
    },
    {
        apes: 25,
        hasPandas: false,
        id: 83,
        lions: 6,
        snakes: 8,
    },
    {
        apes: 21,
        hasPandas: false,
        id: 84,
        lions: 48,
        snakes: 2,
    },
    {
        apes: 71,
        hasPandas: false,
        id: 85,
        lions: 86,
        snakes: 9,
    },
    {
        apes: 63,
        hasPandas: false,
        id: 86,
        lions: 32,
        snakes: 10,
    },
    {
        apes: 91,
        hasPandas: false,
        id: 87,
        lions: 72,
        snakes: 7,
    },
    {
        apes: 93,
        hasPandas: false,
        id: 88,
        lions: 35,
        snakes: 7,
    },
    {
        apes: 30,
        hasPandas: false,
        id: 89,
        lions: 38,
        snakes: 7,
    },
    {
        apes: 24,
        hasPandas: false,
        id: 90,
        lions: 83,
        snakes: 2,
    },
    {
        apes: 40,
        hasPandas: false,
        id: 91,
        lions: 53,
        snakes: 2,
    },
    {
        apes: 30,
        hasPandas: false,
        id: 92,
        lions: 97,
        snakes: 9,
    },
    {
        apes: 41,
        hasPandas: false,
        id: 93,
        lions: 21,
        snakes: 2,
    },
    {
        apes: 9,
        hasPandas: false,
        id: 94,
        lions: 23,
        snakes: 9,
    },
    {
        apes: 84,
        hasPandas: false,
        id: 95,
        lions: 92,
        snakes: 6,
    },
    {
        apes: 17,
        hasPandas: false,
        id: 96,
        lions: 76,
        snakes: 7,
    },
    {
        apes: 23,
        hasPandas: false,
        id: 97,
        lions: 40,
        snakes: 6,
    },
    {
        apes: 27,
        hasPandas: false,
        id: 98,
        lions: 38,
        snakes: 10,
    },
    {
        apes: 54,
        hasPandas: false,
        id: 99,
        lions: 75,
        snakes: 4,
    },
    {
        apes: 56,
        hasPandas: false,
        id: 100,
        lions: 26,
        snakes: 7,
    },
    {
        apes: 75,
        hasPandas: true,
        id: 101,
        lions: 63,
        snakes: 8,
    },
    {
        apes: 53,
        hasPandas: false,
        id: 102,
        lions: 98,
        snakes: 3,
    },
    {
        apes: 31,
        hasPandas: false,
        id: 103,
        lions: 25,
        snakes: 8,
    },
    {
        apes: 97,
        hasPandas: false,
        id: 104,
        lions: 45,
        snakes: 5,
    },
    {
        apes: 82,
        hasPandas: true,
        id: 105,
        lions: 82,
        snakes: 10,
    },
    {
        apes: 40,
        hasPandas: false,
        id: 106,
        lions: 66,
        snakes: 3,
    },
    {
        apes: 37,
        hasPandas: false,
        id: 107,
        lions: 39,
        snakes: 6,
    },
    {
        apes: 49,
        hasPandas: false,
        id: 108,
        lions: 28,
        snakes: 1,
    },
    {
        apes: 57,
        hasPandas: false,
        id: 109,
        lions: 95,
        snakes: 8,
    },
    {
        apes: 76,
        hasPandas: false,
        id: 110,
        lions: 78,
        snakes: 7,
    },
    {
        apes: 42,
        hasPandas: false,
        id: 111,
        lions: 92,
        snakes: 3,
    },
    {
        apes: 62,
        hasPandas: false,
        id: 112,
        lions: 93,
        snakes: 1,
    },
    {
        apes: 12,
        hasPandas: false,
        id: 113,
        lions: 41,
        snakes: 9,
    },
    {
        apes: 81,
        hasPandas: false,
        id: 114,
        lions: 36,
        snakes: 6,
    },
    {
        apes: 45,
        hasPandas: false,
        id: 115,
        lions: 41,
        snakes: 7,
    },
    {
        apes: 13,
        hasPandas: false,
        id: 116,
        lions: 68,
        snakes: 1,
    },
    {
        apes: 78,
        hasPandas: false,
        id: 117,
        lions: 82,
        snakes: 2,
    },
    {
        apes: 36,
        hasPandas: true,
        id: 118,
        lions: 92,
        snakes: 9,
    },
    {
        apes: 48,
        hasPandas: false,
        id: 119,
        lions: 85,
        snakes: 6,
    },
    {
        apes: 44,
        hasPandas: false,
        id: 120,
        lions: 40,
        snakes: 1,
    },
    {
        apes: 29,
        hasPandas: false,
        id: 121,
        lions: 35,
        snakes: 8,
    },
    {
        apes: 18,
        hasPandas: false,
        id: 122,
        lions: 43,
        snakes: 7,
    },
    {
        apes: 32,
        hasPandas: false,
        id: 123,
        lions: 78,
        snakes: 6,
    },
    {
        apes: 71,
        hasPandas: false,
        id: 124,
        lions: 71,
        snakes: 2,
    },
    {
        apes: 3,
        hasPandas: false,
        id: 125,
        lions: 8,
        snakes: 4,
    },
    {
        apes: 94,
        hasPandas: false,
        id: 126,
        lions: 57,
        snakes: 7,
    },
    {
        apes: 68,
        hasPandas: false,
        id: 127,
        lions: 83,
        snakes: 9,
    },
    {
        apes: 65,
        hasPandas: false,
        id: 128,
        lions: 12,
        snakes: 6,
    },
    {
        apes: 41,
        hasPandas: true,
        id: 129,
        lions: 48,
        snakes: 3,
    },
    {
        apes: 11,
        hasPandas: false,
        id: 130,
        lions: 99,
        snakes: 8,
    },
    {
        apes: 56,
        hasPandas: false,
        id: 131,
        lions: 6,
        snakes: 2,
    },
    {
        apes: 3,
        hasPandas: false,
        id: 132,
        lions: 11,
        snakes: 2,
    },
    {
        apes: 25,
        hasPandas: false,
        id: 133,
        lions: 78,
        snakes: 3,
    },
    {
        apes: 64,
        hasPandas: false,
        id: 134,
        lions: 41,
        snakes: 2,
    },
    {
        apes: 33,
        hasPandas: false,
        id: 135,
        lions: 14,
        snakes: 2,
    },
    {
        apes: 13,
        hasPandas: true,
        id: 136,
        lions: 41,
        snakes: 1,
    },
    {
        apes: 8,
        hasPandas: false,
        id: 137,
        lions: 34,
        snakes: 10,
    },
    {
        apes: 99,
        hasPandas: false,
        id: 138,
        lions: 42,
        snakes: 4,
    },
    {
        apes: 9,
        hasPandas: true,
        id: 139,
        lions: 76,
        snakes: 6,
    },
    {
        apes: 24,
        hasPandas: false,
        id: 140,
        lions: 91,
        snakes: 5,
    },
    {
        apes: 64,
        hasPandas: false,
        id: 141,
        lions: 75,
        snakes: 7,
    },
    {
        apes: 39,
        hasPandas: false,
        id: 142,
        lions: 71,
        snakes: 2,
    },
    {
        apes: 46,
        hasPandas: false,
        id: 143,
        lions: 81,
        snakes: 9,
    },
    {
        apes: 27,
        hasPandas: false,
        id: 144,
        lions: 7,
        snakes: 3,
    },
    {
        apes: 92,
        hasPandas: false,
        id: 145,
        lions: 91,
        snakes: 2,
    },
    {
        apes: 19,
        hasPandas: false,
        id: 146,
        lions: 74,
        snakes: 5,
    },
    {
        apes: 54,
        hasPandas: false,
        id: 147,
        lions: 14,
        snakes: 4,
    },
    {
        apes: 12,
        hasPandas: true,
        id: 148,
        lions: 20,
        snakes: 7,
    },
    {
        apes: 89,
        hasPandas: false,
        id: 149,
        lions: 9,
        snakes: 3,
    },
    {
        apes: 66,
        hasPandas: false,
        id: 150,
        lions: 16,
        snakes: 8,
    },
    {
        apes: 47,
        hasPandas: false,
        id: 151,
        lions: 58,
        snakes: 8,
    },
    {
        apes: 36,
        hasPandas: false,
        id: 152,
        lions: 46,
        snakes: 4,
    },
    {
        apes: 31,
        hasPandas: false,
        id: 153,
        lions: 26,
        snakes: 3,
    },
    {
        apes: 83,
        hasPandas: false,
        id: 154,
        lions: 53,
        snakes: 6,
    },
    {
        apes: 54,
        hasPandas: false,
        id: 155,
        lions: 10,
        snakes: 7,
    },
    {
        apes: 87,
        hasPandas: false,
        id: 156,
        lions: 66,
        snakes: 1,
    },
    {
        apes: 38,
        hasPandas: false,
        id: 157,
        lions: 67,
        snakes: 5,
    },
    {
        apes: 10,
        hasPandas: false,
        id: 158,
        lions: 84,
        snakes: 3,
    },
    {
        apes: 85,
        hasPandas: false,
        id: 159,
        lions: 97,
        snakes: 8,
    },
    {
        apes: 86,
        hasPandas: false,
        id: 160,
        lions: 78,
        snakes: 2,
    },
    {
        apes: 9,
        hasPandas: false,
        id: 161,
        lions: 56,
        snakes: 7,
    },
    {
        apes: 49,
        hasPandas: false,
        id: 162,
        lions: 25,
        snakes: 4,
    },
    {
        apes: 39,
        hasPandas: false,
        id: 163,
        lions: 76,
        snakes: 1,
    },
    {
        apes: 39,
        hasPandas: false,
        id: 164,
        lions: 47,
        snakes: 3,
    },
    {
        apes: 4,
        hasPandas: false,
        id: 165,
        lions: 49,
        snakes: 2,
    },
    {
        apes: 100,
        hasPandas: false,
        id: 166,
        lions: 83,
        snakes: 10,
    },
    {
        apes: 32,
        hasPandas: false,
        id: 167,
        lions: 92,
        snakes: 2,
    },
    {
        apes: 38,
        hasPandas: false,
        id: 168,
        lions: 73,
        snakes: 3,
    },
    {
        apes: 88,
        hasPandas: false,
        id: 169,
        lions: 68,
        snakes: 8,
    },
    {
        apes: 75,
        hasPandas: false,
        id: 170,
        lions: 51,
        snakes: 2,
    },
    {
        apes: 37,
        hasPandas: false,
        id: 171,
        lions: 49,
        snakes: 6,
    },
    {
        apes: 53,
        hasPandas: false,
        id: 172,
        lions: 74,
        snakes: 9,
    },
    {
        apes: 88,
        hasPandas: false,
        id: 173,
        lions: 1,
        snakes: 4,
    },
    {
        apes: 10,
        hasPandas: false,
        id: 174,
        lions: 72,
        snakes: 9,
    },
    {
        apes: 33,
        hasPandas: false,
        id: 175,
        lions: 79,
        snakes: 3,
    },
    {
        apes: 7,
        hasPandas: false,
        id: 176,
        lions: 60,
        snakes: 9,
    },
    {
        apes: 50,
        hasPandas: false,
        id: 177,
        lions: 63,
        snakes: 1,
    },
    {
        apes: 64,
        hasPandas: false,
        id: 178,
        lions: 19,
        snakes: 1,
    },
    {
        apes: 34,
        hasPandas: false,
        id: 179,
        lions: 37,
        snakes: 2,
    },
    {
        apes: 61,
        hasPandas: false,
        id: 180,
        lions: 48,
        snakes: 3,
    },
    {
        apes: 58,
        hasPandas: true,
        id: 181,
        lions: 92,
        snakes: 1,
    },
    {
        apes: 81,
        hasPandas: false,
        id: 182,
        lions: 1,
        snakes: 4,
    },
    {
        apes: 84,
        hasPandas: false,
        id: 183,
        lions: 68,
        snakes: 2,
    },
    {
        apes: 51,
        hasPandas: false,
        id: 184,
        lions: 88,
        snakes: 6,
    },
    {
        apes: 41,
        hasPandas: false,
        id: 185,
        lions: 23,
        snakes: 3,
    },
    {
        apes: 77,
        hasPandas: false,
        id: 186,
        lions: 72,
        snakes: 7,
    },
    {
        apes: 44,
        hasPandas: false,
        id: 187,
        lions: 68,
        snakes: 8,
    },
    {
        apes: 17,
        hasPandas: false,
        id: 188,
        lions: 33,
        snakes: 2,
    },
    {
        apes: 23,
        hasPandas: false,
        id: 189,
        lions: 44,
        snakes: 5,
    },
    {
        apes: 39,
        hasPandas: true,
        id: 190,
        lions: 50,
        snakes: 8,
    },
    {
        apes: 51,
        hasPandas: false,
        id: 191,
        lions: 35,
        snakes: 2,
    },
    {
        apes: 64,
        hasPandas: false,
        id: 192,
        lions: 83,
        snakes: 9,
    },
    {
        apes: 90,
        hasPandas: false,
        id: 193,
        lions: 39,
        snakes: 7,
    },
    {
        apes: 80,
        hasPandas: true,
        id: 194,
        lions: 15,
        snakes: 5,
    },
    {
        apes: 81,
        hasPandas: false,
        id: 195,
        lions: 64,
        snakes: 9,
    },
    {
        apes: 49,
        hasPandas: false,
        id: 196,
        lions: 68,
        snakes: 6,
    },
    {
        apes: 47,
        hasPandas: false,
        id: 197,
        lions: 20,
        snakes: 2,
    },
    {
        apes: 31,
        hasPandas: false,
        id: 198,
        lions: 77,
        snakes: 7,
    },
    {
        apes: 88,
        hasPandas: false,
        id: 199,
        lions: 60,
        snakes: 5,
    },
];
let withTotal,
    withPandas,
    firstWithPandas,
    doTheyAllHaveMultipleSnakes,
    totalNumberOfAnimals;

// add a 'total' property to each object in the collection.
// It's the sum of lions, apes and snakes

withTotal = collection.map((v) => {
    return {
        ...v,
        total: v.apes + v.lions + v.snakes,
    };
});

// filter out all zoos with pandas, how many are there?
withPandas = collection.filter((v) => v.hasPandas).length;

// find the ID of the first zoo with pandas
firstWithPandas = collection.find((v) => v.hasPandas).id;

// does every zoo have more than one snake?
doTheyAllHaveMultipleSnakes = collection.every((v) => v.snakes > 1);

// EXTRA Challenge! (use reduce)
// get the sum of all of animals (use the new 'total' property) in all zoos
totalNumberOfAnimals = withTotal.reduce((accumulator, current) => {
    accumulator += current.total;
    return accumulator;
}, 0);

// THIS IS SOME INTERESTING CODE!
const span = document.createElement("span");

span.innerText =
    "There are " +
    withPandas +
    " zoos with panda's.\nThe first ID with panda's is " +
    firstWithPandas +
    "\nDo they all have multiple snakes? " +
    doTheyAllHaveMultipleSnakes +
    ".\nThe total number of animals in all zoos is " +
    totalNumberOfAnimals;

document.body.appendChild(span);
