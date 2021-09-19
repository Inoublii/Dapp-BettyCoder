const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description =
  "The Betty tokens, dreams code, maybe because they were created by code. Only 200 of these Seahorses exist .";
const baseImageUri = "https://bettycodertoken.inoubli.store/metqdata";
const startEditionFrom = 1;
const endEditionAt = 200;
const editionSize = 200;
const raceWeights = [
  {
    value: "betty",
    from: 1,
    to: editionSize,
  },
];

const races = {
  betty: {
    name: "SeaHorse",
    layers: [
      {
        name: "skin",
        elements: [
          {
            id: 0,
            name: "Seahorse",
            path: `${dir}/body/Betty.png`,
            weight: 100, //100%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "SKIN",
        elements: [
          {
            id: 0,
            name: "none",
            path: `${dir}/clothing/none.png`,
            weight: 100, //50%
          },
          {
            id: 1,
            name: "Galaxy",
            path: `${dir}/clothing/Galaxy.png`,
            weight: 50, //20%
          },
          {
            id: 2,
            name: "yellow",
            path: `${dir}/clothing/yellow.png`,
            weight: 30, //15%
          },
          {
            id: 3,
            name: "sunny",
            path: `${dir}/clothing/sunny.png`,
            weight: 15, //8%
          },
          {
            id: 4,
            name: "skull",
            path: `${dir}/clothing/skull.png`,
            weight: 7, //4%
          },
          {
            id: 5,
            name: "watercolor",
            path: `${dir}/clothing/watercolor.png`,
            weight: 3, //2%
          },
          {
            id: 6,
            name: "purple",
            path: `${dir}/clothing/purple.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "skin logo",
        elements: [
          {
            id: 0,
            name: "Coder",
            path: `${dir}/clothing logo/coder.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "none",
            path: `${dir}/clothing logo/none.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Alien",
            path: `${dir}/clothing logo/Alien.png`,
            weight: 50, //20%
          },

        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },

      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "Focus",
            path: `${dir}/eyes/Focus.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "Lashes",
            path: `${dir}/eyes/lashes.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Relaxed",
            path: `${dir}/eyes/relaxed.png`,
            weight: 50, //20%
          },
          {
            id: 3,
            name: "squid",
            path: `${dir}/eyes/squid.png`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Stare",
            path: `${dir}/eyes/stare.png`,
            weight: 15, //8%
          },
          {
            id: 5,
            name: "Illuminati",
            path: `${dir}/eyes/Illuminati.png`,
            weight: 7, //4%
          },
          {
            id: 6,
            name: "Zombie",
            path: `${dir}/eyes/zombie.png`,
            weight: 3, //2%
          },
          {
            id: 7,
            name: "lazy",
            path: `${dir}/eyes/lazy.png`,
            weight: 1, //1%
          },
		  {
            id: 8,
            name: "None",
            path: `${dir}/eyes/none.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyewear",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/eyewear/none.png`,
            weight: 100, //70%
          },
          {
            id: 1,
            name: "Swag glasses",
            path: `${dir}/eyewear/swag glasses.png`,
            weight: 30, //15%
          },

          {
            id: 2,
            name: "Harry's glasses",
            path: `${dir}/eyewear/harry's glasses.png`,
            weight: 7, //4%
          },
          {
            id: 3,
            name: "Vampire scar",
            path: `${dir}/eyewear/vampire scar.png`,
            weight: 3, //2%
          },
          {
            id: 4,
            name: "Alien glasses",
            path: `${dir}/eyewear/alien glasses.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "none",
            path: `${dir}/mouth/none.png`,
            weight: 100, //50%
          },
          {
            id: 1,
            name: "creepy",
            path: `${dir}/mouth/creepy.png`,
            weight: 50, //20%
          },
          {
            id: 2,
            name: "vampire",
            path: `${dir}/mouth/vampire.png`,
            weight: 30, //15%
          },

        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },

      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/headwear/none.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "Headphones",
            path: `${dir}/headwear/headphones.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Beanie",
            path: `${dir}/headwear/beanie.png`,
            weight: 50, //20%
          },
          {
            id: 3,
            name: "Chachia",
            path: `${dir}/headwear/Chachia.png`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Hat",
            path: `${dir}/headwear/Hat.png`,
            weight: 15, //8%
          },
          {
            id: 5,
            name: "lucky",
            path: `${dir}/headwear/lucky.png`,
            weight: 7, //4%
          },
          {
            id: 6,
            name: "brain",
            path: `${dir}/headwear/brain.png`,
            weight: 3, //2%
          },
          {
            id: 7,
            name: "graduated",
            path: `${dir}/headwear/graduated.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
