/**
 *
 * Card
 *
 */
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 4px;
  padding: ${props => props.padding || 0};
  background: ${props => props.theme.body};
`;

export default Card;
