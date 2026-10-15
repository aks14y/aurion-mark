# Aurion Mark UI rebuild

## Direction

Adopt the bundled Taste Skill v2 direction: **The place carries it**. The subject is a Dubai turnkey interior contractor that fabricates steel, joinery, aluminium and glazing in-house under one contract.

The page idea is: **Aurion Mark's built-world photography becomes the proof of integrated delivery.** Real architecture and fabrication images carry the visual weight while graphite surfaces, Archivo typography and one safety-orange action keep the interface decisive rather than pale.

## Design decisions

- **Movement:** dark editorial industrial. Dense graphite ground, large unforced type, real trade-world photography and orange only for the primary action and small emphasis.
- **Core principles:** image-led proof, one strong action per screen, sentence-case Archivo, and alternating quiet text fields with full-bleed imagery.
- **Color philosophy:** graphite is the working environment, cool chalk is legible information, and safety orange signals the next move. Images retain their natural material color and are used to add richness without decorative gradients.
- **Layout paradigm:** asymmetric editorial columns and image panels instead of centered feature-card rows. The hero is a full-height photo field; projects use an uneven 12-column image layout.
- **Signature elements:** full-height architectural hero, orange action bar, and large photo-backed trade panels with a grounded text overlay.
- **Interaction philosophy:** hover states reveal more image and extend the orange rule. Navigation remains plain and route labels are preserved.
- **Typography:** Archivo Variable throughout, regular display weight, 400 body, 600 short emphasis, with a decisive display scale and 16px-plus running copy.
- **Brand essence:** integrated UAE design-and-build for clients who want one accountable delivery partner. Precise, direct, dependable.
- **Primary action:** `Start a project`.

## Structure

- `src/data/`: single source of truth for copy and image credits.
- `src/components/layout/`: shared navigation, page shell and footer.
- `src/components/ui/`: buttons, headings, section wrappers and reveal behavior.
- `src/sections/`: homepage content sections.
- `src/pages/`: routed page compositions.
- `public/images/`: open-collection trade-world imagery already supplied in the archive.
- `public/manus-routes.json`: route manifest for the seven public routes.

## Current implementation

The global tokens now use the selected graphite/orange palette. The hero uses the Taipei architecture image as a full-height background with a local scrim, a two-line name treatment, and the practical delivery plate. The project category panels now use the supplied structure, glazing, pipeline and oil-field imagery instead of abstract placeholder motifs. The existing routes and copy remain intact.
