export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
};

export const projects: Project[] = [
    {
        slug: 'portfolio',
        title: 'Portfolio cá nhân',
        description: 'HTML, CSS, JS, React, Next.js',
        tags: ['web', 'nextjs'],
    },
    {
        slug: 'plc-automation',
        title: 'Hệ thống điều khiển tự động PLC Omron',
        description: 'Thiết kế sơ đồ Grafcet và lập trình Ladder Logic điều khiển trạm khoan cắt và máy dập tự động trên phần cứng Omron CP2E-N.',
        tags: ['plc', 'omron', 'automation'],
    },
    {
        slug: 'iot-turtle-incubator',
        title: 'Hệ thống ấp trứng rùa IoT',
        description: 'Điều khiển nhiệt độ tự động sử dụng vi điều khiển ESP32, cảm biến DS18B20 và sò lạnh Peltier.',
        tags: ['iot', 'esp32', 'c++'],
    },
    {
        slug: 'brats-segmentation',
        title: 'Phân vùng ảnh y tế khối u não',
        description: 'Nghiên cứu so sánh mô hình truyền thống, Deep Learning và Hybrid trên bộ dữ liệu BraTS-GLI.',
        tags: ['ai', 'python', 'pytorch'],
    },
];

export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug);
}