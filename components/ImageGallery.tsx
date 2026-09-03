type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      {images.map((image) => (
        <figure key={image.src}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} loading="lazy" className="aspect-video w-full rounded-md border border-ink-200 object-cover dark:border-ink-800" />
          {image.caption ? <figcaption className="mt-2 text-sm text-ink-500 dark:text-ink-400">{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
