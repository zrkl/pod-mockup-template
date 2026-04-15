export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  category: "t-shirts" | "hoodies" | "sweatshirts" | "accessories"
  material: string
  sizes: string[]
  colors: { name: string; hex: string }[]
  garmentImage: string
  designImage: string
  images?: string[]
  badge?: "new" | "sale" | "best-seller"
  discount?: number
  stock: "in-stock" | "low-stock" | "out-of-stock"
  codAvailable: boolean
}

export const products: Product[] = [
  {
    id: "nordic-stag-hoodie",
    name: "Nordic Stag Hoodie",
    price: 59,
    description: "Premium heavyweight cotton hoodie featuring a stunning geometric deer head design. Perfect for nature lovers who appreciate minimalist aesthetics.",
    category: "hoodies",
    material: "Heavyweight Cotton",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Forest Green", hex: "#064c39" },
      { name: "Black", hex: "#1c1c1c" },
      { name: "White", hex: "#f5f5f5" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB57kJDi6cqOKUSIiN8fWLLyB94b3jy9dfdvGGsEL3PY6DebtW5UjtlElwq14TX6ad11vJcwocOlR6Yo2EZT32E0WYPqIWju60e4o5-CzyZeD6uHVFtgNXVlo_OrDxIGdBTGjtMtO6jYnzKkwv1cQgiiQRNNWO7Bz7m5ja6V8TukVvN_4SUOnedsQROHihIfme9qPoLMIb8OiU3tv-s20Ccq_havpkAMLScUuThlrMMV4G8V9d0-WlcRYLfshx2fKRLxTxi8mSjvkI",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBNDGofSY2i3i75mJyMXgI3HY3ZDH5t0Fkonrr3LOnUSIabAaFfGgSWXJYH-PCk9rG0DHIcT0hLdHEizrI-V-4uK0abLjIj87lFkjZ90O1rjD2XLMQINX8Nap4AxuJFCJB6-kIA7E2kuNTO08fVLId6bqGx7YYS99XDxZn6qs-on8BRIFSy2_eiJ0jZYBDJ-8B9DZQbMgsZi7epQbD0rSAjeUciTBcBG7PXDY-9TUC7eg7cgHOeINPqUWgWcsJdQ25k4FdiFOPbRA",
    badge: "new",
    stock: "in-stock",
    codAvailable: true,
  },
  {
    id: "fern-whisper-tee",
    name: "Fern Whisper Tee",
    price: 35,
    description: "Soft organic blend t-shirt with a delicate botanical fern illustration. Perfect for everyday wear with an eco-conscious touch.",
    category: "t-shirts",
    material: "Organic Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#f5f5f5" },
      { name: "Cream", hex: "#faf0e6" },
      { name: "Sage", hex: "#9dc183" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2tUWovRQHfDMy2D0U88Jy8Uhc2CfzVA1IpeZRykErjkmGAoMMVMTl-l8zprX2rQFmPb2LBK11n2jFRaMzhI9IVJInrDEBmwoe4ljM1VOVmC8dvvPwL_EMpD2PzXdzqWYpnW0lqAHb3W3Jsa7HF1fkYQGa19P-PPbVqQoEgF2i-UIBa7k1-y9JKQJSAM24zAvTRU2nx1qedCLQIh72J6GpO1Ix9Gzd3gJFBwjyjVu6ip5Yg116DmPGr49pF6fFCozla9MwT8bD1Es",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCbTpopLeu-9539UJkd1Uci7oDzVyR2gtSnpEVVFUgJVVVScsbmHSS7zYnTf-1aEpEq_eelfrxVna_7bOpaxsJBF75R0CVM4uP1jUMdu95NLZCEE9yz6FunzBC-8f7Nn-j07GKCnY8KKloaMF_bXfpyTuZ-q4l66u3sglPbcD45YHVR33YLcQ-V0r3ABt9SDDTZ-ts9hF6_uH5Hc6dRh_GFFY0pSumW_XhT9dlPK5AvC17PFAtgGZ9SAMP-fhiQXwhyDBcZuqaQQg",
    stock: "in-stock",
    codAvailable: true,
  },
  {
    id: "alpine-gold-hoodie",
    name: "Alpine Gold Hoodie",
    price: 62,
    description: "Unisex fit hoodie featuring abstract mountain landscape line art. Made for those who find peace in the peaks.",
    category: "hoodies",
    material: "Unisex Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Mustard", hex: "#e1a95f" },
      { name: "Navy", hex: "#2c3e50" },
      { name: "Grey", hex: "#808080" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Jv2KFrvUey1vZ5q9DV_5Kjn1XtimKnjIPyi-dCLGY4QfFe328u-pqM7Xh30aURaySNLF39XB85K4BXfjN5PR4hUBnFk66G5vf8eoNZ1L793RNO4PX7DcAHkbmVZl3h3f9hUamphqUAH2c-4_WHZflYb7U5A5d71aYcyvV80NRaS9kXA1gr7dN1SOclQ42ZOMwQ81F1Yu4txuyJrpYLZD_cSCa-4EJmH4GuE5Q1qAJL_YivWxb2H75xvjGrTs5cAyux9g8W3qrA",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXMCGWQAsPxAjD4z6uxmQpCb1fkWUNQR2si9SsmDwal_J2uAOYsgxJEfCFeSbDCXuYy0QQRoBhB5ZrJK4rlc0ig-YRWO5jsWTcjWKeYdKNOVmZXB0cw1vQFvKxj0j4imzyfa3iVf7Ofg_bk1oviNSn0usf4k0gqUT7FFElXEJj9-mpZxGANn1SUjNaNRrHZ_S66gyJIHscTcHMA9x-RFu1NGYdxAtwMRIhFfydE8ZViKRM32FGPUbmpAtoplvaRUzxM7RiiasNcEw",
    stock: "in-stock",
    codAvailable: true,
  },
  {
    id: "cosmic-night-tee",
    name: "Cosmic Night Tee",
    price: 38,
    description: "Slim fit t-shirt featuring a mesmerizing space galaxy nebula graphic. For those who dream beyond the stars.",
    category: "t-shirts",
    material: "Slim Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1c1c1c" },
      { name: "Navy", hex: "#2c3e50" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa3HB0GcNrWI_pqCc2ZdeuahAc0SzePtpCGipspKOE1oh99pcctyuLCBgWVpVSsndX4fpS_qYbBhO9b1xPd3wClb3txm55ClM1PyZHw-xhq_lcCsMlcf2tOCyhRByf0fjtxvASwecvs6tZcRrgRfzMkR6vXGxVFH6CWsnbkyccprGmrx32QI2tnZal3qYPZbd2BCF7xCAqncrs-AHymv0UnzIUaKgKK7wSGYKuGsXIzjLiVwyEdudBYFuZc2Pdg0Mka5Tda1ckTZs",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2V1JAKnnj9vWZDQLRERs0MZPdtv4G43bRwTKrVt9DawpvDf9s59BYy3skOZ5G4G2An_n4ncOkCLIPyeVCAAZJjmksM_44BysgZB5Cy680i6C_p0nTXGfv31XMICSfwwr1bdG23G1zcIDIDbSRLmG3fOuNkvrgmtdcRAWcW_sAk96-rZqFzXnsj0sdBkHs6AHxAMbGZ-g2SE_UxwQDD4P_XOMVlym_7hLsi3OhveWvatN13dU8rFshrsH3eWfJn1V4qBHQ9nZJuYQ",
    stock: "in-stock",
    codAvailable: true,
  },
  {
    id: "classic-organic-tee",
    name: "Classic Organic Tee",
    price: 29,
    description: "100% sustainable cotton t-shirt with a classic fit. The foundation of every conscious wardrobe.",
    category: "t-shirts",
    material: "100% Cotton • Sustainable",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "White", hex: "#f5f5f5" },
      { name: "Black", hex: "#1c1c1c" },
      { name: "Forest Green", hex: "#064c39" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQMFuXEnlcqYfqI-1lN1jve-cEqVOPRMB8jy79OIbDkDu9t-OMkm4QvbUCzY7pInPkmarHrt3lu_wR8YHqe4nlw-8q32c77d1J96wJQQGF-Td7A23MaTLba9uDaIgKw8UYP11lRTv2CDUF3T9xqJeib_8zEM-8fjc5r3nKe1s8fhUpACA0ydAdTjTpq3sq2wTKYnQaWdAJZt0pDzxerWjnGqQ2_-Ic1Jk-rNlo2hgXUsgtbXxQizTAj2ApW8FiUWoLmNf-WFczxCs",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEKdtp46D849ptg0aJrLq0Lz7NzmUvSjR3mjbao9Ot_Pz_RdkhzpoqKs1PoBfvUChfvb78xP4oAPfY2K5jDzltmEJRQc9Iwlp_pYoMyUu4aYOC3LO05dmrlPFmzJN67NQlxuaUktqBwhLwU-wuOxj-UV7uagnnn9MwdRZvwGaUMi1hFbP_VAaLlOcsRyiw47qN2xRMe6RZUkNnzt3Z1_R6p58OmLAblMut50P8nxuo5cj49eKZIBvrjtc6mB3WXmXrjW9rGfY1qZg",
    badge: "new",
    stock: "in-stock",
    codAvailable: true,
  },
  {
    id: "forest-explorer-hoodie",
    name: "Forest Explorer Hoodie",
    price: 54,
    originalPrice: 68,
    description: "Heavyweight fleece unisex hoodie designed for those who find their peace in the wilderness.",
    category: "hoodies",
    material: "Heavyweight Fleece • Unisex",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Forest Green", hex: "#064c39" },
      { name: "Brown", hex: "#8b4513" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBq_1qBdWnekPQi007TuCtCAmVzu6Eygwl_DVBtZdJJ33JHtkBDcY8re3hOdtmhltMeBT2SnBLYSH5kTohcTx3HQZlRS2KPS141Mwr_uRyjvtX06lscb2NxQ-Xc1dOn6ubqW0ZaJdcsO4DX31USTlEtdwhFhRAAtjL4QWzLT2WwDQKWhp9UYyvNfi0GWE4HwAqvfnnO9SJQ_auArqXOJ9YtgmevX68AMV3noIUZ4Wg4JI8LkEBZcq94lo7J_5Ek-6NJpEiHs7NZ8o",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6vam3deFyOfC-BuK76p9hjcaV40Rro1tkhnW5CqrtsyTApR1eWCMLWJYDAaUjVk25s6jkvWJXYdlwgVQfUS0kMFXUzxubdAaN4yOFRbHifGCSRe-JtiICC8XwaPlmFlgKxmswEXoh0W1_okbW_v_O4PMUmGsvQXFAErBBW-uu8hak9beRT0jdo9aquyr4YKfvM2Tb6RDRnCiufxsA4bpvy00TSAxn2NY-UNJXPsVzASripzG8SyWdxhHeya366guFQnbUio1zLN8",
    badge: "sale",
    discount: 20,
    stock: "in-stock",
    codAvailable: true,
  },
  {
    id: "natural-linen-overshirt",
    name: "Natural Linen Overshirt",
    price: 45,
    description: "Breathable linen overshirt perfect for summer layering. A timeless essential for the modern wardrobe.",
    category: "sweatshirts",
    material: "Breathable • Summer Essential",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Beige", hex: "#f5f5dc" },
      { name: "White", hex: "#f5f5f5" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRTwShXRYgHyqqFGfaze9SQeKQ6VARrTwi_4cvWUeuVCKynnP8oVS7mNfOp1B7sITQmZZBLQDNgnPzEK9HEwwB1p8JTacuu6FhHN1UCQtfLik5VTv3f3aqcfNDKHBpNiP_w2yPceGlid1TsOjF5ts595e0HYThdIogMyqY_uvmZuFffKVU-b0k1HAmjn49saD1xdBjpE9x9gzxdUIf84OO-M8ie_KNFEP76XpffI8v4oa64TVZyZ9GWMxGC7ArPn9gdeWSxBZTNFw",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjsfUkEpDUovdepRHkAx0scS-UaSMTy5elIw7zS4oV0xYoezBKLwWHR46HfTrx5CElklR-Y4QkDETABSN-t1MoAAXWSCIjjn5B4E1bFPoz-RRtf9pinPyjeipZaVzjGfFf367YyUnatCOc24tMfht8Rujj1nF4Zb1riZw2R-Ux8oGd1jcJQJ8Ou8ZGGC6oe4quUliFD2-0HtLBMtmUqzIraOfbk6JyFggn1w9Hzr6BYkcv3V5rMiKDVEG26sNiozKIaeTSsxyjVUI",
    badge: "best-seller",
    stock: "low-stock",
    codAvailable: true,
  },
  {
    id: "midnight-mountain-tee",
    name: "Midnight Mountain Tee",
    price: 29.99,
    description: "A bold graphic tee featuring mountain silhouettes under a starry night sky.",
    category: "t-shirts",
    material: "100% Cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1c1c1c" },
      { name: "Navy", hex: "#2c3e50" },
    ],
    garmentImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMW98-r_rVn3PWnZUMnvGqee5C93Le53cZ5YF90sXyYOdodQ8HfROSO6ugH5uZdRTc-mvmoXD-7nL1jbj6vZYZAdrRcmPRnRjt4fskzB9GuPIwu1Jq6TCQDFBuCaWn7DqvzaPSCRLzPV6GlUsxXVwCns-mCQ_z2myK1CpX_7zZHJzsaK03KrPm1e6-B3O2LxjvaGvvpY7lk-nnEU0mUuxXqrR-nV8_EKeqWku_WDIDCc4Kky4R1vTAaN15B9FZirrkQ7MGrvGwXxs",
    designImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMW98-r_rVn3PWnZUMnvGqee5C93Le53cZ5YF90sXyYOdodQ8HfROSO6ugH5uZdRTc-mvmoXD-7nL1jbj6vZYZAdrRcmPRnRjt4fskzB9GuPIwu1Jq6TCQDFBuCaWn7DqvzaPSCRLzPV6GlUsxXVwCns-mCQ_z2myK1CpX_7zZHJzsaK03KrPm1e6-B3O2LxjvaGvvpY7lk-nnEU0mUuxXqrR-nV8_EKeqWku_WDIDCc4Kky4R1vTAaN15B9FZirrkQ7MGrvGwXxs",
    stock: "in-stock",
    codAvailable: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badge === "new")
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.badge === "sale")
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.badge === "best-seller")
}
