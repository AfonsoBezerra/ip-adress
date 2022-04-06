import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(/pattern-bg.png);
  width: 100vw;
  height: 300px;
  background-size: cover;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 5px 5px rgba(0,0,0,0.3);
  z-index: 2;
  background-repeat: no-repeat;
  h1{
    padding-top: 2rem;
    color: white;
    font-weight: 500;
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
  }
  .box {
    margin-top: 1.5rem;
    border:none;
    width:auto;
    border-radius: 10px;
    height: 3rem;
}
.box input {
    display:inline-block;
    font-weight: 500;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
    outline:0;
    border:0;
    margin-left: 1.2rem;
    width: 16.5rem;
    height: 100%;
    padding: 20px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
 }
.box .button {
    background: #000;
    border:none;
    float:right;
    width: 3.5rem;
    height: 100%;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    transition: all .5s;
    transform: translateX(-20px);
    cursor: pointer;
    :hover{
      transform: translateX(-10px);
    }
}
.results{
  border-radius: 10px;
  width: auto;
  height: auto;
  background-color: #fff;
  color: #000;
  position: absolute;
  bottom: 0;
  transform: translateY(57%);
  z-index: 9;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  flex-direction:  column;
  align-items: center;
  padding: 20px 40px;
  word-break: break-all;
  .flag{
    display: flex;
    flex-direction:column;
   @media (min-width: 1024px) {
    margin-bottom: 2rem;
   }
  img{

    animation: fadein 1s ease-in-out;
  }
  }
  @media(min-width: 1024px){
    transform: translateY(50%);
    padding:30px 60px;
  .container{
    display: flex;
    flex-direction:row;
  }
}
  h2{
    font-size: 12px;
    color: hsl(0, 0%, 59%);
    font-weight: 500;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    animation: fadein .5s ease-in-out;
    @media (max-width: 1200px){
      font-size: 10px;
    }
  }
  span{
    color:hsl(0, 0%, 17%);
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    animation: fadein .5s ease-in-out;
    @media (max-width: 1200px){
      font-size: 12px;
    }
  }
  .ip{
    display: flex;
    align-items: center;
    flex-direction:  column;
    margin-top: 1rem;
    @media(min-width: 1024px){
      margin-right:3em;
    }
    span{
      margin-top:0.2rem;
    }
  }
  .city{
    margin-top:1rem;
    display: flex;
    align-items: center;
    flex-direction:  column;
    @media(min-width: 1024px){
      margin-right: 3rem;
    }
    .row{
      flex-direction:row;
      margin-top:0.2rem;
      text-align: center;
    span{
      padding: 0 .2rem;
    }
  }
  }
  .country{
    margin-top:1rem;
    display: flex;
    align-items: center;
    flex-direction:  column;
    @media(min-width: 1024px){
      margin-right: 3rem;
    }
    span{
      margin-top:0.2rem;
    }
  }
  .isp{
    margin-top:1rem;
    display: flex;
    align-items: center;
    flex-direction:  column;
    span{
      margin-top:0.2rem;
    }
  }
}
@keyframes fadein{
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
`;
