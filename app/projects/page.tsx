import Link from 'next/link';
import { TagFilter } from '@/components/TagFilter';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
    return (
        <main className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">Dự án</h1>
            <TagFilter tags={['web', 'data']} />
            <ul className="mt-4 list-disc pl-5 space-y-2">
                {projects.map((p) => (
                    <li key={p.slug}>
                        <Link href={`/projects/${p.slug}`} className="underline">
                            {p.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}