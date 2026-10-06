import { Scissors, Sparkles, Droplets, Smile, Sun } from 'lucide-react';

export const menCategories = [
  "Hair Styling",
  "World Of Colouring",
  "Texture & Hair Treatment",
  "Indulgent Facials",
  "Add On Mask",
  "Add On Skin Care",
  "De-Tan",
  "Body Care",
  "Reflexology",
  "Manicure & Pedicure",
  "Heel Peel Treatment"
];

export const menServices = [
  // HAIR STYLING
  { name: "HAIR CUT", description: "All hair cuts include hair wash", category: "Hair Styling", icon: Scissors },
  { name: "SHAVE", category: "Hair Styling", icon: Scissors },
  { name: "EXECUTIVE SHAVE", description: "SHAVE & EXPRESS CLEAN-UP", category: "Hair Styling", icon: Scissors },
  { name: "HAIR CUT + EXECUTIVE SHAVE", category: "Hair Styling", icon: Scissors },
  { name: "HEAD SHAVE", category: "Hair Styling", icon: Scissors },
  { name: "KIDS CUT (Below 10)", category: "Hair Styling", icon: Scissors },
  { name: "BEARD STYLING", category: "Hair Styling", icon: Scissors },
  { name: "BEARD TRIM", category: "Hair Styling", icon: Scissors },
  { name: "HAIR WASH", category: "Hair Styling", icon: Droplets },

  // WORLD OF COLOURING
  { name: "GREY COVERAGE", category: "World Of Colouring", icon: Sparkles },
  { name: "EXPRESS COLOR", category: "World Of Colouring", icon: Sparkles },
  { name: "CLASSIC COLOR AMMONIA FREE", category: "World Of Colouring", icon: Sparkles },
  { name: "PREMIUM COLOR AMMONIA FREE", category: "World Of Colouring", icon: Sparkles },
  { name: "FASHION COLOR", category: "World Of Colouring", icon: Sparkles },
  { name: "STREAK (PER STREAK)", category: "World Of Colouring", icon: Sparkles },
  { name: "MOUSTACHE COLOR", category: "World Of Colouring", icon: Sparkles },
  { name: "BEARD COLORING", category: "World Of Colouring", icon: Sparkles },
  { name: "BEARD + MOUSTACHE COLORING", category: "World Of Colouring", icon: Sparkles },

  // TEXTURE MATTERS & HAIR TREATMENT
  { name: "SMOOTHENING | STRAIGHTENING | KERATIN", category: "Texture & Hair Treatment", icon: Droplets },
  { name: "HEAD MASSAGE", category: "Texture & Hair Treatment", icon: Smile },
  { name: "HAIR SPA TREATMENT", category: "Texture & Hair Treatment", icon: Droplets },
  { name: "COLOR SAVE", category: "Texture & Hair Treatment", icon: Droplets },
  { name: "REPAIR & REJUVENATE", category: "Texture & Hair Treatment", icon: Droplets },
  { name: "SCALP TREATMENT", category: "Texture & Hair Treatment", icon: Droplets },

  // INDULGENT FACIALS
  { name: "CLEAN UP (OIL | DRY | ACNE)", category: "Indulgent Facials", icon: Smile },
  { name: "FRUIT BLASTER", description: "A revitalizing facial with the real goodness of fruit", category: "Indulgent Facials", icon: Smile },
  { name: "CHOCOHOLIC", description: "A replenishing and hydrating facial with the luxury of chocolate", category: "Indulgent Facials", icon: Smile },
  { name: "DETAN 100", description: "A facial that restores the skin's balance & removes tan", category: "Indulgent Facials", icon: Sun },
  { name: "OMG CHARCOAL", description: "An activated charcoal facial that clears impurities and controls acne", category: "Indulgent Facials", icon: Sparkles },
  { name: "H.I.M", description: "A facial which calms and harmonizes sensitive skin and gives nourishing glow", category: "Indulgent Facials", icon: Smile },
  { name: "NATURALS BRIGHTENING", description: "A specially constructed facial regime for de-pigmenting and skin brightening", category: "Indulgent Facials", icon: Sun },
  { name: "DEAD SEA HYDRATION", description: "Dead Sea Mud masks work to remove impurities and dead skin with special minerals", category: "Indulgent Facials", icon: Droplets },
  { name: "SENSIGLOW", description: "A facial which calms and harmonizes sensitive skin and gives nourishing glow", category: "Indulgent Facials", icon: Smile },
  { name: "NATURALS AGE REVERSAL", description: "A luxurious slow-paced facial with products rich in vitamins that soothe and brighten", category: "Indulgent Facials", icon: Sparkles },
  { name: "SKIN BRIGHTENING", description: "Restores the balance of the skin while gently exfoliating it & leaving it with a glow", category: "Indulgent Facials", icon: Sun },
  { name: "ULTIMO GOLD", description: "Penetrates 24karat gold into the skin's deepest layer accelerating cell renewal", category: "Indulgent Facials", icon: Sparkles },
  { name: "ILLUMINATING FACIAL WITH GOJIBERRY", description: "Facial with extract of gojiberry. The algae peel-off Goji Mask has high antioxidant power", category: "Indulgent Facials", icon: Sun },

  // ADD ON MASK
  { name: "REJUVENATE", category: "Add On Mask", icon: Smile },
  { name: "BRIGHT", category: "Add On Mask", icon: Sun },

  // ADD ON SKIN CARE
  { name: "NECK | ELBOW - Brightening", category: "Add On Skin Care", icon: Sun },
  { name: "UNDER EYE - Brightening", category: "Add On Skin Care", icon: Sun },

  // DE-TAN
  { name: "FACE & NECK DE-TAN", category: "De-Tan", icon: Sun },

  // BODY CARE
  { name: "BACK FACIAL", category: "Body Care", icon: Droplets },

  // REFLEXOLOGY
  { name: "REFLEXOLOGY - NECK & SHOULDER (20 MIN)", category: "Reflexology", icon: Smile },
  { name: "REFLEXOLOGY - HAND (20 MIN)", category: "Reflexology", icon: Smile },
  { name: "REFLEXOLOGY - FEET (20 MIN)", category: "Reflexology", icon: Smile },

  // MANICURE / PEDICURE
  { name: "CRYSTAL SPA - MANI | PEDI", category: "Manicure & Pedicure", icon: Droplets },
  { name: "ICE CREAM MANI + PEDI (Combo)", category: "Manicure & Pedicure", icon: Sparkles },
  { name: "ORGANIC SPA MANI + PEDI (Combo)", category: "Manicure & Pedicure", icon: Sparkles },

  // HEEL PEEL TREATMENT
  { name: "HEEL PEEL TREATMENT", category: "Heel Peel Treatment", icon: Sparkles }
];