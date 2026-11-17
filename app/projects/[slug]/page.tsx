import { notFound } from 'next/navigation';
import { getProject } from '@/lib/projects';

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    return <h1>{project.title}</h1>;
}