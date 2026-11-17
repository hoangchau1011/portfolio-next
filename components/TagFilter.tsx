'use client';
import { useState } from 'react';

type Props = { tags: string[] };

export function TagFilter({ tags }: Props) {
    const [active, setActive] = useState('');
    return (
        <div className="flex gap-2">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setActive(tag)}
                    aria-pressed={tag === active}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}