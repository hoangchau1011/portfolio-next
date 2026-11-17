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
                    className={`px-3 py-1 rounded border cursor-pointer transition ${tag === active
                            ? 'bg-blue-600 text-white border-blue-600 font-medium'
                            : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                        }`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}