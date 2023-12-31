import React from 'react';
import styled from '@emotion/styled';
import { colors, mq } from '../styles';

const UserCard = ({ user }) => {
  const { thumbnail, photo, office, name  } = user;

  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={thumbnail} alt={'Noimg'} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{'Hello World'}</CardTitle>
          <CardFooter>
            <UserImage src={photo} />
            <UserAndOffice>
              <UserName>{name}</UserName>
              <Office>{office}</Office>
            </UserAndOffice>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default UserCard;

const CardContainer = styled.div({
  borderRadius: 6,
  color: colors.text,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
  },
  [mq[1]]: {
    width: '47%',
  },
  [mq[2]]: {
    width: '31%',
  },
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: colors.pink.lightest,
  },
  cursor: 'pointer',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  color: colors.text,
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 220,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(150,0,250,0.20)',
  },
});

const CardImage = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'grayscale(60%)',
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  color: colors.textSecondary,
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const UserImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const UserAndOffice = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const UserName = styled.div({
  lineHeight: '1em',
  fontSize: '1.1em',
});

const Office = styled.div({
  fontSize: '0.8em',
});
