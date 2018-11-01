import styled from 'styled-components';
import {React} from 'react';
const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
`;


class MediaCard extends React.Component{
    render() {
        return <div>
            <h1>Hello World!</h1>
            <p>This is my first React Component.</p>
        </div>
    }
}

export default MediaCard;