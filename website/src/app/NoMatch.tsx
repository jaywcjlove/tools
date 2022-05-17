import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Warpper = styled.div`
  padding: 25px;
`;

const Title = styled.h2`
  margin: 0;
`;

export function NoMatch() {
  return (
    <Warpper>
      <Title>404, It looks like you're lost...</Title>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Warpper>
  );
}
