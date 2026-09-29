import {
  Sparkles,
  Scissors,
  HeartHandshake,
  Brush,
  Droplets,
  Hand,
  Footprints,
  Gem,
  Smile,
  Waves,
  Palette,
  CircleDot,
  Leaf,
  Crown
} from 'lucide-react';

const imagePool = {
  bridal: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85',
  makeup: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85',
  hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',
  nails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85',
  salon: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85'
};

const service = (name, category, icon, image, description) => ({
  name,
  category,
  icon,
  image,
  description
});

export const services = [
  // Makeup
  service('Basic to Advance Makeup', 'Makeup', Brush, imagePool.makeup, 'Makeup looks ranging from basic to advanced, tailored to the occasion.'),
  service('Party Makeup', 'Makeup', Sparkles, imagePool.makeup, 'Elegant party-ready makeup with a polished, camera-friendly finish.'),
  service('Bridal Makeup', 'Makeup', Crown, imagePool.bridal, 'Bridal makeup designed for your special day with a refined traditional finish.'),
  service('Gorgeous Makeup', 'Makeup', Palette, imagePool.makeup, 'A glamorous makeup look for celebrations and special occasions.'),
  service('Sweat-Proof Makeup', 'Makeup', Droplets, imagePool.makeup, 'A long-wear makeup option designed for a fresh finish through the event.'),
  service('HD Makeup / HD Makeup', 'Makeup', Gem, imagePool.makeup, 'High-definition makeup designed to photograph beautifully.'),
  service('Waterproof Makeup', 'Makeup', Droplets, imagePool.makeup, 'Water-resistant makeup for events where long-lasting wear matters.'),
  service('Grooming', 'Makeup', HeartHandshake, imagePool.makeup, 'Personal grooming service for a neat, polished appearance.'),
  service('Air Brush Makeup', 'Makeup', Brush, imagePool.makeup, 'Fine airbrush application for an even, lightweight-looking finish.'),
  service('Bridal Package Combo', 'Bridal', Crown, imagePool.bridal, 'A bridal-focused combination of beauty services prepared for the wedding occasion.'),
  service('Wine Facial', 'Bridal', HeartHandshake, imagePool.bridal, 'A facial service listed in the supplied bridal service notes.'),

  // Threading
  service('Eyebrow', 'Threading', Scissors, imagePool.facial, 'Precise eyebrow threading for a clean, defined shape.'),
  service('Upper Lip / Lower Lip', 'Threading', Scissors, imagePool.facial, 'Threading service for upper and lower lip areas.'),
  service('Full Face', 'Threading', Scissors, imagePool.facial, 'Full-face threading for a neat, smooth appearance.'),
  service('Chin / Forehead', 'Threading', Scissors, imagePool.facial, 'Targeted threading for chin and forehead areas.'),

  // Bleach / De-tan
  service('De-Tan / Bleach', 'De-Tan & Bleach', Droplets, imagePool.facial, 'A de-tan and bleach service listed in the supplied service menu.'),
  service('Face De-Tan', 'De-Tan & Bleach', Droplets, imagePool.facial, 'Face-focused de-tan treatment.'),
  service('Point Neck / Back Neck', 'De-Tan & Bleach', Droplets, imagePool.facial, 'De-tan/bleach service for the neck areas.'),
  service('Full Leg De-Tan / Off Leg', 'De-Tan & Bleach', Droplets, imagePool.facial, 'Leg-focused de-tan/bleach service.'),
  service('Full Arms / Off Arms De-Tan', 'De-Tan & Bleach', Droplets, imagePool.facial, 'Arm-focused de-tan/bleach service.'),
  service('Full Body De-Tan', 'De-Tan & Bleach', Droplets, imagePool.facial, 'Full-body de-tan service.'),

  // Facials
  service('Cleanup', 'Facials', Sparkles, imagePool.facial, 'A basic facial cleanup service for a refreshed appearance.'),
  service('Fruit Facial (Natural / Cream)', 'Facials', Leaf, imagePool.facial, 'Fruit facial options listed as natural or cream-based.'),
  service('Skin Brightening', 'Facials', Sparkles, imagePool.facial, 'Facial service focused on a brighter-looking complexion.'),
  service('Sensitive Glow', 'Facials', Sparkles, imagePool.facial, 'A glow-focused facial option listed for sensitive skin.'),
  service('Flawless Skin (Luxury Kit)', 'Facials', Gem, imagePool.facial, 'Luxury-kit facial service for a refined skin-care experience.'),
  service('Insta Glow', 'Facials', Sparkles, imagePool.facial, 'A glow-focused facial treatment for an event-ready look.'),
  service('Gold Facial / 24K Gold', 'Facials', Gem, imagePool.facial, 'Gold facial service including a 24K Gold option.'),
  service('Platinum Pearl Facial', 'Facials', Gem, imagePool.facial, 'Premium platinum pearl facial service.'),
  service('A Layers Facial', 'Facials', Sparkles, imagePool.facial, 'A layered facial service listed in the supplied menu.'),
  service('Anti-Ageing', 'Facials', HeartHandshake, imagePool.facial, 'Facial treatment listed for an anti-ageing beauty routine.'),
  service('Bridal Glow', 'Facials', Crown, imagePool.bridal, 'Glow-focused facial service for bridal preparation.'),
  service('Chocolate Facial', 'Facials', Sparkles, imagePool.facial, 'Chocolate facial service for a pampering skin-care session.'),
  service('Hydra Facial', 'Facials', Droplets, imagePool.facial, 'Hydra facial service for a hydrated, refreshed skin feel.'),
  service('Pimple Treatment', 'Facials', CircleDot, imagePool.facial, 'A facial treatment listed specifically for pimples.'),

  // Masks
  service('Requin Mask', 'Masks', Sparkles, imagePool.facial, 'Mask service listed in the supplied service notes.'),
  service('Peel & Mask', 'Masks', Sparkles, imagePool.facial, 'Peel and mask combination listed in the service menu.'),
  service('Fruit Mask', 'Masks', Leaf, imagePool.facial, 'Fruit-based mask service.'),
  service('Power Mask', 'Masks', Sparkles, imagePool.facial, 'Mask service listed as a power mask.'),
  service('Cool Mask', 'Masks', Droplets, imagePool.facial, 'Cooling mask service for a refreshed skin feel.'),
  service('Hydrating Mask', 'Masks', Droplets, imagePool.facial, 'Hydrating mask service.'),
  service('Pimple Control Mask', 'Masks', CircleDot, imagePool.facial, 'Mask service listed for pimple control.'),

  // Wax
  service('Bikini Wax', 'Waxing', Waves, imagePool.facial, 'Bikini waxing service.'),
  service('Regular Wax (Painless)', 'Waxing', Waves, imagePool.facial, 'Regular waxing listed as a painless option.'),
  service('Flower Wax', 'Waxing', Waves, imagePool.facial, 'Flower wax service.'),
  service('Full Face Wax', 'Waxing', Waves, imagePool.facial, 'Full-face waxing service.'),
  service('Half Arms / Full Arms', 'Waxing', Waves, imagePool.facial, 'Half-arm or full-arm waxing options.'),
  service('Full Leg / Half Leg', 'Waxing', Waves, imagePool.facial, 'Full-leg or half-leg waxing options.'),
  service('Full Body Wax', 'Waxing', Waves, imagePool.facial, 'Full-body waxing service.'),
  service('Face Wax', 'Waxing', Waves, imagePool.facial, 'Face waxing service.'),
  service('Underarm Wax', 'Waxing', Waves, imagePool.facial, 'Underarm waxing service.'),

  // Pedicure / Manicure
  service('Normal Pedicure', 'Pedicure & Manicure', Footprints, imagePool.nails, 'Standard pedicure service.'),
  service('Pedicure Spa', 'Pedicure & Manicure', Footprints, imagePool.nails, 'Spa pedicure service.'),
  service('Ice Cream Pedicure', 'Pedicure & Manicure', Footprints, imagePool.nails, 'Ice cream pedicure option listed in the menu.'),
  service('Bubble Gum Pedicure', 'Pedicure & Manicure', Footprints, imagePool.nails, 'Bubble gum pedicure option.'),
  service('Luxury Pedicure', 'Pedicure & Manicure', Gem, imagePool.nails, 'Luxury pedicure service.'),
  service('Chocolate Pedicure', 'Pedicure & Manicure', Footprints, imagePool.nails, 'Chocolate pedicure option.'),
  service('Heel Peel Treatment', 'Pedicure & Manicure', Footprints, imagePool.nails, 'Heel peel treatment.'),

  // Haircuts
  service('Straight Cut', 'Haircuts', Scissors, imagePool.hair, 'Classic straight haircut.'),
  service('V Cut', 'Haircuts', Scissors, imagePool.hair, 'V-shaped haircut.'),
  service('Advance Cuts', 'Haircuts', Scissors, imagePool.hair, 'Advanced haircut styling.'),
  service('Kids Cuts', 'Haircuts', Scissors, imagePool.hair, 'Haircut service for kids.'),
  service('Fringes / Bangs Cuts', 'Haircuts', Scissors, imagePool.hair, 'Fringe and bangs haircut options.'),
  service('Splendor Cutting', 'Haircuts', Scissors, imagePool.hair, 'Haircut service listed as Splendor Cutting.'),

  // Hair care
  service('Hot Oil Massage', 'Hair Care', Waves, imagePool.hair, 'Hot oil hair massage.'),
  service('Hair Spa (Small / Medium / Long)', 'Hair Care', Waves, imagePool.hair, 'Hair spa available for small, medium and long hair.'),
  service('Dry & Damage Spa', 'Hair Care', Waves, imagePool.hair, 'Spa service listed for dry and damaged hair.'),
  service('Shulper Treatment', 'Hair Care', Droplets, imagePool.hair, 'Hair treatment listed in the supplied notes.'),
  service('Loss Treatment', 'Hair Care', Leaf, imagePool.hair, 'Hair treatment listed for hair loss.'),
  service('Dandruff Treatment', 'Hair Care', Leaf, imagePool.hair, 'Hair treatment listed for dandruff.'),
  service('Hair Power Mask', 'Hair Care', Droplets, imagePool.hair, 'Hair mask treatment listed in the supplied menu.'),

  // Chemical treatment
  service('Straightening Treatment', 'Chemical Treatments', Scissors, imagePool.hair, 'Hair straightening treatment.'),
  service('Smoothing Treatment', 'Chemical Treatments', Waves, imagePool.hair, 'Hair smoothing treatment.'),
  service('Keratin', 'Chemical Treatments', Gem, imagePool.hair, 'Keratin treatment.'),
  service('Botox Treatment', 'Chemical Treatments', Sparkles, imagePool.hair, 'Hair botox treatment.'),
  service('Nanoplastia Treatment', 'Chemical Treatments', Gem, imagePool.hair, 'Nanoplastia treatment.'),

  // Polishing
  service('Leg Polishing', 'Skin Polishing', Sparkles, imagePool.facial, 'Leg polishing service.'),
  service('Hand Polishing', 'Skin Polishing', Hand, imagePool.facial, 'Hand polishing service.'),
  service('Full Body Polishing', 'Skin Polishing', Sparkles, imagePool.facial, 'Full-body polishing service.'),

  // Coloring
  service('Root Touch Up', 'Hair Coloring', Palette, imagePool.hair, 'Root touch-up coloring.'),
  service('Global Colour', 'Hair Coloring', Palette, imagePool.hair, 'Global hair coloring.'),
  service('Highlights Colour', 'Hair Coloring', Palette, imagePool.hair, 'Hair highlighting color service.'),
  service('Blended / Streaks', 'Hair Coloring', Palette, imagePool.hair, 'Blended color and streak options.'),

  // Extra services
  service('Ear Piercing / Hoping', 'Extra Services', CircleDot, imagePool.salon, 'Ear piercing service listed in the supplied notes.'),
  service('Wafers Removing', 'Extra Services', Hand, imagePool.salon, 'Service listed for wafer removal.'),
  service('Nail Extensions / Nail Art', 'Extra Services', Hand, imagePool.nails, 'Nail extensions and nail art service.'),
  service('Under Eye Treatment', 'Extra Services', Droplets, imagePool.facial, 'Under-eye treatment service.'),
];

export const categories = [
  'All',
  'Makeup',
  'Bridal',
  'Threading',
  'De-Tan & Bleach',
  'Facials',
  'Masks',
  'Waxing',
  'Pedicure & Manicure',
  'Haircuts',
  'Hair Care',
  'Chemical Treatments',
  'Skin Polishing',
  'Hair Coloring',
  'Extra Services'
];
