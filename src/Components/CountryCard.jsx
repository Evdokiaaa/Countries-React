import styled from "styled-components";
const CardContainer = styled.div`
  border-radius: 12px;
  box-shadow: var(--shadow);
  background: var(--color-elements);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.1s linear;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 170px;
  display: block;
  box-shadow: var(--shadow);
`;
const CardBody = styled.div`
  padding: 10px 0 10px 12px;
`;
const CardTitle = styled.h2`
  margin: 0px;
  font-size: var(--fz-details);
  font-weight: var(--fw-bold);
`;
const CardInfo = styled.div``;
const CardList = styled.ul`
  padding: 0;
`;

const CardListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 25px;
  & > h4 {
    margin: 7px 0;
  }
  & > h5 {
    margin: 0px;
    font-weight: var(--normal);
  }
`;
//info - объект, который содержит population,region,capital
const CountryCard = ({ img, name, info = [], onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardInfo>
          <CardList>
            {info.map((element) => (
              <CardListItem key={element.title}>
                <h4>{element.title}:</h4>
                <h5>{element.desc}</h5>
              </CardListItem>
            ))}
          </CardList>
        </CardInfo>
      </CardBody>
    </CardContainer>
  );
};

export default CountryCard;
