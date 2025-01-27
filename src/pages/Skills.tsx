import React from 'react';

const skillsList = [
    'HTML/CSS',
    'JavaScript (ES6+)',
    'React.js и React Router',
    'TypeScript',
    'Three.js (3D визуализация)',
    'Разработка приложений для дополненной реальности (AR)',
    'SCSS (Sass) и Tailwind CSS',
    'Работа с REST API',
    'Git и GitHub',
    'UX/UI дизайн для AR приложений',
    'Unity (основы 3D разработки)',
    'Vite (быстрая сборка проектов)'
];

const SkillItem: React.FC<{ skill: string }> = ({ skill }) => {
    return (
        <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
            {skill}
        </li>
    );
};

export const Skills = () => {
    return (
        <div className="container mx-auto px-6 py-16 text-gray-800 font-sans max-w-3xl bg-white shadow-lg rounded-lg mt-10 mb-10">
            <h2 className="text-5xl font-bold text-center text-blue-600 mb-10">
                Навыки
            </h2>
            <p className="text-lg leading-relaxed text-center mb-5">
                Вот список технологий и инструментов, которые я активно использую:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillsList.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </ul>
        </div>
    );
};
