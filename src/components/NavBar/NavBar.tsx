import { useCallback, useEffect, useRef, useState } from "react";
import "./navbar.scss";
import classNames from "classnames";
import Logo from "../../../public/svg/logo.svg?react";
import Search, { ItemKurs } from "../UI Kit/Search/Search";
import Button from "../UI Kit/Button/Button";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import SearchSvg from "../../../public/svg/search.svg?react";
import VkSvg from "../../../public/svg/vk.svg?react";
import YouTubeSvg from "../../../public/svg/youtube.svg?react";
import SvgIcon from "../UI Kit/SvgIcon/SvgIcon";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store";
import Modal from "../UI Kit/Modal/Modal";
import Form from "../UI Kit/Form/Form";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister";
import { updateUserSession } from "../../store/userSession-slise";
import { Link } from "react-router-dom";

export type RootState = ReturnType<typeof store.getState>;

const NavBar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);

  const isLogin = useSelector((state: RootState) => state.UserSession.id);

  const [inputValue, setInputValue] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [dropdownItems, setDropdownItems] = useState<ItemKurs[]>([]);

  const openModal = useCallback(() => setIsOpenModal(true), []);
  const closeModal = useCallback(() => setIsOpenModal(false), []);

  const openLoginOrRegister = useCallback(() => setIsOpenLogin(true), []);
  const closeLoginOrRegister = useCallback(() => setIsOpenLogin(false), []);

  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(600);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const basketUserListProduct = useSelector(
    (state: RootState) => state.BasketUser
  );
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    if (dropdownVisible)
      document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const items: ItemKurs[] = [
      {
        id: 0,
        nameKurs: "Курсы по реабилитации",
        priseKurs: 2000,
        timeKurs: 144,
      },
      {
        id: 1,
        nameKurs: "Курсы по реабилитации",
        priseKurs: 2000,
        timeKurs: 144,
      },
    ];
    // пример получения массива объектов в поиске
    setDropdownItems(items);
    setDropdownVisible(items.length > 0);
  }; // Функция для обработки введенного значения, а так же поиска по сайту

  const handleDropdownItemClick = (item: ItemKurs) => {
    console.log(item.nameKurs);
    setInputValue(item.nameKurs);
    setDropdownVisible(false);
  };

  const handleDropdownVisibleChange = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const onHandleClickLogout = () => {
    localStorage.removeItem("userSession");
    dispatch(updateUserSession({ id: null, email: null, name: null }));
  };

  return (
    <nav>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <Form
            type="text"
            title={<Text h3>Задайте нам вопрос и мы вам на него ответим!</Text>}
            blockButton
          />
        </Modal>
      )}
      {isOpenLogin && <LoginOrRegister closeLogin={closeLoginOrRegister} />}
      <div className={classNames("navbar", { open: isOpenMenu })}>
        <div className="navbar-top">
          <div className="logo">
            <span>
              <Link to="/">
                <Logo />
              </Link>
            </span>
            <span>
              Приволжский центр <br />
              профессионального <br />
              обучения
            </span>
          </div>
          <div className="search-container" ref={dropdownRef}>
            {!sizeScreenMobile && (
              <Search
                block
                prefix={<SearchSvg />}
                placeholder="Поиск по сайту..."
                dropdownVisible={dropdownVisible}
                dropdownItems={dropdownItems}
                onInputChange={handleInputChange}
                onDropdownItemClick={handleDropdownItemClick}
                onChangeDropdownVisible={handleDropdownVisibleChange}
                inputValue={inputValue}
              />
            )}
          </div>
          <div className="buttons">
            {!sizeScreenMobile && (
              <>
                {!isLogin && (
                  <>
                    <Button type="secondary_2" onClick={openLoginOrRegister}>
                      <Text body6>Вход или регистрация</Text>
                    </Button>
                    {!sizeScreenTablet && (
                      <Button type="secondary_2" onClick={openModal}>
                        <Text body5>Задать вопрос</Text>
                      </Button>
                    )}
                  </>
                )}
                {isLogin && (
                  <>
                    <Link to="/personal-account/personal-data">
                      <SvgIcon type="user" />
                    </Link>
                    <Link to="/basket-user">
                      <SvgIcon type="basket" countGoods={basketUserListProduct.length === 0 ? 0 : basketUserListProduct.length } />
                    </Link>
                    {!sizeScreenTablet && (
                      <Button type="secondary_2" onClick={onHandleClickLogout}>
                        <Text body5>Выйти из личного кабинета</Text>
                      </Button>
                    )}
                    {sizeScreenTablet && <SvgIcon type="exit" />}
                  </>
                )}
              </>
            )}
          </div>

          {sizeScreenMobile && (
            <div
              className={classNames("burger", { "burger-open": isOpenMenu })}
              onClick={toggleMenu}
            >
              <div className="line-container">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          )}
        </div>
        <Divider type="gray" />
        <div className="navbar-bottom">
          {!isOpenMenu && (
            <>
              {sizeScreenMobile && (
                <div className="search-container" ref={dropdownRef}>
                  <Search
                    block
                    prefix={<SearchSvg />}
                    placeholder="Поиск по сайту..."
                    dropdownVisible={dropdownVisible}
                    dropdownItems={dropdownItems}
                    onInputChange={handleInputChange}
                    onDropdownItemClick={handleDropdownItemClick}
                    onChangeDropdownVisible={handleDropdownVisibleChange}
                    inputValue={inputValue}
                  />
                </div>
              )}
              {!sizeScreenMobile && (
                <>
                  {!sizeScreenTablet && (
                    <div className="license">
                      <span>
                        <Text caption1 color="#BBBBBB">
                          Лицензия <br />№ Л035–01212–59/00204560 от
                          20.06.2017г.
                        </Text>
                      </span>
                    </div>
                  )}
                  <div className="pages">
                    <Button type="link">
                      <Link to="/programms">
                        <Text body5>Программы</Text>
                      </Link>
                    </Button>
                    <Button type="link">
                      <Link to={`/info-organisation`}>
                        <Text body5>Сведения об организации</Text>
                      </Link>
                    </Button>
                    <Link to="/novosti">
                      <Button type="link">
                        <Text body5>Новости</Text>
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button type="link">
                        <Text body5>Контакты</Text>
                      </Button>
                    </Link>
                  </div>
                  <div className="contacts">
                    <div className="phoneNumbers">
                      <span>
                        <Text body5>+7 800 250-13-53</Text>
                      </span>
                      <span>
                        <Text body5>+7 902 472-34-91</Text>
                      </span>
                    </div>
                    <div className="icon">
                      <VkSvg />
                    </div>
                    <div className="icon">
                      <YouTubeSvg />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
          {isOpenMenu && (
            <div className="burger-menu">
              {isLogin && (
                <div className="link-icons">
                  <SvgIcon type="user" />
                  <SvgIcon type="basket" countGoods={99} />
                  <SvgIcon type="exit" />
                </div>
              )}
              <div className="pages">
                <Button type="link">
                  <Link to="/programms">
                    <Text body5>Программы</Text>
                  </Link>
                </Button>
                <Button type="link">
                  <Text body5>Сведения об организации</Text>
                </Button>
                <Button type="link">
                  <Text body5>Новости</Text>
                </Button>
                <Button type="link">
                  <Text body5>Контакты</Text>
                </Button>
              </div>
              {!isLogin && (
                <Button type="secondary_2" onClick={openLoginOrRegister}>
                  <Text body6>Вход или регистрация</Text>
                </Button>
              )}
              <div className="contacts">
                <div className="phoneNumbers">
                  <span>
                    <Text body5>+7 800 250-13-53</Text>
                  </span>
                  <span>
                    <Text body5>+7 902 472-34-91</Text>
                  </span>
                </div>
                <div className="icons-container">
                  <div className="icon">
                    <VkSvg />
                  </div>
                  <div className="icon">
                    <YouTubeSvg />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
