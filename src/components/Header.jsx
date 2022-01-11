import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { FlashOnTwoTone, Translate } from "@material-ui/icons";

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false)
  
  return ( 
    <>
      <Head>
        <a className="logo">
          <img src={"/img/logo.svg"} alt="Tesla" />
        </a>

        <div className="nav">
          <ul>
            <li>
              <a href="#">Model S</a>
            </li>

            <li>
              <a href="#">Model 3</a>
            </li>

            <li>
              <a href="#">Model X</a>
            </li>

            <li>
              <a href="#">Model Y </a>
            </li>
          </ul>
        </div>

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>

          <CustomIcon onClick={()=> setBurgerStatus(true)} />
        </RightMenu>

        <BurgerNav show={burgerStatus}>

          <CloseWrapper>
          <CustomClose onClick={()=> setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
        </BurgerNav>
     
      </Head>
    </>
  );
};

export default Header;

const Head = styled.div`
  z-index: 10;
  width: 100vw;
  min-height: 10vh;
  position: fixed;
  padding: 1% 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.85;

  @media (max-width: 851px) {
    padding: 0 10px;
  }

  .logo {
    img {
      width: 150px;
    }
  }

  .nav {
    /* flex: 1; */
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li a {
      font-weight: 600;
      text-transform: uppercase;
      flex-wrap: nowrap;
    }

    @media (max-width: 851px) {
      display: none;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 0 0.625rem;
    font-size: 1rem;
    flex-wrap: nowrap;
    margin-right: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const CustomIcon = styled(MenuIcon)``;


const CloseWrapper = styled.div`
 display: flex;
 justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
 cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  bottom: 0;
  background: #fff;
  padding: 20px;
  z-index: 100;
  transform:${props => props.show ? 'translate(0%)' : 'translate(100%)'} ;
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.8rem 0;

    a {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
`;
