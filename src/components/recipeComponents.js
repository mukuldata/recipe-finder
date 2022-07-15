import styled from "styled-components";
export const RecipeImage = styled.img`
width: 36px;
height: 36px;
margin: 15px;
`;
export const Placeholder = styled.img`
width: 120px;
height: 120px;
margin: 200px;
opacity: 50%;
`;

// flex wrap helps to achieve responsiveness. 

export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;
export const IngredientsText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
  margin-bottom: 12px;
`;
export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;