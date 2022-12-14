import styled from 'styled-components/native';
import {Colorwhite, ColorGray, ColorLightBlue} from '../utils/colors';

export const ModalViewCustom = styled.View`
  display: flex;
  flex: 1;
  margin-top: 22px;
  margin: auto;
  position: absolute;
`;

export const ModalContain = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 22px;
  align-items: center;
  align-items: center;
`;

export const ModalViewContain = styled.View`
  margin: 20px;
  background-color: ${Colorwhite};
  border-radius: 20px;
  padding: 35px;
  border: 1px solid ${ColorGray};
  align-items: center;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalTextError = styled(ModalText)`
  font-weight: bold;
`;

export const ButtonPressable = styled.Pressable`
  border-radius: 10px;
  padding: 10px;
  background-color: ${Colorwhite};
`;

export const ButtomStyle = styled.Text`
  color: ${Colorwhite};
  font-weight: bold;
  text-align: center;
  color: ${ColorLightBlue};
  font-size: 15px;
`;
