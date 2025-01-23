export const About = () => {
    return (
        <div className="container mx-auto px-6 py-16 text-gray-800 font-sans max-w-4xl bg-white shadow-lg rounded-lg mb-10 mt-10">
            <h2 className="text-5xl font-bold text-center text-blue-600 mb-10">
                Обо мне
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-justify">
                Привет! Я студент ДВФУ, обучаюсь на 3 курсе по специальности "Системное программирование".
                Мое увлечение и работа сосредоточены на разработке приложений для дополненной реальности,
                включая вьюеры и приложения для 3D-моделирования. Я стремлюсь к созданию решений,
                которые делают технологии удобными и функциональными.
            </p>

            <section className="mb-12">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
                    Образование
                </h3>
                <p className="text-lg leading-relaxed text-justify">
                    Я учусь на 3 курсе в ДВФУ по направлению "Системное программирование". Мое обучение охватывает
                    широкий спектр дисциплин: от изучения алгоритмов до разработки высокотехнологичных решений.
                    Учеба помогает мне глубже понимать современные технологии и применять их в создании приложений.
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
                    Проекты
                </h3>
                <p className="text-lg leading-relaxed text-justify mb-5">
                    Я участвую в разработке приложений для дополненной реальности и 3D-технологий. Среди моих проектов:
                </p>
                <ul className="list-disc ml-8 space-y-3">
                    <li className="text-lg">Создание вьюера для просмотра 3D-моделей в реальном времени</li>
                    <li className="text-lg">Разработка приложения для 3D-моделирования</li>
                    <li className="text-lg">Интеграция функционала для работы с очками дополненной реальности</li>
                    <li className="text-lg">Разработка адаптивных интерфейсов для интерактивного взаимодействия</li>
                </ul>
            </section>

            <section className="mb-12">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
                    Интересы
                </h3>
                <p className="text-lg leading-relaxed text-justify">
                    Меня вдохновляют технологии дополненной реальности и возможности их применения для
                    улучшения взаимодействия человека с цифровыми инструментами. Я увлечен разработкой инновационных
                    решений, которые помогают людям погрузиться в мир 3D и AR. Работа над такими проектами
                    дает мне возможность совершенствовать свои навыки и двигаться в направлении высокотехнологичных разработок.
                </p>
            </section>
        </div>
    );
};
