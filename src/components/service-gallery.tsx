import digitalSupport from "@/assets/digital-support.jpg.asset.json";
import vehicleDocumentation from "@/assets/vehicle-documentation.jpg.asset.json";
import { Reveal } from "@/components/site";

const images = [
  { asset: digitalSupport, alt: "Digital support at Will-Driven Computers", caption: "Internet & digital support", width: 809, height: 1080 },
  { asset: vehicleDocumentation, alt: "Vehicle documentation assistance at Will-Driven Computers", caption: "Vehicle documentation & customer care", width: 1080, height: 720 },
];

export function ServiceGallery() {
  return (
    <section className="border-t border-border bg-card px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Digital support. Personal service.
          </h2>
        </Reveal>
        <div className="grid items-start gap-8 md:grid-cols-[1fr_2fr]">
          {images.map((image, i) => (
            <Reveal key={image.alt} delay={i * 80}>
              <figure>
                <div className="overflow-hidden rounded-lg">
                <img
                src={image.asset.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.025] motion-reduce:transform-none"
              />
                </div>
                <figcaption className="mt-4 border-b border-border pb-4 text-sm font-medium text-muted-foreground">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}