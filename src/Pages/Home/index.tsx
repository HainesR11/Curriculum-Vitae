import { useEffect } from "react";
import styled from "styled-components";
import profilePic from "../../Assets/images/ProfilePicture.jpeg";
import { TText } from "../../Types";
import { useNavStore } from "../../store";
import Mouse from "../../Components/Mouse";

const HomeContainer = styled.div`
  z-index: 20;
`;

const MainScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 94vh;
`;

const ProfilePicture = styled.img`
  width: 40vh;
  height: 60vh;
  border-radius: 25px;
`;

const TextContainer = styled.div<TText>`
  display: flex;
  flex-direction: column;
  transition: 2s ease-in;
  color: white;
  position: relative;
  justify-content: flex-end;
  left: 22vw;
`;
const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const MouseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
`;

const NativeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NativeDisplay = () => {
  return (
    <NativeContainer>
      
    </NativeContainer>
  )
}

const Home = () => {
  const { setScreen, screen } = useNavStore();

  useEffect(() => {
    setScreen("home");
  }, [setScreen]);

  console.log(screen);

  return (
    <HomeContainer>
      <MainScreenContainer>
        <TextContainer darkMode={false}>
          <Text>Hello There!</Text>
          <Text>I'm Rhys Haines</Text>
          <Text>
            Junior <span style={{ color: "orange" }}>Software Developer</span>
          </Text>
        </TextContainer>
        <ProfilePicture src={profilePic} />
      </MainScreenContainer>
      <MouseContainer>
        <Mouse />
      </MouseContainer>
      <NativeDisplay/>
    </HomeContainer>
  );
};

export default Home;
