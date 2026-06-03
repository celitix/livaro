import { projects } from '@/lib/constants';import { ImageCard } from './image-card';
export function MasonryGrid(){return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map(p=><ImageCard project={p} key={p.title}/>)}</div>}
