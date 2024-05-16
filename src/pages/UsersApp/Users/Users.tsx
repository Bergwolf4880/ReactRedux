import { useAppDispatch, useAppSelector } from "store/hooks"
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { userSliceActions, userSliceSelectors } from "store/redux/users/usersSlice"
import Button from 'components/Button/Button'
function Users() {
  const dispatch = useAppDispatch();

  const usersDB = useAppSelector(userSliceSelectors.users)

  const userDataMapped = usersDB.map(user => {
    return (
      <UserCard key={user.id}>
        <Paragraph>{user.firstlastName}</Paragraph>
        <Paragraph>{user.age}</Paragraph>
        <Paragraph>{user.jobTitle}</Paragraph>
      </UserCard>
    )
  })

  const deleteUserData = () => {
  dispatch(userSliceActions.deleteUserData())
}


  return (
    <UsersPageWrapper>
      <>{userDataMapped}</>
      <Button name='Delete all users' onButtonClick={deleteUserData}/>
      
    </UsersPageWrapper>
)}

export default Users
