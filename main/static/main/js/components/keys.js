var CENSUS_KEYS = {
  "ak-census": "40xiqgvl",
  "al-census": "5wnfuadx",
  "ar-census": "cfn0gxes",
  "az-census": "d1hc4dk1",
  "ca-census": "dgvz11d5",
  "co-census": "10cpzey1",
  "ct-census": "acwqf5pz",
  "dc-census": "da466hfz",
  "de-census": "1bx4au31",
  "fl-census": "7hpatmow",
  "ga-census": "5lx08ma9",
  "hi-census": "82epj1e0",
  "ia-census": "4jkzgaf9",
  "id-census": "6s8r1pl0",
  "il-census": "awf7y438",
  "in-census": "1fn3qhnn",
  "ks-census": "ad6ys13i",
  "ky-census": "0q4sl8dv",
  "la-census": "7zyid6d0",
  "ma-census": "1bvt0bee",
  "md-census": "1zwr1qu7",
  "me-census": "cyabkjlh",
  "mi-census": "5elaw49i",
  "mn-census": "561za3yv",
  "mo-census": "56j9wugl",
  "ms-census": "33ictlz4",
  "mt-census": "1qescrvy",
  "nc-census": "2i44h0gn",
  "nd-census": "2jj6oy57",
  "ne-census": "4hcty1f0",
  "nh-census": "8q2e3yu3",
  "nj-census": "0yrce8nw",
  "nm-census": "164i2lmn",
  "nv-census": "42p3cqhj",
  "ny-census": "3i3eca1x",
  "oh-census": "18ik8ger",
  "ok-census": "34ou4tm9",
  "or-census": "66y60ac5",
  "pa-census": "4oz1cx84",
  "ri-census": "6p13pxdt",
  "sc-census": "a7ddwoo9",
  "sd-census": "aztmscpz",
  "tn-census": "8io3xzps",
  "tx-census": "773he449",
  "ut-census": "2tq7r5as",
  "va-census": "58tbtkkj",
  "vt-census": "914alme3",
  "wa-census": "4a9umfkl",
  "wi-census": "52mhmiw7",
  "wv-census": "82nll1sy",
  "wy-census": "9uwm30og",
};
var LOWER_KEYS = {
  "ak-lower": "a7my06pf",
  "al-lower": "6s3fb8x6",
  "ar-lower": "aoo42mh5",
  "az-lower": "69m1ncet",
  "ca-lower": "8swc402r",
  "co-lower": "6449ik1a",
  "ct-lower": "aps4sgjm",
  "de-lower": "6pnb05km",
  "fl-lower": "489egzlz",
  "ga-lower": "8tvwmii5",
  "hi-lower": "9hvxot4m",
  "ia-lower": "9lgve8rt",
  "id-lower": "6n6vcm1q",
  "il-lower": "6ztbe511",
  "in-lower": "5o3tg7ko",
  "ks-lower": "7ca08p7p",
  "ky-lower": "bxcziibw",
  "la-lower": "a993qoob",
  "ma-lower": "2li5gb3y",
  "md-lower": "4yiku1xm",
  "me-lower": "b7vwy66v",
  "mi-lower": "8ccovj4a",
  "mn-lower": "8ls97if0",
  "mo-lower": "3m8wa0ij",
  "ms-lower": "dmiyiiih",
  "mt-lower": "4c5h4k4k",
  "nc-lower": "4wfqq41l",
  "nd-lower": "d5ctq6qu",
  "ne-lower": "4gfifmes",
  "nh-lower": "0rehp33q",
  "nj-lower": "69lvoah9",
  "nm-lower": "5ty9whhm",
  "nv-lower": "ccsgcq7z",
  "ny-lower": "7im366fo",
  "oh-lower": "4ithojy1",
  "ok-lower": "1yv8x4qk",
  "or-lower": "al75jr5d",
  "pa-lower": "29k0gah0",
  "ri-lower": "30x1nsif",
  "sc-lower": "54vjbmvf",
  "sd-lower": "dxkshx2x",
  "tn-lower": "2tjnjb83",
  "tx-lower": "8omxrrst",
  "ut-lower": "05y3896b",
  "va-lower": "68ma8g8u",
  "vt-lower": "d6brg1fl",
  "wa-lower": "c9rk9gas",
  "wi-lower": "3q5v3n9v",
  "wv-lower": "aq380u5z",
  "wy-lower": "93ya8fsx",
};
var UPPER_KEYS = {
  "ak-upper": "ajy4zns3",
  "al-upper": "ct0ehmlm",
  "ar-upper": "0vp12qw4",
  "az-upper": "7url8569",
  "ca-upper": "c793js1z",
  "co-upper": "duivmkp7",
  "ct-upper": "bt8hzuqf",
  "de-upper": "1tjyqhsb",
  "fl-upper": "1gclsamo",
  "ga-upper": "0ctsypu0",
  "hi-upper": "ce4zroh2",
  "ia-upper": "cjshjdih",
  "id-upper": "a1z3uex6",
  "il-upper": "2k9tw58x",
  "in-upper": "cxroj8b9",
  "ks-upper": "8s51clse",
  "ky-upper": "a0z84cq5",
  "la-upper": "34ot8agf",
  "ma-upper": "7t0rbyqc",
  "md-upper": "57db6u4n",
  "me-upper": "5xn4u2cb",
  "mi-upper": "0izfbso4",
  "mn-upper": "dfxbv8s2",
  "mo-upper": "8fenu4i3",
  "ms-upper": "1n11roh2",
  "mt-upper": "b0mb1mrt",
  "nc-upper": "0n3amj58",
  "nd-upper": "86n4hvqp",
  "ne-upper": "22ev23od",
  "nh-upper": "dbx500kk",
  "nj-upper": "a730ggev",
  "nm-upper": "amyd4x8x",
  "nv-upper": "9t29x676",
  "ny-upper": "2vbg6jw9",
  "oh-upper": "4jxx8mtp",
  "ok-upper": "bytxji14",
  "or-upper": "1yfm1svn",
  "pa-upper": "359k5zrd",
  "ri-upper": "dvlmwj4t",
  "sc-upper": "7e8h2zry",
  "sd-upper": "2ia26tc9",
  "tn-upper": "0wu0rs9e",
  "tx-upper": "1jckmfg8",
  "ut-upper": "3o87d3lh",
  "va-upper": "6roefc4v",
  "vt-upper": "36j5ux3z",
  "wa-upper": "21jsuobz",
  "wi-upper": "7wznqcw4",
  "wv-upper": "2oou05hr",
  "wy-upper": "7lkxtzk5",
};
var BG_KEYS = {
  "ilbg": "4iugl58g",
  "mibg": "6rmkafit",
  "njbg": "9va600u8",
  "pabg": "cpap9ug0",
  "txbg": "9onkqc5t",
  "vabg": "5qxcnhry",
};
var CHI_WARD_KEY = "179v2oeh";
var CHI_COMM_KEY = "63nswxfc";
// var states = [
//   "ak",
//   "al",
//   "ar",
//   "az",
//   "ca",
//   "co",
//   "ct",
//   "dc",
//   "de",
//   "fl",
//   "ga",
//   "hi",
//   "ia",
//   "id",
//   "il",
//   "in",
//   "ks",
//   "ky",
//   "la",
//   "ma",
//   "md",
//   "me",
//   "mi",
//   "mn",
//   "mo",
//   "ms",
//   "mt",
//   "nc",
//   "nd",
//   "nh",
//   "nj",
//   "nm",
//   "nv",
//   "ny",
//   "oh",
//   "ok",
//   "or",
//   "pa",
//   "ri",
//   "sc",
//   "sd",
//   "tn",
//   "tx",
//   "ut",
//   "va",
//   "vt",
//   "wa",
//   "wi",
//   "wv",
//   "wy",
// ];
var states = [
  "il",
  "mi",
  "nj",
  "pa",
  "tx",
  "va",
];
