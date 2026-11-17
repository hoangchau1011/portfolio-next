import { notFound } from 'next/navigation';
import { getProject } from '@/lib/projects';

// Hàm tạo metadata động cho tiêu đề tab trình duyệt
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProject(slug);
    return {
        title: project?.title ?? 'Không tìm thấy',
    };
}

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