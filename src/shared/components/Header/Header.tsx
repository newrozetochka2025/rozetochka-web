import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from '../../ui/Button/Button.tsx';
import { Svg } from '../../ui/Svg/Svg.tsx';

export const Header = () => {
  return (
    <>
      <div className="h-[32px] w-full flex items-center justify-center bg-[rgba(255,224,92,1)]">
        <img
          alt="Закупи вересня до -50%"
          src="https://content.rozetka.com.ua/banner_header/image/big/589107645.png"
        />
      </div>
      <header className="sticky top-0 z-100 bg-[#221f1f] text-white">
        <div className="container">
          <div className="h-[64px] flex items-center">
            <Button
              variant="icon"
              className="mr-4"
              onClick={() => console.log('Open menu')}
            >
              <Svg url="#icon-menu" />
            </Button>
            <Link className="mr-6" to="/">
              <img
                src="https://content.rozetka.com.ua/logo/site_dark_theme/original/581747881.svg"
                alt=""
              />
            </Link>
            <button className="flex items-center h-[40px] py-[1px] px-4 mr-6 text-base border border-white border-solid cursor-pointer hover:bg-[rgba(227,227,227,0.16)] duration-300 rounded-lg">
              <Svg url="#icon-catalog" className="mr-2" />
              Каталог
            </button>
            <form className="flex flex-1 rounded-lg bg-white overflow-hidden mr-2">
              <Input
                className="x h-[40px] !border-0"
                placeholder="Я шукаю..."
                prefix={<SearchOutlined className="me-1 text-xl" />}
              />
              <Button onClick={() => console.log('click')}>Знайти</Button>
            </form>
            <Button as={Link} variant="icon" to={'/'} className="ml-4">
              <Svg url="#icon-orders" />
            </Button>
            <Button as={Link} variant="icon" to={'/'} className="ml-4">
              <Svg url="#icon-simple-bell" />
            </Button>
            <Button as={Link} variant="icon" to={'/'} className="ml-4">
              <Svg url="#icon-compare" />
            </Button>
            <Button as={Link} variant="icon" to={'/'} className="ml-4">
              <Svg url="#icon-heart-empty" />
            </Button>
            <Button as={Link} variant="icon" to={'/'} className="ml-4">
              <Svg url="#icon-header-basket" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
