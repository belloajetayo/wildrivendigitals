import digitalSupport from "@/assets/digital-support.jpg.asset.json";
import vehicleDocumentation from "@/assets/vehicle-documentation.jpg.asset.json";
import computerServices from "@/assets/computer-services.jpg.asset.json";
import { Reveal } from "@/components/site";

const images = [
  { asset: digitalSupport, alt: "Digital support at Will-Driven Computers", width: 809, height: 1080 },
  { asset: vehicleDocumentation, alt: "Vehicle documentation assistance at Will-Driven Computers", width: 1080, height: 720 },
  { asset: computerServices, alt: "Computer and internet services at Will-Driven Computers", width: 768, height: 768 },
];

export function ServiceGallery() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Digital support. Personal service.
          </h2>
        </Reveal>
        <div className="grid items-center gap-6 md:grid-cols-[0.8fr_1.2fr_1fr]">
          {images.map((image, i) => (
            <Reveal key={image.alt} delay={i * 80}>
              <img
                src={image.asset.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-auto w-full rounded-lg border border-border object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}