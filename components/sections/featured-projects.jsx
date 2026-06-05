import Link from "next/link";
import { MasonryGrid } from "@/components/gallery/masonry-grid";
export function FeaturedProjects() {
  return (
    <section className="section bg-white">
      <div className="container-lux">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="label">Featured Projects</p>
            <h2 className="h2 mt-4">
              Editorial spaces with quiet luxury and everyday function.
            </h2>
          </div>
          <Link href="/projects" className="btn-secondary">
            View Portfolio
          </Link>
        </div>
        <MasonryGrid />
      </div>
    </section>
  );
}
