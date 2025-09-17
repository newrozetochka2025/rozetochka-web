import { useEffect, useState } from 'react';
import type { HomePageData } from './types/HomePageData.ts';
import type { CategoryInfo } from './types/CategoryInfo.ts';
import { Link } from 'react-router-dom';
import { Svg } from '../../shared/ui/Svg/Svg.tsx';
import { SidebarItem } from './components/SidebarItem/SidebarItem.tsx';
import { userMenu } from './config/userMenu.ts';
import { ProductCard } from '../../entities/product/ui/ProductCard.tsx';
import type { ProductInfo } from '../../entities/product/types/ProductInfo.ts';
import { banners, mockProducts } from './config/mock.ts';
import { SlidesCarousel } from '../../shared/components/Carousel/SlidesCarousel.tsx';
import { PagesCarousel } from '../../shared/components/Carousel/PagesCarousel.tsx';
import {Socials} from "../../shared/components/Socials/Socials.tsx";
import {additionalLinks} from "../../shared/config/additionalLinks.ts";

const initialData = {
    categories: [],
    banners: [],
    recommendProducts: [],
    bestProducts: [],
};

export const HomePage = () => {
    const user = {};
    const [data, setData] = useState<HomePageData>(initialData);
    const [openAbout, setOpenAbout] = useState<boolean>(false);

    useEffect(() => {
        fetch('https://rozetochka-api.azurewebsites.net/api/home')
            .then((r) => r.json())
            .then((j) => setData(j.data));
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex">
                        <aside className="sticky self-end bottom-0 w-[300px] border-r-1 border-[var(--global-black-10)]">
                            <ul className="pt-6 pr-4 pb-3">
                                {data.categories.map((category: CategoryInfo) => (
                                    <li className="cursor-pointer" key={category.id}>
                                        <Link
                                            className="flex items-center px-3 gap-2 h-8 hover:text-[var(--global-green)]"
                                            to={'/category' + category.href}
                                        >
                                            <Svg
                                                url={category.svg}
                                                className="fill-[var(--global-black-60)]"
                                            />
                                            <div>{category.title}</div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <SidebarItem
                                svg="#icon-question-empty"
                                title="Довідковий центр"
                            />
                            <SidebarItem
                                svg="#icon-telegram"
                                title="Чат з ROZETKA"
                                fullColor
                            />
                            <SidebarItem
                                svg="#icon-delivery-shop"
                                title="Магазини Rozetka"
                            />
                            {!user && (
                                <SidebarItem
                                    svg="#icon-box-search"
                                    title="Відстежити посилку"
                                />
                            )}
                            <SidebarItem
                                svg="#icon-map-marker"
                                title="Город"
                                text="Address"
                                className="py-2"
                            />
                            <div className="border-y-1 border-[var(--global-black-10)]">
                                <SidebarItem
                                    svg="#icon-user-simple"
                                    title="Иван Ушачов"
                                    text="ushachovg324@gmail.com"
                                    className="py-4 pr-4 border-b-1 border-[var(--global-black-10)]"
                                />
                                <SidebarItem
                                    svg="#icon-simple-bonus"
                                    title="Бонусний рахунок"
                                    className="py-4 pr-4 border-b-1 border-[var(--global-black-10)]"
                                />

                                <ul className="py-2 pr-4 pl-3">
                                    {userMenu.map((item, i) => (
                                        <li className="flex py-1 group" key={i}>
                                            <Link
                                                to={item.url}
                                                className="flex items-center group-hover:text-[var(--global-green)]"
                                            >
                                                <span className="mr-2">
                                                    <Svg
                                                        url={item.svg}
                                                        width={22}
                                                        className="fill-[var(--global-black-60)] group-hover:fill-[var(--global-green)]"
                                                    />
                                                </span>
                                                {item.title}
                                            </Link>
                                            {item.counter && (
                                                <div className="ml-auto rounded-[50px] text-center text-white min-w-6 h-6 flex items-center justify-center bg-[var(--global-green)]">
                                                    {item.counter}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-b-1 border-[var(--global-black-10)] py-4 px-6">
                                <div className="mb-3 text-[var(--global-black-60)] font-bold">
                                    Встановлюйте наші застосунки
                                </div>
                                <a
                                    className="inline-block"
                                    href="https://itunes.apple.com/app/apple-store/id740469631/?pt=3132803&ct=fullversion&at=1000l3MB&mt=8"
                                    target="_blank"
                                >
                                    <img
                                        className="h-[32px]"
                                        src="https://xl-static.rozetka.com.ua/h-19f58775/assets/img/design/button-appstore-ua.svg"
                                        alt="AppStore"
                                    />
                                </a>
                                <a
                                    className="inline-block ml-4"
                                    href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion"
                                    target="_blank"
                                >
                                    <img
                                        className="h-[32px]"
                                        src="https://xl-static.rozetka.com.ua/h-19f58775/assets/img/design/button-google-play-ua.svg"
                                        alt="Google Play"
                                    />
                                </a>
                            </div>
                            <div className="border-b-1 border-[var(--global-black-10)] py-4 px-6">
                                <div className="mb-3 text-[var(--global-black-60)] font-bold">
                                    Ми в соціальних мережах
                                </div>
                                <Socials />
                            </div>
                            <div className="border-b-1 border-[var(--global-black-10)] py-4 px-6">
                                {additionalLinks.map((item, i) => (
                                    <div
                                        key={i}
                                        className="border-b-1 border-[var(--global-black-10)] pt-2 pb-4"
                                    >
                                        <div className="flex items-center h-[40px] px-2">
                                            <div className="text-[var(--global-black-60)] font-bold">
                                                {item.title}
                                            </div>
                                        </div>
                                        <ul>
                                            {item.links.map((link, j) => (
                                                <li
                                                    key={j}
                                                    className="py-[2px] px-1 group cursor-pointer"
                                                >
                                                    <a
                                                        href={link.url}
                                                        className="px-1 leading-[32px] group-hover:underline"
                                                    >
                                                        {link.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </aside>
                        <div className="flex-1 overflow-hidden pt-4 pl-10">
                            {banners.length > 0 && (
                                <div className="mb-4">
                                    <SlidesCarousel
                                        items={banners}
                                        renderItem={(item) => (
                                            <div key={item.id}>
                                                <a href={item.href}>
                                                    <img src={item.img} alt="" />
                                                </a>
                                            </div>
                                        )}
                                    />
                                    <div className="flex end">
                                        <Link
                                            to="/"
                                            className="inline-block ml-auto py-2 px-1 text-[#3e77aa] hover:underline hover:text-[var(--global-red)]"
                                        >
                                            Всі акції →
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {mockProducts.length > 0 && (
                                <>
                                    <h3 className="mb-4">
                                        Рекомендації на основі ваших переглядів
                                    </h3>
                                    <PagesCarousel
                                        items={mockProducts}
                                        renderItem={(item) => (
                                            <ProductCard
                                                product={item}
                                                className="h-full"
                                                classNameTitle="!text-[var(--global-black)] hover:!text-[var(--global-green)]"
                                            />
                                        )}
                                        slidesToScroll={6}
                                        slidesToShow={6}
                                        className="mb-7"
                                    />
                                </>
                            )}
                            {mockProducts.length > 0 && (
                                <>
                                    <h3 className="mb-4">Найкращі пропозиції для вас</h3>
                                    <div className="flex flex-wrap items-stretch">
                                        {mockProducts.map((product: ProductInfo) => (
                                            <ProductCard
                                                product={product}
                                                className="basis-[calc(100%/6)]"
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div
                        className={`pt-4 pb-1 relative overflow-hidden transition-all duration-300 ease-in-out bottom-text
                            after:content-[''] after:absolute after:inset-x-0 after:bottom-0
                            after:h-[50px] after:bg-gradient-to-b after:from-white/0 after:to-white
                            after:transition-opacity after:duration-300
                            ${openAbout ? 'max-h-[2000px] after:opacity-0' : 'max-h-[150px] after:opacity-100'}
                        `}
                    >
                        <p>
                            <strong>ROZETKA</strong> − найбільший онлайн-ритейлер в
                            Україні. З 2005 року ми втілюємо маленькі мрії та грандіозні
                            плани мільйонів людей. В інтернет-магазині Розетка можна
                            знайти буквально все. Ми продаємо за справедливою ціною та
                            надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути
                            максимально зручним і безпечним. І щоразу, коли хтось натискає
                            «Купити» на сайті Розетка, ми розуміємо, що робимо потрібну
                            справу.
                        </p>

                        <h2>Наше бачення</h2>
                        <p>
                            Ми віримо, що речі існують для того, щоб робити життя
                            простішим, приємнішим і добрішим. Тому й пошук тієї самої речі
                            повинен бути швидким, зручним і приємним. Ми не просто
                            продаємо побутову техніку, електроніку, прикраси або вино. Ми
                            допомагаємо знайти саме те, що треба, в одному місці та без
                            зайвих хвилювань.
                        </p>

                        <p>
                            <strong>Rozetka</strong> − це:
                        </p>
                        <ul>
                            <li>універсальна відповідь на будь-який запит;</li>
                            <li>початок пошуку та його кінцева зупинка;</li>
                            <li>справжній помічник без неприємних компромісів;</li>
                            <li>платформа, що надихає мріяти сміливіше.</li>
                        </ul>

                        <h2>Ми піклуємось про ваш вибір</h2>
                        <p>
                            Ми знімаємо відеоогляди, пишемо статті та стежимо за
                            новинками, щоб ви завжди були в курсі. Ми допомагаємо знайти
                            речі на <strong>ROZETKA</strong>:
                        </p>

                        <ul>
                            <li>закоханим — чим здивувати одне одного;</li>
                            <li>спортивним — як прогресувати швидше;</li>
                            <li>хазяйновитим — як створити затишок.</li>
                        </ul>

                        <h2>Онлайн і офлайн — як вам зручно</h2>
                        <p>
                            Ми відкрили понад 500 офлайн-магазинів у Києві, Одесі, Дніпрі,
                            Львові, Харкові та ще у 170+ містах України. У нас можна:
                        </p>
                        <ul>
                            <li>потримати товар в руках і протестувати;</li>
                            <li>забрати покупку у поштоматі без спілкування;</li>
                            <li>отримати доставку додому або у відділення пошти;</li>
                            <li>
                                оплатити готівкою, карткою або у кредит — як вам зручно.
                            </li>
                        </ul>

                        <h2>ROZETKA — більше, ніж магазин</h2>
                        <p>
                            Сьогодні <strong>ROZETKA</strong> — це не тільки ритейлер, а й
                            маркетплейс:
                        </p>
                        <ul>
                            <li>хтось розпочинає тут свій перший бізнес;</li>
                            <li>інші привозять в Україну унікальні товари;</li>
                            <li>
                                ми допомагаємо ще більшій кількості людей бути щасливими.
                            </li>
                        </ul>

                        <p>
                            Ми хочемо, щоб запитання «де знайти щось потрібне» більше
                            ніколи не виникало. Тому продовжуємо зростати разом з вами.
                        </p>
                    </div>
                    <button
                        onClick={() => setOpenAbout(!openAbout)}
                        className={`flex gap-1 text-base text-[var(--link-color)] hover:text-[var(--link-hover-color)] cursor-pointer transition-all duration-300 ${openAbout ? "py-3" : "py-0"}`}
                    >
                        {openAbout ? "Приховати" : "Читати повністю"}
                        <span className={`arrow-icon transition-transform duration-300 ${openAbout ? "rotate-180" : "rotate-0"}`}>
                            ↓
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
};
