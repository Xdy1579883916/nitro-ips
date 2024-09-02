import { expect, it } from "vitest"
import { fmtHDSrc } from "./fmtHDSrc"

const example = [
  {
    before: "https://s.alicdn.com/@sc04/kf/H34dd76e613bf498a9b6feed8bd535999A.jpg_480x480.jpg",
    after: "https://s.alicdn.com/@sc04/kf/H34dd76e613bf498a9b6feed8bd535999A.jpg",
  },
  {
    before: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2514391818/O1CN01JM5I6n1PIgwgJzldY_!!2514391818.jpg_580x580q90.jpg_.webp",
    after: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2514391818/O1CN01JM5I6n1PIgwgJzldY_!!2514391818.jpg",
  },
  {
    before: "https://ae01.alicdn.com/kf/Saea593f7a2d643f69713907861bad2fax/B01-2023-New-Comfortable-High-shoes-man-and-womens-classic-sneakers-Durable-White-Flat-Canvas-Shoes.jpg_350x350xz.jpg_.webp",
    after: "https://ae01.alicdn.com/kf/Saea593f7a2d643f69713907861bad2fax/B01-2023-New-Comfortable-High-shoes-man-and-womens-classic-sneakers-Durable-White-Flat-Canvas-Shoes.jpg",
  },
  {
    before: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715j9SmA-ZL._AC_UL320_.jpg",
    after: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715j9SmA-ZL.jpg",
  },
  {
    before: "https://cbu01.alicdn.com/img/ibank/O1CN01PUdMZT29yL4gAR3nT_!!3072078136-0-cib.220x220xz.jpg?_=2020",
    after: "https://cbu01.alicdn.com/img/ibank/O1CN01PUdMZT29yL4gAR3nT_!!3072078136-0-cib.jpg?_=2020",
  },
  {
    before: "https://ae-pic-a1.aliexpress-media.com/kf/S4e6ff9bd460a42fdad196253b158b19cf.jpg_80x80.jpg_.webp",
    after: "https://ae-pic-a1.aliexpress-media.com/kf/S4e6ff9bd460a42fdad196253b158b19cf.jpg",
  },
]

it("test url HD parser", () => {
  for (const item of example) {
    const { before, after } = item
    expect(fmtHDSrc(before)).toBe(after)
  }
})
